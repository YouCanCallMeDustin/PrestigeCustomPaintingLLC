const fs = require('fs');
const path = require('path');

const projectRoot = 'c:/Users/dusti/OneDrive/Desktop/Businesses Websites/prestige-painting/website';

function auditFile(file) {
    const filePath = path.join(projectRoot, file);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const results = [];

    // Check meta description patterns
    const metaDescRegex = /metaDesc\s*=\s*(?:'|"|`)([\s\S]*?)(?:'|"|`)|metaDescription\s*:\s*(?:'|"|`)([\s\S]*?)(?:'|"|`)/g;
    let match;
    while ((match = metaDescRegex.exec(content)) !== null) {
        const desc = match[1] || match[2];
        if (desc.trim().length > 0) {
            if (desc.length < 150 || desc.length > 160) {
                results.push(`Meta length error: ${desc.length} chars. Content: "${desc.substring(0, 30)}..."`);
            }
        }
    }

    // Check for "title:" in data files (internal objects)
    if (file.includes('data/') || file.includes('pages/costs/') || file.includes('AreaPage.tsx') || file.includes('ServiceBlogPage.tsx')) {
        // Exclude schema objects and JSX attributes that are legit or not causing issues
        // Actually, the main issue is "title" inside arrays/objects
        const lines = content.split('\n');
        lines.forEach((line, i) => {
            if (line.includes('title:') && !line.includes('metaTitle:') && !line.includes('titleTag:')) {
                results.push(`Line ${i+1}: Legacy "title:" key found.`);
            }
            if (line.includes('desc:') && (line.includes('benefit:') || line.includes('target:') || file.includes('blogContent'))) {
                 results.push(`Line ${i+1}: Legacy "desc:" key found.`);
            }
        });
    }

    if (results.length > 0) {
        console.log(`\n--- Audit Results for ${file} ---`);
        results.forEach(r => console.log(r));
    }
}

const filesToAudit = [
    'src/data/blogContent.tsx',
    'src/data/areaData.ts',
    'src/pages/AreaPage.tsx',
    'src/pages/ServiceBlogPage.tsx',
    'src/pages/DynamicAreaPage.tsx'
];

// Add cost pages
const costDir = path.join(projectRoot, 'src/pages/costs');
if (fs.existsSync(costDir)) {
    fs.readdirSync(costDir).forEach(f => {
        if (f.endsWith('.tsx')) filesToAudit.push(`src/pages/costs/${f}`);
    });
}

// Add static pages
const staticPages = [
    'src/pages/AirwayHeightsPage.tsx',
    'src/pages/CheneyPage.tsx',
    'src/pages/DeerParkPage.tsx',
    'src/pages/LibertyLakePage.tsx',
    'src/pages/SpokaneValleyPage.tsx',
    'src/pages/HousePaintersPage.tsx',
    'src/pages/InteriorPaintingPage.tsx',
    'src/pages/ExteriorPaintingPage.tsx',
    'src/pages/CabinetPaintingPage.tsx',
    'src/pages/CommercialPaintingPage.tsx',
    'src/pages/DrywallContractorPage.tsx',
    'src/pages/WallpaperInstallerPage.tsx',
    'src/pages/PressureWashingPage.tsx'
];
filesToAudit.push(...staticPages);

filesToAudit.forEach(auditFile);
