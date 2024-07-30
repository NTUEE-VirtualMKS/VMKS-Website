import { WifiOff } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

function UnconnectedPage() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col size-full items-center mt-36 h-96">
      <WifiOff size={280} className="text-white" />
      <div className="flex-center w-full flex-col mt-2">
        <p className="w-full text-4xl text-center font-bold text-white">
          {t("connectToTheInternet")}
        </p>
        <p className="w-full text-lg text-center font-semibold text-white">
          {"offlineMessage"}
        </p>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4 border border-sky-300 text-sky-300 transform active:scale-90 transition-transform duration-200"
        >
          {t("retry")}
        </Button>
      </div>
    </section>
  );
}

export default UnconnectedPage;
