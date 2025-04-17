import React from 'react';
import { Link } from 'react-router-dom';
import colomboimg from '../../assets/colombo_national.jpg';
import nawalokaimg from '../../assets/nawaloka.jpg';
import homagamaimg from '../../assets/homagama_hospital.jpeg';
import gampahaimg from '../../assets/gampaha_hospital.jpg';
import Telemedicineimg from '../../assets/telemedicine.jpeg';

const hospitals = [
  { name: 'Colombo', image: colomboimg },
  { name: 'Gampaha', image: gampahaimg },
  { name: 'Homagama', image: homagamaimg },
  { name: 'Nawaloka', image: nawalokaimg },
];

export default function TelemedicinePage() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative h-[50vh] bg-blue-500 bg-opacity-50 text-white">
        <div className="relative z-10 h-full flex flex-col md:flex-row">
          {/* Left: Image section (1/3) */}
          <div className="md:w-1/3 w-full h-full flex items-center justify-center p-4">
            <img
              src={Telemedicineimg}
              alt="Telemedicine Visual"
              className="h-[80%] w-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Description section (2/3) */}
          <div className="md:w-2/3 w-full h-full flex flex-col justify-center p-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Telemedicine Services</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Access top healthcare professionals from the comfort of your home. Select your preferred hospital and schedule an online consultation in just a few clicks.
            </p>
          </div>
        </div>
      </div>

      {/* Hospital Selection Section */}
      <div className="p-6">
        <h2 className="text-2xl text-black font-semibold mb-6 text-center">Select Your Hospital</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitals.map((hospital) => (
            <Link
            key={hospital.name}
            to={`/telemedicine/${hospital.name.toLowerCase()}`}
            className="bg-blue-900 shadow-xl rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform block"
          >
            <img src={hospital.image} alt={hospital.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center font-medium text-lg text-white">{hospital.name}</div>
          </Link>
          
          ))}
        </div>
      </div>
    </div>
  );
}
