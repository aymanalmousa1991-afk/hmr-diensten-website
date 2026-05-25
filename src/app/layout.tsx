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
    "HMR DIENSTEN - Professioneel schoonmaakbedrijf uit Eindhoven, actief in heel Nederland. Voor woningen, kantoren, opleveringsschoonmaak en meer. Vraag gratis offerte aan!",
  keywords: [
    "hmr diensten",
    "schoonmaakbedrijf eindhoven",
    "schoonmaakbedrijf nederland",
    "glazenwasser",
    "professionele schoonmaak",
    "kantoor schoonmaak",
    "opleveringsschoonmaak",
    "airbnb schoonmaak",
    "schoonmaakservice",
  ],
  openGraph: {
    title: "HMR DIENSTEN | Professionele Schoonmaakservice door heel Nederland",
    description:
      "Professioneel schoonmaakbedrijf uit Eindhoven, actief in heel Nederland. Vraag gratis offerte aan!",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
          <Navbar />
        <main>{children}</main>
          <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}

