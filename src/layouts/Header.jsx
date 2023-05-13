import React, { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import './Layout.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
    console.log(to);
  }
  

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container px-4 md:px-8 flex justify-between items-center py-4">
        <div className="text-gray-800 text-lg font-bold cursor-pointer">
          Mithlesh Patel
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="block text-gray-800 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block md:flex space-y-4 md:space-y-0 md:space-x-4`}
        >
           <li>
            <Link 
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('home')}
              className={`text-gray-800 hover:text-indigo-500 cursor-pointer block md:inline-block ${
                activeSection === 'home' ? 'font-bold border-b-2 border-red-500' : ''
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>


          <li>
            <Link 
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('services')}
              className={`text-gray-800 hover:text-indigo-500 cursor-pointer block md:inline-block ${
                activeSection === 'services' ? 'font-bold border-b-2 border-red-500' : ''
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>


          <li>
            <Link 
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('project')}
              className={`text-gray-800 hover:text-indigo-500 cursor-pointer block md:inline-block ${
                activeSection === 'project' ? 'font-bold border-b-2 border-red-500' : ''
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link 
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection('contact')}
              className={`text-gray-800 hover:text-indigo-500 cursor-pointer block md:inline-block ${
                activeSection === 'contact' ? 'font-bold border-b-2 border-red-500' : ''
              }`}
              onClick={toggleMenu}
            >
              Contacts
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
