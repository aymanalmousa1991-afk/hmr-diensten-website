import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import {
  getServicesByCategory,
  services,
} from "@/lib/services";

type ServiceItem = (typeof services)[number];

const CategoryCard = ({ service }: { service: ServiceItem }) => (
  <Link
    href={`/diensten/${service.slug}`}
    className="group card overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    <div className="relative h-40 lg:h-44 overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-accent">
        Bekijk dienst
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
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
      <section id="diensten" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Onze Schoonmaakdiensten
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professionele schoonmaak voor woningen en bedrijven door heel
              Nederland. Bekijk ons aanbod en vraag een gratis offerte aan.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {schoonmaak.map((service) => (
              <CategoryCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Verhuizing & transport diensten */}
      <section className="py-20 bg-brand-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Verhuizing & Transport
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete verhuis- en transportdiensten. Van woningontruiming tot
              bedrijfsverhuizing, wij regelen het voor u.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {verhuizing.map((service) => (
              <CategoryCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
