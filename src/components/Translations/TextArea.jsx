import React from 'react';
import ErrorMessage from './ErrorMessage';

const TextArea = ({ value, onChange, error, charCount }) => {
  const maxCharCount = 3000;

  return (
    <div className="relative mb-4">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Escribe el texto a traducir"
        rows="4"
        maxLength={maxCharCount}
        className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        aria-label="Texto a traducir"
      />
      {error && <ErrorMessage message={error} />}
      <p className="absolute bottom-2 right-2 text-sm text-gray-500">
        Caracteres: {charCount}/{maxCharCount}
      </p>
    </div>
  );
};

export default TextArea;
