const fs = require('node:fs');
const path = require('node:path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const srcContent = fs.readFileSync(path.join(__dirname, 'src', 'index.js'), 'utf8');
const buildBanner = `/**\n * Build généré le ${new Date().toISOString()}\n */\n`;
fs.writeFileSync(path.join(distDir, 'index.js'), buildBanner + srcContent, 'utf8');
console.log('Build terminé avec succès dans dist/');
