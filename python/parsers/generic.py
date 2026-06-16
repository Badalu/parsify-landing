from parsers.base import BaseParser
import pdfplumber
import re

class GenericParser(BaseParser):
    def parse(self, pdf_path: str, password: str = None):
        transactions = []
        
        with pdfplumber.open(pdf_path, password=password) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                if not text:
                    continue
                
                lines = text.split('\n')
                for line in lines:
                    # Look for date at the start or anywhere in the line
                    date_match = re.search(r'\d{1,2}[-/]\d{1,2}[-/]\d{2,4}', line)
                    
                    if date_match:
                        date = date_match.group(0)
                        
                        # Find all numbers like 1,000.50 or 500.00
                        numbers = re.findall(r'(?<!\d)[\d,]+\.\d{2}(?!\d)', line)
                        
                        debit, credit, balance = None, None, None
                        
                        if len(numbers) >= 2:
                            # Typically the last number is balance
                            balance = numbers[-1].replace(',', '')
                            
                            # The second to last could be debit or credit. 
                            # We'll just assign it to credit if it contains "Cr" or just guess debit
                            amt = numbers[-2].replace(',', '')
                            
                            if "Cr" in line or "CR" in line:
                                credit = amt
                            else:
                                debit = amt
                        elif len(numbers) == 1:
                            # Only one number found, assume it's the transaction amount
                            amt = numbers[0].replace(',', '')
                            if "Cr" in line or "CR" in line:
                                credit = amt
                            else:
                                debit = amt
                                
                        # Skip if we couldn't find any numbers
                        if debit is None and credit is None and balance is None:
                            continue
                            
                        desc = line.replace(date, "").strip()
                        # Remove the extracted numbers from description to clean it up
                        for num in numbers:
                            desc = desc.replace(num, "")
                            
                        transactions.append({
                            "date": date,
                            "description": desc.strip()[:100],
                            "debit": debit,
                            "credit": credit,
                            "balance": balance,
                            "type": "credit" if credit else "debit",
                            "category": "Other",
                            "gst": None
                        })
                        
        return transactions
