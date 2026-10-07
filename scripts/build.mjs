import { mkdir, cp, rm, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'dist');
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'favicon.svg', 'assets']) {
  await cp(path.join(root, file), path.join(destination, file), { recursive: true });
}
let html = await readFile(path.join(destination, 'index.html'), 'utf8');
for (const file of ['styles.css', 'app.js']) {
  const contents = await readFile(path.join(destination, file));
  const version = createHash('sha256').update(contents).digest('hex').slice(0, 12);
  html = html.replace(`./${file}`, `./${file}?v=${version}`);
}
await writeFile(path.join(destination, 'index.html'), html);
console.log('Static site built in dist/');
