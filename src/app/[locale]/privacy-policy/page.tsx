import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pharmacon Egypt',
  description: 'Because Health Deserves Quality',
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
    'Privacy Policy',
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
    description: 'Because Health Deserves Quality',
    url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
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
    description: 'Because Health Deserves Quality',
    card: 'summary_large_image',
    images: ['../assets/blueLogo.svg']
  }
};

export default function PrivacyPolicy() {
  const t = useTranslations();
  return (
    <>
      <header className="bg-[#01547E] text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold">{t('privacyPolicy')}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('Overview')}</h2>
          <p className="leading-7 mb-4">{t('privacyOver')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('yourAgree')}</h2>
          <p className="leading-7 mb-4">{t('pharmaSave')}</p>
          <p className="leading-7 mb-4">{t('byAgree')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('noSell')}</h2>
          <ul className="list-disc list-inside leading-7">
            <li>{t('noSellGroupCompanies')}</li>
            <li>{t('noSellFranchisors')}</li>
            <li>{t('noSellPaymentProviders')}</li>
            <li>{t('noSellGovernmentBodies')}</li>
            <li>{t('noSellAgencies')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {t('retentionAndSecurity')}
          </h2>
          <p className="leading-7 mb-4">{t('retentionAndSecurityDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('Cookies')}</h2>
          <p className="leading-7 mb-4">{t('cookieDesc')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('yourRights')}</h2>
          <ul className="list-disc list-inside leading-7">
            <li>{t('accessCopy')}</li>
            <li>{t('correctionRequest')}</li>
            <li>{t('deleteRequest')}</li>
            <li>{t('dataRestrict')}</li>
            <li>{t('dataObjection')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('changePrivacyTitle')}</h2>
          <p className="leading-7 mb-4">{t('changePrivacyDesc')}</p>
        </section>
      </main>
    </>
  );
}
