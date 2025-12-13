import { TextHeader } from "@components/ui/text-header";
import { Suspense } from "react";
import { getT } from "../../i18n/server";
import { Map } from "./map";
import TrainingContent from "./training-content";

export default async function Training() {
  const { t } = await getT("training");

  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <TrainingContent />
      <div className="mt-5 h-[600px] w-full xl:h-[900px]">
        <Suspense>
          <Map />
        </Suspense>
      </div>
    </>
  );
}
