import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImg = 'C:/Users/dusti/.gemini/antigravity-ide/brain/27df4fe3-c724-4922-bc93-6e0939968349/media__1780163435255.jpg';
const publicDir = 'c:/Users/dusti/OneDrive/Desktop/Businesses Websites/prestige-painting/website/public';

async function generate() {
    try {
        console.log('Generating favicons using Sharp...');

        // 1. Generate logo.png (PNG format)
        await sharp(sourceImg)
            .png()
            .toFile(path.join(publicDir, 'logo.png'));
        console.log('Generated logo.png');

        // 2. Generate favicon-96x96.png
        await sharp(sourceImg)
            .resize(96, 96)
            .png()
            .toFile(path.join(publicDir, 'favicon-96x96.png'));
        console.log('Generated favicon-96x96.png');

        // 3. Generate apple-touch-icon.png (180x180)
        await sharp(sourceImg)
            .resize(180, 180)
            .png()
            .toFile(path.join(publicDir, 'apple-touch-icon.png'));
        console.log('Generated apple-touch-icon.png');

        // 4. Generate web-app-manifest-192x192.png
        await sharp(sourceImg)
            .resize(192, 192)
            .png()
            .toFile(path.join(publicDir, 'web-app-manifest-192x192.png'));
        console.log('Generated web-app-manifest-192x192.png');

        // 5. Generate web-app-manifest-512x512.png
        await sharp(sourceImg)
            .resize(512, 512)
            .png()
            .toFile(path.join(publicDir, 'web-app-manifest-512x512.png'));
        console.log('Generated web-app-manifest-512x512.png');

        // 6. Generate favicon.ico (We write a 32x32 PNG and save it as favicon.ico)
        await sharp(sourceImg)
            .resize(32, 32)
            .png()
            .toFile(path.join(publicDir, 'favicon.ico'));
        console.log('Generated favicon.ico');

        // 7. Write site.webmanifest
        const manifest = {
            name: "Prestige Custom Painting LLC",
            short_name: "Prestige Painting",
            icons: [
                {
                    src: "/web-app-manifest-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "any maskable"
                },
                {
                    src: "/web-app-manifest-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any maskable"
                }
            ],
            theme_color: "#ffffff",
            background_color: "#ffffff",
            display: "standalone",
            start_url: "/"
        };

        fs.writeFileSync(
            path.join(publicDir, 'site.webmanifest'),
            JSON.stringify(manifest, null, 2)
        );
        console.log('Generated site.webmanifest');

        console.log('Favicon generation completed successfully!');
    } catch (err) {
        console.error('Error generating favicons:', err);
    }
}

generate();
