import { OctagonX } from "lucide-react";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <section className="flex flex-col size-full items-center mt-36 h-96">
        <OctagonX size={370} className="text-red-500" />
        <div className="flex-center w-full flex-col">
          <p className="w-full text-5xl text-center font-bold text-white p-2">
            {t("pageNotFound")}
          </p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
