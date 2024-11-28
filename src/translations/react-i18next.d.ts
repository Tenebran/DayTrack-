import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      en: typeof import('./en/en.json');
      ru: typeof import('./ru/ru.json');
    };
  }
}
