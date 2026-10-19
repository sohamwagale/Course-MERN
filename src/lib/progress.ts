const PREFIX = 'forgelearn-progress:'
const NAME_KEY = 'forgelearn-learner-name'

export type Progress = {
  completed: string[]
}

function key(courseId: string) {
  return `${PREFIX}${courseId}`
}

export function getLearnerName() {
  return localStorage.getItem(NAME_KEY) ?? ''
}

export function setLearnerName(name: string) {
  localStorage.setItem(NAME_KEY, name.trim())
}

export function getProgress(courseId: string): Progress {
  try {
    const raw = localStorage.getItem(key(courseId))
    if (!raw) return { completed: [] }
    const parsed = JSON.parse(raw) as Progress
    return { completed: Array.isArray(parsed.completed) ? parsed.completed : [] }
  } catch {
    return { completed: [] }
  }
}

export function saveProgress(courseId: string, progress: Progress) {
  localStorage.setItem(key(courseId), JSON.stringify(progress))
}

export function toggleLesson(courseId: string, lessonId: string, done: boolean) {
  const progress = getProgress(courseId)
  const set = new Set(progress.completed)
  if (done) set.add(lessonId)
  else set.delete(lessonId)
  const next = { completed: [...set] }
  saveProgress(courseId, next)
  return next
}

export function resetProgress(courseId: string) {
  saveProgress(courseId, { completed: [] })
}
