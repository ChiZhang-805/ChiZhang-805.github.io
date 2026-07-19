---
layout: null
---
const CACHE_PREFIX = "chi-portfolio-";
const CACHE_NAME = `${CACHE_PREFIX}{{ site.time | date: "%s" }}`;
const CACHE_GENERATIONS_TO_KEEP = 3;
const BASE_URL = "{{ site.baseurl }}";
const APP_SHELL = [
  `${BASE_URL}/`,
  `${BASE_URL}/assets/css/main.css`,
  `${BASE_URL}/assets/css/portfolio.css`,
  `${BASE_URL}/assets/js/main.min.js`,
  `${BASE_URL}/assets/js/portfolio.js`,
  `${BASE_URL}/assets/js/project-viewers.js`,
  `${BASE_URL}/assets/media/journey/meitan/meitan-01-720.avif`,
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
    const portfolioCaches = cacheNames
      .filter((name) => name.startsWith(CACHE_PREFIX))
      .sort()
      .reverse();
    const cachesToKeep = new Set([CACHE_NAME, ...portfolioCaches.slice(0, CACHE_GENERATIONS_TO_KEEP)]);
    await Promise.all(portfolioCaches
      .filter((name) => !cachesToKeep.has(name))
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

const matchCached = (request) => caches.match(request, { ignoreSearch: false });

const networkFirst = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const network = fetch(request).then(async (response) => {
    if (canCache(response)) await cache.put(request, response.clone());
    return response;
  }).catch(() => undefined);
  const cached = await matchCached(request);
  if (!cached) {
    return (await network)
      || (await matchCached(`${BASE_URL}/`))
      || new Response("This page is temporarily unavailable offline.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
  }
  const cacheTimeout = new Promise((resolve) => setTimeout(() => resolve(cached), 850));
  return Promise.race([network.then((response) => response || cached), cacheTimeout]);
};

const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(CACHE_NAME);
  const cached = await matchCached(request);
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
  const cacheableAssetPath = /\.(?:avif|css|js|json|svg|webp|woff2?)$/i.test(url.pathname);
  if (url.origin === self.location.origin && (cacheableDestination || cacheableAssetPath)) {
    event.respondWith(staleWhileRevalidate(request));
  }
});
