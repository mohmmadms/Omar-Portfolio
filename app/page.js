import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Process from "@/components/sections/Process";
import Clients from "@/components/sections/Clients";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div id="top">
      <Hero />
      <TrustIndicators />
      <Services />
      <About />
      <Founder />
      <Process />
      <Clients />
      <FinalCta />
      <Contact />
      <Footer />
    </div>
  );
}
