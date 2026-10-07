import { mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'dist');
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'favicon.svg', 'assets']) {
  await cp(path.join(root, file), path.join(destination, file), { recursive: true });
}
console.log('Static site built in dist/');
