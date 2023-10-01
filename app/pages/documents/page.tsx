import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "../../../components/ui/text-header";

function Documents() {
  const { t } = useTranslation("documents");
  return <TextHeader>{t("title")}</TextHeader>;
}

export default Documents;
