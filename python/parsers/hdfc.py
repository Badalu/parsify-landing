from parsers.base import BaseParser
import pdfplumber
import re

class HDFCParser(BaseParser):
    def parse(self, pdf_path: str, password: str = None):
        transactions = []
        
        # HDFC usually has no vertical lines in tables, so we use text layout
        with pdfplumber.open(pdf_path, password=password) as pdf:
            for page in pdf.pages:
                # layout=True maintains visual spacing
                text = page.extract_text(layout=True)
                if not text:
                    continue
                
                lines = text.split('\n')
                
                # Regex for HDFC row: Date (DD/MM/YY)  Narration  Chq/RefNo  ValueDate  Withdrawal  Deposit  ClosingBalance
                # We'll use a simplified regex that looks for Date at the start, and 1 to 3 numbers at the end.
                
                row_pattern = re.compile(r'^(\d{2}/\d{2}/\d{2})\s+(.+?)\s+([\d,]+\.\d{2})?\s+([\d,]+\.\d{2})?\s+([\d,]+\.\d{2})$')
                
                current_desc = ""
                
                for line in lines:
                    line = line.strip()
                    if not line:
                        continue
                        
                    # Skip header lines
                    if "Date" in line and "Narration" in line:
                        continue
                        
                    # Check if line starts with a date
                    date_match = re.match(r'^\d{2}/\d{2}/\d{2}', line)
                    
                    if date_match:
                        # Try to parse the full row
                        # Because layout=True has lots of spaces, we can compress multiple spaces to single spaces
                        clean_line = re.sub(r'\s{2,}', '  ', line) # Keep double spaces as delimiters
                        parts = clean_line.split('  ')
                        
                        if len(parts) >= 4:
                            date = parts[0].strip()
                            desc = parts[1].strip()
                            
                            # The last part is always balance
                            balance = parts[-1].strip()
                            
                            debit = None
                            credit = None
                            
                            # Work backwards to find debit/credit
                            if len(parts) >= 5:
                                amt_str = parts[-2].strip()
                                # Extremely rudimentary logic based on layout positions (would need exact coordinate bounding boxes for 100% accuracy)
                                # Assuming if there's only one amount before balance, we check its string position
                                if " " in line[-30:]: # Hacky way to guess column
                                    pass
                            
                            # Fallback regex parsing
                            m = row_pattern.match(re.sub(r'\s+', ' ', line))
                            if m:
                                date = m.group(1)
                                desc = m.group(2)
                                debit = m.group(3)
                                credit = m.group(4)
                                balance = m.group(5)
                                
                            transactions.append({
                                "date": date,
                                "description": desc,
                                "debit": debit,
                                "credit": credit,
                                "balance": balance,
                                "type": "debit" if debit else "credit"
                            })
                    else:
                        # Multi-line narration
                        if transactions:
                            transactions[-1]["description"] += " " + line.strip()
                            
        return transactions
