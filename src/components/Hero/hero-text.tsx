import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useT } from "../../app/i18n/client";
import { getT } from "../../app/i18n/server";

export async function HeroText() {
  const { t, i18n } = await getT("home");
  const lang = i18n.resolvedLanguage;

  return (
    <div>
      <h1 className="py-6 text-4xl font-bold lg:text-6xl">{t("header")}</h1>
      <div className="flex justify-center gap-3">
        <Link href={`/pages/contacts?lang=${lang}`}>
          <button
            className="btn btn-outline uppercase lg:btn-lg lg:text-white"
            type="button"
          >
            {t("cta-secondary")}
          </button>
        </Link>
        <Link href="#section-atls">
          <button
            className="btn btn-primary uppercase shadow-md lg:btn-lg"
            type="button"
          >
            {t("cta-main")}
          </button>
        </Link>
      </div>
    </div>
  );
}
