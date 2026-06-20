from fastapi import FastAPI, UploadFile, File, Form, Header, Request
from fastapi.responses import JSONResponse, Response
import requests

app = FastAPI()

@app.post("/api/py-convert")
@app.post("/api/convert")
async def convert_pdf(
    request: Request,
    file: UploadFile = File(...),
    password: str = Form(None),
    bank: str = Form("auto"),
    date_format: str = Form("DD/MM/YYYY"),
    categorize: bool = Form(True),
    gst: bool = Form(True),
    authorization: str = Header(None),
    x_anon_id: str = Header(None, alias="X-Anon-Id"),
):
    try:
        # Proxy request directly to the dedicated Python backend on Vercel
        # This completely replaces the third-party BSC API integration
        backend_url = "https://parsify-api-1vh0.onrender.com/api/convert"
        
        headers = {}
        if authorization:
            headers["Authorization"] = authorization
        if x_anon_id:
            headers["X-Anon-Id"] = x_anon_id
            
        pdf_bytes = await file.read()
        files = {
            "file": (file.filename, pdf_bytes, file.content_type or "application/pdf")
        }
        data = {
            "bank": bank,
            "date_format": date_format,
            "categorize": "true" if categorize else "false",
            "gst": "true" if gst else "false"
        }
        if password:
            data["password"] = password
            
        res = requests.post(backend_url, headers=headers, files=files, data=data)
        
        try:
            return JSONResponse(status_code=res.status_code, content=res.json())
        except Exception:
            return Response(status_code=res.status_code, content=res.content)
            
    except Exception as e:
        return JSONResponse(status_code=500, content={"detail": str(e)})
