import { ANALYTICS_MEASUREMENT_ID } from '../config/analytics.public'
import { CHOICE_KEY, createAnalytics, readChoice, type AnalyticsChoice } from './analytics'

export const analytics = createAnalytics(
  ANALYTICS_MEASUREMENT_ID,
  import.meta.env.BASE_URL,
  import.meta.env.PROD && window.location.hostname === 'andertrunks.github.io',
)

let choice = readChoice()
const listeners = new Set<() => void>()
analytics.consent(choice)

export const getAnalyticsChoice = () => choice
export function subscribeAnalytics(listener: () => void) {
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}

export function chooseAnalytics(next: AnalyticsChoice) {
  choice = next
  try {
    if (next) localStorage.setItem(CHOICE_KEY, next)
    else localStorage.removeItem(CHOICE_KEY)
  } catch { /* Choice still applies to the current page when storage is unavailable. */ }
  analytics.consent(next)
  listeners.forEach((listener) => listener())
}

window.addEventListener('storage', (event) => {
  if (event.key !== CHOICE_KEY && event.key !== null) return
  choice = readChoice()
  analytics.consent(choice)
  listeners.forEach((listener) => listener())
})
