import type { PropsWithChildren } from "react";

export function TextHeader({ children }: PropsWithChildren) {
  return <h1 className="text-xl font-semibold lg:text-3xl">{children}</h1>;
}
