import { useToast } from "@/components/ui/use-toast";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useUser } from "@/contexts/UserContext";

function SettingsPage() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();

  return (
    <div className="w-10/12 flex flex-col mx-auto mt-24 mb-8 text-white">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <Settings className="text-white" size={35} />
        {t("settings")}
      </h1>
    </div>
  );
}

export default SettingsPage;
