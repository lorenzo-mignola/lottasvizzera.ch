import { Logo } from "./logo";
import { PageLink } from "./page-link";

export function Pages() {
  return (
    <>
      <li>
        <Logo classes="lg:hidden" />
      </li>
      <PageLink id="contacts" />
      <PageLink id="history" />
      <PageLink id="training" />
      <PageLink id="documents" />
    </>
  );
}
