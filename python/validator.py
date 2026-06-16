def clean_amount(val) -> float:
    if val is None or val == "":
        return 0.0
    val_str = str(val).replace(",", "").replace("₹", "").replace("Rs", "").replace("Cr", "").replace("Dr", "").strip()
    try:
        return float(val_str)
    except:
        return 0.0

class Validator:
    @staticmethod
    def validate(transactions: list) -> dict:
        """
        Validates transactions.
        Checks running balance, amount sanity, and calculates quality score.
        """
        if not transactions:
            return {"valid_transactions": [], "score": 0.0, "flagged_count": 0}

        valid_txns = []
        flagged_count = 0
        total_rows = len(transactions)
        
        # Filter junk rows first
        filtered_txns = []
        for t in transactions:
            desc_upper = t.get("description", "").upper()
            if "OPENING BALANCE" in desc_upper or "CLOSING BALANCE" in desc_upper or "PAGE" in desc_upper:
                continue
            filtered_txns.append(t)

        total_rows = len(filtered_txns)
        if total_rows == 0:
            return {"valid_transactions": [], "score": 0.0, "flagged_count": 0}

        # Running balance check
        for i in range(len(filtered_txns)):
            t = filtered_txns[i]
            t["flagged"] = False
            
            debit = clean_amount(t.get("debit"))
            credit = clean_amount(t.get("credit"))
            balance = clean_amount(t.get("balance"))
            
            # Amount sanity: Both debit and credit present or both missing
            if (debit > 0 and credit > 0) or (debit == 0 and credit == 0):
                t["flagged"] = True
                t["flag_reason"] = "Invalid amount: must have exactly one of debit/credit."
            
            # Running balance logic
            if i > 0 and not t["flagged"]:
                prev_t = valid_txns[-1]
                if not prev_t["flagged"]:
                    prev_bal = clean_amount(prev_t.get("balance"))
                    expected_bal = prev_bal + credit - debit
                    # Allow 0.01 tolerance for floating point errors
                    if abs(expected_bal - balance) > 0.02:
                        t["flagged"] = True
                        t["flag_reason"] = f"Balance mismatch. Expected: {expected_bal}, Got: {balance}"
            
            if t["flagged"]:
                flagged_count += 1
                
            valid_txns.append(t)

        score = ((total_rows - flagged_count) / total_rows) * 100 if total_rows > 0 else 0
        
        return {
            "valid_transactions": valid_txns,
            "score": round(score, 1),
            "flagged_count": flagged_count,
            "total_rows": total_rows
        }
