const internalMetadataPatterns = [
  /\b(?:questions|manifest|cobertura-edital|sources|simulations|calendar|news|rectifications)\.json\b/i,
  /\b[^\s`/]+\.md\b/i,
  /\b(?:cargoIds|questionId|lessonId|topicId|sourceId|sourceRefs|stableItemId|editorialId|editalItemId|schemaVersion)\b/i,
  /\bq-(?:inedita|real)-[\w-]+\b/i,
  /\bsrc-[a-z0-9-]+\b/i,
  /\b(?:MED-PORT|MED-MAT|FUND-PORT|FUND-MAT|AGE-ESP|AJU-ESP|AJU-PRAT|AGADM|MON-ESP|AJG-ESP)-[\w-]+\b/i,
  /\b(?:MED-PORT|MED-MAT|FUND-PORT|FUND-MAT|AGE-ESP|AJU-ESP|AJU-PRAT|AGADM|MON-ESP|AJG-ESP)-\*/i,
  /(?:^|[\s`])(?:aa|ag|fp|fm|mp|mm|me)-[a-z0-9-]+(?:$|[\s`.,;:)])/i,
  /\b(?:lote editorial|pacote editorial|item estável|item-pai|tópico do site|status relacional|arquivo mestre)\b/i,
  /\bauditado_sem_impacto_nos_cargos_do_projeto\b/i,
]

const outdatedPublicationControl = /rerratifica(?:ção|cao).*(?:pendente|bloque|condicion|não deve|nao deve|libera(?:ção|cao) global)|(?:pendente|bloque|condicion|não deve|nao deve|libera(?:ção|cao) global).*rerratifica(?:ção|cao)/i
const editorialSectionHeading = /^#{1,3}\s+(?:(?:parte\s+[ivxlcdm]+\s+—\s+)?(?:\d+\.\s+)?)?(?:auditoria editorial(?: do (?:lote|item))?|checklist editorial(?: da aula)?|situação editorial(?: .+)?|status editorial|controle editorial(?: .+)?|nota de rastreabilidade|rastreabilidade editorial|próxim[oa] (?:item|sequência) do edital)\s*$/i

function removeFrontmatter(markdown: string) {
  const normalized = markdown.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n')
  const opening = normalized.match(/^\s*---\s*\n/)
  if (!opening) return normalized
  const contentStart = opening[0].length
  const closing = normalized.slice(contentStart).match(/\n\s*---\s*(?:\n|$)/)
  return closing ? normalized.slice(contentStart + closing.index! + closing[0].length) : normalized
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:39|x27);/gi, "'")
}

function convertLegacyHtmlTables(markdown: string) {
  return markdown.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    const content = decodeHtmlEntities(table
      .replace(/<strong\b[^>]*>/gi, '**')
      .replace(/<\/strong>/gi, '**')
      .replace(/<em\b[^>]*>/gi, '*')
      .replace(/<\/em>/gi, '*')
      .replace(/<code\b[^>]*>/gi, '`')
      .replace(/<\/code>/gi, '`')
      .replace(/<br\s*\/?\s*>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<\/li>/gi, '\n')
      .replace(/<li\b[^>]*>/gi, '- ')
      .replace(/<[^>]+>/g, ''))
      .split('\n')
      .map((line) => line.trim())
      .filter((line, index, lines) => line || (index > 0 && index < lines.length - 1 && lines[index - 1]))

    if (!content.some(Boolean)) return ''
    return `\n\n${content.map((line) => line ? `> ${line}` : '>').join('\n')}\n\n`
  }).replace(/<br\s*\/?\s*>/gi, '  \n')
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
  const studentBody = removeEmptySections(removeEditorialSections(convertLegacyHtmlTables(removeFrontmatter(markdown))
    .split('\n')
    .map((line) => {
      if (/^(#{1,3}\s+(?:\d+\.\s+)?)Fontes oficiais e de controle editorial\s*$/i.test(line)) {
        return line.replace(/Fontes oficiais e de controle editorial/i, 'Fontes oficiais')
      }
      if (/^###\s+Edital e controle do projeto\s*$/i.test(line)) return '### Edital oficial'
      if (/Mapa de Cargos e Cobertura do Edital/i.test(line)) return ''
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
      if (/\b(?:status|controle) editorial\b/i.test(line)) return ''
      if (/\bnota editorial\b/i.test(line)) return ''
      if (outdatedPublicationControl.test(line)) return ''
      return containsInternalMetadata(line) ? '' : line
        .replace(/\s*\(inferência editorial\)/gi, '')
        .replace(/inferência editorial/gi, 'estratégia de estudo')
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
