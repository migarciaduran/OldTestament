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
  Paper 
} from '@mui/material';

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
      main: '#0366d6',
    },
    secondary: {
      main: '#586069',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#24292e',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#24292e',
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    subtitle1: {
      color: '#586069',
      fontSize: '1.2rem',
    },
    body1: {
      color: '#586069',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
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
          <Container maxWidth="lg" sx={{ py: 2 }}>
            <Box component="header" sx={{ 
              textAlign: 'center', 
              pb: 2, 
              mb: 3, 
              borderBottom: '1px solid #eaecef' 
            }}>
              <Typography variant="h1" component="h1">
                {t('app.title')}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {t('app.subtitle')}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <LanguageSwitcher />
              </Box>
            </Box>
            
            <Paper 
              component="main" 
              elevation={0}
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                minHeight: 'calc(100vh - 200px)'
              }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/studies/isaiah" replace />} />
                <Route path="/studies/:studyId" element={<MarkdownViewer />} />
              </Routes>
            </Paper>

            <Box 
              component="footer" 
              sx={{ 
                textAlign: 'center', 
                py: 2, 
                mt: 5, 
                borderTop: '1px solid #eaecef',
                color: 'text.secondary',
                fontSize: '0.9rem'
              }}
            >
              <Typography variant="body2">
                © {new Date().getFullYear()} Old Testament Studies
              </Typography>
            </Box>
          </Container>
        </StudiesProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
