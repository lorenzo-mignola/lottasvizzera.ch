import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useContext } from 'react';

import { DrawerContext } from '../../util/hooks/DrawerContext';

interface PageLinkProps {
  href: string;
}

function PageLink({ href, children }: PropsWithChildren<PageLinkProps>) {
  const { closeDrawer } = useContext(DrawerContext);
  const pathname = usePathname();

  const pageHref = `/pages${href}`;

  const selected = pageHref === pathname;

  return (
    <li className="rounded-btn my-2 text-lg font-medium lg:mx-2 lg:my-0 ">
      <Link
        href={`/pages${href}`}
        onClick={() => closeDrawer()}
        className={selected ? 'bg-base-300 font-semibold text-base-content' : 'text-base-content'}
      >
        {children}
      </Link>
    </li>
  );
}

export default PageLink;
