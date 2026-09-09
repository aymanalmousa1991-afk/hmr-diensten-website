import Image from "next/image";
import { Container } from "@/components/Container";

const benefits = [
  {
    title: "Ervaren & Betrouwbaar",
    description:
      "Meer dan 5 jaar ervaring in de schoonmaakbranche. Wij zijn gecertificeerd, verzekerd en staan bekend om onze betrouwbaarheid.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Milieuvriendelijk",
    description:
      "Wij gebruiken uitsluitend milieuvriendelijke schoonmaakmiddelen zonder schadelijke chemicaliën. Goed voor u en het milieu.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Flexibel & Snel",
    description:
      "Altijd binnen 24 uur beschikbaar voor spoedgevallen. Wij passen ons aan uw schema aan, ook in het weekend.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "100% Tevredenheid",
    description:
      "Uw tevredenheid staat voorop. Niet tevreden? Dan komen wij kosteloos terug om het perfect te maken.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Transparante Prijzen",
    description:
      "Geen verborgen kosten, geen verrassingen. U ontvangt vooraf een duidelijke prijsopgave voor al onze diensten.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m26.25 0V3.75" />
      </svg>
    ),
  },
  {
    title: "Regionaal in Noord-Brabant",
    description:
      "Als schoonmaakbedrijf uit Eindhoven zijn wij actief in heel Eindhoven &amp; Noord-Brabant. Held, Helmond en omliggende regio's bedienen wij gemakkelijk.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export const WhyUs = () => {
  return (
    <section id="waarom-wij" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Waarom HMR Diensten?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij maken schoon, u geniet van het resultaat. Ontdek waarom zoveel
            klanten in Eindhoven &amp; Noord-Brabant voor ons kiezen.
          </p>
        </div>

        {/* Milieuvriendelijk callout */}
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-emerald-600 text-white rounded-2xl px-6 py-5 mb-12 shadow-lg">
          <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-lg font-bold">
              Wij werken uitsluitend met milieuvriendelijke schoonmaakmiddelen
            </p>
            <p className="text-sm text-emerald-100">
              Gecertificeerde, duurzame producten zonder schadelijke
              chemicali\u00ebn. Veilig voor mens, dier, uw interieur en het milieu.
            </p>
          </div>
          <div className="text-2xl font-extrabold tracking-wide whitespace-nowrap">
            100% ECO
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Linker kolom: voordelen */}
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const isEco = benefit.title === "Milieuvriendelijk";
              return (
                <div
                  key={benefit.title}
                  className={`flex gap-5 items-start rounded-2xl transition-all ${
                    isEco
                      ? "bg-emerald-50 border-2 border-emerald-400 p-5 shadow-lg"
                      : "p-2"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                      isEco
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-brand-primary/10 text-brand-primary"
                    }`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold mb-2 ${
                        isEco ? "text-emerald-800" : "text-gray-900"
                      }`}
                    >
                      {benefit.title}
                      {isEco && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs font-bold bg-emerald-600 text-white rounded-full align-middle">
                          100% groen &amp; veilig
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rechter kolom: afbeelding */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-primary/10 rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/uploads/diensten/ons-professionele-team.jpg"
                alt="HMR Diensten - Ons professionele team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-semibold">Ons professionele team</p>
                <p className="text-white/80 text-sm">Ervaren, gecertificeerd en betrouwbaar</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
