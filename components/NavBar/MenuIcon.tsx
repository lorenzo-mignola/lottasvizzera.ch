/* eslint-disable jsx-a11y/label-has-associated-control */
interface MenuIconProps {
  id: string;
}

function MenuIcon({ id }: MenuIconProps) {
  return (
    <div className="flex-none lg:hidden mr-1">
      <label htmlFor={id} className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
    </div>
  );
}

export default MenuIcon;
