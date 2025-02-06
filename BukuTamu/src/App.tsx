import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Fungsi untuk menangani login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Username dan password yang valid
    const validUsername = 'user'
    const validPassword = 'password123'

    // Validasi login
    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Username atau password salah!')
    }
  }

  if (isLoggedIn) {
    return (
      <div className="welcome-container">
        <h1>Welcome, {username}!</h1>
        <p>You are logged in.</p>
      </div>
    )
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  )
}

export default App
