import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';

import LogoImage from '@/public/images/Ass-ticinese-lotta-svizzera-LOGO-contorno.png';

import { DrawerContext } from '../../util/hooks/DrawerContext';

interface LogoProps {
  classes?: string;
}

function Logo({ classes = '' }: LogoProps) {
  const { closeDrawer } = useContext(DrawerContext);
  const params = useSearchParams();
  const lang = params.get('lang') || 'it';
  return (
    <Link href={`/?lang=${lang}`}>
      <Image src={LogoImage} alt="ATLS Logo" width={100} className={classes} onClick={() => closeDrawer()} />
    </Link>
  );
}

export default Logo;
