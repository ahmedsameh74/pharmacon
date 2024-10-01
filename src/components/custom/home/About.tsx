import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <>
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
        <div className="flex items-center mb-4 md:mb-6">
          <div
            className={`w-16 h-[2px] bg-blue-500 ${locale === 'ar' ? 'ml-4' : 'mr-4'}`}
          ></div>
          <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
            {t('company')}
          </h1>
        </div>
        <p className="text-gray-600 ml-4 md:ml-20">{t('homeDesc')}</p>
      </div>

      <div className="max-w-4xl mx-auto my-8 p-2 bg-white rounded-lg space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex justify-center">
            <Image
              src="/assets/drrr.png"
              alt="About"
              style={{ width: 'auto', height: 'auto' }}
              width={300}
              height={300}
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl md:text-4xl font-bold text-[#01547E] mb-4">
              {t('NotJust')}
            </h1>
            <p className="text-gray-600 mb-6">
              Pharmacon is Germany -Egyptian promising pharmaceutical company
              dedicated to promote under license high quality products in the
              Egyptian market. Pharmacon founded in the Egyptian pharmaceutical
              market since 2004. Our aim is to improve...
            </p>
            <Link
              href={`/${locale}/about`}
              className="bg-white hover:bg-[#01547E] text-[#01547E] hover:text-white border border-[#01547E] px-4 py-2 rounded-lg transition duration-300"
            >
              {/* {t('learnMore')} */}
              More About Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-4">
            <h1 className="text-2xl md:text-4xl font-bold text-[#01547E] mb-4">
              Global Innovation, Local Care
            </h1>
            <p className="text-gray-600 mb-6">
              Our collaborations with global pharmaceutical, biological and
              medical device leaders from Germany, Switzerland, Italy, Romania,
              and other regions enable us to provide you with cutting-edge
              healthcare solutions. We offer Egyptian patients access to the
              most advanced healthcare technologies. Our tailored solutions
              bridge the gap between international advancements and local needs.
            </p>
            <Link
              href={`/${locale}/about`}
              className="bg-white hover:bg-[#01547E] mt-2 text-[#01547E] hover:text-white border border-[#01547E] px-4 py-2 rounded-lg transition duration-300"
            >
              More About Us
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/dr.jpg"
              alt="About"
              style={{ width: 'auto', height: 'auto' }}
              width={300}
              height={300}
              loading="lazy"
              className="rounded-lg object-cover"
              // objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
