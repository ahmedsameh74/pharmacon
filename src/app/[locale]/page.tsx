import About from "@/components/custom/home/About";
import ContactSection from "@/components/custom/home/ContactSection";
import Hero from "@/components/custom/home/Hero";
import Products from "@/components/custom/home/Products";
import StatsBanner from "@/components/custom/home/StatsBanner";

export default function Home() {
  return (
    <>
    <Hero/>
    <StatsBanner/>
    <About/>
    <Products/>
    <ContactSection/>
    </>
  );
}
