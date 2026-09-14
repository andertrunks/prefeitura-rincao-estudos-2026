import { describe, expect, it } from 'vitest'
import { calendarEvents, calendarEventsForCargo, examCountdown, examSchedule, formatCalendarEvent, publicationDate, publicationNews, publicationRectifications } from './publication'

describe('dados oficiais de calendário e publicações', () => {
  it('carrega os eventos, notícias e a rerratificação publicados', () => {
    expect(calendarEvents).toHaveLength(22)
    expect(publicationNews).toHaveLength(3)
    expect(publicationRectifications).toHaveLength(2)
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

  it('mostra o fechamento dos portões correto para cada cargo, nunca horário de início', () => {
    expect(examSchedule('agente')).toBe('Prova objetiva: 27/09/2026 — 1º período — fechamento dos portões às 08h00.')
    expect(examSchedule('ajudante')).toBe(examSchedule('agente'))
    expect(examSchedule('monitor')).toBe('Prova objetiva: 27/09/2026 — 2º período — fechamento dos portões às 13h00.')
    for (const cargo of ['agente', 'ajudante', 'monitor'] as const) {
      const exams = calendarEventsForCargo(cargo, new Date('2026-09-13T12:00:00-03:00')).filter(({event}) => event.tipo === 'prova')
      expect(exams).toHaveLength(1)
      expect(formatCalendarEvent(exams[0].event)).toContain(cargo === 'monitor' ? '13h00' : '08h00')
    }
  })

  it('usa São Paulo mesmo em outro fuso e não inventa a data da primeira retificação', () => {
    expect(examCountdown(new Date('2026-09-27T02:30:00Z'), 'monitor')).toBe('A prova é amanhã')
    expect(examCountdown(new Date('2026-09-28T03:00:00Z'), 'agente')).toBe('Prova realizada')
    expect(publicationDate(null)).toBe('Data de publicação não confirmada')
  })
})
