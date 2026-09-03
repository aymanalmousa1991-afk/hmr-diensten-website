import { Hero } from "@/components/Hero";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCatalog />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Faq />
    </>
  );
}

