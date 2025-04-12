import React, { useState } from 'react'
import Hospitalimage from '../../assets/hospital2.jpg'
import bgimage from '../../assets/hos.jpg'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
        const response = await fetch('http://localhost:8000/users/login', {  // Updated endpoint to match your backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email_address: email,  
                password: password 
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store the token and user info in localStorage
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Redirect to dashboard/home page
            window.location.href = '/'; 
            
            // Optional: Show success message before redirect
            //setSuccessMessage('Login successful! Redirecting...');
        } else {
            setErrorMessage(data.detail || 'Invalid email or password');
        }
    } catch (error) {
        setErrorMessage('Failed to connect to server. Please try again later.');
    }
};

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Welcome Banner */}
          <div className="hidden md:flex flex-col justify-center items-start text-left px-6">
            <h2 className="text-4xl font-extrabold text-blue-900">Welcome to</h2>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-20">Suwa Diwiya</h2>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Access your health services, manage appointments, and get personalized care—anytime, anywhere.
            </p>
            {/*<img src={Hospitalimage} alt="Suwa Diwiya" className="mt-6 rounded-xl shadow-lg" />*/}
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">Login to Your Account</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}

              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
              >
                Login
              </button>

              <p className="text-center text-sm text-gray-600">
                Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
