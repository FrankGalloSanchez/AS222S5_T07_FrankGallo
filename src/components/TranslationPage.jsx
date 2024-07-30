import { useState, useEffect } from 'react';
import { getLastTranslation, addTranslation, deleteTranslation, getAllActives, getAllInactives, activateTranslation, editTranslation } from '../Api';
import TranslateForm from './TranslateForm';
import TranslationList from './TranslationList';
import Header from '../Home/Header';

const TranslationPage = () => {
  const [translations, setTranslations] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [activeTab, setActiveTab] = useState('last');

  useEffect(() => {
    fetchTranslations();
  }, [activeTab]);

  const fetchTranslations = async () => {
    try {
      let response;
      if (activeTab === 'last') {
        response = await getLastTranslation();
        setTranslations([response.data]);
      } else if (activeTab === 'all') {
        response = await getAllActives();
        setTranslations(response.data);
      } else if (activeTab === 'inactives') {
        response = await getAllInactives();
        setTranslations(response.data);
      }
    } catch (error) {
      console.error('Error fetching translations:', error);
    }
  };

  const handleTranslate = async (translation) => {
    try {
      const response = await addTranslation(translation);
      setConfirmationMessage(response.data);
      fetchTranslations();
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTranslation(id);
      fetchTranslations();
    } catch (error) {
      console.error('Error deleting translation:', error);
    }
  };

  const handleActivate = async (id) => {
    try {
      await activateTranslation(id);
      fetchTranslations();
    } catch (error) {
      console.error('Error activating translation:', error);
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      await editTranslation(id, updatedData);
      fetchTranslations();
    } catch (error) {
      console.error('Error editing translation:', error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
        <section className="bg-blue-600 text-white text-center py-20 mt-16 hero-section">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Servicio de Traducción</h1>
          <TranslateForm onTranslate={handleTranslate} />
          <div className="flex justify-center space-x-4 my-6">
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'last' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTabChange('last')}
            >
              Última Traducción
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTabChange('all')}
            >
              Traducciones Activas
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${activeTab === 'inactives' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTabChange('inactives')}
            >
              Traducciones Inactivas
            </button>
          </div>
          <TranslationList
            translations={translations}
            confirmationMessage={confirmationMessage}
            onDelete={handleDelete}
            onActivate={handleActivate}
            onEdit={handleEdit}
          />
        </section>
      </div>
    </div>
  );
};

export default TranslationPage;
