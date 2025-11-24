#!/usr/bin/env node
// Post-build hook placeholder. Historically this script adjusted built CSS
// for theme or transition fixes. Keep this as a safe no-op so `npm run build`
// doesn't fail if the original script is missing.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(dist)) {
  // Nothing to fix
  process.exit(0);
}

// No-op: keep for compatibility
console.log('postbuild-fix: no-op (dist exists)');
process.exit(0);
