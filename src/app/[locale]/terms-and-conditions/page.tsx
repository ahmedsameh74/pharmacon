import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Pharmacon Egypt',
  description: 'Terms and Conditions for using PharmaconEG',
  icons: {
    icon: '../assets/favicon.ico',
    apple: '../assets/favicon.ico'
  },
  manifest: '/manifest.webmanifest',
  keywords: [
    'Pharmacon',
    'PharmaconEG',
    'EG',
    'eg',
    'Health',
    'Quality',
    'Products',
    'Pharmacy',
    'Terms & Conditions',
    'policy',
    'فارماكون'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: 'PharmaconEG',
    description: 'Terms and Conditions for using PharmaconEG',
    url: 'https://PharmaconEGeg-dev.vercel.app/',
    siteName: 'PharmaconEG',
    images: [
      {
        url: '../assets/blueLogo.svg',
        width: 400,
        height: 200
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title: 'PharmaconEG',
    description: 'Terms and Conditions for using PharmaconEG',
    card: 'summary_large_image',
    images: ['../assets/blueLogo.svg']
  }
};

export default function TermsAndConditions() {
  const t = useTranslations();
  return (
    <>
      <header className="bg-[#01547E] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold">
            {t('termsAndConditionsHeader')}
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('informationAboutUs')}</h2>
          <p className="leading-7 mb-4">{t('informationAboutUsDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('termsAndConditions')}</h2>
          <p className="leading-7 mb-4">{t('termsAndConditionsDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('reserveRight')}</h2>
          <ul className="list-disc list-inside leading-7">
            <li>{t('reserveRightAmend')}</li>
            <li>{t('reserveRightRefuse')}</li>
            <li>{t('reserveRightTerminate')}</li>
            <li>{t('reserveRightModify')}</li>
            <li>{t('reserveRightCancel')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('registration')}</h2>
          <p className="leading-7 mb-4">{t('registrationDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('yourInformation')}</h2>
          <p className="leading-7 mb-4">{t('yourInformationDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {t('intellectualProperty')}
          </h2>
          <p className="leading-7 mb-4">{t('intellectualPropertyDesc')}</p>
          <p className="leading-7 mb-4">{t('intellectualPropertyUse')}</p>
          <p className="leading-7 mb-4">{t('brandNames')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('userContent')}</h2>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('transferOfRights')}</h2>
          <p className="leading-7 mb-4">{t('transferOfRightsDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('viruses')}</h2>
          <p className="leading-7 mb-4">{t('virusesDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {t('limitationOfLiability')}
          </h2>
          <p className="leading-7 mb-4">{t('limitationOfLiabilityDesc')}</p>
          <p className="leading-7 mb-4">{t('websiteSecurity')}</p>
          <p className="leading-7 mb-4">{t('disclaimer')}</p>
          <p className="leading-7 mb-4">{t('disclaimerEconomicLoss')}</p>
          <p className="leading-7 mb-4">{t('disclaimerGoodwill')}</p>
          <p className="leading-7 mb-4">{t('disclaimerSpecialLosses')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('liabilityExclusion')}</h2>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('general')}</h2>
          <p className="leading-7 mb-4">{t('entireAgreement')}</p>
          <p className="leading-7 mb-4">{t('law')}</p>
          <p className="leading-7 mb-4">{t('waiver')}</p>
          <p className="leading-7 mb-4">{t('survival')}</p>
        </section>
      </main>
    </>
  );
}
