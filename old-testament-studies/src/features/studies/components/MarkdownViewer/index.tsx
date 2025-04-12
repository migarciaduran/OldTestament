import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Paper,
  Divider,
  Skeleton,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';

// Import from feature-specific files
import { useMarkdownContent } from '../../hooks/useMarkdownContent';
import { useStudies } from '../../context/StudiesContext';

/**
 * MarkdownViewer Component
 * 
 * This component loads and renders Markdown content from a file.
 * It uses React Query for efficient data fetching, caching, and error handling.
 * Now uses the StudiesContext for state management and React Router for navigation.
 * Styled with Material UI components.
 * 
 * @returns React component
 */
const MarkdownViewer: React.FC = () => {
  const { t } = useTranslation(); // Translation function
  const { studyId } = useParams<{ studyId: string }>();
  const { selectedStudy, language, studies, setSelectedStudy } = useStudies();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
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
  if (isLoading) return (
    <Box sx={{ p: 3 }}>
      <Skeleton variant="text" height={40} width="50%" />
      <Skeleton variant="text" height={20} width="70%" />
      <Skeleton variant="text" height={20} width="60%" />
      <Skeleton variant="rectangular" height={200} sx={{ my: 2 }} />
      <Skeleton variant="text" height={20} width="80%" />
      <Skeleton variant="text" height={20} width="75%" />
    </Box>
  );
  
  if (error) return (
    <Alert severity="error" sx={{ m: 2 }}>
      {t('app.error', { message: error.message })}
    </Alert>
  );
  
  // Render the Markdown content
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      width: '100%',
      gap: 3
    }}>
      {/* Sidebar showing selected file info and navigation */}
      <Paper 
        elevation={0} 
        sx={{ 
          flex: { xs: 'none', md: '0 0 250px' },
          borderRight: { xs: 'none', md: '1px solid #eaecef' },
          pr: { xs: 0, md: 2 },
          pb: { xs: 2, md: 0 },
          mb: { xs: 2, md: 0 },
          borderBottom: { xs: '1px solid #eaecef', md: 'none' },
        }}
      >
        <Typography variant="h6" component="h3" sx={{ mt: 0 }}>
          {t('app.availableStudies')}
        </Typography>
        
        <List sx={{ mb: 2 }}>
          {studies.map(study => (
            <ListItem key={study.id} disablePadding>
              <ListItemButton 
                component={Link}
                to={`/studies/${study.id}`}
                selected={selectedStudy?.id === study.id}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: '#f1f8ff',
                    fontWeight: 600,
                  },
                  '&:hover': {
                    backgroundColor: '#f6f8fa',
                  },
                }}
              >
                <ListItemText primary={t(study.titleKey)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        {selectedStudy && (
          <Box sx={{ pt: 2, borderTop: '1px solid #eaecef' }}>
            <Typography variant="subtitle2" component="h4" sx={{ fontWeight: 600 }}>
              {t('app.currentlyViewing')}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500, my: 1 }}>
              {t(selectedStudy.titleKey)}
            </Typography>
            <Typography variant="body2">
              {t('app.selectedLanguage')}: {language.toUpperCase()}
            </Typography>
          </Box>
        )}
      </Paper>
      
      {/* Markdown content area */}
      <Paper 
        elevation={0} 
        sx={{ 
          flex: 1,
          minWidth: 0,
          p: { xs: 0, sm: 1 },
          '& img': {
            maxWidth: '100%',
            height: 'auto'
          },
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            color: '#24292e',
            fontWeight: 600,
            mt: 2, 
            mb: 1
          },
          '& p': {
            color: '#586069',
            mb: 2.5
          },
          '& code': {
            backgroundColor: '#f6f8fa',
            borderRadius: '3px',
            padding: '0.2em 0.4em',
            fontFamily: 'monospace'
          },
          '& pre': {
            backgroundColor: '#f6f8fa',
            borderRadius: '3px',
            p: 2,
            overflowX: 'auto'
          },
          '& blockquote': {
            borderLeft: '3px solid #dfe2e5',
            color: '#6a737d',
            pl: 2,
            ml: 0,
            my: 2
          },
          '& a': {
            color: '#0366d6',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline'
            }
          },
          '& table': {
            borderCollapse: 'collapse',
            width: '100%',
            mb: 2
          },
          '& th, & td': {
            border: '1px solid #dfe2e5',
            p: 1.5
          },
          '& th': {
            backgroundColor: '#f6f8fa'
          }
        }}
      >
        {/* ReactMarkdown converts the markdown string to React components */}
        {/* remarkGfm enables GitHub-flavored Markdown support */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || ''}</ReactMarkdown>
      </Paper>
    </Box>
  );
};

export default MarkdownViewer;
