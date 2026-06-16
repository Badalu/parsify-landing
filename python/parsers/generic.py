from parsers.base import BaseParser
import pdfplumber
import re

class GenericParser(BaseParser):
    def parse(self, pdf_path: str, password: str = None):
        transactions = []
        
        with pdfplumber.open(pdf_path, password=password) as pdf:
            for page in pdf.pages:
                tables = page.extract_tables()
                if tables:
                    for table in tables:
                        for row in table:
                            # Try to identify date in the row
                            row_str = " ".join([str(cell) for cell in row if cell])
                            date_match = re.search(r'\d{1,2}[-/]\d{1,2}[-/]\d{2,4}', row_str)
                            
                            if date_match:
                                date = date_match.group(0)
                                # Extremely naive extraction for generic
                                numbers = re.findall(r'[\d,]+\.\d{2}', row_str)
                                
                                debit, credit, balance = None, None, None
                                if len(numbers) >= 2:
                                    balance = numbers[-1]
                                    amt = numbers[-2]
                                    # Guess debit/credit based on row layout or just assign debit
                                    debit = amt
                                    
                                transactions.append({
                                    "date": date,
                                    "description": row_str.replace(date, "").strip()[:50] + "...",
                                    "debit": debit,
                                    "credit": credit,
                                    "balance": balance,
                                    "type": "debit" if debit else "credit"
                                })
                                
        return transactions
