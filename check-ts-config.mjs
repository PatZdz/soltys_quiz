
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
try {
  const config = require('eslint-config-next/typescript');
  console.log('Is array:', Array.isArray(config));
  console.log('Length:', config.length);
} catch (e) {
  console.error(e);
}
