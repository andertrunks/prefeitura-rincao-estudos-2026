const CACHE_PREFIX = 'rincao-estudos-'
const CACHE = `${CACHE_PREFIX}v3`
const BASE = '/prefeitura-rincao-estudos-2026/'
const APP_SHELL = [BASE, `${BASE}index.html`, `${BASE}manifest.webmanifest`]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE).map((key) => caches.delete(key)))),
    self.clients.claim(),
  ]))
})

async function cacheResponse(request, response) {
  if (response.ok) {
    const cache = await caches.open(CACHE)
    await cache.put(request, response.clone())
  }
  return response
}

async function networkFirst(request) {
  try {
    return await cacheResponse(request, await fetch(request))
  } catch {
    return (await caches.match(request)) ?? (await caches.match(`${BASE}index.html`))
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request)
  if (cached) return cached
  return cacheResponse(request, await fetch(request))
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return

  const isNavigation = event.request.mode === 'navigate' || url.pathname === BASE || url.pathname.endsWith('/index.html')
  const isImmutableAsset = url.pathname.includes('/assets/')
  event.respondWith(isNavigation ? networkFirst(event.request) : isImmutableAsset ? cacheFirst(event.request) : networkFirst(event.request))
})
