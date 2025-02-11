import 'vue-i18n';

declare module 'vue' {
  interface ComponentCustomProperties {
    $i18n: {
      locale: string;
      fallbackLocale: string;
      setLocaleMessage: (locale: string, messages: object) => void;
      [key: string]: unknown;
    };
    $t: (key: string, ...params: unknown[]) => string;
  }
}
