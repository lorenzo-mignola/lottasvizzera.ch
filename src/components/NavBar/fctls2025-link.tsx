import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function FCTLS2025Link() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "it";

  return (
    <li className="my-2 rounded-btn text-lg font-medium lg:mx-2 lg:my-0">
      <Link
        className="text-base-content"
        href="https://www.fctls.ch/"
        target="_blank"
      >
        {lang === "it" ? "FCTLS" : "TKSF"} 2025
      </Link>
    </li>
  );
}
