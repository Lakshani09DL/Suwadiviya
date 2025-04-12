import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationBell from '../Notification';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-50 shadow-md dark:bg-neutral-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-semibold text-gray-800 dark:text-white">
            <span className="text-primary">Suwa Diviya</span>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/bloodBank" className="text-gray-700 dark:text-gray-400 hover:text-primary transition duration-300">Home</Link>
            <Link to="/search" className="text-gray-700 dark:text-gray-400 hover:text-primary transition duration-300">Search</Link>
            
            <NotificationBell userId={6} />

          </div>
        </div>  
      </nav>
    </>
  );
};

export default Navbar;
