import Link from 'next/link';

function Nav() {
  return (
    <nav className="navbar bg-base-200">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        ATLS
      </Link>
    </nav>
  );
}

export default Nav;
