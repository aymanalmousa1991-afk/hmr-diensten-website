import Image from "next/image";
import { Container } from "@/components/Container";

const WhatsappIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Star = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/40">
      {/* Achtergrond-decoratie */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"></div>
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-accent/10 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-brand-sky/10 blur-3xl"></div>
      </div>

      <Container className="relative pt-28 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-14 lg:gap-10 lg:grid-cols-12">
          {/* Tekstkolom */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-2xl">
            <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-blue bg-white rounded-full shadow-card ring-1 ring-slate-100">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-brand-accent animate-pulse-ring"></span>
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-brand-accent"></span>
              </span>
              Reactie binnen 24 uur
            </div>

            <h1 className="hero-enter hero-enter-2 mt-6 text-4xl leading-[1.1] sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900">
              Betrouwbaar{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-accent to-brand-sky">
                  schoonmaakbedrijf
                </span>
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-3 text-brand-accent/40"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9.5C60 3.5 150 2 298 7.5"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              in Eindhoven &amp; Noord&#8209;Brabant
            </h1>

            <p className="hero-enter hero-enter-3 mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl">
              Zorgeloos schoon voor bedrijven en particulieren. Van kantoor- en
              winkelreiniging tot verhuisschoonmaak &mdash; met vaste kwaliteit
              en duidelijke afspraken.
            </p>

            <div className="hero-enter hero-enter-4 mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#offerte" className="btn-primary">
                Gratis Offerte Aanvragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://wa.me/310635698144"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsappIcon />
                Stuur ons een WhatsApp
              </a>
            </div>

            {/* Social proof */}
            <div className="hero-enter hero-enter-5 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <strong className="font-bold text-gray-900">4,7</strong> van
                  220+ klanten
                </p>
              </div>
              <div className="hidden sm:block w-px h-6 bg-slate-200" aria-hidden="true"></div>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600">
                {["Gecertificeerd", "Verzekerd", "Milieuvriendelijk"].map(
                  (label) => (
                    <li key={label} className="flex items-center gap-1.5">
                      <svg className="w-[18px] h-[18px] text-emerald-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {label}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Beeldkolom */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative max-w-xl mx-auto hero-image-enter">
              {/* Gedraaid gradient-vlak achter de foto */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 rounded-[2.5rem] bg-gradient-to-br from-brand-accent/25 via-brand-sky/20 to-transparent"
                aria-hidden="true"
              ></div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-soft ring-1 ring-slate-900/5">
                <Image
                  src="/uploads/diensten/hero_hmr_diensten.jpg"
                  alt="HMR Diensten - Professionele schoonmaak in Eindhoven & Noord-Brabant"
                  width={616}
                  height={617}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Zwevende badge: eco */}
              <div className="absolute -left-3 top-8 sm:-left-6 animate-float">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-soft ring-1 ring-slate-100">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">100% milieuvriendelijk</p>
                    <p className="text-xs text-gray-500">Duurzame middelen</p>
                  </div>
                </div>
              </div>

              {/* Zwevende badge: beoordeling */}
              <div className="absolute -right-2 bottom-10 sm:-right-5 animate-float-delayed">
                <div className="rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-soft ring-1 ring-slate-100">
                  <div className="flex items-center gap-1" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-1.5 text-sm font-bold text-gray-900">
                    4,7 / 5 gemiddeld
                  </p>
                  <p className="text-xs text-gray-500">220+ beoordelingen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Tagline-balk */}
      <div className="relative bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none" aria-hidden="true"></div>
        <Container className="!pt-5 !pb-24 relative">
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center text-base font-semibold tracking-wide text-white sm:text-lg font-display">
            <span>Vaste kwaliteit.</span>
            <span className="hidden sm:inline text-brand-sky" aria-hidden="true">&bull;</span>
            <span>Duidelijke afspraken.</span>
            <span className="hidden sm:inline text-brand-sky" aria-hidden="true">&bull;</span>
            <span>Zorgeloos schoon.</span>
          </p>
        </Container>
      </div>
    </section>
  );
};
