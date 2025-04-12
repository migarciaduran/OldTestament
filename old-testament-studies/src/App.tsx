import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './i18n/i18n'; // Import the i18n configuration
import './App.css';
import MarkdownViewer from './features/studies/components/MarkdownViewer';
import { Study } from './features/studies/types/Study.types';
import { StudiesProvider } from './features/studies/context/StudiesContext';
import LanguageSwitcher from './components/LanguageSwitcher';

// Configuration for the Old Testament studies - will be replaced with translated content
const studiesConfig: Study[] = [
  {
    id: 'isaiah',
    titleKey: 'studies.isaiah.title',
    filename: 'StudiesInIsaiah.md',
    descriptionKey: 'studies.isaiah.description'
  },
  // You can add more studies here in the future
];

function App(): JSX.Element {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <StudiesProvider initialStudies={studiesConfig}>
        <div className="App">
          <header className="App-header">
            <h1>{t('app.title')}</h1>
            <p>{t('app.subtitle')}</p>
            <LanguageSwitcher />
          </header>      
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Navigate to="/studies/isaiah" replace />} />
              <Route path="/studies/:studyId" element={<MarkdownViewer />} />
            </Routes>
          </main>
        </div>
      </StudiesProvider>
    </BrowserRouter>
  );
}

export default App;
