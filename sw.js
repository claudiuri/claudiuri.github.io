var cacheName = 'yb-v5';
var dataCacheName = 'ybData-v5';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/img/git.png',
        '/img/twitter.png',
        '/img/gmail.png',
        '/img/insta.png',
        'img/boy256.png',
        '/style.css',
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css',
        'https://fonts.googleapis.com/css?family=Hind:300,400,500',
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