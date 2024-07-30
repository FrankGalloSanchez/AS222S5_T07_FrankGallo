import React from 'react'
import { FaGlobe, FaClock, FaUserFriends } from 'react-icons/fa';
import './css/HomePage.css';
import 'animate.css';
function Features() {
  return (
    <section className="py-20 features-section">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn">Características Principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-6 rounded-lg shadow-lg feature-card transition-transform transform hover:scale-105 animate__animated animate__fadeIn">
          <FaGlobe className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Traducción Rápida</h3>
          <p>Obtén traducciones en tiempo real con nuestra tecnología avanzada.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg feature-card transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
          <FaClock className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Soporte Multilingüe</h3>
          <p>Traduce entre múltiples idiomas con facilidad.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg feature-card transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
          <FaUserFriends className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-4">Fácil de Usar</h3>
          <p>Una interfaz intuitiva y fácil de usar para una experiencia fluida.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features
