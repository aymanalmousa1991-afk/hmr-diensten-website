import Link from "next/link";
import { Container } from "@/components/Container";
import Image from "next/image";

export function Footer() {
  const navigation = [
    { name: "Diensten", href: "#diensten" },
    { name: "Waarom Wij", href: "#waarom-wij" },
    { name: "Offerte", href: "#offerte" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 py-16 mx-auto lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-3 text-2xl font-bold text-white"
              >
                <Image
                  src="/uploads/logo/logo.png"
                  alt="HMR DIENSTEN Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg"
                />
                <span>HMR <span className="text-brand-primary">DIENSTEN</span></span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-400">
              Uw professionele schoonmaakpartner, gevestigd in Eindhoven en actief door heel Nederland. Voor woningen, kantoren en opleveringsschoonmaak.
            </div>

            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.facebook.com/share/1CXUY8FA25/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hmrdiensten?_r=1&_t=ZG-96bGeuOZziT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigatie</h3>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-400 rounded-md hover:text-brand-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>Eindhoven (actief door heel Nederland)</p>
              <p>06-35698144</p>
              <p>hmrdiensten@gmail.com</p>
              <p>KvK: 42052439</p>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-800 text-sm text-center text-gray-500">
          Copyright &copy; {new Date().getFullYear()} HMR DIENSTEN. Alle rechten voorbehouden.
        </div>
      </Container>
    </footer>
  );
}
