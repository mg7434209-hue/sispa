/* SİSPA — küçük statik sunucu (Railway / yerel geliştirme) */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff2': 'font/woff2'
};

/* --- Ziyaretçi sayacı (visits.json'da saklanır, git'e girmez) --- */
const VISITS_FILE = path.join(ROOT, 'visits.json');
let visits = 0;
try {
  visits = JSON.parse(fs.readFileSync(VISITS_FILE, 'utf8')).count || 0;
} catch (e) { /* ilk çalıştırma */ }
let saveQueued = false;
function saveVisits() {
  if (saveQueued) return;
  saveQueued = true;
  setTimeout(() => {
    saveQueued = false;
    fs.writeFile(VISITS_FILE, JSON.stringify({ count: visits }), () => {});
  }, 500);
}

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch (e) {
    res.writeHead(400); res.end('Bad Request'); return;
  }

  // Ziyaretçi sayacı API'si: ?hit=1 ile artar, her durumda sayacı döner
  if (urlPath === '/api/visits') {
    if ((req.url.split('?')[1] || '').includes('hit=1')) {
      visits += 1;
      saveVisits();
    }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({ count: visits }));
    return;
  }
  // aday dosyalar: dizin → index.html, uzantısız → .html veya dizin index'i
  let candidates;
  if (urlPath.endsWith('/')) {
    candidates = [urlPath + 'index.html'];
  } else if (!path.extname(urlPath)) {
    candidates = [urlPath + '.html', urlPath + '/index.html'];
  } else {
    candidates = [urlPath];
  }

  const tryServe = (i) => {
    if (i >= candidates.length) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<!doctype html><meta charset="utf-8"><title>404</title><p>Sayfa bulunamadı. <a href="/">Ana sayfa</a>');
      return;
    }
    const filePath = path.normalize(path.join(ROOT, candidates[i]));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) { tryServe(i + 1); return; }
      const ext = path.extname(filePath).toLowerCase();
      const headers = { 'Content-Type': MIME[ext] || 'application/octet-stream' };
      if (ext !== '.html') headers['Cache-Control'] = 'public, max-age=86400';
      res.writeHead(200, headers);
      res.end(data);
    });
  };
  tryServe(0);
});

server.listen(PORT, () => {
  console.log('SİSPA sitesi http://localhost:' + PORT + ' adresinde yayında');
});
