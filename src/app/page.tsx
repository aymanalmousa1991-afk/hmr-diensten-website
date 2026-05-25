import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Faq />
    </>
  );
}
