import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* <Trusted /> */}
        <Services />
        <WhyChooseUs />
        <Process />
        <Stats />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
