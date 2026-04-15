const fs = require('fs');

const areaData = [
  { city: "Airway Heights", slug: "airway-heights" },
  { city: "Antelope", slug: "antelope" },
  { city: "Blossom", slug: "blossom" },
  { city: "Brownes Addition", slug: "brownes-addition" },
  { city: "Chattaroy", slug: "chattaroy" },
  { city: "Cheney", slug: "cheney" },
  { city: "Cliff Cannon", slug: "cliff-cannon" },
  { city: "Colbert", slug: "colbert" },
  { city: "Comstock", slug: "comstock" },
  { city: "Country Homes", slug: "country-homes" },
  { city: "Darty", slug: "darty" },
  { city: "Deer Park", slug: "deer-park" },
  { city: "Eagle Ridge", slug: "eagle-ridge" },
  { city: "East Central", slug: "east-central" },
  { city: "Fairbank", slug: "fairbank" },
  { city: "Fairwood", slug: "fairwood" },
  { city: "Five Mile Prairie", slug: "five-mile-prairie" },
  { city: "Four Lakes", slug: "four-lakes" },
  { city: "Freeman", slug: "freeman" },
  { city: "Garland District", slug: "garland-district" },
  { city: "Geiger Heights", slug: "geiger-heights" },
  { city: "Glenrose", slug: "glenrose" },
  { city: "Grandview", slug: "grandview" },
  { city: "Green Bluff", slug: "green-bluff" },
  { city: "Hayford", slug: "hayford" },
  { city: "Hazard", slug: "hazard" },
  { city: "Highland", slug: "highland" },
  { city: "Hillyard", slug: "hillyard" },
  { city: "Indian Canyon", slug: "indian-canyon" },
  { city: "Indian Trail", slug: "indian-trail" },
  { city: "Latah Junction", slug: "latah-junction" },
  { city: "Latah Valley", slug: "latah-valley" },
  { city: "Liberty Lake", slug: "liberty-lake" },
  { city: "Liberty Quarter", slug: "liberty-quarter" },
  { city: "Lincoln Heights", slug: "lincoln-heights" },
  { city: "Logan", slug: "logan" },
  { city: "Lyons", slug: "lyons" },
  { city: "Marshall", slug: "marshall" },
  { city: "Mead", slug: "mead" },
  { city: "Medical Lake", slug: "medical-lake" },
  { city: "Millwood", slug: "millwood" },
  { city: "Minnehaha", slug: "minnehaha" },
  { city: "Morgan Acres", slug: "morgan-acres" },
  { city: "Nine Mile Falls", slug: "nine-mile-falls" },
  { city: "North Hill", slug: "north-hill" },
  { city: "North Indian Trail", slug: "north-indian-trail" },
  { city: "Northwest Spokane", slug: "northwest-spokane" },
  { city: "Otis Orchards", slug: "otis-orchards" },
  { city: "Fairwood", slug: "fairwood-north" },
  { city: "Peaceful Valley", slug: "peaceful-valley" },
  { city: "Peone", slug: "peone" },
  { city: "Post Falls", slug: "post-falls" },
  { city: "Rockwood", slug: "rockwood" },
  { city: "Seven Mile", slug: "seven-mile" },
  { city: "Shields Park", slug: "shields-park" },
  { city: "Shiloh", slug: "shiloh" },
  { city: "South Hill", slug: "south-hill" },
  { city: "Spangle", slug: "spangle" },
  { city: "Spokane", slug: "spokane" },
  { city: "Spokane Valley", slug: "spokane-valley" },
  { city: "Suncrest", slug: "suncrest" },
  { city: "Sunset Hill", slug: "sunset-hill" },
  { city: "Town and Country", slug: "town-and-country" },
  { city: "Trentwood", slug: "trentwood" },
  { city: "Veradale", slug: "veradale" },
  { city: "West Central", slug: "west-central" },
  { city: "Whitworth", slug: "whitworth" }
];

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
  "blog"
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
