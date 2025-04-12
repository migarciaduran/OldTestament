import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Study } from '../types/Study.types';
import { useTranslation } from 'react-i18next';

// Define the type for our context
interface StudiesContextType {
  studies: Study[];
  selectedStudy: Study;
  language: string;
  setSelectedStudy: (study: Study) => void;
  setLanguage: (language: string) => void;
}

// Create the context with a default undefined value
const StudiesContext = createContext<StudiesContextType | undefined>(undefined);

// Props for our provider component
interface StudiesProviderProps {
  children: ReactNode;
  initialStudies: Study[];
}

/**
 * Provider component that wraps parts of the app that need access to the studies context
 */
export const StudiesProvider: React.FC<StudiesProviderProps> = ({ 
  children, 
  initialStudies 
}) => {
  const { i18n } = useTranslation();
  const [selectedStudy, setSelectedStudy] = useState<Study>(initialStudies[0]);
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('language') || 'en'
  );
  
  // Language change handler
  const handleLanguageChange = (lang: string): void => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // The value that will be provided to consumers of this context
  const contextValue: StudiesContextType = {
    studies: initialStudies,
    selectedStudy,
    language,
    setSelectedStudy,
    setLanguage: handleLanguageChange
  };

  return (
    <StudiesContext.Provider value={contextValue}>
      {children}
    </StudiesContext.Provider>
  );
};

/**
 * Custom hook to use the studies context
 */
export const useStudies = (): StudiesContextType => {
  const context = useContext(StudiesContext);
  
  if (context === undefined) {
    throw new Error('useStudies must be used within a StudiesProvider');
  }
  
  return context;
};
