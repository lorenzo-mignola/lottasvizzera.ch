import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useContext } from 'react';

import NAV_DE from '../../locales/de/nav';
import NAV_IT from '../../locales/it/nav';
import { DrawerContext } from '../../util/hooks/DrawerContext';

const LOCALE = {
  it: NAV_IT,
  de: NAV_DE,
} as const;

type NavLinks = 'documents' | 'contacts';

interface PageLinkProps {
  href: string;
  id: NavLinks;
}

type NavLocale = keyof typeof LOCALE;

function PageLink({ href, id }: PropsWithChildren<PageLinkProps>) {
  const { closeDrawer } = useContext(DrawerContext);
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const lang = searchParams.get('lang') || 'it';

  const pageHref = `/pages${href}?lang=${lang}`;

  const selected = pathname !== '/' && pageHref.startsWith(pathname);

  return (
    <li className="rounded-btn my-2 text-lg font-medium lg:mx-2 lg:my-0">
      <Link
        href={pageHref}
        onClick={() => closeDrawer()}
        className={selected ? 'bg-base-300 font-semibold text-base-content' : 'text-base-content'}
        prefetch={false}
      >
        {LOCALE[lang as NavLocale][id]}
      </Link>
    </li>
  );
}

export default PageLink;
