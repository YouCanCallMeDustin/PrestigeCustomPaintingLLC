import sharp from 'sharp';
import path from 'path';

const sourceImg = 'C:/Users/dusti/.gemini/antigravity-ide/brain/27df4fe3-c724-4922-bc93-6e0939968349/media__1780163678020.jpg';
const publicDir = 'c:/Users/dusti/OneDrive/Desktop/Businesses Websites/prestige-painting/website/public';

async function generate() {
    try {
        console.log('Generating logo.png using Sharp...');
        await sharp(sourceImg)
            .png()
            .toFile(path.join(publicDir, 'logo.png'));
        console.log('Successfully generated logo.png!');
    } catch (err) {
        console.error('Error generating logo:', err);
    }
}

generate();
