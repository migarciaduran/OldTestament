import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './i18n/i18n'; // Import the i18n configuration
import MarkdownViewer from './features/studies/components/MarkdownViewer';
import { Study } from './features/studies/types/Study.types';
import { StudiesProvider } from './features/studies/context/StudiesContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container, 
  Typography, 
  Box, 
  Paper,
  AppBar,
  Toolbar
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book'; // Import BookIcon

// Configuration for the Old Testament studies - will be replaced with translated content
const studiesConfig: Study[] = [
  {
    id: 'isaiah',
    titleKey: 'studies.isaiah.title',
    filename: 'StudiesInIsaiah.md',
    descriptionKey: 'studies.isaiah.description'
  },
  // You can add more studies here in the future
];

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#5D5348', // Muted taupe - more minimalist
    },
    secondary: {
      main: '#A29580', // Softer neutral tone - less contrast
    },
    background: {
      default: '#FAFAF8', // Very subtle off-white - minimalist approach
      paper: '#FFFFFF', // Clean white for content areas
    },
    text: {
      primary: '#3B3A38', // Soft dark gray for text
      secondary: '#6A6762', // Muted secondary text
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#3B3A38',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#3B3A38',
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    subtitle1: {
      color: '#6A6762',
      fontSize: '1.2rem',
    },
    body1: {
      color: '#3B3A38',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

function App(): JSX.Element {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <StudiesProvider initialStudies={studiesConfig}>
          <Box sx={{ 
            backgroundColor: '#FAFAF8', 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Simple App Bar */}
            <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #EEEEEE' }}>
              <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BookIcon sx={{ mr: 1.5, color: 'primary.main', fontSize: '28px' }} />
                    <Typography 
                      variant="h6" 
                      component="div" 
                      sx={{ 
                        flexGrow: 1,
                        fontFamily: '"Cinzel", "Bookman Old Style", serif', // Use Cinzel font
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' } // Responsive font size
                      }}
                    >
                      {t('app.title')}
                    </Typography>
                  </Box>
                  <LanguageSwitcher />
                </Toolbar>
              </Container>
            </AppBar>

            {/* Main Content */}
            <Container maxWidth="lg" sx={{ py: 3, flexGrow: 1 }}>
              <Paper 
                elevation={1} 
                sx={{ 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
                }}
              >
                <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  <Routes>
                    <Route path="/" element={<Navigate to="/studies/isaiah" replace />} />
                    <Route path="/studies/:studyId" element={<MarkdownViewer />} />
                  </Routes>
                </Box>
              </Paper>
            </Container>

            {/* Footer */}
            <Box 
              component="footer" 
              sx={{ 
                textAlign: 'center', 
                py: 3, 
                borderTop: '1px solid #EEEEEE',
                backgroundColor: 'white',
                mt: 'auto'
              }}
            >
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} {t('app.footerText')}
              </Typography>
            </Box>
          </Box>
        </StudiesProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
