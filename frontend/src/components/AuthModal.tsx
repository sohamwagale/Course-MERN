import { useState } from 'react'
import { loginUser, registerUser } from '../lib/auth'
import type { AuthUser } from '../lib/auth'

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess: (user: AuthUser) => void
  initialMode?: 'login' | 'register'
}

export default function AuthModal({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'login',
}: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (mode === 'register') {
        if (!name.trim()) {
          throw new Error('Please enter your full name.')
        }
        if (password.length < 6) {
          throw new Error('Password must be at least 6 characters.')
        }
        const user = await registerUser(name, email, password)
        onSuccess(user)
        onClose()
      } else {
        const user = await loginUser(email, password)
        onSuccess(user)
        onClose()
      }
    } catch (err: any) {
      setError(err?.message || 'Authentication failed. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-tabs">
            <button
              className={`modal-tab-btn ${mode === 'login' ? 'active' : ''}`}
              onClick={() => {
                setMode('login')
                setError('')
              }}
            >
              Sign In
            </button>
            <button
              className={`modal-tab-btn ${mode === 'register' ? 'active' : ''}`}
              onClick={() => {
                setMode('register')
                setError('')
              }}
            >
              Create Account
            </button>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {error && <div className="auth-error-box">{error}</div>}

          {mode === 'register' && (
            <label className="auth-field">
              <span>Full Name</span>
              <input
                type="text"
                placeholder="Ada Lovelace"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}

          <label className="auth-field">
            <span>Email Address</span>
            <input
              type="email"
              placeholder="developer@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {mode === 'register' && (
              <span className="field-hint">Minimum 6 characters</span>
            )}
          </label>

          <button type="submit" className="btn primary auth-submit-btn" disabled={loading}>
            {loading
              ? 'Connecting...'
              : mode === 'login'
              ? 'Sign In to ForgeLearn'
              : 'Create Account & Start Learning'}
          </button>

          <div className="auth-footer-note">
            <small>
              Backend runs with Express & Dockerized MongoDB. Your course progress syncs automatically.
            </small>
          </div>
        </form>
      </div>
    </div>
  )
}
