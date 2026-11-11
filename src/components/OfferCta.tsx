import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export const OfferCta = () => {
  return (
    <section id="offerte" className="py-16 lg:py-24 bg-white">
      <Container>
        <Reveal className="reveal-zoom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-dark via-brand-primary to-brand-blue px-6 py-14 lg:px-12 lg:py-20 text-center shadow-soft">
            {/* Decoratie */}
            <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none" aria-hidden="true"></div>
            <div
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-accent/25 blur-3xl pointer-events-none"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-32 -right-24 w-80 h-80 rounded-full bg-brand-sky/15 blur-3xl pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-sky mb-4">
                Vaste kwaliteit. Duidelijke afspraken. Zorgeloos schoon.
              </p>
              <h2 className="text-3xl lg:text-5xl font-extrabold font-display text-white mb-5 leading-tight">
                Vraag vandaag nog een
                <br className="hidden sm:block" /> gratis offerte aan
              </h2>
              <p className="text-lg text-blue-100/90 max-w-2xl mx-auto mb-10">
                Geen verplichtingen, vrijblijvend advies op maat. Wij nemen
                binnen 24 uur contact met u op.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/310635698144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Stuur ons een WhatsApp
                </a>
                <a
                  href="tel:0635698144"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base lg:text-lg font-semibold text-white rounded-2xl bg-white/10 ring-1 ring-white/25 backdrop-blur hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Bel 06-35698144
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
