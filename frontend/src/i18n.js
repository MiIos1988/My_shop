import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';
import translationSr from './locales/sr.json';
import translationDe from './locales/de.json';

const resources = {
  en: {
    translation: translationEn
  },
  de: {
    translation: translationDe
  },
  sr: {
    translation: translationSr
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
});

export default i18n;