import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export function HeroText() {
  const { t, lang = "it" } = useTranslation("home");

  return (
    <div>
      <h1 className="py-6 text-4xl font-bold lg:text-6xl">{t("header")}</h1>
      <div className="flex justify-center gap-3">
        <Link href={`/pages/contacts?lang=${lang}`}>
          <button
            className="btn border border-secondary bg-transparent uppercase lg:text-white"
            type="button"
          >
            {t("cta-secondary")}
          </button>
        </Link>
        <Link href="#section-atls">
          <button className="btn btn-primary uppercase shadow-md" type="button">
            {t("cta-main")}
          </button>
        </Link>
      </div>
    </div>
  );
}
