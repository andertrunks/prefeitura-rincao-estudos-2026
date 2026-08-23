const internalMetadataPatterns = [
  /\b(?:questions|manifest|cobertura-edital|sources)\.json\b/i,
  /\b[^\s`/]+\.md\b/i,
  /\b(?:cargoIds|questionId|lessonId|topicId|sourceId)\b/i,
  /\bq-inedita-[\w-]+\b/i,
  /\b(?:MED-PORT|AGADM|MON-ESP|AJG-ESP)-[\w-]+\b/i,
]

function removeFrontmatter(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, '\n')
  if (!normalized.startsWith('---\n')) return normalized
  const end = normalized.indexOf('\n---\n', 4)
  return end < 0 ? normalized : normalized.slice(end + 5)
}

export function containsInternalMetadata(value: string) {
  return internalMetadataPatterns.some((pattern) => pattern.test(value))
}

export function createStudentLessonMarkdown(markdown: string, questionCount: number) {
  const studentBody = removeFrontmatter(markdown)
    .split('\n')
    .map((line) => {
      if (/^##\s+25\.\s+Questões de fixação\s*$/i.test(line)) return '## 25. Questões para praticar'
      if (/^As questões inéditas vinculadas a esta aula/i.test(line)) {
        return `Esta aula possui ${questionCount} questões inéditas no estilo INEPAM, com gabarito comentado.`
      }
      if (/^O comentário completo de cada item/i.test(line)) {
        return 'O comentário completo de cada item aparece após a confirmação da resposta na área de prática.'
      }
      return containsInternalMetadata(line) ? '' : line
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const sourcesStart = studentBody.search(/^##\s+\d+\.\s+Fontes\s*$/m)
  if (sourcesStart < 0) return { mainBody: studentBody, sourcesBody: '' }

  return {
    mainBody: studentBody.slice(0, sourcesStart).trimEnd(),
    sourcesBody: studentBody.slice(sourcesStart).trimStart(),
  }
}
