"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/#diensten" },
  { name: "Waarom Wij", href: "/#waarom-wij" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#offerte" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md shadow-card"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container relative flex flex-wrap items-center justify-between px-4 py-3 mx-auto lg:justify-between xl:px-1"
        aria-label="Hoofdnavigatie"
      >
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <Image
            src="/uploads/logo/logo hmr-diensten.png"
            alt="HMR Diensten Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg"
            priority
          />
          <span className="text-xl font-bold font-display text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">
              HMR
            </span>{" "}
            Diensten
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex items-center list-none">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-[0.95rem] font-medium text-gray-600 no-underline rounded-lg hover:text-brand-blue hover:bg-brand-accent/5 focus-visible:text-brand-blue focus-visible:bg-brand-accent/10 focus-visible:outline-none transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA's */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0635698144"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-brand-blue transition-colors"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-accent/10 text-brand-blue">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            06-35698144
          </a>
          <Link
            href="/#offerte"
            className="btn-primary !px-6 !py-2.5 !text-sm !rounded-xl"
          >
            Gratis Offerte
          </Link>
        </div>

        {/* Hamburger knop */}
        <button
          type="button"
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isOpen}
          aria-controls="mobiel-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-2 text-gray-600 rounded-lg lg:hidden hover:text-brand-blue hover:bg-brand-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 transition-colors"
        >
          <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>

        {/* Mobiel menu */}
        <div
          id="mobiel-menu"
          className={`w-full lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-[28rem] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="w-full px-4 py-3 text-gray-700 rounded-xl hover:text-brand-blue hover:bg-brand-accent/5 focus-visible:outline-none focus-visible:bg-brand-accent/10 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-3 px-1">
              <Link
                href="/#offerte"
                onClick={closeMenu}
                className="btn-primary w-full !py-3 !text-base text-center"
              >
                Gratis Offerte
              </Link>
              <a
                href="tel:0635698144"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-gray-700 rounded-xl border border-slate-200 hover:border-brand-accent hover:text-brand-blue transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Bel 06-35698144
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
