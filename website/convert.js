const sharp = require('sharp');

async function convert() {
    try {
        await sharp('public/interior.png').webp({ quality: 80 }).toFile('public/interior.webp');
        console.log('Converted interior.png to WebP');
        
        await sharp('public/exterior.png').webp({ quality: 80 }).toFile('public/exterior.webp');
        console.log('Converted exterior.png to WebP');
        
        await sharp('public/finish.png').webp({ quality: 80 }).toFile('public/finish.webp');
        console.log('Converted finish.png to WebP');
        
        await sharp('public/robert.jpg').webp({ quality: 80 }).toFile('public/robert.webp');
        console.log('Converted robert.jpg to WebP');
        
        console.log("All conversions done.");
    } catch (err) {
        console.error("Error converting images:", err);
    }
}

convert();
