import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import me from "./locales/me/translation.json";
import de from "./locales/de/translation.json";
import el from "./locales/el/translation.json";
import cy from "./locales/cy/translation.json";
import hr from "./locales/hr/translation.json";
import mk from "./locales/mk/translation.json";
import ro from "./locales/ro/translation.json";
import rs from "./locales/rs/translation.json";

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
    me: "me",
    DE: "de",
    EL: "el",
    CY: "cl",
    HR: "hr",
    MK: "mk",
    RO: "ro",
    RS: "rs",
  };

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        me: { translation: me },
        de: { translation: de },
        el: { translation: el },
        cy: { translation: cy },
        hr: { translation: hr },
        mk: { translation: mk },
        ro: { translation: ro },
        rs: { translation: rs },
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
