import type { Languages } from "@/types/languages";
import { Folder } from "@components/icons/folder";
import { TextHeader } from "@components/ui/text-header";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Suspense, use } from "react";
import { DriveDocuments } from "../[year]/drive-documents";

const DRIVE_OTHERS_IT = "1K-xluIi8GH7pdmjGothJAWzYkjQC6NE9";
const DRIVE_OTHERS_DE = "106ImfYYOWQDZnb8vMBsxmqrqEfp0ZHuz";

const folderIds = { it: DRIVE_OTHERS_IT, de: DRIVE_OTHERS_DE };

interface OtherPageProps {
  searchParams: Promise<{ lang: Languages }>;
}

export default function OtherPage(props: OtherPageProps) {
  const searchParams = use(props.searchParams);

  const { lang } = searchParams;

  const { t } = useTranslation("documents");

  if (!["it", "de"].includes(lang)) {
    return null;
  }

  const src = `https://drive.google.com/embeddedfolderview?id=${folderIds[lang]}#list`;

  return (
    <>
      <TextHeader>{t("others-documents")}</TextHeader>
      <div className="breadcrumbs pb-4 text-sm">
        <ul>
          <li>
            <Folder />
            <Link href={`/pages/documents?lang=${lang}`}>{t("title")}</Link>
          </li>
          <li>{t("others-documents")}</li>
        </ul>
      </div>
      <Suspense>
        <DriveDocuments src={src} year="others" />
      </Suspense>
    </>
  );
}
