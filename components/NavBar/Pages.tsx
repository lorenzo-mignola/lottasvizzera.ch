import Logo from './Logo';
import PageLink from './PageLink';

function Pages() {
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

export default Pages;
