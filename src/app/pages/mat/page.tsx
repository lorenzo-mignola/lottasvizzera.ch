import { TextHeader } from "@components/ui/text-header";
import Image from "next/image";
import MatImage from "@/public/images/mat.jpeg";
import MatSchemaImage from "@/public/images/mat_schema.jpg";
import { getT } from "../../i18n/server";
import MatContent from "./mat-content";

async function Mat() {
  const { t } = await getT("mat");

  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <MatContent />
      <div className="mt-2 flex w-full flex-col items-center gap-4 xl:flex-row">
        <div className="w-full">
          <Image alt="Tappetone" className="w-full" src={MatImage} />
        </div>
        <div className="w-full">
          <Image
            alt="Tappetone Schema"
            className="w-full"
            src={MatSchemaImage}
          />
        </div>
      </div>
    </>
  );
}

export default Mat;
