// Minimal service worker — enough to satisfy Chrome's installability check
// and cache the app shell so it opens instantly (even offline) once installed.
const CACHE_NAME = 'myscore-shell-v1';
const SHELL_FILES = ['./index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network-first for everything (this app is live/Firebase-backed),
  // falling back to the cached shell only if the network is unavailable.
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
