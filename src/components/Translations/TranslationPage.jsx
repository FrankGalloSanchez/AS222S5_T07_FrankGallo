import { useState, useEffect } from "react";
import {
  getLastTranslation,
  addTranslation,
  deleteTranslation,
  getAllActives,
  getAllInactives,
  activateTranslation,
  editTranslation,
} from "../../Api";
import TranslateForm from "./TranslateForm";
import TranslationList from "./TranslationList";
import Header from "../../Home/Header";
import Footer from "./Footer";
import "./css/TranslationPage.css";
import "../../Home/css/Header.css";

const TranslationPage = () => {
  const [translations, setTranslations] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [activeTab, setActiveTab] = useState("last");

  useEffect(() => {
    fetchTranslations();
  }, [activeTab]);

  const fetchTranslations = async () => {
    try {
      let response;
      switch (activeTab) {
        case "last":
          response = await getLastTranslation();
          setTranslations([response.data]);
          break;
        case "all":
          response = await getAllActives();
          setTranslations(response.data);
          break;
        case "inactives":
          response = await getAllInactives();
          setTranslations(response.data);
          break;
        default:
          throw new Error("Invalid tab");
      }
    } catch (error) {
      console.error("Error fetching translations:", error);
    }
  };

  const handleTranslate = async (translation) => {
    try {
      const response = await addTranslation(translation);
      setConfirmationMessage(response.data);
      fetchTranslations();
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTranslation(id);
      fetchTranslations();
    } catch (error) {
      console.error("Error deleting translation:", error);
    }
  };

  const handleActivate = async (id) => {
    try {
      await activateTranslation(id);
      fetchTranslations();
    } catch (error) {
      console.error("Error activating translation:", error);
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      await editTranslation(id, updatedData);
      fetchTranslations();
    } catch (error) {
      console.error("Error editing translation:", error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="page-background flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center py-10 px-4">
        <div className="content-overlay flex flex-col lg:flex-row gap-6 items-center justify-center w-full max-w-6xl">
          <section className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h1 className="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl text-center relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                Servicio de Traducción
              </span>
            </h1>
            <TranslateForm onTranslate={handleTranslate} />
          </section>

          <section className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "last"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleTabChange("last")}
              >
                Última Traducción
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleTabChange("all")}
              >
                Traducciones Activas
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "inactives"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleTabChange("inactives")}
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
      </main>
      <Footer />
    </div>
  );
};

export default TranslationPage;
