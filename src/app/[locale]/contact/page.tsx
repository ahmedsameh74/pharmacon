import { Metadata } from 'next';
import Head from 'next/head';

import ContactSection from '@/components/custom/contact/Contact';
// import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactHeader from '@/components/custom/contact/ContactHeader';

export const metadata: Metadata = {
  title: 'Contact Us | PharmaconEG',
  keywords: ['Contact', 'Contact Us', 'Contact Pharmacon Egypt'],
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
  }
  // openGraph: {
  //   title: 'PharmaconEG',
  //   description: 'Because Health Deserves Quality',
  //   url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
  //   siteName: 'PharmaconEG',
  //   images: [
  //     {
  //       url: '../assets/blueLogo.svg',
  //       width: 400,
  //       height: 200
  //     }
  //   ],
  //   locale: 'en-US',
  //   type: 'website'
  // },
  // twitter: {
  //   title: 'PharmaconEG',
  //   description: 'Because Health Deserves Quality',
  //   card: 'summary_large_image',
  //   images: ['../assets/blueLogo.svg']
  // }
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/contact`}
        />
      </Head>
      <ContactHeader />
      <ContactSection />
    </>
  );
}
