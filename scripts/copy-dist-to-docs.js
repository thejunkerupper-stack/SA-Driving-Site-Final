#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const docs = path.join(root, 'docs');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Remove existing docs folder (if present)
if (fs.existsSync(docs)) {
  // Remove recursively
  fs.rmSync(docs, { recursive: true, force: true });
}

// Recreate and copy
fs.mkdirSync(docs, { recursive: true });
copyRecursive(dist, docs);

console.log('Copied', dist, '→', docs);
