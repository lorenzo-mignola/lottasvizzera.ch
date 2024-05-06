import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@components/Footer/footer";
import { Nav } from "@components/NavBar/nav";
import { CookieConsent } from "../components/cookie/cookie-consent";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Verdana", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Associazione ticinese di lotta svizzera",
  description: "Sito ufficiale dell'associazione ticinese di lotta svizzera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="autumn" lang="it">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link
          href="/icon?<generated>"
          rel="icon"
          sizes="<generated>"
          type="image/<generated>"
        />
        <link
          href="/apple-icon?<generated>"
          rel="apple-touch-icon"
          sizes="<generated>"
          type="image/<generated>"
        />
      </head>
      <body
        className={`${inter.className} md:flex md:min-h-screen md:flex-col`}
      >
        <Nav />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
