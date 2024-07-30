import React from 'react';

const TranslationList = ({ translations, confirmationMessage, onDelete, onActivate, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Traducciones</h2>
      {confirmationMessage && (
        <p className="text-green-600 mb-4">{confirmationMessage}</p>
      )}
      {translations.length > 0 ? (
        <ul className="space-y-4">
          {translations.map((translation) => (
            <li key={translation.id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <strong className="text-gray-800">Texto Original:</strong>
                <span className="text-gray-600">{translation.request_text}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <strong className="text-gray-800">Texto Traducido:</strong>
                <span className="text-gray-600">{translation.translated_text}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => onEdit(translation.id, { /* datos actualizados */ })}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Editar
                </button>
                <button
                  onClick={() => onDelete(translation.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => onActivate(translation.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Activar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No hay traducciones disponibles.</p>
      )}
    </div>
  );
};

export default TranslationList;
