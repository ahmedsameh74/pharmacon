import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

import Accordion from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'FAQ | PharmaconEG',
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
    'FAQ',
    'Frequently Asked Questions',
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
    url: `${process.env.NEXT_PUBLIC_APP_URL}/faq`,
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

export default function Faq() {
  const t = useTranslations();
  const items = [
    { title: t('whoWeAre'), children: <p>{t('noSellPaymentProviders')}</p> },
    { title: t('ourMission'), children: <p>{t('noSellPaymentProviders')}</p> },
    { title: t('ourVision'), children: <p>{t('noSellPaymentProviders')}</p> }
  ];
  return (
    <div className="p-6 max-w-7xl mx-auto container space-y-6 h-[calc(100vh-275px)]">
      <h1 className="text-2xl mb-4 text-center">{t('faq')}</h1>
      <Accordion items={items} />
    </div>
  );
}
