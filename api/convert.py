from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse, Response
from pydantic import BaseModel
import os
import json
from .detector import PDFDetector
from .validator import Validator
from .exporter import Exporter

from .parsers.hdfc import HDFCParser
from .parsers.generic import GenericParser

app = FastAPI()

def get_parser(bank_name: str):
    if bank_name == "HDFC":
        return HDFCParser()
    # Add other banks as they are implemented
    # elif bank_name == "SBI": return SBIParser()
    else:
        return GenericParser()

@app.post("/api/py-convert")
async def convert_pdf(
    file: UploadFile = File(...),
    password: str = Form(None),
    output_format: str = Form("json") # json, csv, excel
):
    try:
        pdf_bytes = await file.read()
        temp_path = f"/tmp/{file.filename}"
        with open(temp_path, "wb") as f:
            f.write(pdf_bytes)

        # 1. Detector
        is_text, bank_name = PDFDetector.analyze(temp_path, password)
        
        if not is_text:
            os.remove(temp_path)
            return JSONResponse(status_code=400, content={"detail": "Scanned PDFs not supported. Please upload a text-based bank statement."})

        # 2. Extract
        parser = get_parser(bank_name)
        raw_transactions = parser.parse(temp_path, password)
        
        os.remove(temp_path)

        # 3. Validate
        validation_result = Validator.validate(raw_transactions)
        
        # 4. Output
        if output_format == "csv":
            csv_data = Exporter.to_csv(validation_result["valid_transactions"])
            return Response(content=csv_data, media_type="text/csv", headers={"Content-Disposition": f"attachment; filename={file.filename}.csv"})
        elif output_format == "excel":
            excel_data = Exporter.to_excel(validation_result["valid_transactions"])
            return Response(content=excel_data, media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", headers={"Content-Disposition": f"attachment; filename={file.filename}.xlsx"})
        
        # Default JSON
        return JSONResponse(content={
            "filename": file.filename.replace(".pdf", ""),
            "bank_detected": bank_name,
            "quality_score": validation_result["score"],
            "flagged_count": validation_result["flagged_count"],
            "transactions": validation_result["valid_transactions"]
        })

    except Exception as e:
        if "password" in str(e).lower() or "encrypt" in str(e).lower():
            return JSONResponse(status_code=400, content={"detail": "PDF is password protected or incorrect password provided.", "needs_password": True})
        return JSONResponse(status_code=500, content={"detail": str(e)})
