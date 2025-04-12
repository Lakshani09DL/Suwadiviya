import React, { useState } from 'react'
import bgimage from '../../assets/hos.jpg'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNo1: '',
    contactNo2: '',
    gender: '',
    bloodType: '',
    address: '',
    district: '',
    province: '',
    dateOfBirth: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')
  
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }
  
    // Convert dateOfBirth into a datetime string (YYYY-MM-DD)
    const formattedDateOfBirth = new Date(formData.dateOfBirth).toISOString().split('T')[0]
  
    // Map frontend field names to backend expected field names
    const requestBody = {
      name: formData.name,
      email_address: formData.email,
      contact_number: formData.contactNo1,
      verification_contact_number: formData.contactNo2 || formData.contactNo1, // fallback to primary if secondary not provided
      gender: formData.gender,
      blood_type: formData.bloodType,
      address: formData.address,
      district: formData.district,
      province: formData.province,
      dob: formattedDateOfBirth,
      password: formData.password
    }
  
    try {
      const response = await fetch('http://localhost:8000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
  
      const data = await response.json()
  
      if (response.ok) {
        setSuccessMessage('Registration successful! You can now login.')
        // Reset form
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          contactNo1: '',
          contactNo2: '',
          gender: '',
          bloodType: '',
          address: '',
          district: '',
          province: '',
          dateOfBirth: ''
        });
         // Navigate to login after 1 seconds
        setTimeout(() => {
          navigate('/login');
        }, 1000);


      } else {
        setErrorMessage(data.detail || 'Registration failed')
      }
    } catch (error) {
      setErrorMessage('Backend connection failed')
    }
  }

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  const provinces = ['Western', 'Central', 'Southern', 'Northern', 'Eastern', 'North Western', 'North Central', 'Uva', 'Sabaragamuwa']

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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password*</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactNo1" className="block text-sm font-medium text-gray-700">Primary Contact No*</label>
                  <input
                    type="tel"
                    id="contactNo1"
                    name="contactNo1"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="07XXXXXXXX"
                    value={formData.contactNo1}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactNo2" className="block text-sm font-medium text-gray-700">Secondary Contact No</label>
                  <input
                    type="tel"
                    id="contactNo2"
                    name="contactNo2"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="07XXXXXXXX (optional)"
                    value={formData.contactNo2}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender*</label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
      
                  </select>
                </div>

                <div>
                  <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700">Blood Type</label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    value={formData.bloodType}
                    onChange={handleChange}
                  >
                    <option value="">Select Blood Type</option>
                    {bloodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth*</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address*</label>
                <textarea
                  id="address"
                  name="address"
                  rows="2"
                  className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-700">District*</label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    placeholder="Enter your district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province*</label>
                  <select
                    id="province"
                    name="province"
                    className="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    value={formData.province}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Province</option>
                    {provinces.map(province => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
              </div>

              {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
              {successMessage && <div className="text-green-600 text-sm">{successMessage}</div>}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 mt-6"
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