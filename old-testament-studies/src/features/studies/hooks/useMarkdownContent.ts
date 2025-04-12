import { useQuery, UseQueryResult } from '@tanstack/react-query';

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
export const useMarkdownContent = (filePath: string, language: string): UseQueryResult<string, Error> => {
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
