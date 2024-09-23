import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContactSection() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-[#01547E] flex flex-col justify-center items-center">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold text-white my-4 px-4 md:px-0 max-w-lg">
        {t('getFree')}
      </h1>

      {/* Paragraph */}
      <p className="text-white text-center font-light w-2/3 my-4 px-4 md:px-20">
        {/* {t('contactSection')} */}
        We&apos;re here to help! If you have any questions, feedback, or need
        assistance, feel free to reach out to us.
      </p>

      {/* Button */}
      <Link
        href={`/${locale}/contact`}
        className="bg-white hover:bg-[#3b6980] text-[#01547E] hover:text-white border border-[#01547E] px-4 py-2 rounded-lg my-4 transition duration-300"
      >
        {t('contactUs')}
      </Link>
    </div>
  );
}
