import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Study } from '../types/Study.types';
import { useTranslation } from 'react-i18next';

// Define the type for our context
interface StudiesContextType {
  studies: Study[];
  selectedStudy: Study | null;
  language: string;
  setSelectedStudy: (study: Study) => void;
  setLanguage: (language: string) => void;
  navigateToStudy: (studyId: string) => void;
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
  const navigate = useNavigate();  const { studyId } = useParams<{ studyId: string }>();
  const location = useLocation();
    // Set initial selected study based on URL parameter or default to first study
  const findStudyById = useCallback((id: string): Study | null => {
    return initialStudies.find(study => study.id === id) || (initialStudies.length > 0 ? initialStudies[0] : null);
  }, [initialStudies]);
  
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(
    studyId ? findStudyById(studyId) : (initialStudies.length > 0 ? initialStudies[0] : null)
  );
  
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('language') || 'en'
  );
    // Update selected study when URL changes
  useEffect(() => {
    if (studyId) {
      const study = findStudyById(studyId);
      setSelectedStudy(study);
    }
  }, [studyId, location.pathname, findStudyById]);
  
  // Navigate to study and update selected study
  const navigateToStudy = (studyId: string): void => {
    navigate(`/studies/${studyId}`);
  };
  
  // Language change handler
  const handleLanguageChange = (lang: string): void => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Update URL when selected study changes through direct state updates
  const handleSelectStudy = (study: Study): void => {
    setSelectedStudy(study);
    navigateToStudy(study.id);
  };

  // The value that will be provided to consumers of this context
  const contextValue: StudiesContextType = {
    studies: initialStudies,
    selectedStudy,
    language,
    setSelectedStudy: handleSelectStudy,
    setLanguage: handleLanguageChange,
    navigateToStudy
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
