import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export function FCTLS2025() {
  const { t } = useTranslation("home");

  return (
    <section className="flex flex-col justify-center bg-primary p-5 py-7 text-center text-primary-content lg:p-20 lg:px-40">
      <h2 className="text-2xl font-semibold lg:text-4xl">
        {t("fctsl2025-header")}
      </h2>
      <p className="mt-1 lg:text-lg">Biasca, {t("fctsl2025-date")}</p>
      <div>
        <Link
          className="btn btn-outline btn-sm mt-5 uppercase text-primary-content lg:btn-md"
          href="https://www.fctls.ch/"
          target="_blank"
        >
          {t("fctsl2025-cta")}
        </Link>
      </div>
    </section>
  );
}
