import pandas as pd
import io

class Exporter:
    @staticmethod
    def to_csv(transactions: list) -> bytes:
        df = pd.DataFrame(transactions)
        # Drop internal fields if they exist
        if 'flag_reason' in df.columns:
            df = df.drop(columns=['flag_reason'])
        if 'flagged' in df.columns:
            df = df.drop(columns=['flagged'])
            
        return df.to_csv(index=False).encode('utf-8')

    @staticmethod
    def to_excel(transactions: list) -> bytes:
        df = pd.DataFrame(transactions)
        if 'flag_reason' in df.columns:
            df = df.drop(columns=['flag_reason'])
        if 'flagged' in df.columns:
            df = df.drop(columns=['flagged'])

        output = io.BytesIO()
        with pd.ExcelWriter(output, engine='openpyxl') as writer:
            df.to_excel(writer, index=False, sheet_name='Transactions')
            
            # Format columns
            worksheet = writer.sheets['Transactions']
            for idx, col in enumerate(df.columns):
                series = df[col]
                max_len = max((
                    series.astype(str).map(len).max(),
                    len(str(series.name))
                )) + 1
                worksheet.column_dimensions[chr(65 + idx)].width = min(max_len, 50)
                
        return output.getvalue()
