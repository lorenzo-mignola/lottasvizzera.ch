import CetraImage from '@/public/images/cetra.png';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral  text-white">
      <aside>
        <Link href="https://www.cetra.ch/" target="_blank">
          <Image src={CetraImage} alt="cetra" />
        </Link>
      </aside>
      <nav>
        <header className="footer-title">Link</header>
        <Link href="https://esv.ch/" target="_blank" className="link link-hover">
          ESV
        </Link>
        <Link href="https://isv.ch/" target="_blank" className="link link-hover">
          ISV
        </Link>
        <Link
          href="https://www.jugendundsport.ch/it/sportarten/schwingen-uebersicht.html"
          target="_blank"
          className="link link-hover"
        >
          Gioventù+Sport
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Sponsor</header>
        <Link href="https://cetra.ch/" className="link link-hover" target="_blank">
          Cetra Alimentari SA
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
