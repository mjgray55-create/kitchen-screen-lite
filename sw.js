/* Keeps the screen working without Wi-Fi. Data never passes through here:
   it lives in the tablet's own storage. This only caches the page itself. */
var CACHE = 'kitchen-v1';
var FILES = ['./', 'index.html', 'manifest.json', 'icon.svg'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
/* Network first, so updates arrive when online; the cached copy when not. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  var mine = url.origin === location.origin;
  var fonts = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!mine && !fonts) return;
  e.respondWith(fetch(e.request).then(function (res) {
    if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(e.request).then(function (hit) { return hit || (mine && e.request.mode === 'navigate' ? caches.match('index.html') : undefined); });
  }));
});
