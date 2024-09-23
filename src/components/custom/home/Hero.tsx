import { useLocale, useTranslations } from 'next-intl';

export default function Hero({ image }: { image: string }) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section
      className="relative w-full h-[75vh] bg-cover bg-center flex items-center justify-start"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-left text-white px-4 md:px-16 flex items-center">
        {/* Text Content */}
        <div>
          <div className="flex items-center mb-4">
            <div
              className={`w-8 h-[2px] md:w-16 bg-blue-500 ${locale === 'en' ? 'mr-2 md:mr-4' : 'ml-2 md:ml-4'}`}
            ></div>{' '}
            {/* Adjusted for smaller screens */}
            <h1 className="text-base md:text-lg lg:text-xl font-bold">
              {t('heroTitle')}
            </h1>{' '}
            {/* Font size adjusted */}
          </div>
          <p className="text-2xl md:text-4xl lg:text-6xl mb-6 w-full md:w-2/3 text-start">
            {t('heroDesc')}
          </p>{' '}
          {/* Text adjusted for various screens */}
          <p className="text-sm md:text-lg lg:text-xl font-light w-full md:w-3/4 text-start">
            {/* {t('heroPara')} */}
            Because Health Deserves Quality
          </p>
        </div>
      </div>
    </section>
  );
}
