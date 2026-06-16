from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse, Response
import os
import requests
import json
import time

app = FastAPI()

@app.post("/api/py-convert")
@app.post("/api/convert")
async def convert_pdf(
    file: UploadFile = File(...),
    password: str = Form(None),
    output_format: str = Form("json") # json, csv, excel
):
    try:
        api_key = os.environ.get("BSC_API_KEY")
        if not api_key:
            return JSONResponse(status_code=500, content={"detail": "BSC_API_KEY environment variable is missing"})

        pdf_bytes = await file.read()
        
        # 1. Upload to BSC
        headers = { "Authorization": api_key }
        files = { "file": (file.filename, pdf_bytes, "application/pdf") }
        
        upload_res = requests.post("https://api2.bankstatementconverter.com/api/v1/BankStatement", headers=headers, files=files)
        
        if upload_res.status_code != 200:
            return JSONResponse(status_code=upload_res.status_code, content={"detail": f"Failed to upload to BSC: {upload_res.text}"})
            
        upload_data = upload_res.json()
        if not upload_data or not len(upload_data):
            return JSONResponse(status_code=500, content={"detail": "Invalid response from BSC API"})
            
        doc = upload_data[0]
        uuid = doc.get("uuid")
        
        # 2. Provide Password if necessary
        if password:
            pwd_res = requests.post(
                "https://api2.bankstatementconverter.com/api/v1/BankStatement/setPassword",
                headers={"Authorization": api_key, "Content-Type": "application/json"},
                json={"passwords": [{"uuid": uuid, "password": password}]}
            )
            if pwd_res.status_code != 200:
                pass # it might fail if password is wrong, let it fail during convert
        
        # 3. Poll Status if PROCESSING
        current_state = doc.get("state")
        attempts = 0
        while current_state == "PROCESSING" and attempts < 12:
            time.sleep(10) # wait 10 seconds as recommended by BSC docs
            status_res = requests.post(
                "https://api2.bankstatementconverter.com/api/v1/BankStatement/status",
                headers={"Authorization": api_key, "Content-Type": "application/json"},
                json=[uuid]
            )
            if status_res.status_code == 200:
                status_data = status_res.json()
                if status_data and len(status_data) > 0:
                    current_state = status_data[0].get("state")
            attempts += 1
            
        # 4. Convert Statements
        convert_res = requests.post(
            "https://api2.bankstatementconverter.com/api/v1/BankStatement/convert?format=JSON&raw=false",
            headers={"Authorization": api_key, "Content-Type": "application/json"},
            json=[uuid]
        )
        
        if convert_res.status_code != 200:
            err_text = convert_res.text.lower()
            if "password" in err_text or "locked" in err_text:
                return JSONResponse(status_code=400, content={"detail": "PDF is password protected or incorrect password provided.", "needs_password": True})
            return JSONResponse(status_code=500, content={"detail": f"Failed to convert on BSC: {convert_res.text}"})
            
        convert_data = convert_res.json()
        if not convert_data or not len(convert_data) or "normalised" not in convert_data[0]:
            return JSONResponse(status_code=400, content={"detail": "PDF is password protected or incorrect password provided.", "needs_password": True})
            
        normalised = convert_data[0]["normalised"]
        
        if not len(normalised):
            return JSONResponse(status_code=400, content={"detail": "No transactions extracted by BSC API"})
            
        # 5. Transform into expected format
        transactions = []
        for tx in normalised:
            amt = float(tx.get("amount", "0"))
            is_credit = amt > 0
            abs_amt = f"{abs(amt):.2f}"
            transactions.append({
                "date": tx.get("date", ""),
                "description": tx.get("description", ""),
                "debit": None if is_credit else abs_amt,
                "credit": abs_amt if is_credit else None,
                "balance": None, # BSC normalised format doesn't provide running balance
                "category": "Other",
                "gst": None
            })
            
        # 6. Fallback formats
        if output_format == "csv" or output_format == "excel":
            # For simplicity, we just return JSON to the frontend and let the frontend build the Excel/CSV
            # Our frontend already builds Excel/CSV from the returned transactions JSON!
            pass
            
        return JSONResponse(content={
            "filename": file.filename.replace(".pdf", ""),
            "bank_detected": "BSC_API",
            "quality_score": 100,
            "flagged_count": 0,
            "transactions": transactions
        })

    except Exception as e:
        return JSONResponse(status_code=500, content={"detail": str(e)})
