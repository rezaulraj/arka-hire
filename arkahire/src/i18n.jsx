import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import cnr from "./locales/cnr/translation.json";
import de from "./locales/de/translation.json";
import el from "./locales/el/translation.json";
import hr from "./locales/hr/translation.json";
import mk from "./locales/mk/translation.json";
import ro from "./locales/ro/translation.json";
import sr from "./locales/sr/translation.json";

const detectCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error("Error detecting country:", error);
    return null;
  }
};

const initializeI18n = async () => {
  const country = await detectCountry();

  const languageMap = {
    CNR: "cnr",
    DE: "de",
    EL: "el",
    HR: "hr",
    MK: "mk",
    RO: "ro",
    SR: "sr",
  };

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        cnr: { translation: cnr },
        de: { translation: de },
        el: { translation: el },
        hr: { translation: hr },
        mk: { translation: mk },
        ro: { translation: ro },
        sr: { translation: sr },
      },
      lng: languageMap[country] || "en",
      fallbackLng: "en",
      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
        caches: ["cookie", "localStorage"],
      },
      interpolation: { escapeValue: false },
    });
};

initializeI18n();

export default i18n;
