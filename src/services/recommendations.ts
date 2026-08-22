import { questions, topics } from '../data'
import type { CargoId, DisciplineId, UserData } from '../types'
import { questionMatchesCargo } from '../utils/questions'

export type RecommendationPriority = 'alta' | 'media' | 'revisao' | 'sugestao'

export interface StudyRecommendation {
  topicId: string
  title: string
  discipline: DisciplineId
  priority: RecommendationPriority
  reason: string
  score: number
}

const EXAM_DATE = new Date('2026-09-27T08:00:00-03:00')

export function getStudyRecommendations(data: UserData, cargoId: CargoId, referenceDate = new Date()): StudyRecommendation[] {
  const cargoTopics = topics.filter((topic) => topic.cargoIds.includes(cargoId))
  const cargoQuestions = questions.filter((question) => questionMatchesCargo(question, cargoId))
  const recentThreshold = referenceDate.getTime() - 14 * 86400000
  const daysToExam = Math.ceil((EXAM_DATE.getTime() - referenceDate.getTime()) / 86400000)

  return cargoTopics.flatMap((topic): StudyRecommendation[] => {
    const questionIds = cargoQuestions.filter((question) => question.topicId === topic.id).map((question) => question.id)
    const attempts = data.answers.filter((answer) => answer.cargoId === cargoId && questionIds.includes(answer.questionId))
    const correct = attempts.filter((answer) => answer.correct).length
    const rate = attempts.length ? Math.round((correct / attempts.length) * 100) : 0
    const recentErrors = attempts.filter((answer) => !answer.correct && new Date(answer.answeredAt).getTime() >= recentThreshold).length
    const dueReview = data.reviews.some((review) => review.cargoId === cargoId
      && review.topicId === topic.id
      && review.status === 'pending'
      && new Date(review.dueAt) <= referenceDate)
    const examBoost = daysToExam >= 0 && daysToExam <= 30 ? 10 : 0

    if (attempts.length >= 3 && rate < 60) {
      return [{
        topicId: topic.id,
        title: topic.title,
        discipline: topic.discipline,
        priority: 'alta',
        reason: `${rate}% de acertos em ${attempts.length} tentativas${recentErrors ? `, com ${recentErrors} erro(s) recente(s)` : ''}.`,
        score: 130 - rate + recentErrors * 5 + examBoost,
      }]
    }
    if (dueReview) {
      return [{
        topicId: topic.id,
        title: topic.title,
        discipline: topic.discipline,
        priority: 'revisao',
        reason: 'A revisão programada deste assunto está vencida.',
        score: 90 + recentErrors * 5 + examBoost,
      }]
    }
    if (attempts.length >= 3 && rate <= 75) {
      return [{
        topicId: topic.id,
        title: topic.title,
        discipline: topic.discipline,
        priority: 'media',
        reason: `${rate}% de acertos em ${attempts.length} tentativas.`,
        score: 80 - rate / 10 + recentErrors * 4 + examBoost,
      }]
    }
    if (attempts.length > 0 && attempts.length < 3 && recentErrors > 0) {
      return [{
        topicId: topic.id,
        title: topic.title,
        discipline: topic.discipline,
        priority: 'sugestao',
        reason: 'Você pode revisar este assunto; ainda há poucas tentativas para uma conclusão forte.',
        score: 45 + recentErrors * 3 + examBoost,
      }]
    }
    if (!data.completedTopics.includes(topic.id)) {
      return [{
        topicId: topic.id,
        title: topic.title,
        discipline: topic.discipline,
        priority: 'sugestao',
        reason: 'Aula ainda não concluída.',
        score: 20 + examBoost,
      }]
    }
    return []
  }).sort((left, right) => right.score - left.score || left.title.localeCompare(right.title, 'pt-BR')).slice(0, 3)
}
