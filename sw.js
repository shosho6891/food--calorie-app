self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("calorie-cache").then(cache => {
      return cache.addAll(["./"]);
    })
  );
});
