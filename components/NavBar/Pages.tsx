import Logo from './Logo';
import PageLink from './PageLink';

function Pages() {
  return (
    <>
      <li>
        <Logo classes="lg:hidden" />
      </li>
      <PageLink href="/documents">Documenti</PageLink>
      <PageLink href="/contacts">Contatti</PageLink>
    </>
  );
}

export default Pages;
