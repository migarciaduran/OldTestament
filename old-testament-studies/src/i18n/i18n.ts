import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Define interface for resources
interface Resources {
  [key: string]: {
    translation: typeof translationEN;
  };
}

// the translations
const resources: Resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
