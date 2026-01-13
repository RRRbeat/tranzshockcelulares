const CACHE_NAME = "tranzshock-v1";

const FILES = [
  "/tranzshockcelulares/",
  "/tranzshockcelulares/index.html",
  "/tranzshockcelulares/menu.html",
  "/tranzshockcelulares/style.css",
  "/tranzshockcelulares/animation.css",
  "/tranzshockcelulares/app.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
