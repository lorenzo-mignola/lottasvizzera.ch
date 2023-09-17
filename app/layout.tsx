import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer/Footer';
import Nav from '../components/NavBar/Nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Associazione ticinese di lotta svizzera',
  description: "Sito ufficiale dell'associazione ticinese di lotta svizzera",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="autumn">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
