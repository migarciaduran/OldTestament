import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

// Import from feature-specific files
import { useMarkdownContent } from '../../hooks/useMarkdownContent';
import { useStudies } from '../../context/StudiesContext';

// Import CSS as regular stylesheet
import './MarkdownViewer.css';

/**
 * MarkdownViewer Component
 * 
 * This component loads and renders Markdown content from a file.
 * It uses React Query for efficient data fetching, caching, and error handling.
 * Now uses the StudiesContext for state management and React Router for navigation.
 * 
 * @returns React component
 */
const MarkdownViewer: React.FC = () => {
  const { t } = useTranslation(); // Translation function
  const { studyId } = useParams<{ studyId: string }>();
  const { selectedStudy, language, studies, setSelectedStudy } = useStudies();
  
  // Sync component with URL parameters
  useEffect(() => {
    if (studyId && studyId !== selectedStudy.id) {
      const study = studies.find(s => s.id === studyId);
      if (study) {
        setSelectedStudy(study);
      }
    }
  }, [studyId, studies, selectedStudy.id, setSelectedStudy]);
  
  // Use our custom hook to fetch the markdown content
  const { data: content, isLoading, error } = useMarkdownContent(
    selectedStudy.filename,
    language
  );

  // Conditional rendering based on query state
  if (isLoading) return <div className="loading">{t('app.loading')}</div>;
  if (error) return <div className="error">{t('app.error', { message: error.message })}</div>;
  // Render the Markdown content
  return (
    <div className="markdown-view-layout">
      {/* Sidebar showing selected file info and navigation */}
      <div className="selected-file-sidebar">
        <h3>{t('app.availableStudies')}</h3>        <div className="study-list">
          {studies.map(study => (
            <Link 
              key={study.id}
              to={`/studies/${study.id}`}
              className={`study-item ${selectedStudy?.id === study.id ? 'active' : ''}`}
            >
              {t(study.titleKey)}
            </Link>
          ))}
        </div>
        
        {selectedStudy && (
          <div className="selected-file-info">
            <h4>{t('app.currentlyViewing')}</h4>
            <div className="selected-file-name">{t(selectedStudy.titleKey)}</div>
            <div>{t('app.selectedLanguage')}: {language.toUpperCase()}</div>
          </div>
        )}
      </div>
      
      {/* Markdown content area */}
      <div className="markdown-container">
        {/* ReactMarkdown converts the markdown string to React components */}
        {/* remarkGfm enables GitHub-flavored Markdown support */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || ''}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownViewer;
