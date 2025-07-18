import { OpenExternal } from "@components/icons/open-external";
import { TextHeader } from "@components/ui/text-header";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { years } from "./drive-pages";

function Documents() {
  const { t, lang } = useTranslation("documents");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <ul className="grid-cols-3 gap-4 lg:grid">
        {years.map((year) => (
          <div
            className="my-2 grid grid-cols-[1fr_auto] items-center gap-2"
            key={year}
          >
            <Link
              className="btn font-semibold lg:text-lg"
              href={`/pages/documents/${year}?lang=${lang}`}
            >
              <button type="button">{year}</button>
            </Link>
            <Link
              className="lg:hidden"
              href={`/pages/documents/${year}?lang=${lang}`}
              target="_blank"
            >
              <OpenExternal />
            </Link>
          </div>
        ))}
        <div className="my-2 grid grid-cols-[1fr_auto] items-center gap-2">
          <Link
            className="btn font-semibold lg:text-lg"
            href={`/pages/documents/others?lang=${lang}`}
          >
            <button type="button">{t("others-documents")}</button>
          </Link>
          <Link
            className="lg:hidden"
            href={`/pages/documents/others?lang=${lang}`}
            target="_blank"
          >
            <OpenExternal />
          </Link>
        </div>
      </ul>
    </>
  );
}

export default Documents;
