import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMR DIENSTEN | Professionele Schoonmaakservice door heel Nederland",
  description:
        "HMR DIENSTEN - Professioneel schoonmaakbedrijf uit Eindhoven, actief in heel Nederland. Specialist in woning schoonmaak, kantoor schoonmaak, opleveringsschoonmaak en Airbnb schoonmaak. Vraag gratis offerte aan!",
  keywords: [
    "schoonmaakbedrijf eindhoven",
    "schoonmaakbedrijf nederland", 
    "professionele schoonmaakdiensten",
    "huizen schoonmaken eindhoven",
    "kantoor schoonmaak",
    "opleveringsschoonmaak",
    "airbnb schoonmaak",
    "hmr diensten",
    "schoonmaakservice",
    "hotels schoonmaak",
    "flats schoonmaak",
    "vakantiepark schoonmaak",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://hmrdiensten.nl",
  },
  openGraph: {
    title: "HMR DIENSTEN | Professionele Schoonmaakservice door heel Nederland",
    description:
      "Professioneel schoonmaakbedrijf uit Eindhoven, actief in heel Nederland. Vraag gratis offerte aan!",
    type: "website",
    locale: "nl_NL",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HMR DIENSTEN",
  image: "https://hmrdiensten.nl/uploads/logo/logo.png",
  url: "https://hmrdiensten.nl",
  telephone: "06-35698144",
  email: "hmrdiensten@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eindhoven",
    addressCountry: "NL",
  },
  priceRange: "€€",
  openingHours: "Mo-Su 07:00-22:00",
  description:
    "Professioneel schoonmaakbedrijf uit Eindhoven, actief in heel Nederland. Voor woningen, kantoren, opleveringsschoonmaak en meer.",
  areaServed: { "@type": "Country", name: "Nederland" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    ratingCount: "220",
  },
  sameAs: [
    "https://www.facebook.com/share/1CXUY8FA25/",
    "https://www.tiktok.com/@hmrdiensten",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Schoonmaakdiensten",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Huizen Schoonmaken" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kantoor Schoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Opleveringsschoonmaak" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airbnb Schoonmaak" } },
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
        {/* Google Analytics - Vervang G-XXXXXXXXXX met je eigen GA4 ID */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
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

