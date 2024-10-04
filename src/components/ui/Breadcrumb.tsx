'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl'; // Import useTranslations for localization

const Breadcrumb = ({ titleColor }: { titleColor?: string }) => {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en'; // Extract locale from pathname
  const t = useTranslations(); // Access translations for breadcrumbs

  const breadcrumbItems = useMemo(() => {
    // Remove locale and leading/trailing slashes
    const paths = pathname?.split('/').filter(Boolean).slice(1);
    const breadcrumbs = paths?.map((path, index) => {
      const href = `/${locale}/${paths.slice(0, index + 1).join('/')}`;

      // Translate the breadcrumb label based on the path
      const label = t(path) || path.charAt(0).toUpperCase() + path.slice(1);

      return { href, label };
    });

    // Add localized 'Home' at the beginning
    breadcrumbs?.unshift({ href: `/${locale}`, label: t('home') });

    return breadcrumbs;
  }, [pathname, locale, t]);

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex space-x-4">
        {breadcrumbItems?.map((item, index) => (
          <li
            key={item.href}
            aria-current={
              index === breadcrumbItems.length - 1 ? 'page' : undefined
            }
          >
            {index > 0 && (
              <span className="text-gray-500 text-base md:text-lg lg:text-xl font-light">
                /{' '}
              </span>
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-light text-base md:text-lg lg:text-xl text-gray-400">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-white hover:text-[#088bcd] text-base md:text-lg lg:text-xl font-light"
                style={{ color: titleColor ? titleColor : 'white' }}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
