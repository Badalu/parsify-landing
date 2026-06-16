import pdfplumber
import re

class PDFDetector:
    @staticmethod
    def analyze(pdf_path: str, password: str = None):
        """
        Analyzes the PDF to check if it's text-based and attempts to identify the bank.
        Returns a tuple: (is_valid_text_pdf, bank_name)
        """
        is_text_based = False
        text_content = ""
        
        try:
            with pdfplumber.open(pdf_path, password=password) as pdf:
                # Check first two pages
                pages_to_check = min(2, len(pdf.pages))
                for i in range(pages_to_check):
                    page_text = pdf.pages[i].extract_text()
                    if page_text:
                        text_content += page_text + "\n"
                        
                if len(text_content.strip()) > 100:
                    is_text_based = True
                    
        except Exception as e:
            # Maybe password protected and password was wrong/missing
            raise Exception(f"Failed to read PDF: {str(e)}")

        if not is_text_based:
            return False, "UNKNOWN"

        text_upper = text_content.upper()
        
        # Bank Identification Regexes
        if re.search(r'HDFC\s+BANK', text_upper):
            return True, "HDFC"
        elif re.search(r'STATE\s+BANK\s+OF\s+INDIA|SBI', text_upper):
            return True, "SBI"
        elif re.search(r'ICICI\s+BANK', text_upper):
            return True, "ICICI"
        elif re.search(r'AXIS\s+BANK', text_upper):
            return True, "AXIS"
        elif re.search(r'KOTAK\s+MAHINDRA', text_upper):
            return True, "KOTAK"
            
        return True, "GENERIC"
