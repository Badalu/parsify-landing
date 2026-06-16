from abc import ABC, abstractmethod
from typing import List, Dict, Any

class BaseParser(ABC):
    @abstractmethod
    def parse(self, pdf_path: str, password: str = None) -> List[Dict[str, Any]]:
        """
        Parses a bank statement PDF and returns a list of dictionaries representing transactions.
        
        Expected output format per transaction:
        {
            "date": "2024-01-15", # ISO format or DD/MM/YYYY
            "description": "UPI/...",
            "ref_no": "...",
            "debit": 1500.00, # or None
            "credit": None,   # or 2000.00
            "balance": 45000.00,
            "type": "debit" # or "credit"
        }
        """
        pass
