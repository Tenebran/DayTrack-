import "react-i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      en: typeof import("./src/translations/en/en.json");
      ru: typeof import("./src/translations/ru/ru.json");
    };
  }
}
