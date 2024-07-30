import React, { useState } from 'react';

const TranslateForm = ({ onTranslate }) => {
  const [text, setText] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');

  const handleSubmit = (e) => {
    e.preventDefault();
    onTranslate({ text, from: fromLang, to: toLang });
    setText(''); // Clear the textarea after submission
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe el texto a traducir"
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Idioma original
          </label>
          <select
            value={fromLang}
            onChange={(e) => setFromLang(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">Inglés</option>
            <option value="es">Español</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Idioma de destino
          </label>
          <select
            value={toLang}
            onChange={(e) => setToLang(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Traducir
      </button>
    </form>
  );
};

export default TranslateForm;
