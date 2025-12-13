import { TextHeader } from "@components/ui/text-header";
import { getT } from "../../i18n/server";
import HistoryContent from "./history-content";

export default async function History() {
  const { t } = await getT("history");

  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <HistoryContent />
    </>
  );
}
