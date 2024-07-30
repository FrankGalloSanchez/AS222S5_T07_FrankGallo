import React from 'react'
import header from "../assets/img/header1.jpg";
import './css/HomePage.css';
import 'animate.css';
function Hero() {
    return (
        <section className="bg-blue-600 text-white text-center py-20 mt-16 hero-section">
            <div className="absolute inset-0 overflow-hidden">
                <img src={header} alt="Background" className="w-full h-full object-cover opacity-50" />
            </div>
            <div className="relative z-10 container mx-auto px-4">
                <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">Bienvenido al Servicio de Traducción</h1>
                <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s">Traduce texto en múltiples idiomas de manera rápida y precisa.</p>
                <a
                    href="/translations"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
                >
                    Comienza Ahora
                </a>
            </div>
        </section>
    )
}

export default Hero
