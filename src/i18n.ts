import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from "./utils/config";

// Initialize i18next
i18n
  .use(LanguageDetector) // Optional: Detects the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    defaultNS: "translation", // Default namespace
    supportedLngs: SUPPORTED_LANGUAGES,
    fallbackLng: FALLBACK_LANGUAGE, // Fallback language in case translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"], // Where to detect language (localStorage or browser)
    },
    backend: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
      crossDomain: true,
    },
  });

export default i18n;
