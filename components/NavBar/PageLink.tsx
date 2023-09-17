import Link from 'next/link';
import { PropsWithChildren, useContext } from 'react';

import { DrawerContext } from '../util/hooks/DrawerContext';

interface PageLinkProps {
  href: string;
}

function PageLink({ href, children }: PropsWithChildren<PageLinkProps>) {
  const { setDrawerOpen } = useContext(DrawerContext);
  return (
    <li className="text-lg font-medium">
      <Link href={href} onClick={() => setDrawerOpen(false)}>
        {children}
      </Link>
    </li>
  );
}

export default PageLink;
