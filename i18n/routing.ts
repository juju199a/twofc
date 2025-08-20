import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ko', 'ja', 'th'],
  defaultLocale: 'ko',
  localeDetection: false
});