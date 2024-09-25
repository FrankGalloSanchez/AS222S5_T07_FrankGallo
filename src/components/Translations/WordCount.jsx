import React from 'react';

const WordCount = ({ count }) => {
  return (
    <p className="text-sm text-gray-500 mt-2">Palabras: {count}</p>
  );
};

export default WordCount;
