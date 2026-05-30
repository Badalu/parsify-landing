import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

with open('script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

body_match = re.search(r'<body>(.*?)<script', html_content, re.DOTALL)
body_html = body_match.group(1).strip() if body_match else ""

js_content = js_content.replace("document.addEventListener('DOMContentLoaded', () => {", "if (typeof window !== 'undefined') {")

top_part = page_content.split('export default function HomePage() {')[0]

new_page = top_part + '''export default function HomePage() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  React.useEffect(() => {
''' + js_content + '''
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        body > nav, body > header, body > footer, .Navbar { display: none !important; }
''' + css_content.replace('`', '\\`').replace('$', '\\$') + '''
      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `
''' + body_html.replace('`', '\\`').replace('$', '\\$') + '''
      ` }} />
    </>
  );
}
'''

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_page)
