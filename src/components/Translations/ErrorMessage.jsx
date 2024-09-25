import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-red-500 mt-2">{message}</p>
  );
};

export default ErrorMessage;
