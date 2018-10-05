const cacheName = 'rest-app-v1';
const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];
/*  install service workder */
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log(cacheFiles);
            return cache.addAll(cacheFiles);
        }).then(function(){
          return self.skipWaiting();
        }).catch(function(){
          console.log("something is not working");
        })
    );
});

// Activate event
self.addEventListener('activate', function(event) {
  return self.clients.claim();
});

/*  get items from cache if it's there */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response ||
      fetch(event.request);
    })
  );
});

/*  get items from cache if it's there */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response ||
      fetch(event.request)
    })
  );
});

