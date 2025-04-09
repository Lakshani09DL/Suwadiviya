import React, { useState } from 'react'
import bgimage from '../../assets/hos.jpg'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage('Registration successful! You can now login.')
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      } else {
        setErrorMessage(data.detail || 'Registration failed')
      }
    } catch (error) {
      setErrorMessage('Backend connection failed')
    }
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Welcome Text */}
          <div className="hidden md:flex flex-col justify-center items-start text-left px-6">
            <h2 className="text-4xl font-extrabold text-blue-900">Join</h2>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-20">Suwa Diwiya</h2>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Create your account to access health services, manage your appointments, and get personalized care tailored to you.
            </p>
          </div>

          {/* Right Side - Register Form */}
          <div className="w-full">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Create an Account</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
              {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                Register
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
