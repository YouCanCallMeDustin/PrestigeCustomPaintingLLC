const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) {
            walk(p, callback);
        } else if (p.endsWith('.tsx')) {
            callback(p);
        }
    });
}

walk('src', (f) => {
    let raw = fs.readFileSync(f, 'utf8');
    // Regex to match the SERVICES link anywhere, considering indentation
    let replaced = raw.replace(/^[ \t]*<Link to="\/services"[^>]*>SERVICES<\/Link>\r?\n?/gm, '');
    
    if (raw !== replaced) {
        fs.writeFileSync(f, replaced, 'utf8');
        console.log('Removed SERVICES link from', f);
    }
});
