import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "../../../../components/ui/text-header";
import type { Years } from "../drive-pages";
import type { Languages } from "../../../../types/languages";
import { documentsPages } from "../drive-pages";

interface DocumentYearPage {
  params: {
    year: Years;
  };
  searchParams: {
    lang: Languages;
  };
}

export default function DocumentYearPage({
  params: { year },
  searchParams: { lang },
}: DocumentYearPage) {
  const { t } = useTranslation("documents");
  const folderId = documentsPages[year][lang];
  const src = `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
  return (
    <TextHeader>
      {t("title")} {year}
      <iframe
        className="min-h-[60vh]"
        src={src}
        title={`doc-${year}`}
        width="100%"
      />
    </TextHeader>
  );
}
