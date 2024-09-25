import React, { useState, useEffect } from 'react';
import LanguageSelect from './LanguageSelect';
import TextArea from './TextArea';

const API_URL = 'https://mhsw3wvx-8080.brs.devtunnels.ms'; // URL del backend
const SUBSCRIPTION_KEY = '48024b3b8b7444fc933567b3bd62b07d'; // Clave de suscripción
const SUBSCRIPTION_REGION = 'westus'; // Región de suscripción

const TranslateForm = ({ onTranslate }) => {
  const [text, setText] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');
  const [error, setError] = useState('');
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(`${API_URL}/lenguajes`, {
          headers: {
            'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
            'Ocp-Apim-Subscription-Region': SUBSCRIPTION_REGION,
          },
        });
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLanguages();
  }, []);

  const detectLanguage = async (textToDetect) => {
    try {
      const response = await fetch(`${API_URL}/detect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
          'Ocp-Apim-Subscription-Region': SUBSCRIPTION_REGION,
        },
        body: JSON.stringify({ text: textToDetect }),
      });

      const detectedLang = await response.text();

      if (detectedLang) {
        setFromLang(detectedLang.trim());
      } else {
        console.error('No se pudo detectar el idioma');
      }
    } catch (error) {
      console.error('Error al detectar el idioma:', error);
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 3000) {
      setText(newText);
      setCharCount(newText.length);
      if (newText.length > 0) {
        detectLanguage(newText);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Por favor, ingresa el texto a traducir.');
      return;
    }
    setError('');
    try {
      const translationResult = await onTranslate({ text, from: fromLang, to: toLang });
      setText(''); // Reinicia el texto
      setCharCount(0);
    } catch (error) {
      console.error('Error during translation:', error);
      setError('Error al traducir el texto. Inténtalo de nuevo.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <TextArea value={text} onChange={handleTextChange} error={error} charCount={charCount} />
      <div className="mb-4 flex gap-4">
        <LanguageSelect
          label="Idioma original"
          selectedLang={fromLang}
          onSelect={(lang) => setFromLang(lang)}
          languages={languages}
          loading={loading}
        />
        <LanguageSelect
          label="Idioma destino"
          selectedLang={toLang}
          onSelect={(lang) => setToLang(lang)}
          languages={languages}
          loading={loading}
        />
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
