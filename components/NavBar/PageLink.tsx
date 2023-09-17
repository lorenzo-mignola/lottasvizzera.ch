import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface PageLinkProps {
  href: string;
}

function PageLink({ href, children }: PropsWithChildren<PageLinkProps>) {
  return (
    <li className="text-lg font-medium">
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default PageLink;
