import React, { useState, useEffect } from 'react';

const TranslateForm = ({ onTranslate }) => {
  const [text, setText] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');
  const [error, setError] = useState('');
  const [languages, setLanguages] = useState({ translation: {} });
  const [loading, setLoading] = useState(true);
  const [searchTermFrom, setSearchTermFrom] = useState('');
  const [searchTermTo, setSearchTermTo] = useState('');
  const [isOpenFrom, setIsOpenFrom] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('https://api.cognitive.microsofttranslator.com/languages?api-version=3.0', {
          headers: {
            'Ocp-Apim-Subscription-Key': '48024b3b8b7444fc933567b3bd62b07d',
            'Ocp-Apim-Subscription-Region': 'westus',
          },
        });
        const data = await response.json();
        console.log('API response:', data); // Debugging line
        setLanguages(data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

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

  const languageOptions = loading
    ? []
    : Object.keys(languages.translation || {});

  const filteredLanguagesFrom = languageOptions.filter((key) =>
    languages.translation[key].name.toLowerCase().includes(searchTermFrom.toLowerCase())
  );

  const filteredLanguagesTo = languageOptions.filter((key) =>
    languages.translation[key].name.toLowerCase().includes(searchTermTo.toLowerCase())
  );

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
      <div className="mb-4 flex gap-4">
        <div className="relative flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fromLang">
            Idioma original
          </label>
          <button
            type="button"
            onClick={() => setIsOpenFrom(!isOpenFrom)}
            className="w-full border border-gray-300 rounded-lg p-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Idioma original"
          >
            {languages.translation[fromLang]?.name || 'Seleccionar idioma'}
            <span className="ml-2">▼</span>
          </button>
          {isOpenFrom && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
              <input
                type="text"
                value={searchTermFrom}
                onChange={(e) => setSearchTermFrom(e.target.value)}
                placeholder="Buscar idiomas..."
                className="w-full border-b border-gray-300 rounded-t-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Buscar idiomas"
              />
              <div className="max-h-48 overflow-auto">
                {filteredLanguagesFrom.length === 0 ? (
                  <p className="p-2 text-gray-500">No se encontraron resultados.</p>
                ) : (
                  filteredLanguagesFrom.map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setFromLang(key);
                        setIsOpenFrom(false);
                        setSearchTermFrom('');
                      }}
                      className="w-full text-left p-2 hover:bg-gray-200"
                    >
                      {languages.translation[key].name}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        <div className="relative flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="toLang">
            Idioma destino
          </label>
          <button
            type="button"
            onClick={() => setIsOpenTo(!isOpenTo)}
            className="w-full border border-gray-300 rounded-lg p-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Idioma destino"
          >
            {languages.translation[toLang]?.name || 'Seleccionar idioma'}
            <span className="ml-2">▼</span>
          </button>
          {isOpenTo && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
              <input
                type="text"
                value={searchTermTo}
                onChange={(e) => setSearchTermTo(e.target.value)}
                placeholder="Buscar idiomas..."
                className="w-full border-b border-gray-300 rounded-t-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Buscar idiomas"
              />
              <div className="max-h-48 overflow-auto">
                {filteredLanguagesTo.length === 0 ? (
                  <p className="p-2 text-gray-500">No se encontraron resultados.</p>
                ) : (
                  filteredLanguagesTo.map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setToLang(key);
                        setIsOpenTo(false);
                        setSearchTermTo('');
                      }}
                      className="w-full text-left p-2 hover:bg-gray-200"
                    >
                      {languages.translation[key].name}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
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
