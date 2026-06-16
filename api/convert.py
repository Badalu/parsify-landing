from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import pdfplumber
import google.generativeai as genai
import os
import json
import re

app = FastAPI()

genai.configure(api_key=os.environ.get("GEMINI_API_KEY", ""))

def clean_amount(val):
    if not val:
        return 0.0
    val = str(val).replace(",", "").replace("₹", "").replace("Rs", "").strip()
    try:
        return float(val)
    except:
        return 0.0

def validate_transactions(transactions):
    valid_txns = []
    for t in transactions:
        # Basic validation
        if not t.get("date") or not t.get("description"):
            continue
        valid_txns.append(t)
    return valid_txns

@app.post("/api/py-convert")
async def convert_pdf(
    file: UploadFile = File(...),
    categorize: str = Form("true"),
    gst: str = Form("true")
):
    try:
        pdf_bytes = await file.read()
        
        # Save temp
        temp_path = f"/tmp/{file.filename}"
        with open(temp_path, "wb") as f:
            f.write(pdf_bytes)

        extracted_text_blocks = []
        is_scanned = True
        
        # Stage 1: Local Extraction via pdfplumber
        with pdfplumber.open(temp_path) as pdf:
            for page in pdf.pages:
                tables = page.extract_tables()
                text = page.extract_text()
                
                if text and len(text.strip()) > 50:
                    is_scanned = False
                
                if tables:
                    for table in tables:
                        # Clean table rows
                        cleaned_table = [" | ".join([str(c).replace("\n", " ").strip() if c else "" for c in row]) for row in table if any(row)]
                        extracted_text_blocks.append("\n".join(cleaned_table))
                elif text:
                    extracted_text_blocks.append(text)
        
        # Cleanup
        os.remove(temp_path)
        
        if is_scanned and not extracted_text_blocks:
            return JSONResponse(status_code=400, content={"detail": "This appears to be a scanned PDF. Text-based PDFs are supported."})
            
        combined_text = "\n\n---PAGE BREAK---\n\n".join(extracted_text_blocks)
        
        # Stage 2: Minimal Gemini Call
        # Instead of sending pure raw unstructured text, we send the table structure we extracted locally.
        system_instruction = """You are a bank statement parser. Extract transactions from the provided raw table/text data into JSON.
CRITICAL RULES:
- Only extract transactions.
- Format: {"transactions": [{"date": "...", "value_date": "...", "description": "...", "debit": "...", "credit": "...", "balance": "...", "category": "...", "gst": "..."}]}
- Normalize numbers (remove currency symbols but keep commas).
"""
        if categorize.lower() == "true":
            system_instruction += "- Assign exactly ONE category: Salary, Food, Fuel, Rent, Utilities, Shopping, Groceries, Transfer, Subscription, GST, Tax, Investment, EMI, Refund, Other.\n"
        else:
            system_instruction += "- Set category to 'Other'.\n"
            
        if gst.lower() == "true":
            system_instruction += "- If GST is mentioned, extract it (e.g. 'CGST+SGST'). Else leave empty.\n"

        model = genai.GenerativeModel(
            model_name="gemini-2.5-flash", # Fallback to 2.5-flash if 3 isn't available
            system_instruction=system_instruction,
            generation_config={"response_mime_type": "application/json"}
        )
        
        prompt = f"Extract all transactions from this structured data:\n\n{combined_text[:50000]}" # Limit to 50k chars for safety
        
        response = model.generate_content(prompt)
        
        try:
            data = json.loads(response.text)
            transactions = data.get("transactions", [])
        except Exception as e:
            print("Failed to parse JSON:", response.text)
            transactions = []

        # Stage 3: Validation
        final_txns = validate_transactions(transactions)

        return JSONResponse(content={
            "filename": file.filename.replace(".pdf", ""),
            "transactions": final_txns
        })

    except Exception as e:
        print("Error:", e)
        return JSONResponse(status_code=500, content={"detail": str(e)})

# Vercel requires the app to be available.
