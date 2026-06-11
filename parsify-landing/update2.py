import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    p = f.read()

p = p.replace('// @ts-nocheck\n', '')

# Remove React.useEffect block
p = re.sub(r'React\.useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);', '', p)

# Add ScriptRunner import
p = p.replace("import React from 'react';", "import React from 'react';\nimport ScriptRunner from './ScriptRunner';")

# Add ScriptRunner component
p = p.replace('<div dangerouslySetInnerHTML', '<ScriptRunner />\n      <div dangerouslySetInnerHTML')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(p)
