import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'public', 'img', 'originals');
const DST = join(__dirname, '..', 'public', 'img');

const SIZES = {
  'joris-portrait': 1200,
  'og-default': 1200,
  'blog-default': 1200,
  'case-catapulse': 1000,
  'case-sct': 1000,
  'case-esquisse': 1000,
};

await mkdir(DST, { recursive: true });
const entries = await readdir(SRC);

for (const file of entries) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
  const base = basename(file, ext);
  const out = join(DST, `${base}.webp`);
  const maxWidth = SIZES[base] || 1600;

  await sharp(join(SRC, file))
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);

  const s = await stat(out);
  console.log(`✓ ${base}.webp (${Math.round(s.size / 1024)} KB)`);
}

console.log('Conversion complete.');
