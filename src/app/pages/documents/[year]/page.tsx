import type { Years } from "../drive-pages";
import type { Languages } from "@/types/languages";
import { Folder } from "@components/icons/folder";
import { TextHeader } from "@components/ui/text-header";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Suspense, use } from "react";
import { documentsPages } from "../drive-pages";
import { DriveDocuments } from "./drive-documents";

interface DocumentYearPageProps {
  params: Promise<{ year: Years }>;
  searchParams: Promise<{ lang: Languages }>;
}

export default function DocumentYearPage(props: DocumentYearPageProps) {
  const searchParams = use(props.searchParams);

  const { lang } = searchParams;

  const params = use(props.params);

  const { year } = params;

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
