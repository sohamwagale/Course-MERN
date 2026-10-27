export type AuthUser = {
  id: string
  name: string
  email: string
  progress?: string[]
}

const TOKEN_KEY = 'forgelearn_token'
const USER_KEY = 'forgelearn_user'

function getApiBase(): string {
  // If running in docker on port 3000 or via proxy, /api is routed to backend
  // If running directly on vite dev server at port 5173, point to http://localhost:5000/api
  if (typeof window !== 'undefined') {
    if (window.location.port === '5173') {
      return 'http://localhost:5000/api'
    }
  }
  return '/api'
}

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function getStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

export function saveAuth(token: string, user: AuthUser) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  // Also store name for certificate
  if (user.name) {
    localStorage.setItem('forgelearn-learner-name', user.name)
  }
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export async function loginUser(email: string, password: string): Promise<AuthUser> {
  const res = await fetch(`${getApiBase()}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Login failed')
  }

  saveAuth(data.token, data.user)
  return data.user
}

export async function registerUser(name: string, email: string, password: string): Promise<AuthUser> {
  const res = await fetch(`${getApiBase()}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Registration failed')
  }

  saveAuth(data.token, data.user)
  return data.user
}

export async function fetchCurrentUser(): Promise<AuthUser | null> {
  const token = getStoredToken()
  if (!token) return null

  try {
    const res = await fetch(`${getApiBase()}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.ok) {
      if (res.status === 401) {
        clearAuth()
      }
      return null
    }

    const data = await res.json()
    saveAuth(token, data.user)
    return data.user
  } catch (err) {
    console.error('Failed to fetch current user:', err)
    return getStoredUser()
  }
}

export async function syncProgressToBackend(completed: string[]): Promise<void> {
  const token = getStoredToken()
  if (!token) return

  try {
    await fetch(`${getApiBase()}/auth/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ completed }),
    })
  } catch (err) {
    console.error('Failed to sync progress to server:', err)
  }
}
