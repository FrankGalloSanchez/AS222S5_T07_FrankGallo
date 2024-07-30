import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Home/HomePage';
import TranslationPage from './components/TranslationPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/translations" element={<TranslationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
