import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const newLogos = [
  {
    name: 'hackarcode',
    url: 'https://media.licdn.com/dms/image/v2/D560BAQE-F1Bi-39zEw/company-logo_100_100/company-logo_100_100/0/1714307087154?e=1786579200&v=beta&t=jLwhoTPN3vRxalOXMAMUDipSNpj0o6f9Pugk0W6vzlc'
  },
  {
    name: 'shecancode',
    url: 'https://media.licdn.com/dms/image/v2/D4E0BAQHUBYhk7fRU3w/company-logo_100_100/company-logo_100_100/0/1706178233433/shecancode_logo?e=1786579200&v=beta&t=9q9ZVtRfvDQFxLvEH1y1uD5qFi5-kcz-fCol7r8trzc'
  }
];

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, filePath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const item of newLogos) {
    const filePath = path.join(targetDir, `${item.name}.png`);
    try {
      await download(item.url, filePath);
      console.log(`Downloaded ${item.name} successfully`);
    } catch (e) {
      console.error(`Failed ${item.name}: ${e.message}`);
    }
  }
}

main();
