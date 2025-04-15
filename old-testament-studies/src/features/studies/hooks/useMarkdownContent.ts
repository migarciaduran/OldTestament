import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface StudyRegistryItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  filePath: string;
}

interface StudyRegistry {
  studies: {
    [key: string]: StudyRegistryItem;
  };
}

/**
 * Custom hook to fetch markdown content
 * 
 * This hook handles the logic for fetching markdown files with proper localization
 * and uses React Query for efficient caching and refetching
 * 
 * @param studyId - The ID of the study to load (e.g., 'isaiah', 'kingsOfJudah')
 * @param language - The current language (e.g., 'en' or 'es')
 * @returns Query result object with data, loading state, and error
 */
export const useMarkdownContent = (studyId: string, language: string): UseQueryResult<string, Error> => {
  return useQuery({
    // Unique query key based on both study ID and language
    queryKey: ['markdown', studyId, language],
    
    // Query function that fetches the markdown
    queryFn: async (): Promise<string> => {
      try {
        // First, fetch the studies registry to get the file mapping
        const registryResponse = await fetch(`${process.env.PUBLIC_URL}/content/studies-registry.json`);
        
        if (!registryResponse.ok) {
          throw new Error('Failed to load content registry');
        }
        
        const registry: StudyRegistry = await registryResponse.json();
        
        // Get the study file path from the registry
        const study = registry.studies[studyId];
        
        if (!study) {
          throw new Error(`Study with ID "${studyId}" not found in the registry`);
        }
        
        // Create the full path using the language and file path from registry
        const fullPath = `${process.env.PUBLIC_URL}/content/${language}/${study.filePath}`;
        
        console.log('Fetching markdown from:', fullPath); // For debugging
        
        // Fetch the Markdown file from the server
        const response = await fetch(fullPath);
        
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }
        
        // Return the markdown text
        return await response.text();
      } catch (error) {
        console.error('Error fetching markdown content:', error);
        throw error;
      }
    },
    
    // Options for this specific query
    retry: 1,          // Only retry once on failure
    staleTime: 300000, // Cache stays fresh for 5 minutes
  });
};
