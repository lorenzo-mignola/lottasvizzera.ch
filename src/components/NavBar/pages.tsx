import { Suspense } from "react";
import { Logo } from "./logo";
import { PageLink } from "./page-link";
import { FCTLS2025Link } from "./fctls2025-link";

export function Pages() {
  return (
    <Suspense>
      <li>
        <Logo classes="lg:hidden" />
      </li>
      <PageLink id="contacts" />
      <PageLink id="history" />
      <PageLink id="training" />
      <PageLink id="documents" />
      <PageLink id="mat" />
      <FCTLS2025Link />
    </Suspense>
  );
}
