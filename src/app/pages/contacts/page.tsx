import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";

function Contacts() {
  const { t } = useTranslation("contacts");
  return <TextHeader>{t("title")}</TextHeader>;
}

export default Contacts;
