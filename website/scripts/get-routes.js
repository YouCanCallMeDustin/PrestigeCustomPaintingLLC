import { areaData } from '../src/data/areaData.js';
import fs from 'fs';

// This script generates the full list of routes for pre-rendering
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

// 1. Generate Area Routes
const areaRoutes = areaData.map(area => `/painting-${area.slug}`);

// 2. Generate Service Routes
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

const serviceRoutes = services.map(s => `/service/${s.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`);

const allRoutes = [...staticRoutes, ...areaRoutes, ...serviceRoutes];

// Save to a file that vite.config.ts can read
fs.writeFileSync('./routes.json', JSON.stringify(allRoutes, null, 2));

console.log(`Generated ${allRoutes.length} routes for pre-rendering.`);
