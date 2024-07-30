import React from 'react'
import footer from '../assets/img/footer.jpg'
import './css/HomePage.css';
import 'animate.css';
function About() {
  return (
    <section className="bg-blue-600 py-20 about-section relative">
    <div className="absolute inset-0 overflow-hidden">
      <img src={footer} alt="About Background" className="w-full h-full object-cover opacity-40" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">¿Por Qué Elegir Nuestro Servicio?</h2>
      <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">
        Ofrecemos un servicio de traducción preciso y confiable, respaldado por tecnología de vanguardia. Ya sea para negocios o uso personal, nuestro traductor está diseñado para satisfacer todas tus necesidades.
      </p>
      <a 
        href="/contact" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
      >
        Contáctanos
      </a>
    </div>
  </section>
  )
}

export default About
