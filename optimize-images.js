import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES = {
  // Clinics
  'Unidade-1-10': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-10.jpeg',
  'Unidade-5-10': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-5-10.jpeg',
  'Unidade-4-10': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-4-10.jpeg',
  'Unidade-3-10': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-10.jpeg',
  'Unidade-2-10': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-10.jpeg',
  'Unidade-2-7': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-7.jpeg',
  'Unidade-1-7': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-7.jpeg',
  'Unidade-3-7': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-7.jpeg',
  'Unidade-3-3': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-3-3.jpeg',
  'Unidade-2-3': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-2-3.jpeg',
  'Unidade-1-3': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2024/11/Unidade-1-3.jpeg',

  // Insurance
  'porto-seguros': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/porto-seguros.png',
  'amil': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/amil.png',
  'bradesco-saude': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/bradesco-saude.png',
  'unimed': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/unimed.png',
  'allianz': 'https://clinicasgoiasbrasil.com.br/wp-content/uploads/2023/08/allianz.png',
  
  // Unsplash (MainHero)
  'medico-especialista': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&fm=webp',
  'equipe-medica': 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&fm=webp',
  'medica': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&fm=webp'
};

const DEST_DIR = path.join(__dirname, 'public', 'assets', 'optimized');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const chunks = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', () => resolve(Buffer.concat(chunks)));
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function processImages() {
  for (const [name, url] of Object.entries(IMAGES)) {
    try {
      console.log(`Downloading ${name}...`);
      const buffer = await downloadImage(url);
      
      const isInsurance = name.includes('seguros') || name.includes('amil') || name.includes('bradesco') || name.includes('unimed') || name.includes('allianz');
      const isHero = name === 'medico-especialista';
      
      let sharpInstance = sharp(buffer);
      
      if (isInsurance) {
        sharpInstance = sharpInstance.resize({ width: 300, withoutEnlargement: true });
      } else if (isHero) {
        sharpInstance = sharpInstance.resize({ width: 800, withoutEnlargement: true });
      } else {
        sharpInstance = sharpInstance.resize({ width: 600, withoutEnlargement: true });
      }

      const destPath = path.join(DEST_DIR, `${name}.webp`);
      
      await sharpInstance.webp({ quality: 80 }).toFile(destPath);
      console.log(`Saved optimized image: ${destPath}`);
    } catch (err) {
      console.error(`Error processing ${name}:`, err);
    }
  }
  console.log('Done optimizing images!');
}

processImages();
