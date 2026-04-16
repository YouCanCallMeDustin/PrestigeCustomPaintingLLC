import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const dir = process.cwd();
const files = [...walk(path.join(dir, 'src', 'pages')), ...walk(path.join(dir, 'src', 'data'))];

const descRegex = /(?:metaDescription|description|metaDesc)\s*[:=]\s*(['"`])(.*?)\1/gs;
const titleRegex = /(?:title|metaTitle|h1)\s*[:=]\s*(['"`])(.*?)\1/gs;

let violations = 0;
let titles = new Set();
let titleViolations = 0;

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    let m;
    while ((m = descRegex.exec(content)) !== null) {
        let desc = m[2].replace(/\n/g, ' ').replace(/\s+/g, ' ');
        // If it looks like a template literal with logic, we just gauge the literal parts.
        // Wait, length checking here is approximate for templated strings, but we will print it anyway.
        let len = desc.length;
        if (len < 150 || len > 160) {
            console.log(`[DESC_VIOLATION] ${path.basename(file)}: Length ${len} -> ${desc.substring(0, 30)}...`);
            violations++;
        } else {
            console.log(`[DESC_OK] ${path.basename(file)}: Length ${len}`);
        }
    }

    while ((m = titleRegex.exec(content)) !== null) {
        let title = m[2].replace(/\n/g, ' ').replace(/\s+/g, ' ');
        if (titles.has(title)) {
           console.log(`[TITLE_DUPLICATE] ${path.basename(file)}: ${title}`);
           titleViolations++;
        } else {
           titles.add(title);
        }
    }
});

console.log(`\nTotal Description Violations: ${violations}`);
console.log(`Total Title Duplicates: ${titleViolations}`);
