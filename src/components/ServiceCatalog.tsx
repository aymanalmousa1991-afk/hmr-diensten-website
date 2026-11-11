import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import {
  getServicesByCategory,
  services,
} from "@/lib/services";

type ServiceItem = (typeof services)[number];

const CategoryCard = ({
  service,
  chip,
}: {
  service: ServiceItem;
  chip: string;
}) => (
  <Link
    href={`/diensten/${service.slug}`}
    className="group card card-hover overflow-hidden flex flex-col w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
  >
    <div className="relative h-48 lg:h-52 overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
      <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/15 backdrop-blur-md rounded-full ring-1 ring-white/25">
        {chip}
      </span>
    </div>
    <div className="relative p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {service.short}
      </p>
      <span className="mt-5 inline-flex items-center justify-between">
        <span className="text-sm font-semibold text-brand-blue">
          Bekijk dienst
        </span>
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-accent/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:translate-x-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </span>
    </div>
  </Link>
);

export const ServiceCatalog = () => {
  const schoonmaak = getServicesByCategory("schoonmaak");
  const verhuizing = getServicesByCategory("verhuizing");

  return (
    <>
      {/* Schoonmaak diensten */}
      <section id="diensten" className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/3 h-72 bg-dots opacity-60 [mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none"
          aria-hidden="true"
        ></div>
        <Container className="relative">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
              <div className="max-w-2xl">
                <span className="eyebrow">Onze diensten</span>
                <h2 className="section-title mt-4">
                  Professionele schoonmaak voor elke ruimte
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Voor woningen en bedrijven in Eindhoven &amp; Noord-Brabant.
                  Bekijk ons aanbod en vraag een gratis offerte aan.
                </p>
              </div>
              <a
                href="#offerte"
                className="hidden lg:inline-flex items-center gap-2 text-base font-semibold text-brand-blue hover:gap-3 transition-all whitespace-nowrap"
              >
                Direct offerte aanvragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {schoonmaak.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 100} className="flex">
                <CategoryCard service={service} chip="Schoonmaak" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Verhuizing & ontruiming diensten */}
      <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-1/3 h-72 bg-dots opacity-60 [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none"
          aria-hidden="true"
        ></div>
        <Container className="relative">
          <Reveal>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <span className="eyebrow">Verhuizen &amp; ontruimen</span>
              <h2 className="section-title mt-4">
                Verhuizing &amp; Ontruiming
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Complete verhuizing- en ontruimingsdiensten in Eindhoven &amp;
                Noord-Brabant. Van woningontruiming tot bedrijfsverhuizing, wij
                regelen het voor u.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {verhuizing.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 100} className="flex">
                <CategoryCard service={service} chip="Verhuizing" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
