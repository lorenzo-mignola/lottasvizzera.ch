import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { TextHeader } from "@components/ui/text-header";
import { Folder } from "@components/icons/folder";
import { Suspense } from "react";
import type { Years } from "../drive-pages";
import { documentsPages } from "../drive-pages";
import { DriveDocuments } from "./drive-documents";
import type { Languages } from "@/types/languages";

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
    <>
      <TextHeader>
        {t("title")} {year}
      </TextHeader>
      <div className="breadcrumbs pb-4 text-sm">
        <ul>
          <li>
            <Folder />
            <Link href={`/pages/documents?lang=${lang}`}>{t("title")}</Link>
          </li>
          <li>{year}</li>
        </ul>
      </div>
      <Suspense>
        <DriveDocuments src={src} year={year} />
      </Suspense>
    </>
  );
}
