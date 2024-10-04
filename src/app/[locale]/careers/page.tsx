import { Metadata } from 'next';

import AboutHead from '@/components/custom/about/AboutHead';
// import Form from '@/components/ui/Form';
import CareersComp from '@/components/custom/careers/Careers';

export const metadata: Metadata = {
  title: 'Careers | PharmaconEG',
  manifest: '/manifest.webmanifest',
  keywords: ['Careers', 'Pharmacon Careers', 'Jobs', 'Careers Pharmacon Egypt'],
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
    url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
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
  }
};

export default function Careers() {
  return (
    <>
      <AboutHead image={'../../assets/aboutUsSection.webp'} title={'careers'} />
      {/* <StatsBanner />
      <OurService />
      <WhoWeAreDynamic />
      <ContactSectionDynamic /> */}
      <CareersComp />
      {/* <Form /> */}
    </>
  );
}
