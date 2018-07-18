var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/img/git.png',
        '/img/gmail1.png',
        '/img/insta.png',
        '/img/twitter.png',
        '/styles.css',
        '/manifest.json',
      ]);
    })
  )
});