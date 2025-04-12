// Import necessary packages and components
import React from 'react';
import ReactMarkdown from 'react-markdown'; // Library to render Markdown as React components
import remarkGfm from 'remark-gfm'; // Plugin for GitHub-flavored Markdown (tables, strikethrough, etc.)
import { useTranslation } from 'react-i18next'; // For internationalization/translations
import { useQuery, UseQueryResult } from '@tanstack/react-query'; // For efficient data fetching with caching
import '../styles/MarkdownViewer.css'; // Component-specific styling

// Define TypeScript interfaces for props and return types
interface MarkdownViewerProps {
  filePath: string;
  language: string;
}

interface MarkdownContentResult {
  data: string | undefined;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Custom hook to fetch markdown content
 * 
 * This hook handles the logic for fetching markdown files with proper localization
 * and uses React Query for efficient caching and refetching
 * 
 * @param filePath - The path to the Markdown file to be loaded
 * @param language - The current language (e.g., 'en' or 'es')
 * @returns Query result object with data, loading state, and error
 */
const useMarkdownContent = (filePath: string, language: string): UseQueryResult<string, Error> => {
  return useQuery({
    // Unique query key based on both path and language
    queryKey: ['markdown', filePath, language],
    
    // Query function that fetches the markdown
    queryFn: async (): Promise<string> => {
      // Adapt the file path based on the language
      let localizedFilePath = filePath;
      
      // Language-specific file name transformations
      if (language === 'es') {
        // For Spanish, transform certain filenames
        if (filePath === 'StudiesInIsaiah.md') {
          localizedFilePath = 'EstudiosEnIsaias.md';
        }
        // Add more specific transformations here as needed for future files
      }
        
      // Create the full path by prepending the public URL
      const fullPath = `${process.env.PUBLIC_URL}/${localizedFilePath}`;
      
      console.log('Fetching markdown from:', fullPath); // For debugging
      
      // Fetch the Markdown file from the server
      const response = await fetch(fullPath);
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Failed to load markdown file: ${response.statusText}`);
      }
      
      // Return the markdown text
      return await response.text();
    },
    
    // Options for this specific query
    retry: 1,          // Only retry once on failure
    staleTime: 300000, // Cache stays fresh for 5 minutes
  });
};

/**
 * MarkdownViewer Component
 * 
 * This component loads and renders Markdown content from a file.
 * It uses React Query for efficient data fetching, caching, and error handling.
 * 
 * @param props - Component props (filePath and language)
 * @returns React component
 */
const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ filePath, language }) => {
  const { t } = useTranslation(); // Translation function
  
  // Use our custom hook to fetch the markdown content
  const { data: content, isLoading, error } = useMarkdownContent(filePath, language);

  // Conditional rendering based on query state
  if (isLoading) return <div className="loading">{t('app.loading')}</div>; // Show loading message
  if (error) return <div className="error">{t('app.error', { message: error.message })}</div>; // Show error message

  // Render the Markdown content
  return (
    <div className="markdown-container">
      {/* ReactMarkdown converts the markdown string to React components */}
      {/* remarkGfm enables GitHub-flavored Markdown support */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || ''}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
