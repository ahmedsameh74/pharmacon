import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <footer
      className="bg-[#01547E] text-white py-8"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* First Row */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center md:items-start">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col items-center md:items-start mb-8 lg:mb-0">
          <div className="mb-4 flex justify-center items-center">
            {/* Logo */}
            <Image
              src="/assets/whiteLogo.svg"
              alt="Logo"
              className="w-auto h-auto"
              width={100}
              height={100}
            />
          </div>
          <p className="text-sm text-center lg:text-left">
            Your trusted source for medication reviews and health advice.
          </p>
        </div>

        {/* Right Section: 3 Columns of Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full lg:w-auto">
          {/* Column 1 */}
          <div>
            <ul
              className={`text-center ${locale === 'en' ? 'lg:text-left' : 'lg:text-right'}`}
            >
              <li>
                <Link href={`/${locale}/about`} className="hover:underline">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  {t('careers')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  {t('blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul
              className={`text-center ${locale === 'en' ? 'lg:text-left' : 'lg:text-right'}`}
            >
              <li>
                <Link href={`/${locale}/contact`} className="hover:underline">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:underline">
                  {t('helpCenter')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul
              className={`text-center ${locale === 'en' ? 'lg:text-left' : 'lg:text-right'}`}
            >
              <li>
                <Link href="/terms" className="hover:underline">
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  {t('cookiePolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* White Line Separator */}
      <hr className="border-t-2 border-white my-6 mx-auto max-w-7xl" />

      {/* Second Row: Policies */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center text-sm">
        <p className="mb-4 lg:mb-0 text-center lg:text-left">
          {t('copyright')}
        </p>
        <div
          className={`flex ${locale === 'ar' ? 'space-x-reverse' : ''} space-x-2`}
        >
          <Link href="/terms" className="hover:underline">
            {t('termsOfService')}
          </Link>
          <p>|</p>
          <Link href="/privacy" className="hover:underline">
            {t('privacyPolicy')}
          </Link>
          <p>|</p>
          <Link href="/cookies" className="hover:underline">
            {t('cookiePolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
