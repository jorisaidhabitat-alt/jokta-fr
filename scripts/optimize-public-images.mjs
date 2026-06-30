import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

// Skip these (favicons, manifest icons, OS-required)
const SKIP = new Set([
  'favicon-32.png',
  'Favicon.png',
  'favicon.ico',
  'favicon.svg',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'originals' || entry.name === 'node_modules' || entry.name === 'tool-logos') continue;
      out.push(...(await walk(full)));
    } else {
      out.push(full);
    }
  }
  return out;
}

const files = await walk(PUBLIC);
let converted = 0;
let kept = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

  const filename = basename(file);
  if (SKIP.has(filename)) {
    kept++;
    continue;
  }

  // Skip if .webp version already exists alongside
  const webpPath = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  try {
    await stat(webpPath);
    continue; // already converted
  } catch {}

  await sharp(file).webp({ quality: 80 }).toFile(webpPath);
  converted++;
  console.log(`✓ ${webpPath.replace(PUBLIC, '')}`);
}

console.log(`\n${converted} images converted to WebP, ${kept} kept (favicons/manifest).`);
