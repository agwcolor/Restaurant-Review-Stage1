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

/*self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});*/

/*self.addEventListener('install', function(event) {
  event.waitUntil(
  caches.open('my-cache').then(function(cache) {
        return cache.addAll([ file1.jpg, file2.png, ... ]);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});*/






/*self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
            if (response) return response;
            return fetch(event.request)
                   .then(fucntion(response) {
                      if (!response.ok) {
                        throw new TypeError('Bad response status');
                      };
                      return cache.put(event.request.url, response);
                    })
                   .catch(function(err) {console.log("uh oh")})
      });
    );
});*/

/*self.addEventListener('fetch', function(event) {
    console.log("this listener is never being fired");
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                console.log('Found ', event.request.url, ' in cache');
                return response;
            }
            else {
                console.log("hmmmm that's not in the cache, i'll be right back!")
                return fetch(event.request).then(function(response) {
                    return response
                })
            }
        })
        .catch(function(err) {
            console.log("uh something bad happened here")
        })
    );
}); */

/*  get items from cache if it's there */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response ||
      fetch(event.request)
    })
  );
});

