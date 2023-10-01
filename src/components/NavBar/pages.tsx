import { Logo } from "./logo";
import { PageLink } from "./page-link";

export function Pages() {
  return (
    <>
      <li>
        <Logo classes="lg:hidden" />
      </li>
      <PageLink href="/documents" id="documents" />
      <PageLink href="/contacts" id="contacts" />
    </>
  );
}
