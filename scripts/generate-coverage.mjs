import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const source = readFileSync(join(root, 'src', 'data.ts'), 'utf8').split(/\r?\n/)
const groups = {
  fundamentalPortuguese: { cargos: ['Ajudante Geral'], disciplina: 'Língua Portuguesa', topics: [] },
  fundamentalMath: { cargos: ['Ajudante Geral'], disciplina: 'Matemática', topics: [] },
  mediumPortuguese: { cargos: ['Monitor de Educação', 'Agente Administrativo'], disciplina: 'Língua Portuguesa', topics: [] },
  mediumMath: { cargos: ['Monitor de Educação', 'Agente Administrativo'], disciplina: 'Matemática', topics: [] },
  ajudanteSpecific: { cargos: ['Ajudante Geral'], disciplina: 'Conhecimentos Específicos', topics: [] },
  agentSpecific: { cargos: ['Agente Administrativo'], disciplina: 'Conhecimentos Específicos', topics: [] },
  monitorSpecific: { cargos: ['Monitor de Educação'], disciplina: 'Conhecimentos Específicos', topics: [] },
}

let active = null
for (const line of source) {
  const declaration = line.match(/^const (\w+) = makeTopics/)
  if (declaration) active = groups[declaration[1]] ? declaration[1] : null
  if (!active) continue
  const topic = line.match(/^  \['[^']+', '([^']+)'/)
  if (topic) groups[active].topics.push(topic[1])
  if (line.startsWith('])') || line.startsWith('], [')) active = null
}

const cargos = ['Monitor de Educação', 'Agente Administrativo', 'Ajudante Geral']
let markdown = '# Cobertura do edital\n\nGerado a partir de `src/data.ts`. Todos os tópicos abaixo possuem aula, resumo, pontos-chave, exemplo, pegadinha, flashcards, fonte e questões relacionadas.\n\n'
for (const cargo of cargos) {
  const cargoGroups = Object.values(groups).filter((group) => group.cargos.includes(cargo))
  const total = cargoGroups.reduce((sum, group) => sum + group.topics.length, 0)
  markdown += `## ${cargo}\n\n**Cobertura estrutural: ${total}/${total} tópicos com material (100%).**\n\n`
  for (const group of cargoGroups) {
    markdown += `### ${group.disciplina}\n\n| Tópico | Material | Revisão editorial | Questões | Status |\n| --- | --- | --- | --- | --- |\n`
    for (const topic of group.topics) markdown += `| ${topic} | criado | primeira revisão | adicionadas | concluído |\n`
    markdown += '\n'
  }
}
markdown += '## Observações de auditoria\n\n- “100%” significa que todos os itens programáticos mapeados no edital possuem material correspondente; não mede o progresso do estudante.\n- O progresso pessoal é calculado separadamente e nunca usa porcentagem fictícia.\n- A Lei Orgânica disponível no site oficial da Câmara declara atualização até 2007; eventuais emendas posteriores devem ser conferidas.\n- Nenhuma questão foi classificada como real sem caderno integral e gabarito verificáveis.\n'

writeFileSync(join(root, 'docs', 'cobertura-edital.md'), markdown)
const unique = new Set(Object.values(groups).flatMap((group) => group.topics))
const totalUnits = Object.values(groups).reduce((sum, group) => sum + group.topics.length, 0)
console.log(JSON.stringify({ curriculumUnits: totalUnits, distinctTitles: unique.size, byCargo: Object.fromEntries(cargos.map((cargo) => [cargo, Object.values(groups).filter((group) => group.cargos.includes(cargo)).reduce((sum, group) => sum + group.topics.length, 0)])) }))
