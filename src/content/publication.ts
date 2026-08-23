import type { CargoId } from '../types'
import calendarData from './library/data/calendar.json'
import newsData from './library/data/news.json'
import rectificationsData from './library/data/rectifications.json'

type PublicationCargoId = 'agente-administrativo' | 'monitor-educacao' | 'ajudante-geral'

export type CalendarEvent = {
  id: string
  titulo: string
  startAt?: string
  endAt?: string
  dates?: string[]
  cargoIds: PublicationCargoId[]
  importancia: 'media' | 'alta' | 'critica'
}

export type NewsItem = {
  id: string
  publishedAt: string
  titulo: string
  resumo: string
  cargoIds: PublicationCargoId[]
  fonteOficial: string
  url: string
  publish: boolean
}

export type RectificationItem = {
  id: string
  publishedAt: string
  identificacao: string
  resumo: string
  impactoCandidato: string
  impactoEstudo: string
  fonteOficial: string
  url: string
  publish: boolean
}

const cargoSlug: Record<CargoId, PublicationCargoId> = {
  agente: 'agente-administrativo',
  monitor: 'monitor-educacao',
  ajudante: 'ajudante-geral',
}

export const calendarEvents = calendarData.events as CalendarEvent[]
export const publicationNews = (newsData.news as NewsItem[]).filter((item) => item.publish)
export const publicationRectifications = (rectificationsData.rectifications as RectificationItem[]).filter((item) => item.publish)

function atStartOfDay(value: Date) {
  return new Date(value.getFullYear(), value.getMonth(), value.getDate())
}

function eventMoments(event: CalendarEvent) {
  return event.dates?.map((date) => new Date(`${date}T00:00:00-03:00`)) ?? (event.startAt ? [new Date(event.startAt)] : [])
}

function nextRelevantMoment(event: CalendarEvent, today: Date) {
  if (event.startAt && event.endAt) {
    const start = atStartOfDay(new Date(event.startAt))
    const end = atStartOfDay(new Date(event.endAt))
    if (start <= today && end >= today) return today
  }
  const moments = eventMoments(event)
  return moments.find((moment) => moment >= today) ?? moments[moments.length - 1]
}

export function calendarEventsForCargo(cargoId: CargoId, now = new Date()) {
  const today = atStartOfDay(now)
  return calendarEvents
    .filter((event) => event.cargoIds.includes(cargoSlug[cargoId]))
    .map((event) => ({ event, moment: nextRelevantMoment(event, today) }))
    .filter((item): item is { event: CalendarEvent; moment: Date } => Boolean(item.moment) && item.moment >= today)
    .sort((left, right) => left.moment.getTime() - right.moment.getTime())
}

export function newsForCargo(cargoId: CargoId) {
  return publicationNews.filter((item) => item.cargoIds.includes(cargoSlug[cargoId]))
}

export function formatCalendarEvent(event: CalendarEvent) {
  const format = (value: Date) => new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(value)
  if (event.dates?.length) return event.dates.map((date) => format(new Date(`${date}T12:00:00-03:00`))).join(', ')
  if (!event.startAt) return 'Data a confirmar'
  const start = format(new Date(event.startAt))
  if (!event.endAt) return start
  return `${start} a ${format(new Date(event.endAt))}`
}

export function examCountdown(now = new Date()) {
  const exam = calendarEvents.find((event) => event.id === 'prova-objetiva')
  if (!exam?.startAt) return 'Data da prova a confirmar'
  const days = Math.ceil((atStartOfDay(new Date(exam.startAt)).getTime() - atStartOfDay(now).getTime()) / 86_400_000)
  if (days < 0) return 'Prova realizada'
  if (days === 0) return 'A prova é hoje'
  if (days === 1) return 'A prova é amanhã'
  return `Faltam ${days} dias para a prova`
}
