import { useLocale, useTranslations } from 'next-intl';

export default function StatsBanner() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <div
      className={`w-full bg-[#01547E] text-white py-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 ${locale === 'en' ? 'md:space-x-12' : 'md:space-x-reverse md:space-x-12'}`}
    >
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">3.5</p>{' '}
        {/* Font size adjusted */}
        <p className="text-base md:text-lg font-semibold">{t('rating')}</p>{' '}
        {/* Text alignment ensured */}
      </div>
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">2.8k+</p>
        <p className="text-base md:text-lg font-semibold">
          {t('worldClients')}
        </p>
      </div>
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">12+</p>
        <p className="text-base md:text-lg font-semibold">
          {t('yearsOfExperience')}
        </p>
      </div>
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">30+</p>
        <p className="text-base md:text-lg font-semibold">
          {t('trustedCompanies')}
        </p>
      </div>
    </div>
  );
}
