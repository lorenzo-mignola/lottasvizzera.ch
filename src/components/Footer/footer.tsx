import Image from "next/image";
import Link from "next/link";
import CetraImage from "@/public/images/cetra.png";

export function Footer() {
  return (
    <footer className="footer bg-neutral p-10  text-white">
      <aside>
        <Link href="https://www.cetra.ch/" target="_blank">
          <Image alt="cetra" src={CetraImage} />
        </Link>
      </aside>
      <nav>
        <header className="footer-title">Link</header>
        <Link
          className="link-hover link"
          href="https://esv.ch/"
          target="_blank"
        >
          ESV
        </Link>
        <Link
          className="link-hover link"
          href="https://isv.ch/"
          target="_blank"
        >
          ISV
        </Link>
        <Link
          className="link-hover link"
          href="https://www.jugendundsport.ch/it/sportarten/schwingen-uebersicht.html"
          target="_blank"
        >
          Gioventù+Sport
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Sponsor</header>
        <Link
          className="link-hover link"
          href="https://cetra.ch/"
          target="_blank"
        >
          Cetra Alimentari SA
        </Link>
      </nav>
    </footer>
  );
}
