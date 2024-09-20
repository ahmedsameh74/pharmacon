import dynamic from 'next/dynamic';

// import About from '@/components/custom/home/About';
// import ContactSection from '@/components/custom/home/ContactSection';
import Hero from '@/components/custom/home/Hero';
import Products from '@/components/custom/home/Products';
// import StatsBanner from '@/components/custom/home/StatsBanner';

const ContactDynamic = dynamic(
  () => import('@/components/custom/home/ContactSection'),
  { ssr: false }
);
const AboutDynamic = dynamic(() => import('@/components/custom/home/About'), {
  ssr: false
});
const StatsDynamic = dynamic(
  () => import('@/components/custom/home/StatsBanner'),
  {
    ssr: false
  }
);

export default function Home() {
  return (
    <>
      <Hero image={'../assets/heroSection.webp'} />
      <StatsDynamic />
      <AboutDynamic />
      <Products />
      <ContactDynamic />
    </>
  );
}
