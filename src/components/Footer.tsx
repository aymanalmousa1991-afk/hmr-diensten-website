import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { services } from "@/lib/services";

export function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/#diensten" },
    { name: "Waarom Wij", href: "/#waarom-wij" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Offerte aanvragen", href: "/#offerte" },
    { name: "Veelgestelde vragen", href: "/#veelgestelde-vragen" },
  ];

  const popularServices = services.slice(0, 6);

  return (
    <footer className="relative bg-brand-dark text-white overflow-hidden">
      {/* Gradient-accentlijn bovenaan */}
      <div
        className="h-1 bg-gradient-to-r from-brand-blue via-brand-accent to-brand-sky"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-dots-light opacity-30 pointer-events-none" aria-hidden="true"></div>
      <div
        className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 py-16 lg:py-20 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl font-bold font-display text-white"
            >
              <Image
                src="/uploads/logo/logo hmr-diensten.png"
                alt="HMR Diensten Logo"
                width={44}
                height={44}
                className="w-11 h-11 rounded-xl"
              />
              <span>
                HMR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-sky">
                  Diensten
                </span>
              </span>
            </Link>

            <p className="max-w-md mt-5 text-slate-400 leading-relaxed">
              Betrouwbaar schoonmaakbedrijf uit Eindhoven, actief door heel
              Noord-Brabant. Voor woningen, kantoren, winkels, horeca,
              opleveringsschoonmaak en verhuizingen.
            </p>

            <p className="mt-5 text-sm font-semibold font-display text-slate-300">
              Vaste kwaliteit. Duidelijke afspraken. Zorgeloos schoon.
            </p>

            <div className="flex mt-7 gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61590242620244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:bg-brand-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hmrdiensten/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:bg-brand-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hmrdiensten?_r=1&_t=ZG-96bGeuOZziT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:bg-brand-accent hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div className="lg:col-span-3">
            <h3 className="font-bold font-display text-white mb-5">
              Populaire diensten
            </h3>
            <ul className="space-y-3">
              {popularServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/diensten/${service.slug}`}
                    className="text-slate-400 hover:text-brand-sky transition-colors text-[0.95rem]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div className="lg:col-span-2">
            <h3 className="font-bold font-display text-white mb-5">
              Navigatie
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-brand-sky transition-colors text-[0.95rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-bold font-display text-white mb-5">Contact</h3>
            <ul className="space-y-3 text-slate-400 text-[0.95rem]">
              <li>Eindhoven &amp; heel Noord-Brabant</li>
              <li>
                <a href="tel:0635698144" className="hover:text-brand-sky transition-colors">
                  06-35698144
                </a>
              </li>
              <li>
                <a href="mailto:info@hmrdiensten.nl" className="hover:text-brand-sky transition-colors">
                  info@hmrdiensten.nl
                </a>
              </li>
              <li>KvK: 42052439</li>
            </ul>
          </div>
        </div>

        <div className="py-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            Copyright &copy; {new Date().getFullYear()} HMR DIENSTEN. Alle
            rechten voorbehouden.
          </p>
          <p className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            100% milieuvriendelijke schoonmaakmiddelen
          </p>
        </div>
      </Container>
    </footer>
  );
}
