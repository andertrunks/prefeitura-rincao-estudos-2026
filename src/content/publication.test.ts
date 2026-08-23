import { describe, expect, it } from 'vitest'
import { calendarEvents, calendarEventsForCargo, examCountdown, publicationNews, publicationRectifications } from './publication'

describe('dados oficiais de calendário e publicações', () => {
  it('carrega os eventos, notícias e a rerratificação publicados', () => {
    expect(calendarEvents).toHaveLength(21)
    expect(publicationNews).toHaveLength(2)
    expect(publicationRectifications).toHaveLength(1)
  })

  it('limita a prova prática ao Ajudante Geral', () => {
    const now = new Date('2026-08-23T12:00:00-03:00')
    expect(calendarEventsForCargo('monitor', now)[0].event.id).toBe('inscricoes')
    expect(calendarEventsForCargo('ajudante', now).some(({ event }) => event.id === 'prova-pratica')).toBe(true)
    expect(calendarEventsForCargo('agente', now).some(({ event }) => event.id === 'prova-pratica')).toBe(false)
    expect(calendarEventsForCargo('monitor', now).some(({ event }) => event.id === 'prova-pratica')).toBe(false)
  })

  it('calcula os dias para a prova a partir da data oficial', () => {
    expect(examCountdown(new Date('2026-08-23T12:00:00-03:00'))).toBe('Faltam 35 dias para a prova')
    expect(examCountdown(new Date('2026-09-26T12:00:00-03:00'))).toBe('A prova é amanhã')
    expect(examCountdown(new Date('2026-09-27T12:00:00-03:00'))).toBe('A prova é hoje')
  })
})
