import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n'; // Import the i18n configuration
import './App.css';
import MarkdownViewer from './components/MarkdownViewer';

// Configuration for the Old Testament studies - will be replaced with translated content
const studiesConfig = [
  {
    id: 'isaiah',
    titleKey: 'studies.isaiah.title',
    filename: 'StudiesInIsaiah.md',
    descriptionKey: 'studies.isaiah.description'
  },
  // You can add more studies here in the future
];

function App() {
  const { t, i18n } = useTranslation();
  const [selectedStudy, setSelectedStudy] = useState(studiesConfig[0]);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  
  // Change language handler
  const changeLanguage = (lng) => {
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
        <div className="study-selector">
          <h2>{t('app.availableStudies')}</h2>
          <ul>
            {studiesConfig.map(study => (
              <li key={study.id}>
                <button 
                  className={selectedStudy.id === study.id ? 'active' : ''}
                  onClick={() => setSelectedStudy(study)}
                >
                  {t(study.titleKey)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="study-content">
          <h2>{t(selectedStudy.titleKey)}</h2>
          <p>{t(selectedStudy.descriptionKey)}</p>
          <MarkdownViewer 
            filePath={selectedStudy.filename}
            language={language} 
          />
        </div>
      </main>
      
      <footer className="App-footer">
        <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
      </footer>
    </div>
  );
}

export default App;
