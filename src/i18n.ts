import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json"; // Example: French translations

// Initialize i18next
i18n
  .use(LanguageDetector) // Optional: Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language in case translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"], // Where to detect language (localStorage or browser)
    },
  });

export default i18n;
