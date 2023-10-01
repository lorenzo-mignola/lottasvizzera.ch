import type { SVGProps } from "react";

// hero icons arrow top right on square
export function OpenExternal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="1.2em"
      viewBox="0 0 24 24"
      width="1.2em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
