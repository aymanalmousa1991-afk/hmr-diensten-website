"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "#diensten" },
    { name: "Waarom Wij", href: "#waarom-wij" },
    { name: "Offerte", href: "#offerte" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 z-50">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <span className="flex items-center space-x-3 text-xl font-bold text-gray-900">
            <Image
              src="/hmr-logo.svg"
              alt="HMR DIENSTEN Logo"
              width={40}
              height={40}
              className="w-10 h-10"
              priority
            />
            <span><span className="text-brand-primary">HMR</span> DIENSTEN</span>
          </span>
        </Link>

        {/* Desktop CTA */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link href="#offerte" className="btn-primary !px-6 !py-2 !text-sm !font-semibold">
              Gratis Offerte
            </Link>
          </div>
        </div>

        {/* Hamburger knop */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-brand-primary focus:text-brand-primary focus:bg-brand-primary/10 focus:outline-none"
              >
                <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  {open ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className={`flex flex-wrap w-full my-5 lg:hidden ${open ? 'block' : 'hidden'}`}>
                <>
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href} onClick={closeMenu} className="w-full px-4 py-3 -ml-4 text-gray-600 rounded-md hover:text-brand-primary hover:bg-brand-primary/5 focus:text-brand-primary focus:bg-brand-primary/10 focus:outline-none font-medium">
                      {item.name}
                    </Link>
                  ))}
                  <Link href="#offerte" onClick={closeMenu} className="w-full px-6 py-3 mt-3 text-center text-white bg-brand-primary rounded-xl font-semibold">
                    Gratis Offerte
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Desktop menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={item.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-600 no-underline rounded-md hover:text-brand-primary focus:text-brand-primary focus:bg-brand-primary/10 focus:outline-none transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

