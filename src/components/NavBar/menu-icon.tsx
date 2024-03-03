interface MenuIconProps {
  id: string;
}

export function MenuIcon({ id }: MenuIconProps) {
  return (
    <div className="mr-1 flex-none lg:hidden">
      <label className="btn btn-square btn-ghost" htmlFor={id}>
        <svg
          className="inline-block size-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </label>
    </div>
  );
}
