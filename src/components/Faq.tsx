"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export const Faq = () => {
  return (
    <section id="veelgestelde-vragen" className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-1/4 h-64 bg-dots opacity-50 [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none"
        aria-hidden="true"
      ></div>
      <Container className="relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="eyebrow justify-center">FAQ</span>
            <h2 className="section-title mt-4">Veelgestelde Vragen</h2>
            <p className="mt-4 text-lg text-gray-600">
              Antwoorden op de meest gestelde vragen over onze
              schoonmaakdiensten.
            </p>
          </div>
        </Reveal>

        <div className="w-full max-w-3xl mx-auto">
          {faqdata.map((item, index) => (
            <Reveal key={item.question} delay={index * 60} className="mb-4">
              <Disclosure>
                {({ open }) => (
                  <div
                    className={`rounded-2xl bg-white transition-all duration-300 ${
                      open
                        ? "shadow-card-hover ring-1 ring-brand-accent/30"
                        : "shadow-card ring-1 ring-slate-100 hover:ring-brand-accent/20"
                    }`}
                  >
                    <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 rounded-2xl">
                      <span className="font-bold text-base lg:text-lg pr-4 font-display">
                        {item.question}
                      </span>
                      <span
                        className={`flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                          open
                            ? "bg-brand-blue text-white rotate-45"
                            : "bg-brand-accent/10 text-brand-blue"
                        }`}
                        aria-hidden="true"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-6 -mt-1 text-gray-600 leading-relaxed">
                      {item.answer}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-gray-600">
            Staat uw vraag er niet tussen?{" "}
            <a
              href="#offerte"
              className="font-semibold text-brand-blue hover:underline underline-offset-4"
            >
              Neem contact met ons op
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
};

const faqdata = [
  {
    question: "Hoe snel kan HMR DIENSTEN bij mij langskomen?",
    answer: "Wij reageren binnen 24 uur op uw aanvraag. Neem gerust contact met ons op voor een spoedafspraak, dan kijken we samen wat mogelijk is."
  },
  {
    question: "In welke regio zijn jullie actief?",
    answer: "Wij zijn gevestigd in Eindhoven en actief door heel Noord-Brabant. Denk bijvoorbeeld aan Helmond, Veldhoven, Best, Tilburg, Den Bosch en de omliggende regio's. Zit u elders in Noord-Brabant? Neem gerust contact op, wij komen graag bij u langs."
  },
  {
    question: "Wat kost een schoonmaakbeurt?",
    answer: "De kosten zijn afhankelijk van de omvang, frequentie en locatie. Vraag een gratis en vrijblijvende offerte aan voor een prijs op maat."
  },
  {
    question: "Is HMR DIENSTEN verzekerd?",
    answer: "Ja, wij zijn volledig verzekerd voor alle schoonmaakwerkzaamheden. U kunt met een gerust hart een beroep op ons doen."
  },
  {
    question: "Gebruiken jullie milieuvriendelijke schoonmaakmiddelen?",
    answer: "Absoluut! Wij werken uitsluitend met milieuvriendelijke en duurzame schoonmaakmiddelen die veilig zijn voor mens, dier en milieu."
  },
  {
    question: "Kan ik ook eenmalig een schoonmaak laten doen?",
    answer: "Zeker! Of u nu een eenmalige grondige schoonmaak wilt of wekelijks terugkerend onderhoud, wij passen ons volledig aan uw wensen aan."
  },
];
