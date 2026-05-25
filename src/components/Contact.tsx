"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // anti-spam veld (onzichtbaar)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/offerte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _honeypot: honeypot }),
      });
      if (!res.ok) throw new Error('Fout bij versturen');
      setSubmitted(true);
    } catch (err) {
      alert('Er is iets misgegaan. Probeer het later opnieuw of bel ons op 06-35698144.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="offerte" className="py-20 bg-gray-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vraag Uw Gratis Offerte Aan
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Geen verplichtingen, vrijblijvend advies op maat. Wij nemen binnen
              24 uur contact met u op.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Servicegebied</h3>
                  <p className="text-gray-600">Heel Nederland (gevestigd in Eindhoven)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefoon / WhatsApp</h3>
                  <p className="text-gray-600">06-35698144</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">hmrdiensten@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-xl">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">KvK-nummer</h3>
                  <p className="text-gray-600">42052439</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-brand-accent/10 rounded-full">
                  <svg className="w-8 h-8 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bedankt voor uw aanvraag!
                </h3>
                <p className="text-gray-600">
                  Wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anti-spam honeypot (onzichtbaar voor gebruikers) */}
                <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="_honeypot">Laat dit leeg</label>
                  <input type="text" id="_honeypot" name="_honeypot" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="Uw naam"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="u@voorbeeld.nl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Dienst *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="Huizen Schoonmaken">Huizen Schoonmaken</option>
                    <option value="Flats & Appartementen">Flats & Appartementen</option>
                    <option value="Scholen & Instellingen">Scholen & Instellingen</option>
                    <option value="Vakantieparken">Vakantieparken</option>
                    <option value="Hotels & B&amp;Bs">Hotels &amp; B&amp;Bs</option>
                    <option value="Binnen- & Buitenschoonmaak">Binnen- & Buitenschoonmaak</option>
                    <option value="Kantoor Schoonmaak">Kantoor Schoonmaak</option>
                    <option value="Opleveringsschoonmaak">Opleveringsschoonmaak</option>
                    <option value="Airbnb & Vakantieverhuur">Airbnb & Vakantieverhuur</option>
                    <option value="Overig">Overig</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Vertel ons wat u nodig heeft..."
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full text-center">
                  {submitting ? 'Bezig met versturen...' : 'Offerte Aanvragen'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
