import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';

// Import from feature-specific files
import { useMarkdownContent } from '../../hooks/useMarkdownContent';
import { Study } from '../../types/Study.types';

// Import CSS as regular stylesheet instead of as a module
import './MarkdownViewer.css';

// Define component props interface
interface MarkdownViewerProps {
  filePath: string;
  language: string;
  studies?: Study[];
  selectedStudy?: Study;
  onSelectStudy?: (study: Study) => void;
}

/**
 * MarkdownViewer Component
 * 
 * This component loads and renders Markdown content from a file.
 * It uses React Query for efficient data fetching, caching, and error handling.
 * 
 * @param props - Component props (filePath, language, studies, selectedStudy, onSelectStudy)
 * @returns React component
 */
const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ 
  filePath, 
  language, 
  studies = [], 
  selectedStudy, 
  onSelectStudy 
}) => {
  const { t } = useTranslation(); // Translation function
  
  // Use our custom hook to fetch the markdown content
  const { data: content, isLoading, error } = useMarkdownContent(filePath, language);

  // Conditional rendering based on query state
  if (isLoading) return <div className="loading">{t('app.loading')}</div>;
  if (error) return <div className="error">{t('app.error', { message: error.message })}</div>;

  // Render the Markdown content
  return (
    <div className="markdown-view-layout">
      {/* Sidebar showing selected file info and navigation */}
      <div className="selected-file-sidebar">
        <h3>{t('app.availableStudies')}</h3>
        <div className="study-list">
          {studies.map(study => (
            <div 
              key={study.id}
              className={`study-item ${selectedStudy?.id === study.id ? 'active' : ''}`}
              onClick={() => onSelectStudy && onSelectStudy(study)}
            >
              {t(study.titleKey)}
            </div>
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
