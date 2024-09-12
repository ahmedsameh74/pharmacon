import About from "@/components/custom/About";
import ContactSection from "@/components/custom/ContactSection";
import Hero from "@/components/custom/Hero";
import Products from "@/components/custom/Products";
import StatsBanner from "@/components/custom/StatsBanner";

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
