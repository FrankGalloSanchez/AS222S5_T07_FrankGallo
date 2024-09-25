import React, { useState, useEffect, useRef, useMemo } from 'react';

const LanguageSelect = ({ label, selectedLang, onSelect, languages, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Manejo de clic fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredLanguages = useMemo(() => {
    return Object.keys(languages).filter((key) => {
      const language = languages[key];
      return typeof language === 'string' && language.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [languages, searchTerm]);
  

  // Cerrar con tecla "Esc"
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border border-gray-300 rounded-lg p-2 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages[selectedLang] || 'Seleccionar idioma'}
        <span className="ml-2">▼</span>
      </button>
      {isOpen && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar idiomas..."
            className="w-full border-b border-gray-300 rounded-t-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="max-h-48 overflow-auto">
            {loading ? (
              <p className="p-2 text-gray-500">Cargando...</p>
            ) : filteredLanguages.length === 0 ? (
              <p className="p-2 text-gray-500">No se encontraron resultados.</p>
            ) : (
              filteredLanguages.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    onSelect(key);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  className="w-full text-left p-2 hover:bg-gray-200"
                >
                  {languages[key]}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
