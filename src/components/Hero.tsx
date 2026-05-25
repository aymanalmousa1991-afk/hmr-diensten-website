import Image from "next/image";
import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl"></div>
      </div>

      <Container className="relative py-16 lg:py-24">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/uploads/logo/logo.png"
                  alt="HMR DIENSTEN Logo"
                  width={60}
                  height={60}
                  className="w-15 h-15 rounded-xl shadow-lg"
                  priority
                />
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-primary bg-brand-primary/10 rounded-full">
                  <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                  Altijd binnen 24 uur beschikbaar
                </div>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
                Professioneel{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-600">
                  Schoonmaakbedrijf
                </span>{" "}
                voor heel Nederland
              </h1>
              <p className="py-6 text-xl leading-relaxed text-gray-600 lg:text-2xl">
                HMR DIENSTEN uit Eindhoven, actief door heel Nederland. Voor
                woningen, flats, scholen, hotels en meer. Wij zorgen
                voor een stralend schone omgeving, waar je ook bent.
              </p>
              <div className="flex flex-col items-start space-y-4 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a href="#offerte" className="btn-primary">
                  Gratis Offerte Aanvragen
                </a>
                <a
                  href="https://wa.me/310635698144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Ons
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gecertificeerd
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verzekerd
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Milieuvriendelijk
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-blue-500/20 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/uploads/fotos/foto (10).png"
                  alt="HMR DIENSTEN - Professionele schoonmaak in heel Nederland"
                  width={616}
                  height={617}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay met stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 pt-16">
                  <div className="grid grid-cols-3 gap-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">220+</div>
                      <div className="text-xs text-white/80">Tevreden klanten</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-xs text-white/80">Jaar ervaring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">4.7</div>
                      <div className="text-xs text-white/80">Gem. score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
  

