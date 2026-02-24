import en from './locales/en';
import hu from './locales/hu';
import de from './locales/de';
import ro from './locales/ro';
import { createI18n } from 'vue-i18n';

export const locales = {
  en,
  hu,
  de,
  ro,
} as const;

export type AppLocale = keyof typeof locales;

function detectLocale(): AppLocale {
  const uiLang = typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en';

  const short = uiLang.toLowerCase().split('-')[0] as AppLocale;
  return (Object.keys(locales) as AppLocale[]).includes(short) ? short : 'en';
}

export function createAppI18n(locale?: AppLocale) {
  return createI18n({
    legacy: false,
    locale: locale || detectLocale(),
    fallbackLocale: 'en',
    messages: locales,
  });
}
