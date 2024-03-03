import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useContext } from "react";
import { NAV_DE } from "@/locales/de/nav";
import { NAV_IT } from "@/locales/it/nav";
import { DrawerContext } from "@/util/hooks/DrawerContext";
import type { NavLinks } from "@/types/nav-links";

const LOCALE = {
  it: NAV_IT,
  de: NAV_DE,
} as const;

interface PageLinkProps {
  id: NavLinks;
}

type NavLocale = keyof typeof LOCALE;

export function PageLink({ id }: PropsWithChildren<PageLinkProps>) {
  const { closeDrawer } = useContext(DrawerContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang") || "it";

  const pageHref = `/pages/${id}?lang=${lang}`;

  const selected = pathname !== "/" && pageHref.startsWith(pathname);

  return (
    <li className="my-2 rounded-btn text-lg font-medium lg:mx-2 lg:my-0">
      <Link
        className={
          selected
            ? "bg-base-300 font-semibold text-base-content"
            : "text-base-content"
        }
        href={pageHref}
        onClick={() => {
          closeDrawer();
        }}
      >
        {LOCALE[lang as NavLocale][id]}
      </Link>
    </li>
  );
}
