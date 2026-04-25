import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '../public');

// Images to optimize: [source, target, options]
const tasks = [
  {
    src: 'wallpaper.jpg',
    out: 'wallpaper.webp',
    opts: { width: 1920, quality: 75 }
  },
  {
    src: 'exterior.png',
    out: 'exterior.webp',
    opts: { width: 1200, quality: 78 }
  },
  {
    src: 'interior.png',
    out: 'interior.webp',
    opts: { width: 1200, quality: 78 }
  },
  {
    src: 'finish.png',
    out: 'finish.webp',
    opts: { width: 1200, quality: 78 }
  },
  {
    src: 'robert.jpg',
    out: 'robert.webp',
    opts: { width: 800, quality: 78 }
  }
];

async function optimize() {
  console.log('Image Optimization Report');
  console.log('='.repeat(60));

  for (const task of tasks) {
    const srcPath = path.join(PUBLIC_DIR, task.src);
    const outPath = path.join(PUBLIC_DIR, task.out);

    if (!fs.existsSync(srcPath)) {
      console.log(`  SKIP: ${task.src} not found`);
      continue;
    }

    const srcSize = fs.statSync(srcPath).size;

    await sharp(srcPath)
      .resize({ width: task.opts.width, withoutEnlargement: true })
      .webp({ quality: task.opts.quality })
      .toFile(outPath);

    const outSize = fs.statSync(outPath).size;
    const savings = ((1 - outSize / srcSize) * 100).toFixed(1);

    console.log(`  ${task.src} (${(srcSize/1024).toFixed(0)}KB) → ${task.out} (${(outSize/1024).toFixed(0)}KB)  [${savings}% smaller]`);
  }

  console.log('='.repeat(60));
  console.log('Done! WebP files created alongside originals.');
  console.log('Update your components to reference .webp files for best performance.');
}

optimize();
