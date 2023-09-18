import Image from 'next/image';
import Link from 'next/link';

import CetraImage from '@/public/images/cetra.png';

import LanguageSwitcher from '../ui/LanguageSwitcher';

function Footer() {
  return (
    <footer className="footer bg-neutral p-10  text-white">
      <LanguageSwitcher />
      <aside>
        <Link href="https://www.cetra.ch/" target="_blank">
          <Image src={CetraImage} alt="cetra" />
        </Link>
      </aside>
      <nav>
        <header className="footer-title">Link</header>
        <Link href="https://esv.ch/" target="_blank" className="link-hover link">
          ESV
        </Link>
        <Link href="https://isv.ch/" target="_blank" className="link-hover link">
          ISV
        </Link>
        <Link
          href="https://www.jugendundsport.ch/it/sportarten/schwingen-uebersicht.html"
          target="_blank"
          className="link-hover link"
        >
          Gioventù+Sport
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Sponsor</header>
        <Link href="https://cetra.ch/" className="link-hover link" target="_blank">
          Cetra Alimentari SA
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
