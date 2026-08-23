const internalMetadataPatterns = [
  /\b(?:questions|manifest|cobertura-edital|sources|simulations|calendar|news|rectifications)\.json\b/i,
  /\b[^\s`/]+\.md\b/i,
  /\b(?:cargoIds|questionId|lessonId|topicId|sourceId|sourceRefs|stableItemId|editorialId|editalItemId|schemaVersion)\b/i,
  /\bq-(?:inedita|real)-[\w-]+\b/i,
  /\b(?:MED-PORT|MED-MAT|AGADM|MON-ESP|AJG-ESP)-[\w-]+\b/i,
]

const outdatedPublicationControl = /rerratifica(?:ção|cao).*(?:pendente|bloque|condicion|não deve|nao deve|libera(?:ção|cao) global)|(?:pendente|bloque|condicion|não deve|nao deve|libera(?:ção|cao) global).*rerratifica(?:ção|cao)/i
const editorialSectionHeading = /^#{2,3}\s+(?:\d+\.\s+)?(?:situação editorial(?: e rerratificação)?|status editorial|controle editorial|próxima sequência do edital)\s*$/i

function removeFrontmatter(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, '\n')
  if (!normalized.startsWith('---\n')) return normalized
  const end = normalized.indexOf('\n---\n', 4)
  return end < 0 ? normalized : normalized.slice(end + 5)
}

function removeEditorialSections(markdown: string) {
  const lines = markdown.split('\n')
  const visible: string[] = []
  let skippedHeadingLevel = 0

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+/)
    if (skippedHeadingLevel) {
      if (!heading || heading[1].length > skippedHeadingLevel) continue
      skippedHeadingLevel = 0
    }
    if (editorialSectionHeading.test(line)) {
      skippedHeadingLevel = heading?.[1].length ?? 2
      continue
    }
    visible.push(line)
  }

  return visible.join('\n')
}

function removeEmptySections(markdown: string) {
  const lines = markdown.split('\n')
  return lines.filter((line, index) => {
    if (!/^##\s+/.test(line)) return true
    for (let next = index + 1; next < lines.length; next += 1) {
      if (/^##\s+/.test(lines[next])) return false
      if (lines[next].trim()) return true
    }
    return false
  }).join('\n')
}

export function containsInternalMetadata(value: string) {
  return internalMetadataPatterns.some((pattern) => pattern.test(value))
}

export function createStudentLessonMarkdown(markdown: string, questionCount: number) {
  const studentBody = removeEmptySections(removeEditorialSections(removeFrontmatter(markdown)
    .split('\n')
    .map((line) => {
      if (/^##\s+(?:\d+\.\s+)?Questões de fixação\s*$/i.test(line)) {
        const prefix = line.match(/^##\s+(\d+\.\s+)/)?.[1] ?? ''
        return `## ${prefix}Questões para praticar`
      }
      if (/^As (?:(?:dez|\d+) )?questões inéditas vinculadas a esta aula/i.test(line)) {
        return questionCount
          ? `Esta aula possui ${questionCount} questões inéditas no estilo INEPAM, com gabarito comentado.`
          : 'As questões de fixação e o gabarito comentado estão disponíveis nesta aula.'
      }
      if (/^O comentário completo de cada item/i.test(line)) {
        return questionCount ? 'O comentário completo de cada item aparece após a confirmação da resposta na área de prática.' : ''
      }
      if (outdatedPublicationControl.test(line)) return ''
      return containsInternalMetadata(line) ? '' : line
    })
    .join('\n')))
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const sourcesStart = studentBody.search(/^##\s+(?:\d+\.\s+)?(?:Fontes?\b|Fonte de verdade\b)/mi)
  if (sourcesStart < 0) return { mainBody: studentBody, sourcesBody: '' }

  return {
    mainBody: studentBody.slice(0, sourcesStart).trimEnd(),
    sourcesBody: studentBody.slice(sourcesStart).trimStart(),
  }
}
