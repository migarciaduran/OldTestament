import React from 'react';
import { useStudies } from '../features/studies/context/StudiesContext';

/**
 * LanguageSwitcher Component
 * 
 * Provides UI for switching between available languages,
 * using the StudiesContext to manage language state.
 */
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useStudies();

  return (
    <div className="language-switcher">
      <button 
        className={language === 'en' ? 'active' : ''} 
        onClick={() => setLanguage('en')}
      >
        English
      </button>
      <button 
        className={language === 'es' ? 'active' : ''} 
        onClick={() => setLanguage('es')}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
