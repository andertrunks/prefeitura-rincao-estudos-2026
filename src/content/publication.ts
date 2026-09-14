import type { CargoId } from '../types'
import calendarData from './library/publication/lote105/calendar.json'
import newsData from './library/publication/lote105/news.json'
import rectificationsData from './library/publication/lote105/rectifications.json'

type PublicationCargoId = 'agente-administrativo' | 'monitor-educacao' | 'ajudante-geral'

export type CalendarEvent = {
  id: string
  titulo: string
  tipo?: string
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
  mudancas: string[]
  id: string
  publishedAt: string | null
  cargoIds: PublicationCargoId[]
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
  const date = new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Sao_Paulo' }).format(value)
  return new Date(`${date}T00:00:00-03:00`)
}

export function publicationDate(value: string | null) {
  return value ? new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo' }).format(new Date(value)) : 'Data de publicação não confirmada'
}

export function rectificationsForCargo(cargoId: CargoId) {
  return publicationRectifications.filter((item) => item.cargoIds.includes(cargoSlug[cargoId]))
    .slice().sort((left, right) => (right.publishedAt ?? '').localeCompare(left.publishedAt ?? ''))
}

function examForCargo(cargoId: CargoId) {
  return calendarEvents.find((event) => event.tipo === 'prova' && event.cargoIds.includes(cargoSlug[cargoId]))
}

function gateClosing(event: CalendarEvent) {
  if (event.tipo !== 'prova' || !event.startAt) return ''
  const time = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date(event.startAt)).replace(':', 'h')
  return `fechamento dos portões às ${time}`
}

export function examSchedule(cargoId: CargoId) {
  const event = examForCargo(cargoId)
  if (!event?.startAt) return 'Data e horário da prova a confirmar.'
  const period = event.titulo.match(/[12]º período/)?.[0]
  return `Prova objetiva: ${publicationDate(event.startAt)}${period ? ` — ${period}` : ''} — ${gateClosing(event)}.`
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
  if (!event.endAt) return event.tipo === 'prova' ? `${start} — ${gateClosing(event)}` : start
  return `${start} a ${format(new Date(event.endAt))}`
}

export function examCountdown(now = new Date(), cargoId: CargoId = 'agente') {
  const exam = examForCargo(cargoId)
  if (!exam?.startAt) return 'Data da prova a confirmar'
  const days = Math.ceil((atStartOfDay(new Date(exam.startAt)).getTime() - atStartOfDay(now).getTime()) / 86_400_000)
  if (days < 0) return 'Prova realizada'
  if (days === 0) return 'A prova é hoje'
  if (days === 1) return 'A prova é amanhã'
  return `Faltam ${days} dias para a prova`
}
