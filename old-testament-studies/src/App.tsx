import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n'; // Import the i18n configuration
import './App.css';
import MarkdownViewer from './features/studies/components/MarkdownViewer';
import { Study } from './features/studies/types/Study.types';

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
  const { t, i18n } = useTranslation();
  const [selectedStudy, setSelectedStudy] = useState<Study>(studiesConfig[0]);
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');
  
  // Change language handler
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('app.title')}</h1>
        <p>{t('app.subtitle')}</p>
        <div className="language-switcher">
          <button 
            className={language === 'en' ? 'active' : ''} 
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button 
            className={language === 'es' ? 'active' : ''} 
            onClick={() => changeLanguage('es')}
          >
            Español
          </button>
        </div>
      </header>      
      <main className="App-main">
        <MarkdownViewer 
          filePath={selectedStudy.filename} 
          language={language} 
          studies={studiesConfig}
          selectedStudy={selectedStudy}
          onSelectStudy={setSelectedStudy}
        />
      </main>
    </div>
  );
}

export default App;
