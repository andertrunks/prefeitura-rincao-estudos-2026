import { describe, expect, it } from 'vitest'
import { richLessons, richLessonsByTopicId } from './editorial'
import { containsInternalMetadata, createStudentLessonMarkdown } from './studentContent'

describe('apresentação estudantil do conteúdo editorial', () => {
  const lesson = richLessonsByTopicId['mp-fonema']

  it('mantém a rastreabilidade no arquivo-fonte e a oculta na apresentação', () => {
    expect(lesson.markdown).toContain('questions.json')
    expect(lesson.markdown).toContain('q-inedita-medio-portugues-0006')
    expect(lesson.editorialId).toBe('medio-portugues-fonema-001')

    const { mainBody, sourcesBody } = createStudentLessonMarkdown(lesson.markdown, lesson.questionCount)
    const studentText = `${mainBody}\n${sourcesBody}`

    expect(containsInternalMetadata(studentText)).toBe(false)
    expect(studentText).not.toContain('questions.json')
    expect(studentText).not.toContain('q-inedita-medio-portugues-')
    expect(studentText).not.toContain('cargoIds')
    expect(studentText).not.toContain('medio-portugues-fonema-001')
  })

  it('troca referências técnicas por orientação pedagógica sem perder o conteúdo', () => {
    const { mainBody, sourcesBody } = createStudentLessonMarkdown(lesson.markdown, lesson.questionCount)

    expect(mainBody).toContain('## 25. Questões para praticar')
    expect(mainBody).toContain('Esta aula possui 10 questões inéditas no estilo INEPAM, com gabarito comentado.')
    expect(mainBody).toContain('## 26. Gabarito resumido das questões inéditas')
    expect(mainBody).toContain('6. B')
    expect(mainBody).toContain('O comentário completo de cada item aparece após a confirmação da resposta')
    expect(sourcesBody).toContain('## 27. Fontes')
    expect(sourcesBody).toContain('Concurso Público nº 001/2026 da Prefeitura Municipal de Rincão-SP')
  })

  it('não deixa metadados internos visíveis em nenhuma das 112 aulas', () => {
    for (const item of richLessons) {
      const { mainBody, sourcesBody } = createStudentLessonMarkdown(item.markdown, item.questionCount)
      const studentText = `${mainBody}\n${sourcesBody}`
      expect(containsInternalMetadata(studentText), item.stableItemId).toBe(false)
      const leakedPresentationMarkup = studentText.match(/auditoria editorial|checklist editorial|controle editorial|status editorial|nota editorial|inferência editorial|<\/?(?:table|colgroup|thead|tbody|tr|th|br)\b/i)
      expect(leakedPresentationMarkup, `${item.stableItemId}: ${leakedPresentationMarkup?.[0]}`).toBeNull()
    }
  })

  it('converte quadros HTML legados em blocos legíveis sem perder o texto pedagógico', () => {
    const constitutionLesson = richLessonsByTopicId['me-cf-5-7']
    expect(constitutionLesson.markdown).toContain('<table>')

    const { mainBody } = createStudentLessonMarkdown(constitutionLesson.markdown, constitutionLesson.questionCount)

    expect(mainBody).not.toContain('<table>')
    expect(mainBody).toContain('> **Atenção para a prova**')
    expect(mainBody).toContain('Os três artigos pertencem ao Título II')
  })

  it('reconhece as famílias de identificadores que não podem chegar à interface', () => {
    for (const metadata of [
      'manifest.json',
      'aula.md',
      'cargoIds',
      'questionId',
      'lessonId',
      'topicId',
      'sourceId',
      'stableItemId',
      'q-inedita-medio-portugues-0006',
      'MED-PORT-001',
      'MED-MAT-001',
      'AGADM-001',
      'MON-ESP-001',
      'MON-ESP-*',
      'AJG-ESP-001',
      'auditado_sem_impacto_nos_cargos_do_projeto',
      'src-edital-rincao-001',
      'AGE-ESP-001',
      'AJU-ESP-001',
      'aa-adobe',
    ]) expect(containsInternalMetadata(metadata)).toBe(true)
  })
})
