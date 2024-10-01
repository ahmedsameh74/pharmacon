import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

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
          <div className="mb-4 flex justify-center items-center bg-[#fff] p-2 rounded-sm">
            {/* Logo */}
            <Image
              src="/assets/blueLogo.svg"
              alt="Logo"
              className="w-auto h-auto"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
          <p className="text-sm text-center lg:text-left">{t('footerPara')}</p>
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
                <Link href={`/${locale}/contact`} className="hover:underline">
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="hover:underline">
                  {t('faq')}
                </Link>
              </li>

              {/* <li>
                <Link href="/careers" className="hover:underline">
                  {t('careers')}
                </Link>
              </li> */}
              {/* <li>
                <Link href="/blog" className="hover:underline">
                  {t('blog')}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul
              className={`text-center ${locale === 'en' ? 'lg:text-left' : 'lg:text-right'} gap-4`}
            >
              <li>
                <Link
                  href={`/${locale}/terms-and-conditions`}
                  className="hover:underline"
                >
                  {t('termsOfService')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="hover:underline"
                >
                  {t('privacyPolicy')}
                </Link>
              </li>
              {/* <li className="flex flex-row gap-4 mt-2 items-center justify-center">
                <a
                  href="https://www.facebook.com/pharmaconEgypt"
                  target="_blank"
                  className="text-md"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/pharmacon-pharmaceuticals/"
                  target="_blank"
                  className="text-md"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.linkedin.com/company/pharmacon-pharmaceuticals/"
                  target="_blank"
                  className="text-md"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul
              className={`text-center ${locale === 'en' ? 'lg:text-left' : 'lg:text-right'}`}
            >
              <li className="flex flex-row gap-4 mt-2 items-center justify-center">
                <a
                  href="https://www.facebook.com/pharmaconEgypt"
                  target="_blank"
                  className="text-md"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/pharmacon-pharmaceuticals/"
                  target="_blank"
                  className="text-md"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@pharmaconpharmaceuticals6630"
                  target="_blank"
                  className="text-md"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
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
          <Link
            href={`/${locale}/terms-and-conditions`}
            className="hover:underline"
          >
            {t('termsOfService')}
          </Link>
          <p>|</p>
          <Link href={`/${locale}/privacy-policy`} className="hover:underline">
            {t('privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
