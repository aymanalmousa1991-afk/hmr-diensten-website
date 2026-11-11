import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServiceCatalog />
      <Process />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Faq />
    </>
  );
}
