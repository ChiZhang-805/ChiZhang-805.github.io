---
layout: null
---
const CACHE_PREFIX = "chi-portfolio-";
const CACHE_NAME = `${CACHE_PREFIX}{{ site.time | date: "%s" }}`;
const BASE_URL = "{{ site.baseurl }}";
const APP_SHELL = [
  `${BASE_URL}/`,
  `${BASE_URL}/assets/css/main.css`,
  `${BASE_URL}/assets/css/portfolio.css`,
  `${BASE_URL}/assets/js/main.min.js`,
  `${BASE_URL}/assets/js/portfolio.js`,
  `${BASE_URL}/assets/js/project-viewers.js`,
];

const canCache = (response) => response && response.status === 200 && ["basic", "cors"].includes(response.type);

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(APP_SHELL.map((url) => cache.add(new Request(url, { cache: "reload" }))));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

const networkFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (canCache(response)) await cache.put(request, response.clone());
    return response;
  } catch (_error) {
    return (await cache.match(request, { ignoreSearch: true }))
      || (await cache.match(`${BASE_URL}/`))
      || new Response("This page is temporarily unavailable offline.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
  }
};

const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const network = fetch(request).then(async (response) => {
    if (canCache(response)) await cache.put(request, response.clone());
    return response;
  }).catch(() => undefined);
  return cached || network.then((response) => response || Response.error());
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || request.headers.has("range")) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  const url = new URL(request.url);
  const cacheableDestination = ["style", "script", "image", "font"].includes(request.destination);
  if (url.origin === self.location.origin && cacheableDestination) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
