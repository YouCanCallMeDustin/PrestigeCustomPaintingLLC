
const fs = require('fs');
const path = require('path');

// Mock a simple way to get data from the files
const sitemapContent = fs.readFileSync('website/scripts/generate_sitemap.js', 'utf8');
const areaDataContent = fs.readFileSync('website/src/data/areaData.ts', 'utf8');

// Extract slugs from sitemap
const sitemapSlugs = [];
const sitemapRegex = /slug:\s*["']([^"']+)["']/g;
let match;
while ((match = sitemapRegex.exec(sitemapContent)) !== null) {
    sitemapSlugs.push(match[1]);
}

// Extract slugs from areaData.ts
const dataSlugs = [];
const dataRegex = /slug:\s*["']([^"']+)["']/g;
while ((match = dataRegex.exec(areaDataContent)) !== null) {
    dataSlugs.push(match[1]);
}

console.log('Sitemap Slugs Count:', sitemapSlugs.length);
console.log('Data Slugs Count:', dataSlugs.length);

const onlyInSitemap = sitemapSlugs.filter(s => !dataSlugs.includes(s));
const onlyInData = dataSlugs.filter(s => !sitemapSlugs.includes(s));

console.log('Only in Sitemap (will cause 404s/Redirects):', onlyInSitemap);
console.log('Only in Data (missing from sitemap):', onlyInData);
