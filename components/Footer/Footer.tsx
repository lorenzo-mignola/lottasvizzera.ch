import CetraImage from '@/public/images/cetra.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-base-content">
      <aside>
        <Image src={CetraImage} alt="cetra" />
      </aside>
    </footer>
  );
}

export default Footer;
