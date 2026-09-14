import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { analyticsPage, createAnalytics, readChoice, safeReferrer } from './analytics'

const base = '/prefeitura-rincao-estudos-2026/'
const measurementId = 'G-TEST1234'
const home = { path: '/', title: 'Início' }
const lesson = { path: '/aula/mp-fonema', title: 'Fonema' }
let scripts: { onload: () => void }[]
let delayScript: boolean
let cookieWrites: string[]
let fakeWindow: { location: { origin: string }; dataLayer?: Array<ArrayLike<unknown>> }
const commands = () => (fakeWindow.dataLayer ?? []).map((entry) => Array.from(entry))
const views = () => commands().filter((entry) => entry[0] === 'event')

beforeEach(() => {
  scripts = []
  delayScript = false
  cookieWrites = []
  fakeWindow = { location: { origin: 'https://andertrunks.github.io' } }
  vi.stubGlobal('window', fakeWindow)
  vi.stubGlobal('navigator', { onLine: true })
  vi.stubGlobal('document', {
    referrer: 'https://example.org/private/path?email=private#secret',
    get cookie() { return 'study=keep; rincao_stats_ga=remove; rincao_stats_ga_TEST1234=remove' },
    set cookie(value: string) { cookieWrites.push(value) },
    head: { appendChild: (script: { onload: () => void }) => { scripts.push(script); if (!delayScript) script.onload() } },
    createElement: () => ({}),
  })
})
afterEach(() => vi.unstubAllGlobals())

describe('estatísticas opcionais e privacidade', () => {
  it('não carrega a tag nem envia eventos antes de permitir ou ao recusar', () => {
    const analytics = createAnalytics(measurementId, base, true)
    analytics.consent(null)
    analytics.pageView(home)
    analytics.consent('denied')
    analytics.pageView(home)
    expect(scripts).toHaveLength(0)
    expect(commands()).toHaveLength(0)
  })

  it('não mede sem configuração ou em ambiente de desenvolvimento', () => {
    for (const analytics of [createAnalytics('', base, true), createAnalytics(measurementId, base, false)]) {
      analytics.consent('granted')
      analytics.pageView(home)
    }
    expect(scripts).toHaveLength(0)
    expect(commands()).toHaveLength(0)
  })

  it('mede navegação SPA sem duplicar renders e preserva o retorno à página inicial', () => {
    const analytics = createAnalytics(measurementId, base, true)
    analytics.consent('granted')
    analytics.pageView(home)
    analytics.pageView(home)
    analytics.pageView(lesson)
    analytics.pageView(home)
    expect(scripts).toHaveLength(1)
    expect(views()).toHaveLength(3)
    expect(views()[1][2]).toEqual({
      send_to: measurementId, page_location: `https://andertrunks.github.io${base}#/aula/mp-fonema`,
      page_title: 'Fonema', page_referrer: `https://andertrunks.github.io${base}#/`,
    })
    expect(JSON.stringify(commands())).not.toContain('private')
    expect(commands().find((entry) => entry[0] === 'config')?.[2]).toMatchObject({
      send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    })
  })

  it('revoga a medição imediatamente e remove apenas cookies de estatísticas', () => {
    const analytics = createAnalytics(measurementId, base, true)
    analytics.consent('granted')
    analytics.pageView(home)
    analytics.consent('denied')
    analytics.pageView(lesson)
    expect(views()).toHaveLength(1)
    expect(fakeWindow).toHaveProperty(`ga-disable-${measurementId}`, true)
    expect(cookieWrites).toHaveLength(2)
    expect(cookieWrites.every((value) => value.startsWith('rincao_stats_'))).toBe(true)
    analytics.consent('granted')
    analytics.pageView(lesson)
    expect(views()).toHaveLength(2)
  })

  it('funciona offline sem carregar a tag e mede a página atual ao reconectar', () => {
    const analytics = createAnalytics(measurementId, base, true)
    analytics.consent('granted')
    vi.stubGlobal('navigator', { onLine: false })
    analytics.pageView(home)
    expect(scripts).toHaveLength(0)
    vi.stubGlobal('navigator', { onLine: true })
    analytics.pageView(lesson)
    expect(views()).toHaveLength(1)
  })

  it('descarta visitas pendentes quando a permissão é retirada antes da tag carregar', () => {
    delayScript = true
    const analytics = createAnalytics(measurementId, base, true)
    analytics.consent('granted')
    analytics.pageView(home)
    expect(views()).toHaveLength(0)
    analytics.consent('denied')
    scripts[0].onload()
    expect(views()).toHaveLength(0)
    analytics.consent('granted')
    analytics.pageView(lesson)
    expect(views()).toHaveLength(1)
    expect(views()[0][2]).toMatchObject({ page_title: 'Fonema', page_referrer: '' })
  })

  it('aceita só rotas públicas conhecidas, sem consultas, fragmentos extras ou identificadores pessoais', () => {
    expect(analyticsPage('/aula/mp-fonema?email=secret#token', { 'mp-fonema': 'Fonema' })).toEqual(lesson)
    expect(analyticsPage('/conta?code=secret', {})).toEqual({ path: '/conta', title: 'Minha conta' })
    expect(analyticsPage('/aula/identificador-pessoal', {})).toBeNull()
    expect(analyticsPage('/usuario/identificador-pessoal', {})).toBeNull()
    expect(safeReferrer('https://example.org/pessoa?code=secret')).toBe('https://example.org/')
    expect(safeReferrer('javascript:alert(1)')).toBe('')
  })

  it('não presume consentimento quando o armazenamento falha ou tem conteúdo inválido', () => {
    vi.stubGlobal('localStorage', { getItem: () => { throw new Error('indisponível') } })
    expect(readChoice()).toBeNull()
    vi.stubGlobal('localStorage', { getItem: () => 'qualquer-valor' })
    expect(readChoice()).toBeNull()
    vi.stubGlobal('localStorage', { getItem: () => 'denied' })
    expect(readChoice()).toBe('denied')
  })
})
