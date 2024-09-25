import React, { useState, useEffect } from 'react';
import Header from '../../Home/Header';
import Footer from '../Translations/Footer';

// Lista de palabras en diferentes idiomas
const words = [
  { word: 'Hello', language: 'Ingles' },
  { word: 'Bonjour', language: 'Frances' },
  { word: 'Hola', language: 'Español' },
  { word: 'Hallo', language: 'Aleman' },
  { word: 'Ciao', language: 'Italiano' },
  { word: 'こんにちは', language: 'Japones' }, // Konnichiwa
  { word: '안녕하세요', language: 'Koreano' }, // Annyeonghaseyo
  { word: '你好', language: 'Chino' }, // Nǐ hǎo
];

function Learning() {
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  // Función para obtener una palabra aleatoria
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  // Función para iniciar el juego
  const startGame = () => {
    const word = getRandomWord();
    setCurrentWord(word);
    setUserInput('');
    setMessage('');
  };

  // Función para manejar el cambio en el input del usuario
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Función para verificar la respuesta del usuario
  const checkAnswer = () => {
    if (userInput.trim().toLowerCase() === currentWord.word.toLowerCase()) {
      setMessage('¡Correcto!');
    } else {
      setMessage(`Incorrecto. La palabra correcta es: ${currentWord.word}`);
    }
  };

  // Iniciar el juego cuando se carga el componente
  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8 bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-extrabold mb-6 text-blue-700 text-center">Juego de Escritura de Palabras</h1>
          {currentWord && (
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium mb-4 text-center">
                Escribe la palabra en <span className="text-blue-600 font-semibold">{currentWord.language}</span>:
              </p>
              <div className="mb-4">
                <strong className="text-3xl text-gray-800">{currentWord.word}</strong>
              </div>
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Escribe aquí..."
              />
              <button
                onClick={checkAnswer}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Verificar
              </button>
              {message && (
                <p className={`mt-4 text-lg ${message.startsWith('¡Correcto!') ? 'text-green-600' : 'text-red-600'} text-center`}>
                  {message}
                </p>
              )}
              <button
                onClick={startGame}
                className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Siguiente Palabra
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Learning;
