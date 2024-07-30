import React, { useState } from 'react';
import { FaHome, FaGlobe, FaUsers, FaInfoCircle, FaPhone } from 'react-icons/fa';
import './css/Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white bg-opacity-70 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-600 text-2xl font-bold">
          <a href="/" className="flex items-center">
            <FaGlobe className="mr-2" />
            Translate Education
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center">
            <FaHome className="mr-2" />
            Inicio
          </a>
          <a href="/translations" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center">
            <FaGlobe className="mr-2" />
            Traducciones
          </a>
          <a href="/features" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center">
            <FaUsers className="mr-2" />
            Características
          </a>
          <a href="/about" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center">
            <FaInfoCircle className="mr-2" />
            Sobre Nosotros
          </a>
          <a href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center">
            <FaPhone className="mr-2" />
            Contáctanos
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <FaHome className="mr-2" />
            Inicio
          </a>
          <a href="/translations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <FaGlobe className="mr-2" />
            Traducciones
          </a>
          <a href="/features" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <FaUsers className="mr-2" />
            Características
          </a>
          <a href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <FaInfoCircle className="mr-2" />
            Sobre Nosotros
          </a>
          <a href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            <FaPhone className="mr-2" />
            Contáctanos
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
