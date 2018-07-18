var cacheName = 'yb-v1';
var dataCacheName = 'ybData-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/manifest.json',
      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(cacheName) !== 0;
        })
        .map(function (key) {
          if (key !== cacheName && key !== dataCacheName){
            return caches.delete(key);
          }
        })
      );
    })
  );
});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});