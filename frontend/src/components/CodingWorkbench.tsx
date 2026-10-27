import { useState } from 'react'
import { mernCodingProblems } from '../data/mernInteractive'
import type { CodingProblem } from '../data/mernInteractive'

type CodingWorkbenchProps = {
  problemId: string
  onComplete: () => void
  isCompleted: boolean
}

type TestResult = {
  index: number
  description: string
  passed: boolean
  expected: any
  actual: any
  error?: string
}

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true
  if (a == null || b == null) return false
  if (typeof a !== 'object' && typeof b !== 'object') return a === b

  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    // If array of arrays or strings (like groupAnagrams), normalize or check directly
    return a.every((val, idx) => deepEqual(val, b[idx]))
  }

  // Handle objects
  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) return false
  return keysA.every((k) => Object.prototype.hasOwnProperty.call(b, k) && deepEqual(a[k], b[k]))
}

// Special normalize for group anagrams where inner groups can be in any order
function normalizeAnagrams(res: any): any {
  if (!Array.isArray(res)) return res
  return res
    .map((group) => (Array.isArray(group) ? [...group].sort() : group))
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
}

export default function CodingWorkbench({ problemId, onComplete, isCompleted }: CodingWorkbenchProps) {
  const problem: CodingProblem | undefined = mernCodingProblems[problemId]
  const [code, setCode] = useState<string>(() => problem?.starterCode || '')
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem')
  const [results, setResults] = useState<TestResult[] | null>(null)
  const [verdict, setVerdict] = useState<'YES' | 'NO' | null>(null)
  const [selectedTestCase, setSelectedTestCase] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  if (!problem) {
    return (
      <div className="empty-card">
        <h2>Coding challenge not found</h2>
        <p>No problem matching ID: {problemId}</p>
      </div>
    )
  }

  const runTests = () => {
    setIsRunning(true)
    setVerdict(null)
    setResults(null)

    setTimeout(() => {
      try {
        // Construct the executable function in-browser
        // Returns the function corresponding to problem.functionName
        const wrapper = new Function(`
          ${code};
          if (typeof ${problem.functionName} !== 'function') {
            throw new Error("Function '${problem.functionName}' is not defined. Ensure your function has that exact name.");
          }
          return ${problem.functionName};
        `)

        const fn = wrapper()

        const testResults: TestResult[] = problem.testCases.map((tc, idx) => {
          try {
            // Clone arguments to prevent mutation between tests
            const clonedArgs = JSON.parse(JSON.stringify(tc.inputArgs))
            const actual = fn(...clonedArgs)

            let passed = false
            if (problem.id === 'challenge-group-anagrams') {
              passed = deepEqual(normalizeAnagrams(actual), normalizeAnagrams(tc.expected))
            } else {
              passed = deepEqual(actual, tc.expected)
            }

            return {
              index: idx,
              description: tc.inputDesc,
              passed,
              expected: tc.expected,
              actual,
            }
          } catch (err: any) {
            return {
              index: idx,
              description: tc.inputDesc,
              passed: false,
              expected: tc.expected,
              actual: undefined,
              error: err?.message || String(err),
            }
          }
        })

        const allPassed = testResults.every((t) => t.passed)
        setResults(testResults)
        setVerdict(allPassed ? 'YES' : 'NO')

        if (allPassed) {
          onComplete()
        }
      } catch (err: any) {
        setVerdict('NO')
        setResults([
          {
            index: 0,
            description: 'Compilation / Syntax Check',
            passed: false,
            expected: 'Valid executable JavaScript function',
            actual: undefined,
            error: err?.message || String(err),
          },
        ])
      } finally {
        setIsRunning(false)
      }
    }, 150)
  }

  const handleReset = () => {
    if (confirm('Reset editor to initial starter code?')) {
      setCode(problem.starterCode)
      setResults(null)
      setVerdict(null)
    }
  }

  const handleLoadSolution = () => {
    setCode(problem.solutionCode)
  }

  return (
    <div className="coding-workbench">
      <div className="coding-grid">
        {/* Left column: Problem Details & Examples */}
        <div className="coding-problem-pane">
          <div className="coding-pane-header">
            <div className="coding-tabs">
              <button
                className={`tab-btn ${activeTab === 'problem' ? 'active' : ''}`}
                onClick={() => setActiveTab('problem')}
              >
                Problem Description
              </button>
              <button
                className={`tab-btn ${activeTab === 'solution' ? 'active' : ''}`}
                onClick={() => setActiveTab('solution')}
              >
                Embedded Solution
              </button>
            </div>
            <span className={`diff-tag ${problem.difficulty.toLowerCase()}`}>
              {problem.difficulty}
            </span>
          </div>

          <div className="coding-pane-content">
            {activeTab === 'problem' ? (
              <div className="problem-statement">
                <h2>{problem.title}</h2>
                <div className="markdown-content">
                  <p style={{ whiteSpace: 'pre-line' }}>{problem.description}</p>
                </div>

                <h3>Examples</h3>
                <div className="examples-list">
                  {problem.examples.map((ex, i) => (
                    <div key={i} className="example-box">
                      <p className="example-label">Example {i + 1}:</p>
                      <div className="example-data">
                        <div>
                          <strong>Input:</strong> <code>{ex.input}</code>
                        </div>
                        <div>
                          <strong>Output:</strong> <code>{ex.output}</code>
                        </div>
                        {ex.explanation && (
                          <div>
                            <strong>Explanation:</strong> <em>{ex.explanation}</em>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <h3>Constraints</h3>
                <ul className="constraints-list">
                  {problem.constraints.map((c, i) => (
                    <li key={i}><code>{c}</code></li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="solution-view">
                <h3>Embedded Solution Code</h3>
                <p className="muted">
                  The complete reference solution is pre-packaged with this challenge.
                </p>
                <pre className="code-snippet">{problem.solutionCode}</pre>
                <button className="btn primary" onClick={handleLoadSolution}>
                  Load Solution into Editor
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Editor & Console / Verdict */}
        <div className="coding-editor-pane">
          <div className="editor-toolbar">
            <span className="file-name">JavaScript (ES6+)</span>
            <div className="toolbar-actions">
              <button className="btn-sm ghost" onClick={handleReset} title="Reset code">
                Reset
              </button>
            </div>
          </div>

          <div className="editor-wrap">
            <textarea
              className="code-textarea"
              value={code}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault()
                  const start = e.currentTarget.selectionStart
                  const end = e.currentTarget.selectionEnd
                  const val = e.currentTarget.value
                  setCode(val.substring(0, start) + '  ' + val.substring(end))
                  setTimeout(() => {
                    e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2
                  }, 0)
                }
              }}
            />
          </div>

          {/* Action Bar */}
          <div className="coding-action-bar">
            <div className="action-hint">
              <span>Function to implement: <code>{problem.functionName}()</code></span>
            </div>
            <div className="action-buttons">
              <button
                className="btn primary"
                disabled={isRunning}
                onClick={runTests}
              >
                {isRunning ? 'Evaluating...' : 'Run Code & Submit'}
              </button>
            </div>
          </div>

          {/* Output / Verdict Console */}
          <div className="verdict-console">
            {verdict === null ? (
              <div className="console-idle">
                <p>Click <strong>Run Code & Submit</strong> to test your solution across {problem.testCases.length} test cases.</p>
                <div className="test-sample-pills">
                  {problem.testCases.map((_, idx) => (
                    <span key={idx} className="sample-pill">Case {idx + 1}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="verdict-result">
                <div className={`verdict-header ${verdict === 'YES' ? 'yes-passed' : 'no-failed'}`}>
                  <div className="verdict-status-box">
                    <span className="verdict-big">{verdict}</span>
                    <span className="verdict-sub">
                      {verdict === 'YES'
                        ? 'All Test Cases Passed! (Accepted)'
                        : 'Some Tests Failed (Wrong Answer)'}
                    </span>
                  </div>
                  {verdict === 'YES' && !isCompleted && (
                    <button className="btn gold" onClick={onComplete}>
                      Save & Complete
                    </button>
                  )}
                </div>

                {results && results.length > 0 && (
                  <div className="test-details">
                    <div className="test-tabs">
                      {results.map((t, idx) => (
                        <button
                          key={idx}
                          className={`test-tab-btn ${t.passed ? 'tc-pass' : 'tc-fail'} ${selectedTestCase === idx ? 'active' : ''}`}
                          onClick={() => setSelectedTestCase(idx)}
                        >
                          Case {idx + 1} {t.passed ? '✓' : '✗'}
                        </button>
                      ))}
                    </div>

                    {results[selectedTestCase] && (
                      <div className="test-case-breakdown">
                        <div className="test-row">
                          <span className="t-label">Input:</span>
                          <code>{results[selectedTestCase].description}</code>
                        </div>
                        <div className="test-row">
                          <span className="t-label">Expected:</span>
                          <code className="text-success">{JSON.stringify(results[selectedTestCase].expected)}</code>
                        </div>
                        <div className="test-row">
                          <span className="t-label">Output:</span>
                          <code className={results[selectedTestCase].passed ? 'text-success' : 'text-danger'}>
                            {results[selectedTestCase].error
                              ? `Error: ${results[selectedTestCase].error}`
                              : JSON.stringify(results[selectedTestCase].actual)}
                          </code>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
