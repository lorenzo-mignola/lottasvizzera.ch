import Link from 'next/link';
import { PropsWithChildren, useContext } from 'react';

import { DrawerContext } from '../../util/hooks/DrawerContext';

interface PageLinkProps {
  href: string;
}

function PageLink({ href, children }: PropsWithChildren<PageLinkProps>) {
  const { closeDrawer } = useContext(DrawerContext);
  return (
    <li className="rounded-btn my-2 border-2 border-secondary text-lg font-medium lg:mx-2 lg:my-0 ">
      <Link href={`/pages${href}`} onClick={() => closeDrawer()}>
        {children}
      </Link>
    </li>
  );
}

export default PageLink;
