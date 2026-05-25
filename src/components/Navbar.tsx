"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [showDiensten, setShowDiensten] = useState(false);

  const diensten = [
    { name: "Huizen Schoonmaken", href: "#diensten" },
    { name: "Flats & Appartementen", href: "#diensten" },
    { name: "Scholen & Instellingen", href: "#diensten" },
    { name: "Vakantieparken", href: "#diensten" },
    { name: "Hotels & B&B's", href: "#diensten" },
    { name: "Binnen- & Buitenschoonmaak", href: "#diensten" },
    { name: "Kantoor Schoonmaak", href: "#diensten" },
    { name: "Opleveringsschoonmaak", href: "#diensten" },
    { name: "Airbnb & Vakantieverhuur", href: "#diensten" },
  ];

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 z-50">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-3 text-xl font-bold text-gray-900">
            <Image
              src="/uploads/logo/logo.png"
              alt="HMR DIENSTEN Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg"
              priority
            />
            <span><span className="text-brand-primary">HMR</span> DIENSTEN</span>
          </span>
        </Link>

        {/* CTA button desktop */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="#offerte" className="btn-primary !px-6 !py-2 !text-sm !font-semibold">
                        Gratis Offerte
                    </Link>
            </div>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-brand-primary focus:text-brand-primary focus:bg-brand-primary/10 focus:outline-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <Link href="/" className="w-full px-4 py-2 -ml-4 text-gray-600 rounded-md hover:text-brand-primary">Home</Link>
                    <Link href="#diensten" className="w-full px-4 py-2 -ml-4 text-gray-600 rounded-md hover:text-brand-primary">Diensten</Link>
                    <div className="w-full px-4 py-1 ml-4 border-l-2 border-brand-primary/30">
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Alle Diensten</p>
                      {diensten.map((d, i) => (
                        <Link key={i} href={d.href} className="block px-4 py-1.5 text-sm text-gray-500 rounded-md hover:text-brand-primary">{d.name}</Link>
                      ))}
                    </div>
                    <Link href="#waarom-wij" className="w-full px-4 py-2 -ml-4 text-gray-600 rounded-md hover:text-brand-primary">Waarom Wij</Link>
                    <Link href="#offerte" className="w-full px-6 py-2 mt-3 text-center text-white bg-brand-primary rounded-md">Gratis Offerte</Link>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-600 no-underline rounded-md hover:text-brand-primary">Home</Link>
            </li>
            <li className="mr-3 nav__item relative"
                onMouseEnter={() => setShowDiensten(true)}
                onMouseLeave={() => setShowDiensten(false)}>
              <Link href="#diensten" className="inline-flex items-center gap-1 px-4 py-2 text-lg font-normal text-gray-600 no-underline rounded-md hover:text-brand-primary">
                Diensten
                <svg className={`w-4 h-4 transition-transform ${showDiensten ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {showDiensten && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2">
                  {diensten.map((d, i) => (
                    <Link key={i} href={d.href} className="block px-5 py-2.5 text-sm text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 transition-colors">{d.name}</Link>
                  ))}
                </div>
              )}
            </li>
            <li className="mr-3 nav__item">
              <Link href="#waarom-wij" className="inline-block px-4 py-2 text-lg font-normal text-gray-600 no-underline rounded-md hover:text-brand-primary">Waarom Wij</Link>
            </li>
            <li className="mr-3 nav__item">
              <Link href="#offerte" className="inline-block px-4 py-2 text-lg font-normal text-gray-600 no-underline rounded-md hover:text-brand-primary">Offerte</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
