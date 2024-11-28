import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_US from "./translations/en-US.json";
import zh_CN from "./translations/zh-CN.json";
import ko_KR from "./translations/ko-KR.json";
import fr_FR from "./translations/fr-FR.json";
import nl_NL from "./translations/nl-NL.json";
import pl_PL from "./translations/pl-PL.json";

const resources = {
  en: en_US,
  "en-US": en_US,
  "en-GB": en_US,
  fr: fr_FR,
  "fr-FR": fr_FR,
  zh: zh_CN,
  "zh-CN": zh_CN,
  ko: ko_KR,
  "ko-KR": ko_KR,
  nl: nl_NL,
  "nl-NL": nl_NL,
  pl: pl_PL,
  "pl-PL": pl_PL
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en-US",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
