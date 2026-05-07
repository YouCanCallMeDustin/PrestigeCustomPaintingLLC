const fs = require('fs');
const path = require('path');

const replacements = {
    '/exterior.webp': '/23.jpg',
    '/interior.webp': '/5.jpg',
    '/finish.webp': '/2.jpg',
    '/wallpaper.webp': '/1.jpg',
    '/exterior.png': '/23.jpg',
    '/interior.png': '/5.jpg',
    '/finish.png': '/2.jpg',
    'https://prestigecustompaintingllc.com/exterior.webp': 'https://prestigecustompaintingllc.com/23.jpg',
    'https://prestigecustompaintingllc.com/interior.webp': 'https://prestigecustompaintingllc.com/5.jpg',
    'https://prestigecustompaintingllc.com/finish.webp': 'https://prestigecustompaintingllc.com/2.jpg',
    'https://prestigecustompaintingllc.com/wallpaper.webp': 'https://prestigecustompaintingllc.com/1.jpg',
    '/robert.webp': '/robert.jpg',
    'https://prestigecustompaintingllc.com/robert.webp': 'https://prestigecustompaintingllc.com/robert.jpg'
};

function walk(dir, callback) {
    fs.readdirSync(dir).forEach( f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
};

const srcDir = path.resolve('src');
walk(srcDir, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        for (const [oldStr, newStr] of Object.entries(replacements)) {
            newContent = newContent.split(oldStr).join(newStr);
        }
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
