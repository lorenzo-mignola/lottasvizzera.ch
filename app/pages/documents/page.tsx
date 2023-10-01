import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { TextHeader } from "../../../components/ui/text-header";
import { years } from "./drive-pages";

function Documents() {
  const { t, lang } = useTranslation("documents");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <ul>
        {years.map((year) => (
          <Link
            href={`/pages/documents/${year}?lang=${lang}`}
            key={year}
            style={{ display: "block" }}
          >
            {year}
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Documents;
