import type { LocaleContent } from './types';
import { enContent } from './en';
import { plContent } from './pl';
import { ukContent } from './uk';

export type { LocaleContent } from './types';

export const defaultLocale = 'pl' as const;
export const locales = ['pl', 'en', 'uk'] as const;
export type Locale = (typeof locales)[number];
export const prefixedLocales = ['en', 'uk'] as const;

const localeContentMap: Record<Locale, LocaleContent> = {
  pl: plContent,
  en: enContent,
  uk: ukContent,
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isPrefixedLocale(value: string): value is 'en' | 'uk' {
  return (prefixedLocales as readonly string[]).includes(value);
}

export function getContent(locale: Locale): LocaleContent {
  return localeContentMap[locale];
}

export function getLocalePrefix(locale: Locale): '' | '/en' | '/uk' {
  if (locale === 'pl') {
    return '';
  }

  return `/${locale}` as '/en' | '/uk';
}

export function getLocalizedPath(locale: Locale, path: string): string {
  if (!path || path === '') {
    path = '/';
  }

  if (
    /^[a-z]+:\/\//i.test(path) ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }

  const hashIndex = path.indexOf('#');
  const beforeHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';

  const prefix = getLocalePrefix(locale);
  const normalizedPath = beforeHash === '' ? '/' : beforeHash;
  const absolutePath = normalizedPath.startsWith('/')
    ? normalizedPath
    : `/${normalizedPath}`;

  if (absolutePath === '/') {
    return `${prefix || '/'}${hash}`;
  }

  return `${prefix}${absolutePath}${hash}`;
}

export function getLanguageSwitchPath(targetLocale: Locale, currentPath: string): string {
  const normalizedInput = currentPath && currentPath !== '' ? currentPath : '/';
  const hashIndex = normalizedInput.indexOf('#');
  const beforeHash = hashIndex >= 0 ? normalizedInput.slice(0, hashIndex) : normalizedInput;
  const hash = hashIndex >= 0 ? normalizedInput.slice(hashIndex) : '';

  const absolutePath = beforeHash.startsWith('/') ? beforeHash : `/${beforeHash}`;
  const withoutLocalePrefix = absolutePath.replace(/^\/(?:en|uk)(?=\/|$|\?)/, '') || '/';

  return getLocalizedPath(targetLocale, `${withoutLocalePrefix}${hash}`);
}

export { enContent, plContent, ukContent };
export { plContent as siteContent };
