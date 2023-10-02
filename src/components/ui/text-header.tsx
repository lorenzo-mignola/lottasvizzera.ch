import type { PropsWithChildren } from "react";

export function TextHeader({ children }: PropsWithChildren) {
  return (
    <h1 className="mb-1 border-b-2 pb-1 text-2xl font-semibold lg:text-3xl">
      {children}
    </h1>
  );
}
