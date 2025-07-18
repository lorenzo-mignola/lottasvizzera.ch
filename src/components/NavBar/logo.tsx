import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { use } from "react";
import LogoImage from "@/public/images/Ass-ticinese-lotta-svizzera-LOGO-contorno.png";
import { DrawerContext } from "@/util/hooks/DrawerContext";

interface LogoProps {
  classes?: string;
}

export function Logo({ classes = "" }: LogoProps) {
  const { closeDrawer } = use(DrawerContext);
  const params = useSearchParams();
  const lang = params.get("lang") || "it";
  return (
    <Link href={`/?lang=${lang}`}>
      <Image
        alt="ATLS Logo"
        className={classes}
        onClick={() => {
          closeDrawer();
        }}
        src={LogoImage}
        width={100}
      />
    </Link>
  );
}
