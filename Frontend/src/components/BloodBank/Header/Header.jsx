import React from "react";
import { motion } from "framer-motion"; // Import framer motion
import bloodImage from "./blood.jpg";  // Import image from the same folder

const Header = () => {
  return (
    <header className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between px-6">
        {/* Left Side - Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }} // Start with text being invisible and slightly below
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up to normal position
          transition={{ duration: 1 }} // Duration of the animation
        >
          <h1 className="text-5xl font-bold text-primary mb-16">
            Welcome to <span className="text-red-500">Blood</span> Bank
          </h1>
          <p className="text-lg text-black text-base-content max-w-2xl mx-auto">
            "A centralized hub to learn, locate, and save lives through donation. Empowering
            communities with knowledge, eligibility info, and nearby donation centers—all in one place."
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bloodImage}  // Use the imported image
            alt="Blood donation"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
