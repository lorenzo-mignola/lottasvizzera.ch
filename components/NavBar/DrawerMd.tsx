import { DRAWER_ID } from '../../util/constants';
import Logo from './Logo';
import MenuIcon from './MenuIcon';
import Pages from './Pages';

function DrawerMd() {
  return (
    <div className="drawer-content flex flex-col">
      <div className="navbar w-full">
        <MenuIcon id={DRAWER_ID} />
        <Logo />
        <div className="hidden flex-none lg:flex">
          <ul className="menu menu-horizontal">
            <Pages />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DrawerMd;
