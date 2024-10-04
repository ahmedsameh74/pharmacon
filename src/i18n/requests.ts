import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  return {
    messages: (
      await (locale === 'en'
        ? import('../../locales/en.json')
        : import(`../../locales/${locale}.json`))
    ).default
  };
});
