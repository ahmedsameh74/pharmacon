import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OurService() {
  const t = useTranslations();
  const locale = useLocale()

  return (
    <section className="max-w-7xl mx-auto p-6 bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 lg:my-8 md:my-0">
      {/* First Div */}
      <div className="flex flex-col justify-between items-start h-full gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#01547E]">
          {t('ourService')}
        </h2>
        <p className="text-gray-600 font-light text-base md:text-lg">
          {t('serviceOffer')}
        </p>
        <div className="w-full">
          <Image
            src="/assets/drr.png"
            width={500}
            height={500}
            alt="Our Service"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Second Div */}
      <div className="flex flex-col justify-between items-start h-full gap-4">
        <div className="w-full">
          <Image
            src="/assets/drrr.png"
            width={500}
            height={500}
            alt="Our Service"
            className="w-full h-auto"
          />
        </div>
        <p className="text-gray-600 font-light text-base md:text-lg">
          Quis ipsoum suspendises uitrices gravida rusus commodo viverra
          maecenas accumsan. Quis ipsoum suspendises uitrices gravida rusus
          commodo viverra maecenas accumsan.
        </p>
        <Link
          href={`/${locale}/products`}
          className="text-white bg-[#01547E] hover:bg-[#088bcd] px-4 py-2 rounded-lg text-sm font-semibold"
        >
          {t('ourProducts')}
        </Link>
      </div>
    </section>
  );
}
