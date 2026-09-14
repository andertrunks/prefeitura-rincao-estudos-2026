import { describe, expect, it, vi } from 'vitest'
import { runInNewContext } from 'node:vm'
import worker from '../public/service-worker.js?raw'

function harness() {
  const handlers = {}
  const shell = { body: 'cached shell' }
  const cachedAsset = { body: 'cached lesson bundle' }
  const caches = {
    match: vi.fn(async (request) => typeof request === 'string' && request.endsWith('index.html') ? shell : request.url?.includes('/assets/') ? cachedAsset : undefined),
    keys: vi.fn(async () => ['rincao-estudos-v11', 'rincao-estudos-v12', 'unrelated-cache']),
    delete: vi.fn(async () => true),
  }
  const fetch = vi.fn(async () => { throw new Error('offline') })
  const self = { location: { origin: 'https://andertrunks.github.io' }, addEventListener: (name, handler) => { handlers[name] = handler }, clients: { claim: vi.fn() } }
  runInNewContext(worker, { self, caches, fetch, URL })
  return { handlers, caches, fetch, shell, cachedAsset }
}

describe('PWA offline e atualização', () => {
  it('recupera a aplicação e aulas já armazenadas sem rede', async () => {
    const h = harness()
    let response
    h.handlers.fetch({ request: { method: 'GET', mode: 'navigate', url: 'https://andertrunks.github.io/prefeitura-rincao-estudos-2026/' }, respondWith: (value) => { response = value } })
    expect(await response).toBe(h.shell)
    h.handlers.fetch({ request: { method: 'GET', url: 'https://andertrunks.github.io/prefeitura-rincao-estudos-2026/assets/lessons.js' }, respondWith: (value) => { response = value } })
    expect(await response).toBe(h.cachedAsset)
    expect(h.fetch).toHaveBeenCalledTimes(1)
  })
  it('não intercepta nem armazena autenticação e Analytics', () => {
    const h = harness()
    const respondWith = vi.fn()
    for (const url of ['https://example.supabase.co/auth/v1/token', 'https://www.google-analytics.com/g/collect']) h.handlers.fetch({ request: { method: 'GET', url }, respondWith })
    expect(respondWith).not.toHaveBeenCalled()
  })
  it('remove somente o cache antigo do projeto na ativação', async () => {
    const h = harness()
    let completion
    h.handlers.activate({ waitUntil: (value) => { completion = value } })
    await completion
    expect(h.caches.delete).toHaveBeenCalledExactlyOnceWith('rincao-estudos-v11')
  })
})
