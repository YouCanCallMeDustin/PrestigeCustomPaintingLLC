import fs from 'fs';

const areaData = JSON.parse(fs.readFileSync('src/data/areaData.json', 'utf8'));

const staticPages = [
  "",
  "our-work",
  "interior-painting-spokane",
  "exterior-painting-spokane",
  "house-painters-spokane",
  "commercial-painting-spokane",
  "cabinet-painting-spokane",
  "drywall-contractor-spokane",
  "wallpaper-installer-spokane",
  "paint-stripping-spokane",
  "pressure-washing-spokane",
  "about",
  "testimonials",
  "faq",
  "color-consultation",
  "service-area",
  "blog",
  "spokane-home-improvement-guide",
  "spokane-painting-glossary",
  "privacy-policy",
  "terms"
];

const serviceSlugs = [
  'exterior-painting', 'cabinet-painting', 'deck-painting', 'door-painting', 
  'commercial-painting', 'kitchen-cabinet-painting', 'ceiling-painting', 
  'trim-and-molding-painting', 'accent-wall-painting', 'exterior-siding-painting', 
  'stucco-painting', 'brick-painting', 'fence-painting', 'fence-staining', 
  'deck-staining', 'surface-priming', 'garage-painting', 'baseboard-painting', 
  'crown-molding-painting', 'color-consultation', 'paint-touch-up-services', 
  'wall-texture-matching', 'garage-floor-epoxy-coating', 'house-painters', 
  'ceiling-repair', 'drywall-finishing', 'popcorn-ceiling-removal', 
  'hole-repair-in-drywall', 'crack-repair-in-walls', 'water-damage-repair', 
  'drywall-patching', 'texture-matching', 'wall-texture-application', 
  'ceiling-texture-removal', 'drywall-installation-repair', 'wall-resurfacing', 
  'wallpaper-removal', 'wallpaper-installation', 'wallpaper-repair', 
  'wallpaper-service-preparation', 'decorative-wallpaper-installation', 
  'paint-stripping', 'wood-paint-removal', 'metal-paint-removal', 
  'surface-coating-removal', 'paint-removal-from-masonry', 'exterior-paint-removal', 
  'pressure-washing', 'power-washing', 'house-washing', 'deck-cleaning', 
  'fence-cleaning', 'driveway-pressure-washing', 'exterior-surface-cleaning', 
  'mold-and-mildew-removal', 'patio-and-walkway-cleaning'
];

const costPages = [
  "cost-to-paint-a-house",
  "cost-to-paint-house-exterior",
  "cost-to-paint-house-interior",
  "cost-to-paint-a-room",
  "how-much-do-painters-charge-per-hour",
  "cost-to-paint-a-two-story-house",
  "diy-vs-hiring-a-painter",
  "how-much-paint-do-i-need",
  "cost-to-paint-kitchen-cabinets"
];

const blogSlugs = [
  "cost-to-paint-house-spokane",
  "best-exterior-paint-spokane",
  "how-often-to-paint-house-spokane",
  "interior-painting-tips-spokane"
];

const baseUrl = "https://prestigecustompaintingllc.com";
const date = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Static Pages
staticPages.forEach(p => {
  xml += `  <url>
    <loc>${baseUrl}/${p}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === "" ? "1.0" : "0.8"}</priority>
  </url>\n`;
});

// Cost Pages
costPages.forEach(p => {
  xml += `  <url>
    <loc>${baseUrl}/${p}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

// Service Pages
serviceSlugs.forEach(s => {
  xml += `  <url>
    <loc>${baseUrl}/service/${s}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

// Blog Posts
blogSlugs.forEach(p => {
  xml += `  <url>
    <loc>${baseUrl}/blog/${p}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
});

// Area Pages
areaData.forEach(a => {
  const slug = a.slug === 'spokane' ? 'house-painters-spokane' : `painting-${a.slug}`;
  xml += `  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated successfully');
