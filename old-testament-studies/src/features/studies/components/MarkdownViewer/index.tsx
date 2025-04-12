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
      
      {/* Markdown content area */}      <Paper 
        elevation={2} 
        sx={{ 
          flex: 1,
          minWidth: 0,
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
          '& img': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 1,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            my: 2
          },
          '& h1': {
            color: '#2D3748',
            fontWeight: 700,
            mt: 3, 
            mb: 2,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            borderBottom: '2px solid #EDF2F7',
            pb: 1
          },
          '& h2': {
            color: '#2D3748',
            fontWeight: 600,
            mt: 3, 
            mb: 2,
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            borderBottom: '1px solid #EDF2F7',
            pb: 1
          },
          '& h3, & h4, & h5, & h6': {
            color: '#4A5568',
            fontWeight: 600,
            mt: 2.5, 
            mb: 1.5
          },
          '& p': {
            color: '#2D3748',
            mb: 2.5,
            lineHeight: 1.7,
            fontSize: '1.05rem'
          },
          '& ul, & ol': {
            pl: 3,
            mb: 2.5,
            '& li': {
              mb: 1,
              pl: 0.5,
              color: '#2D3748'
            }
          },
          '& code': {
            backgroundColor: '#F7FAFC',
            borderRadius: '4px',
            padding: '0.2em 0.4em',
            fontFamily: '"Consolas", "Monaco", monospace',
            fontSize: '0.9em',
            color: '#2D3748'
          },
          '& pre': {
            backgroundColor: '#F7FAFC',
            borderRadius: '6px',
            p: 2.5,
            overflowX: 'auto',
            boxShadow: 'inset 0 0 4px rgba(0,0,0,0.05)',
            my: 2.5
          },
          '& blockquote': {
            borderLeft: '4px solid #CBD5E0',
            backgroundColor: '#F7FAFC',
            color: '#4A5568',
            px: 3,
            py: 2,
            ml: 0,
            my: 3,
            borderRadius: '0 4px 4px 0',
            fontStyle: 'italic'
          },
          '& a': {
            color: '#4299E1',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.2s',
            '&:hover': {
              color: '#2B6CB0',
              textDecoration: 'underline'
            }
          },
          '& table': {
            borderCollapse: 'separate',
            borderSpacing: 0,
            width: '100%',
            mb: 3,
            borderRadius: 1,
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          },
          '& th, & td': {
            border: '1px solid #E2E8F0',
            p: 1.5
          },
          '& th': {
            backgroundColor: '#F7FAFC',
            fontWeight: 600,
            color: '#4A5568'
          },
          '& tr:nth-of-type(even) td': {
            backgroundColor: '#F7FAFC'
          },          '& hr': {
            border: 'none',
            height: '1px',
            backgroundColor: '#E2E8F0',
            my: 4
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
