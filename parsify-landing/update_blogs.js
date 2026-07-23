const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
const dirs = fs.readdirSync(blogDir);

dirs.forEach(d => {
  const p = path.join(blogDir, d, 'page.tsx');
  if (fs.existsSync(p) && fs.statSync(p).isFile() && d !== '[slug]' && d !== 'page.tsx') {
    let content = fs.readFileSync(p, 'utf-8');
    
    // Add import for AuthorBio if not present
    if (!content.includes('AuthorBio')) {
      content = content.replace("import type { Metadata } from 'next';", "import type { Metadata } from 'next';\nimport { AuthorBio } from '@/app/components/AuthorBio';");
    }
    
    // Replace author in schema
    content = content.replace(
      /"author": \{ "@type": "Organization", "name": "Parsify" \}/g,
      '"author": { "@type": "Person", "name": "CA Rahul Sharma" }'
    );
    
    // Inject AuthorBio before closing main/div
    if (!content.includes('<AuthorBio />')) {
      content = content.replace(
        '</div>\n      </div>\n    </main>',
        '<AuthorBio />\n        </div>\n      </div>\n    </main>'
      );
    }
    
    fs.writeFileSync(p, content, 'utf-8');
    console.log('Updated ' + p);
  }
});
