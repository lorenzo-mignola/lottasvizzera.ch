import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import LogoImage from '@/public/images/Ass-ticinese-lotta-svizzera-LOGO-contorno.png';

import { DrawerContext } from '../util/hooks/DrawerContext';

interface LogoProps {
  classes?: string;
}

function Logo({ classes = '' }: LogoProps) {
  const { setDrawerOpen } = useContext(DrawerContext);
  return (
    <Link href="/">
      <Image src={LogoImage} alt="ATLS Logo" width={100} className={classes} onClick={() => setDrawerOpen(false)} />
    </Link>
  );
}

export default Logo;
