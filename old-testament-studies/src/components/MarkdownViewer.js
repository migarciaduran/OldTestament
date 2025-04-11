import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import '../styles/MarkdownViewer.css';

function MarkdownViewer({ filePath, language }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    
    // Adapt the file path based on the language
    let localizedFilePath = filePath;
    
    if (language === 'es') {
      // Handle specific filename transformations
      if (filePath === 'StudiesInIsaiah.md') {
        localizedFilePath = 'EstudiosEnIsaias.md';
      }
      // Add more specific transformations here as needed for future files
    }
      
    // Prepend the public URL to ensure correct path resolution
    const fullPath = `${process.env.PUBLIC_URL}/${localizedFilePath}`;
    
    console.log('Fetching markdown from:', fullPath); // For debugging
    
    fetch(fullPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [filePath, language]);

  if (loading) return <div className="loading">{t('app.loading')}</div>;
  if (error) return <div className="error">{t('app.error', { message: error })}</div>;

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
