import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMR Diensten | Professionele Schoonmaakservice in Eindhoven & Noord-Brabant",
  description:
        "HMR Diensten - Professioneel schoonmaakbedrijf uit Eindhoven, actief door heel Noord-Brabant. Wij maken schoon, u geniet van het resultaat. Specialist in woningschoonmaak, kantoorschoonmaak, opleveringsschoonmaak, winkels, horeca en verhuizingen. Vraag gratis offerte aan!",
  keywords: [
    "schoonmaakbedrijf eindhoven",
    "schoonmaakbedrijf noord-brabant",
    "professionele schoonmaakdiensten",
    "huizen schoonmaken eindhoven",
    "kantoor schoonmaak",
    "opleveringsschoonmaak",
    "winkel schoonmaak",
    "horeca schoonmaak",
    "airbnb schoonmaak",
    "hmr diensten",
    "schoonmaakservice",
    "kantoorschoonmaak",
    "bedrijfsschoonmaak",
    "verhuizing",
    "verhuisservice",
    "woningontruiming",
    "schoonmaker eindhoven",
    "schoonmaakbedrijf brabant",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hmrdiensten.nl",
  },
    openGraph: {
    title: "HMR Diensten | Professionele Schoonmaakservice in Eindhoven & Noord-Brabant",
    description:
      "Wij maken schoon, u geniet van het resultaat. Professioneel schoonmaakbedrijf uit Eindhoven, actief door heel Noord-Brabant. Vraag gratis offerte aan!",
    type: "website",
    locale: "nl_NL",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
    "@type": "LocalBusiness",
  name: "HMR Diensten",
  slogan: "Wij maken schoon, u geniet van het resultaat.",
  image: "https://hmrdiensten.nl/uploads/logo/logo%20hmr-diensten.png",
  url: "https://hmrdiensten.nl",
  telephone: "06-35698144",
  email: "info@hmrdiensten.nl",
    address: {
    "@type": "PostalAddress",
    addressLocality: "Eindhoven",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  priceRange: "€€",
  openingHours: "Mo-Su 07:00-22:00",
  description:
    "Wij maken schoon, u geniet van het resultaat. Professioneel schoonmaakbedrijf uit Eindhoven, actief door heel Noord-Brabant. Voor woningen, kantoren, winkels, horeca, opleveringsschoonmaak en verhuizingen.",
  areaServed: {
    "@type": "State",
    name: "Noord-Brabant",
    containsPlace: {
      "@type": "City",
      name: "Eindhoven",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    ratingCount: "220",
  },
    sameAs: [
    "https://www.facebook.com/profile.php?id=61590242620244",
    "https://www.instagram.com/hmrdiensten/",
    "https://www.tiktok.com/@hmrdiensten",
  ],
        hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Schoonmaak- en verhuisdiensten",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schoonmaak woningen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bedrijfsschoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kantoorschoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Winkel schoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Horeca schoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Opleveringsschoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ramen wassen" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Verhuisservice" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Woningontruiming" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
            <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Google Ads - Conversietag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18270211960"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18270211960');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
          <Navbar />
        <main>{children}</main>
          <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}

