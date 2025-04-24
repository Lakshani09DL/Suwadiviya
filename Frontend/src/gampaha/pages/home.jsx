"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaStethoscope, FaMoneyBillWave } from "react-icons/fa";
import hospitalimg from '../../assets/imgg.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Home() {
  const navigate = useNavigate(); 

  const handleChatbotClick = () => {
    navigate("/chat");
  };

  const services = [
    {
      title: "Ask Question from chatbot",
      desc: "Interact with our AI-powered chatbot to get instant answers to your health-related queries",
      btn: "Click here",
      route: "/chat", 
    },
    {
      title: "Bloodbank",
      desc: "Explore information about blood donation centers, upcoming blood donation campaigns, and how you can contribute to saving lives by donating blood at our designated locations",
      btn: "Visit page",
      route: "/bloodBank",
    },
    {
      title: "Get infomation of Clinics, Tests and Scans",
      desc: "Discover the variety of clinics, medical tests, and diagnostic scans hospitals offer, with detailed information",
      anchor: "search-hospitals",
      btn: "Scroll Down for Visit Hospitals",
      type: "anchor",
    },
    {
      title: "Telemedicine Service.",
      desc: "Access top healthcare professionals from the comfort of your home.",
      btn: "Click here",
      route: "/telemedicine",
    },
  ];


  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Navbar */}
      <nav className="bg-white text-gray-900 px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="flex justify-between items-center">
          <a href="#" className="text-3xl font-bold p-3">Suwa Diwiya</a>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#search-hospitals" className="hover:underline">Hospitals</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 text-gray-900 pt-20 relative"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-blur opacity-20 z-0"
          style={{ backgroundImage: `url(${hospitalimg})`, backdropFilter: 'blur(10px)' }}
        ></div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 z-10">
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Welcome to <br />
            <span className="text-blue-700">Suwa Diwiya</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Your health and well-being are our top priority — always.
          </p>
          <button
            onClick={handleChatbotClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
          >
            Ask Chatbot
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 z-10">
          <img
            src={hospitalimg}
            alt="Hospital"
            className="w-full h-full object-cover rounded-3xl shadow-xl transform transition duration-300 hover:scale-105"
          />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 bg-blue-50 pt-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
                onClick={() => navigate(item.route)} 
              >
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </motion.section>
        
      
      <motion.section
        id="search-hospitals"
        className="min-h-screen bg-white text-blue-900 flex flex-col justify-center px-6 md:px-16 py-20 pt-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">Search Hospitals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaUserMd className="text-4xl mb-4 text-blue-700" />,
              title: "Colombo National Hospital",
              desc:
                "Discover the variety of clinics, medical tests, and diagnostic scans hospitals offer, with detailed information",
              route: "/colombo",
            },
            {
              icon: <FaUserMd className="text-4xl mb-4 text-blue-700" />,
              title: "Homagama Base Hospital",
              desc:
                "Discover the variety of clinics, medical tests, and diagnostic scans hospitals offer, with detailed information",
              route: "/homagama",
            },
            {
              icon: <FaUserMd className="text-4xl mb-4 text-blue-700" />,
              title: "Gampaha District Hospital",
              desc:
                "Discover the variety of clinics, medical tests, and diagnostic scans hospitals offer, with detailed information",
              route: "/gampaha",
            },
            {
              icon: <FaUserMd className="text-4xl mb-4 text-blue-700" />,
              title: "Nawaloka Hospital",
              desc:
                "Discover the variety of clinics, medical tests, and diagnostic scans hospitals offer, with detailed information",
              route: "/nawaloka",
            },
          ].map((feature, idx) => (
            <Link to={feature.route} key={idx}>
              <div className="bg-blue-100 rounded-2xl p-8 shadow hover:shadow-lg transition hover:scale-[1.02] cursor-pointer">
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-blue-900 text-white px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-sm">&copy; 2025 Suwa Diwiya. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline text-sm">Privacy Policy</a>
          <a href="#" className="hover:underline text-sm">Terms of Use</a>
        </div>
      </motion.footer>

      {/* Floating Chatbot Button */}
      <button
        onClick={handleChatbotClick}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center animate-bounce"
        title="Chat with SuwaBot"
      >
        <FaRobot className="text-4xl" />
      </button>    

    </div>
  );
}

export default Home;
