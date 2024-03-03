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
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
