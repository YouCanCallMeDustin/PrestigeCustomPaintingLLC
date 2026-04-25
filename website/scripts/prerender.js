import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 4173;

// --------------------------------------------------------------------------
// Detect the user's installed Chrome/Edge browser
// --------------------------------------------------------------------------
import { execSync } from 'child_process';

function findBrowser() {
  // 1. Check system PATH first (most reliable on modern Linux/CI)
  const commands = ['chromium', 'chromium-browser', 'google-chrome-stable', 'google-chrome', 'msedge'];
  for (const cmd of commands) {
    try {
      const path = execSync(`which ${cmd}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
      if (path && fs.existsSync(path)) return path;
    } catch (e) {
      // ignore errors from 'which'
    }
  }

  const candidates = [
    // Windows paths
    process.env['PROGRAMFILES(X86)'] + '\\Microsoft\\Edge\\Application\\msedge.exe',
    process.env['PROGRAMFILES'] + '\\Microsoft\\Edge\\Application\\msedge.exe',
    process.env['PROGRAMFILES'] + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env['PROGRAMFILES(X86)'] + '\\Google\\Chrome\\Application\\chrome.exe',
    process.env['LOCALAPPDATA'] + '\\Google\\Chrome\\Application\\chrome.exe',
    // Linux paths
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser'
  ];
  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return null;
}

// --------------------------------------------------------------------------
// Simple static file server with SPA fallback
// --------------------------------------------------------------------------
function startServer() {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
      '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
      '.woff': 'font/woff', '.ttf': 'font/ttf', '.txt': 'text/plain',
      '.xml': 'application/xml',
    };

    const server = createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // If the path doesn't have an extension, try serving the file directly first,
      // then fall back to index.html (SPA behavior)
      if (!path.extname(filePath)) {
        // Check if file exists at path/index.html
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          filePath = indexPath;
        } else {
          // SPA fallback
          filePath = path.join(DIST_DIR, 'index.html');
        }
      }

      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch (e) {
        // SPA fallback for any missing file
        try {
          const fallback = fs.readFileSync(path.join(DIST_DIR, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(fallback);
        } catch (e2) {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

// --------------------------------------------------------------------------
// All routes to pre-render
// --------------------------------------------------------------------------
const staticRoutes = [
  '/',
  '/our-work',
  '/interior-painting-spokane',
  '/exterior-painting-spokane',
  '/house-painters-spokane',
  '/commercial-painting-spokane',
  '/cabinet-painting-spokane',
  '/drywall-contractor-spokane',
  '/wallpaper-installer-spokane',
  '/paint-stripping-spokane',
  '/pressure-washing-spokane',
  '/blog/cost-to-paint-house-spokane',
  '/blog/best-exterior-paint-spokane',
  '/blog/how-often-to-paint-house-spokane',
  '/blog/interior-painting-tips-spokane',
  '/spokane-home-improvement-guide',
  '/blog',
  '/cost-to-paint-a-house',
  '/cost-to-paint-house-exterior',
  '/cost-to-paint-house-interior',
  '/cost-to-paint-a-room',
  '/how-much-do-painters-charge-per-hour',
  '/cost-to-paint-a-two-story-house',
  '/diy-vs-hiring-a-painter',
  '/how-much-paint-do-i-need',
  '/cost-to-paint-kitchen-cabinets',
  '/about',
  '/testimonials',
  '/faq',
  '/color-consultation',
  '/service-area',
  '/privacy-policy',
  '/terms',
  '/spokane-painting-glossary'
];

const areas = [
  "spokane", "spokane-valley", "liberty-lake", "airway-heights", "cheney",
  "deer-park", "medical-lake", "millwood", "fairfield", "mead",
  "nine-mile-falls", "colbert", "chattaroy", "otis-orchards", "newman-lake",
  "greenacres", "veradale", "south-hill", "north-hill", "five-mile-prairie",
  "shadle-park", "garland-district", "perry-district", "audubon", "brownes-addition",
  "kendall-yards", "hillyard", "indian-trail", "eagle-ridge", "fairwood",
  "town-and-country", "seven-mile", "spangle", "rockford", "latah", "waverly",
  "elk", "plaza", "marshall", "moab", "michaud", "geiger-heights", "glenrose",
  "moran-prairie", "peone-prairie", "pleasant-prairie", "green-bluff", "valleyford",
  "mica", "duncan", "four-lakes", "deep-creek", "lyons", "denison", "milan",
  "buckeye", "waysat", "irvin", "pasadena-park", "trentwood", "east-farms",
  "skilsaw", "grapeland", "saltese", "liberty-quarter"
];

const services = [
  "Exterior painting", "Cabinet painting", "Deck painting", "Door painting",
  "House Painters", "Commercial Painting", "Kitchen Cabinet Painting",
  "Ceiling Painting", "Trim and Molding Painting", "Accent Wall Painting",
  "Exterior Siding Painting", "Stucco Painting", "Brick Painting",
  "Fence Painting", "Fence Staining", "Deck Staining", "Surface Priming",
  "Garage Painting", "Baseboard Painting", "Crown Molding Painting",
  "Color Consultation", "Paint Touch-Up Services", "Wall Texture Matching",
  "Garage Floor Epoxy Coating", "Ceiling repair", "Drywall finishing",
  "Popcorn ceiling removal", "Hole Repair in Drywall", "Crack Repair in Walls",
  "Drywall Patching", "Texture Matching", "Wall Texture Application",
  "Ceiling Texture Removal", "Drywall Installation Repair", "Wall Resurfacing",
  "Wallpaper Removal", "Wallpaper Installation", "Wallpaper Repair",
  "Wallpaper Service Preparation", "Decorative Wallpaper Installation",
  "Paint Stripping", "Wood Paint Removal", "Metal Paint Removal",
  "Surface Coating Removal", "Paint Removal From Masonry", "Exterior Paint Removal",
  "Pressure Washing", "Power Washing", "House Washing", "Deck Cleaning",
  "Fence Cleaning", "Driveway Pressure Washing", "Exterior Surface Cleaning",
  "Mold and Mildew Removal", "Patio and Walkway Cleaning"
];

const areaRoutes = areas.map(a => `/painting-${a}`);
const serviceRoutes = services.map(s =>
  `/service/${s.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`
);

const routes = [...staticRoutes, ...areaRoutes, ...serviceRoutes];

// --------------------------------------------------------------------------
// Pre-render
// --------------------------------------------------------------------------
async function prerender() {
  const browserPath = findBrowser();
  if (!browserPath) {
    console.error('ERROR: Could not find Chrome or Edge on this machine.');
    process.exit(1);
  }
  console.log(`Using browser: ${browserPath}`);
  console.log(`Pre-rendering ${routes.length} routes...\n`);

  const server = await startServer();

  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  let rendered = 0;
  let failed = 0;

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      // Wait for useEffect SEO injection to complete
      await new Promise(r => setTimeout(r, 800));

      const html = await page.content();

      const outFile = route === '/'
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route, 'index.html');

      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html);

      rendered++;
      if (rendered % 25 === 0) console.log(`  Progress: ${rendered}/${routes.length}`);
    } catch (err) {
      failed++;
      console.warn(`  WARN: Failed ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\n✓ Done! Rendered: ${rendered}, Failed: ${failed}, Total: ${routes.length}`);
  process.exit(0);
}

prerender();
