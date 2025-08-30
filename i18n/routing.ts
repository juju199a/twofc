import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ko', 'ja', 'th', 'vi'],
  defaultLocale: 'ko',
  localeDetection: false
});