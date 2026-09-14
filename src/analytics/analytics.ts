export type AnalyticsChoice = 'granted' | 'denied' | null
export const CHOICE_KEY = 'rincao-estudos-analytics-v1'
const COOKIE_PREFIX = 'rincao_stats'

export function readChoice(): AnalyticsChoice {
  try {
    const value = localStorage.getItem(CHOICE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch { return null }
}

const pageNames: Record<string, string> = {
  '/': 'Início', '/cargos': 'Cargos', '/estudo': 'Material de estudo',
  '/questoes': 'Questões', '/simulados': 'Simulados', '/erros': 'Caderno de Erros',
  '/revisoes': 'Revisões', '/desempenho': 'Desempenho', '/pratica': 'Prova prática',
  '/conta': 'Minha conta', '/privacidade': 'Privacidade',
}

// Only public routes and known lesson titles can enter telemetry. Never use the raw URL.
export function analyticsPage(path: string, lessonNames: Record<string, string>, publicationNames: Record<string, string> = {}) {
  const pathname = path.split(/[?#]/, 1)[0]
  if (pageNames[pathname]) return { path: pathname, title: pageNames[pathname] }
  if (Object.prototype.hasOwnProperty.call(publicationNames, pathname)) return { path: pathname, title: publicationNames[pathname] }
  const lessonId = pathname.startsWith('/aula/') ? pathname.slice(6) : ''
  if (Object.prototype.hasOwnProperty.call(lessonNames, lessonId)) return { path: pathname, title: lessonNames[lessonId] }
  return null
}

export function safeReferrer(value: string) {
  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol) ? `${url.origin}/` : ''
  } catch { return '' }
}

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
} & Partial<Record<`ga-disable-${string}`, boolean>>

export function createAnalytics(measurementId: string, baseUrl: string, enabled: boolean) {
  let loaded = false
  let ready = false
  let pending: Record<string, string>[] = []
  let allowed = false
  let lastPath: string | null = null
  let previousUrl = ''
  const configured = enabled && /^G-[A-Z0-9]+$/.test(measurementId)
  const target = () => window as unknown as AnalyticsWindow
  const locationFor = (path: string) => `${window.location.origin}${baseUrl}#${path}`

  function consent(choice: AnalyticsChoice) {
    allowed = configured && choice === 'granted'
    if (!configured) return
    target()[`ga-disable-${measurementId}`] = !allowed
    if (!allowed) {
      lastPath = null
      previousUrl = ''
      pending = []
      // Only this project's analytics cookies; auth and study storage are untouched.
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.trim().split('=')[0]
        if (!name.startsWith(`${COOKIE_PREFIX}_`)) continue
        document.cookie = `${name}=; Max-Age=0; Path=${baseUrl}; SameSite=Lax; Secure`
      }
    }
  }

  function flush() {
    if (!ready || !allowed || navigator.onLine === false) return
    const events = pending
    pending = []
    for (const event of events) target().gtag?.('event', 'page_view', event)
  }

  function pageView(page: { path: string; title: string } | null) {
    if (!configured || !allowed || !page || navigator.onLine === false || lastPath === page.path) return
    const pageUrl = locationFor(page.path)
    if (!loaded) {
      const win = target()
      win.dataLayer = win.dataLayer || []
      // gtag expects an arguments object in the dataLayer, per Google's bootstrap snippet.
      // eslint-disable-next-line prefer-rest-params
      win.gtag = function () { win.dataLayer!.push(arguments) }
      win.gtag('consent', 'default', {
        analytics_storage: 'denied', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied',
      })
      win.gtag('consent', 'update', { analytics_storage: 'granted' })
      win.gtag('js', new Date())
      previousUrl = safeReferrer(document.referrer)
      win.gtag('config', measurementId, {
        send_page_view: false,
        page_location: pageUrl, page_referrer: previousUrl,
        page_title: page.title,
        allow_google_signals: false, allow_ad_personalization_signals: false,
        cookie_prefix: COOKIE_PREFIX, cookie_path: baseUrl, cookie_domain: 'none',
        cookie_expires: 60 * 60 * 24 * 90,
      })
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      script.referrerPolicy = 'origin'
      script.onload = () => { ready = true; flush() }
      script.onerror = () => {
        loaded = false
        ready = false
        pending = []
        lastPath = null
        script.remove()
      }
      loaded = true
      document.head.appendChild(script)
    }
    pending.push({
      send_to: measurementId, page_location: pageUrl, page_title: page.title,
      page_referrer: previousUrl,
    })
    lastPath = page.path
    previousUrl = pageUrl
    flush()
  }

  return { configured, consent, pageView }
}
