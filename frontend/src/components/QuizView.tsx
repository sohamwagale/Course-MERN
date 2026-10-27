import { useState } from 'react'
import { mernQuizzes } from '../data/mernInteractive'
import type { QuizData } from '../data/mernInteractive'

type QuizViewProps = {
  quizId: string
  onComplete: () => void
  isCompleted: boolean
}

export default function QuizView({ quizId, onComplete, isCompleted }: QuizViewProps) {
  const quiz: QuizData | undefined = mernQuizzes[quizId]
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState<boolean>(false)

  if (!quiz) {
    return (
      <div className="empty-card">
        <h2>Quiz not found</h2>
        <p>No questions found for this checkpoint.</p>
      </div>
    )
  }

  const answeredCount = Object.keys(selectedAnswers).length
  const totalQuestions = quiz.questions.length

  let correctCount = 0
  if (submitted) {
    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++
      }
    })
  }

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100)
  const isPassed = submitted && scorePercentage >= 60

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return // locked once submitted
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }))
  }

  const handleSubmit = () => {
    if (answeredCount < totalQuestions) {
      alert(`Please answer all ${totalQuestions} questions before submitting!`)
      return
    }
    setSubmitted(true)
    if (scorePercentage >= 60 || correctCount >= Math.ceil(totalQuestions * 0.6)) {
      onComplete()
    }
  }

  const handleRetry = () => {
    setSubmitted(false)
    setSelectedAnswers({})
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header-card">
        <div className="quiz-badge">MCQ Knowledge Checkpoint</div>
        <h2>{quiz.title}</h2>
        <p className="quiz-desc">{quiz.description}</p>
        <div className="quiz-meta-bar">
          <span>{totalQuestions} Questions</span>
          <span>Passing: 60%</span>
          <span>{answeredCount} of {totalQuestions} Answered</span>
        </div>
      </div>

      {submitted && (
        <div className={`quiz-score-banner ${isPassed ? 'passed' : 'failed'}`}>
          <div className="score-main">
            <span className="score-tag">{isPassed ? 'YES - PASSED' : 'NO - TRY AGAIN'}</span>
            <h3>
              You scored {correctCount} out of {totalQuestions} ({scorePercentage}%)
            </h3>
            <p>
              {isPassed
                ? 'Great job! You have demonstrated a strong understanding of this module.'
                : 'Review the explanations below and give it another shot to cement the concepts!'}
            </p>
          </div>
          <div className="score-actions">
            <button className="btn ghost" onClick={handleRetry}>
              Retake Quiz
            </button>
            {isPassed && !isCompleted && (
              <button className="btn primary" onClick={onComplete}>
                Mark Complete & Continue
              </button>
            )}
          </div>
        </div>
      )}

      <div className="quiz-questions-list">
        {quiz.questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id]
          const isCorrect = submitted && selected === q.correctIndex

          return (
            <div
              key={q.id}
              className={`quiz-card ${submitted ? (isCorrect ? 'card-correct' : 'card-incorrect') : ''}`}
            >
              <div className="quiz-q-top">
                <span className="q-number">Question {qIndex + 1} of {totalQuestions}</span>
                {submitted && (
                  <span className={`status-pill ${isCorrect ? 'status-yes' : 'status-no'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                )}
              </div>
              <h3 className="quiz-question-text">{q.question}</h3>

              <div className="quiz-options-grid">
                {q.options.map((opt, optIndex) => {
                  const isThisSelected = selected === optIndex
                  let optionClass = 'quiz-option-btn'

                  if (isThisSelected) optionClass += ' selected'

                  if (submitted) {
                    if (optIndex === q.correctIndex) {
                      optionClass += ' correct-answer'
                    } else if (isThisSelected && optIndex !== q.correctIndex) {
                      optionClass += ' wrong-answer'
                    }
                  }

                  return (
                    <button
                      key={optIndex}
                      type="button"
                      disabled={submitted}
                      className={optionClass}
                      onClick={() => handleSelect(q.id, optIndex)}
                    >
                      <span className="opt-letter">
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      <span className="opt-text">{opt}</span>
                    </button>
                  )
                })}
              </div>

              {submitted && (
                <div className="quiz-explanation">
                  <strong>Explanation: </strong>
                  {q.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="quiz-footer-actions">
        {!submitted ? (
          <button
            className="btn primary"
            disabled={answeredCount < totalQuestions}
            onClick={handleSubmit}
          >
            Submit Answers ({answeredCount}/{totalQuestions})
          </button>
        ) : (
          <button className="btn ghost" onClick={handleRetry}>
            Retake Quiz
          </button>
        )}
      </div>
    </div>
  )
}
