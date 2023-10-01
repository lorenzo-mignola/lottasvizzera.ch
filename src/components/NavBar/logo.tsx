import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
import { DrawerContext } from "@/util/hooks/DrawerContext";
import LogoImage from "@/public/images/Ass-ticinese-lotta-svizzera-LOGO-contorno.png";

interface LogoProps {
  classes?: string;
}

export function Logo({ classes = "" }: LogoProps) {
  const { closeDrawer } = useContext(DrawerContext);
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
