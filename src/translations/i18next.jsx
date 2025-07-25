// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "./locales/fr/translation.json";
import translationEN from "./locales/en/translation.json";
import translationMG from "./locales/mg/translation.json";

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
  mg: { translation: translationMG },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // Valeur par défaut
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
