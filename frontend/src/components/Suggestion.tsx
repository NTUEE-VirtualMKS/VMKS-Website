import { OctagonX } from "lucide-react";
import { useTranslation } from "react-i18next";

function Suggestion({ search, name }: { search: string; name: string }) {
  const { t } = useTranslation();
  return (
    <>
      {search ? (
        <section className="flex flex-col size-full flex-center">
          <OctagonX size={280} className="text-red-500" />
          <div className="flex-center w-full flex-col">
            <p className="w-full text-5xl text-center font-bold text-white p-2">
              "{search}" {t("notFound")}
            </p>
          </div>
        </section>
      ) : (
        <section className="flex flex-col size-full flex-center">
          <div className="flex-center w-full flex-col mt-40">
            <p className="w-full text-5xl text-center font-bold text-white p-2">
              {t(`no${name}`)}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Suggestion;
