import LogoImage from '@/public/images/Ass-ticinese-lotta-svizzera-LOGO-contorno.png';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  classes?: string;
}

function Logo({ classes = '' }: LogoProps) {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="ATLS Logo" width={100} className={classes} />
    </Link>
  );
}

export default Logo;
