import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-50 shadow-md dark:bg-neutral-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-semibold text-gray-800 dark:text-white">
            MyApp
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:underline">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:underline">Search</a>
           
          </div>
        </div>

        {/* Nav Links (Mobile) */}
        {isOpen && (
          <div className="lg:hidden px-4 pb-4">
            <a href="#" className="block py-2 text-gray-700 dark:text-gray-200 hover:underline">Home</a>
            <a href="#" className="block py-2 text-gray-700 dark:text-gray-200 hover:underline">Search</a>
          
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
