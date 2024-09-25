import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import TranslationPage from './components/Translations/TranslationPage';
import NotFoundPage from './components/404/NotFoundPage'; 
import Contactanos from './components/Contact/Contactanos';
import About from './components/About/About';
import Learning from './components/Leaarning/Learning';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translations" element={<TranslationPage />} />
        <Route path="/contact" element={<Contactanos />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
