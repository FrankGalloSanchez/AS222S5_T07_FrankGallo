import React from 'react';

const TranslationList = ({ translations }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de Traducciones</h2>
            {translations.length > 0 ? (
                translations.map((translation) => (
                    <div key={translation.id} className="mb-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
                        <p className="text-gray-800 text-lg">
                            <strong>Texto Traducido:</strong>
                        </p>
                        <p className="mt-1 text-gray-600 italic border-l-4 border-blue-500 pl-2">
                            {translation.translated_text}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-gray-600 text-center">No hay traducciones disponibles.</p>
            )}
        </div>
    );
};

export default TranslationList;
