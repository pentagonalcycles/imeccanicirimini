import it from '../i18n/it.json';
import en from '../i18n/en.json';

const translations = { it, en };

export type Locale = 'it' | 'en';

export function useTranslations(locale: Locale) {
  return translations[locale] || translations.it;
}

export function getLocaleFromUrl(url: URL): Locale {
  const path = url.pathname;
  if (path.startsWith('/en')) return 'en';
  return 'it';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'it') return path;
  return `/en${path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'it' ? 'en' : 'it';
}
