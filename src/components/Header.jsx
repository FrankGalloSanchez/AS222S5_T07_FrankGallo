import React from 'react';
import { Link } from 'react-router-dom'; 
import nofoto from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            src={nofoto} 
            alt="Logo"
            className="h-8 w-8"
          />
          <h1 className="text-2xl font-bold">Servicio de Traducción</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/translations"
                className="hover:text-gray-300 transition duration-300"
              >
                Traducciones
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 transition duration-300"
              >
                Acerca de
              </Link>
            </li>
            {/* Agrega más enlaces según sea necesario */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
