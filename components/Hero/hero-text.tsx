import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export function HeroText() {
  const { t, lang = "it" } = useTranslation("home");

  return (
    <div>
      <h1 className="text-2xl font-bold lg:text-6xl">{t("header")}</h1>
      <p className="py-6 lg:text-lg">{t("subHeader")}</p>
      <Link href={`/pages/contacts?lang=${lang}`}>
        <button className="btn btn-primary" type="button">
          {t("cta")}
        </button>
      </Link>
    </div>
  );
}
