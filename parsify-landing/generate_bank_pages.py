import os
import re

# Base HDFC file path
BASE_DIR = r"c:\Users\Badal Hari\Downloads\bank\next-seo\app"
HDFC_FILE = os.path.join(BASE_DIR, "hdfc-bank-statement-converter", "page.tsx")

# List of banks to generate pages for
BANKS = [
    {"id": "sbi", "name": "SBI", "full_name": "State Bank of India (SBI)"},
    {"id": "icici", "name": "ICICI", "full_name": "ICICI Bank"},
    {"id": "axis", "name": "Axis", "full_name": "Axis Bank"},
    {"id": "kotak", "name": "Kotak", "full_name": "Kotak Mahindra Bank"},
    {"id": "pnb", "name": "PNB", "full_name": "Punjab National Bank (PNB)"},
    {"id": "bank-of-baroda", "name": "Bank of Baroda", "full_name": "Bank of Baroda"},
    {"id": "indusind", "name": "IndusInd", "full_name": "IndusInd Bank"},
    {"id": "yes-bank", "name": "Yes Bank", "full_name": "Yes Bank"},
    {"id": "canara-bank", "name": "Canara Bank", "full_name": "Canara Bank"},
    {"id": "idbi-bank", "name": "IDBI Bank", "full_name": "IDBI Bank"},
    {"id": "union-bank", "name": "Union Bank", "full_name": "Union Bank of India"},
    {"id": "bob", "name": "BOB", "full_name": "Bank of Baroda"},
    {"id": "indian-bank", "name": "Indian Bank", "full_name": "Indian Bank"},
    {"id": "federal-bank", "name": "Federal Bank", "full_name": "Federal Bank"}
]

def generate_pages():
    with open(HDFC_FILE, "r", encoding="utf-8") as f:
        template_content = f.read()

    for bank in BANKS:
        if bank["id"] == "hdfc":
            continue
            
        print(f"Generating for {bank['name']}...")
        
        # Replace logic
        content = template_content
        
        # Replace occurrences of HDFC (case-sensitive replacements first)
        content = content.replace("HDFC", bank["name"])
        content = content.replace("hdfc", bank["id"])
        content = content.replace("Hdfc", bank["name"].replace("-", "").title().replace(" ", ""))
        
        # Create directory
        dir_name = f"{bank['id']}-bank-statement-converter"
        # Fix for some banks that already have 'bank' in their id
        if "bank" in bank["id"] and "-bank" not in dir_name:
             pass # keeping the logic simple, sitemap uses exact IDs above
             
        # Actually sitemap defines exactly: [id]-bank-statement-converter except for 'bank-of-baroda' which is 'bank-of-baroda-statement-converter'
        if bank["id"] == "bank-of-baroda":
             dir_name = "bank-of-baroda-statement-converter"
        elif bank["id"].endswith("-bank"):
             dir_name = f"{bank['id']}-statement-converter"
        else:
             dir_name = f"{bank['id']}-bank-statement-converter"

        target_dir = os.path.join(BASE_DIR, dir_name)
        os.makedirs(target_dir, exist_ok=True)
        
        # Write file
        target_file = os.path.join(target_dir, "page.tsx")
        with open(target_file, "w", encoding="utf-8") as f:
            f.write(content)
            
        print(f"Created {target_file}")

if __name__ == "__main__":
    generate_pages()
