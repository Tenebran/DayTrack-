import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from "./en/en.json";
import ru from "./ru/ru.json";
import de from "./de/de.json";
import zh from "./zh/zh.json";
import ko from "./ko/ko.json";
import fr from "./fr/fr.json";
import ja from "./ja/ja.json";
import nl from "./nl/nl.json";
import sv from "./sv/sv.json";
import es from "./es/es.json";
import it from "./it/it.json";
import pl from "./pl/pl.json";
import tr from "./tr/tr.json";
import ar from "./ar/ar.json";
import pt from "./pt/pt.json";

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      de: { translation: de },
      zh: { translation: zh },
      ko: { translation: ko },
      fr: { translation: fr },
      ja: { translation: ja },
      nl: { translation: nl },
      sv: { translation: sv },
      es: { translation: es },
      it: { translation: it },
      pl: { translation: pl },
      tr: { translation: tr },
      ar: { translation: ar },
      pt: { translation: pt },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
