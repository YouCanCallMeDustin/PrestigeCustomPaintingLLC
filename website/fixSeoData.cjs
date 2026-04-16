const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix whoThisIsFor
    content = content.replace(/whoThisIsFor:\s*\[([\s\S]*?)\]/g, (match, p1) => {
        return `whoThisIsFor: [${p1.replace(/title:/g, 'target:').replace(/desc:/g, 'summary:')}]`;
    });

    // Fix processSteps
    content = content.replace(/processSteps:\s*\[([\s\S]*?)\]/g, (match, p1) => {
        return `processSteps: [${p1.replace(/title:/g, 'step:')}]`;
    });

    // Fix relatedTopics
    content = content.replace(/relatedTopics\s*(?:= |: )\[([\s\S]*?)\]/g, (match, p1) => {
        const isAssignment = match.includes('=');
        const prefix = isAssignment ? 'relatedTopics = ' : 'relatedTopics: ';
        return `${prefix}[${p1.replace(/title:/g, 'topic:')}]`;
    });

    // Fix benefits in AreaPage
    if (filePath.includes('AreaPage')) {
        content = content.replace(/benefits\s*=\s*\[([\s\S]*?)\]/g, (match, p1) => {
            return `benefits = [${p1.replace(/title:/g, 'benefit:')}]`;
        });
        content = content.replace(/\{b\.title\}/g, '{b.benefit}');
        content = content.replace(/\{item\.title\}/g, '{item.topic}');
    }

    fs.writeFileSync(filePath, content);
}

const files = [
    'src/data/blogContent.tsx',
    'src/pages/AreaPage.tsx',
    'src/pages/ServiceBlogPage.tsx',
    'src/components/RelatedTopics.tsx'
];

// Find more pages
try {
    const costDir = 'src/pages/costs';
    if (fs.existsSync(costDir)) {
        fs.readdirSync(costDir).forEach(f => {
            if (f.endsWith('.tsx')) files.push(path.join(costDir, f));
        });
    }
} catch (e) {}

files.forEach(f => {
    if (fs.existsSync(f)) {
        console.log(`Fixing ${f}...`);
        fixFile(f);
    }
});
