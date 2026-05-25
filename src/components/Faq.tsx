"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <section id="veelgestelde-vragen" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze schoonmaakdiensten.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          {faqdata.map((item, index) => (
            <div key={item.question} className="mb-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-800 rounded-xl bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 transition-all">
                      <span className="font-semibold text-lg pr-4">{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-6 h-6 text-brand-primary flex-shrink-0 transition-transform duration-200`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pt-4 pb-5 text-gray-600 leading-relaxed">
                      {item.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const faqdata = [
  {
    question: "Hoe snel kan HMR DIENSTEN bij mij langskomen?",
    answer: "Vaak kunnen wij binnen 24 uur bij u langskomen. Neem gerust contact met ons op voor een spoedafspraak, dan kijken we wat mogelijk is."
  },
  {
    question: "Zijn jullie ook actief buiten Eindhoven?",
    answer: "Ja! Wij zijn gevestigd in Eindhoven, maar actief door heel Nederland. Of u nu in Amsterdam, Rotterdam, Utrecht of Maastricht zit, wij komen naar u toe."
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
