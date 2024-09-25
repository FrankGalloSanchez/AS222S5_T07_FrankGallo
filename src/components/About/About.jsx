import React from "react";
import Header from "../../Home/Header";
import Footer from "../../Home/Footer";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importar íconos de redes sociales

function About() {
  const teamMembers = [
    {
      name: 'Frank Gallo',
      role: 'Software Developer',
      img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      github: 'https://github.com/frankgallo',
      linkedin: 'https://linkedin.com/in/frankgallo',
      twitter: 'https://twitter.com/frankgallo'
    },
    {
      name: 'Sebastian Padin',
      role: 'Back-end Developer',
      img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      github: 'https://github.com/sebastianpadin',
      linkedin: 'https://linkedin.com/in/sebastianpadin',
      twitter: 'https://twitter.com/sebastianpadin'
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                Acerca de Translate Educación
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Translate Education es una plataforma dedicada a romper barreras
              lingüísticas y facilitar la comunicación global a través de
              herramientas de traducción eficientes. Nuestra misión es brindar
              acceso a traducciones rápidas y precisas, permitiendo a
              estudiantes y profesionales interactuar sin importar su idioma
              nativo.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gracias al esfuerzo y dedicación de nuestro equipo de
              desarrolladores, hemos creado una aplicación robusta que integra
              las últimas tecnologías de inteligencia artificial y
              procesamiento de lenguaje natural para mejorar continuamente
              nuestros servicios.
            </p>
          </div>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img
                    className="h-32 w-32 rounded-full object-cover mb-4"
                    src={member.img}
                    alt={member.name}
                  />
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-6">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                      <FaGithub size={24} />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
