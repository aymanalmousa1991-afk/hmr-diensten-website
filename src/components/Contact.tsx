"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { apiUrl } from "@/lib/api";
import { services } from "@/lib/services";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [photoData, setPhotoData] = useState("");
  const [photoName, setPhotoName] = useState("");
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

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setPhotoData("");
      setPhotoName("");
      return;
    }
    // Max 5 MB
    if (file.size > 5 * 1024 * 1024) {
      alert("De foto mag maximaal 5 MB zijn. Kies een kleinere afbeelding.");
      e.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPhotoData(String(reader.result));
      setPhotoName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(apiUrl('/api/offerte'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _honeypot: honeypot,
          photoData: photoData || undefined,
          photoName: photoName || undefined,
        }),
      });
      if (!res.ok) throw new Error('Fout bij versturen');
      setSubmitted(true);

      // Google Ads conversie registreren - Leadformulier indienen
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'conversion', {
          send_to: 'AW-18270211960/bYIaCLiXyMYcEPie9YdE',
          value: 1.0,
          currency: 'EUR',
        });
      }
    } catch (err) {
      alert('Er is iets misgegaan. Probeer het later opnieuw of bel ons op 06-35698144.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactDetails: {
    title: string;
    value: string;
    href?: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: "Servicegebied",
      value: "Eindhoven & Noord-Brabant",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: "Telefoon / WhatsApp",
      value: "06-35698144",
      href: "tel:0635698144",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      title: "E-mail",
      value: "info@hmrdiensten.nl",
      href: "mailto:info@hmrdiensten.nl",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: "KvK-nummer",
      value: "42052439",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="offerte" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="eyebrow justify-center">Gratis offerte</span>
            <h2 className="section-title mt-4">Vraag Uw Gratis Offerte Aan</h2>
            <p className="mt-4 text-lg text-gray-600">
              Geen verplichtingen, vrijblijvend advies op maat. Wij nemen
              binnen 24 uur contact met u op.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 rounded-[2rem] overflow-hidden shadow-soft ring-1 ring-slate-100">
          {/* Info-paneel */}
          <Reveal className="reveal-left lg:col-span-2 relative bg-brand-primary p-8 lg:p-10 text-white overflow-hidden">
            <div className="absolute inset-0 bg-dots-light opacity-50 pointer-events-none" aria-hidden="true"></div>
            <div
              className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-brand-accent/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="relative">
              <h3 className="text-2xl font-bold font-display">
                Direct contact
              </h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Liever persoonlijk contact? Bel, mail of stuur een WhatsApp
                &mdash; wij denken graag met u mee.
              </p>

              <ul className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 bg-white/10 text-brand-sky rounded-xl ring-1 ring-white/10">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {item.title}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-semibold hover:text-brand-sky transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold">
                          {item.value}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 pt-7 border-t border-white/10">
                <a
                  href="https://wa.me/310635698144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full !py-3.5 !text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Stuur ons een WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="reveal-right lg:col-span-3 bg-white p-8 lg:p-10">
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
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
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
                    className="input-field"
                    placeholder="Uw naam"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800 mb-1.5"
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
                      className="input-field"
                      placeholder="u@voorbeeld.nl"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-800 mb-1.5"
                    >
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Dienst *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field cursor-pointer"
                  >
                    <option value="">Selecteer een dienst</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Overig">Overig</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
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
                    className="input-field resize-none"
                    placeholder="Vertel ons wat u nodig heeft..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-semibold text-gray-800 mb-1.5"
                  >
                    Foto (optioneel)
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="w-full text-sm text-gray-600 px-3 py-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-accent/10 file:text-brand-blue hover:file:bg-brand-accent/20 hover:border-brand-accent cursor-pointer transition-all"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Voeg een foto toe van wat er schoongemaakt of opgehaald moet
                    worden (max. 5 MB). Dit helpt ons bij een snellere offerte.
                  </p>
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Bezig met versturen...
                    </>
                  ) : (
                    'Offerte Aanvragen'
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
