/* eslint-disable jsx-a11y/label-has-associated-control */
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Pages from './Pages';

const DRAWER_ID = 'side-drawer';

function Nav() {
  return (
    <nav className="navbar bg-base-200 sticky top-0 z-50">
      <div className="drawer">
        <input id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <MenuIcon id={DRAWER_ID} />
            <Logo />
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <Pages />
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor={DRAWER_ID} className="drawer-overlay" />
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            <Pages />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
