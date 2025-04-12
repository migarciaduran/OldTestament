import React from 'react';
import { useStudies } from '../features/studies/context/StudiesContext';
import { ToggleButtonGroup, ToggleButton, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';

/**
 * LanguageSwitcher Component
 * 
 * Provides UI for switching between available languages,
 * using the StudiesContext to manage language state.
 * Uses Material UI components for a modern look and feel.
 */
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useStudies();

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string,
  ) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <TranslateIcon sx={{ mr: 1, fontSize: 20, color: 'primary.main' }} />
      <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleLanguageChange}
        aria-label="language selection"
        size="small"
        sx={{
          '& .MuiToggleButtonGroup-grouped': {
            border: 1,
            borderColor: 'divider',
            fontSize: '0.85rem',
            px: 1.5,
          },
          '& .Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.dark',
              color: 'white',
            }
          }
        }}
      >
        <ToggleButton value="en" aria-label="English">
          EN
        </ToggleButton>
        <ToggleButton value="es" aria-label="Español">
          ES
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default LanguageSwitcher;
