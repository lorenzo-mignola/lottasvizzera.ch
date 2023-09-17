/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import { DRAWER_ID } from '../util/constants';
import { DrawerContext } from '../util/hooks/DrawerContext';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Pages from './Pages';

function Drawer() {
  const { drawerOpen, setDrawerOpen } = useContext(DrawerContext);
  return (
    <>
      <input
        id={DRAWER_ID}
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => setDrawerOpen(!drawerOpen)}
      />
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
    </>
  );
}

export default Drawer;
