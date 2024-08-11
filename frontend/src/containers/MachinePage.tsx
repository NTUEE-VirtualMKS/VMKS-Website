import { useToast } from "@/components/ui/use-toast";
import { Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useUser } from "@/contexts/UserContext";

function MachinePage() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();

  return (
    <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 text-white">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <Bot className="text-white" size={35} />
        {t("allMachines")}
      </h1>
    </div>
  );
}

export default MachinePage;
