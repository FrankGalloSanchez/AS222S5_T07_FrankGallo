import React, { useState } from 'react';

const TranslateForm = ({ onTranslate }) => {
  const [text, setText] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Por favor, ingresa el texto a traducir.');
      return;
    }
    setError(''); 
    onTranslate({ text, from: fromLang, to: toLang });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe el texto a traducir"
          rows="4"
          className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-label="Texto a traducir"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fromLang">
            Idioma original
          </label>
          <select
            id="fromLang"
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Idioma original"
          >
            <option value="en">Inglés</option>
            <option value="es">Español</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="toLang">
            Idioma destino
          </label>
          <select
            id="toLang"
            value={toLang}
            onChange={(e) => setToLang(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Idioma destino"
          >
            <option value="en">Inglés</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Traducir
      </button>
    </form>
  );
};

export default TranslateForm;
