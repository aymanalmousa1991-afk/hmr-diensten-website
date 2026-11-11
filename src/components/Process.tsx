import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Vraag uw offerte aan",
    description:
      "Vul het formulier in, stuur een WhatsApp of bel ons. Vertel kort wat er schoongemaakt of verhuisd moet worden — een foto meesturen mag ook.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Ontvang een duidelijk voorstel",
    description:
      "Binnen 24 uur reageren wij met een vrijblijvende offerte op maat. Vaste prijs, duidelijke afspraken — geen verrassingen achteraf.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wij gaan voor u aan de slag",
    description:
      "Ons ervaren team komt op het afgesproken moment en levert vaste kwaliteit — met milieuvriendelijke middelen. U geniet van het resultaat.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
];

export const Process = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-brand-primary overflow-hidden">
      {/* Decoratie */}
      <div className="absolute inset-0 bg-dots-light opacity-60 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div className="absolute -bottom-40 -left-24 w-80 h-80 rounded-full bg-brand-sky/10 blur-3xl pointer-events-none" aria-hidden="true"></div>

      <Container className="relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
            <span className="eyebrow !text-brand-sky justify-center">Zo werkt het</span>
            <h2 className="section-title !text-white mt-4">
              Zorgeloos schoon in drie stappen
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Van aanvraag tot resultaat: wij houden het simpel, snel en
              transparant.
            </p>
          </div>
        </Reveal>

        <div className="relative grid gap-10 lg:gap-8 md:grid-cols-3">
          {/* Verbindingslijn (desktop) */}
          <div
            className="hidden md:block absolute top-9 left-[17%] right-[17%] h-px border-t-2 border-dashed border-white/15"
            aria-hidden="true"
          ></div>

          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <div className="relative text-center md:px-4">
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-white/10 text-brand-sky ring-1 ring-white/15 backdrop-blur-sm">
                  {step.icon}
                  <span className="absolute -top-2.5 -right-2.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-accent text-white text-xs font-bold shadow-lg">
                    {step.number.slice(-1)}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-slate-300 leading-relaxed text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 lg:mt-16 text-center">
            <a href="#offerte" className="btn-primary !bg-none !shadow-glow" style={{ background: "linear-gradient(135deg, #2563EB, #3B82F6)" }}>
              Start vandaag nog — gratis offerte
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
