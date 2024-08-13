// TODO: UI
import { useToast } from "@/components/ui/use-toast";
import { Atom } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useUser } from "@/contexts/UserContext";

function DisposableMaterialPage() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();

  return (
    <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 dark:text-white">
      <h1 className="dark:text-white p-1 flex flex-row items-center gap-2">
        <Atom className="dark:text-white" size={35} />
        {t("allDisposableMaterials")}
      </h1>
    </div>
  );
}

export default DisposableMaterialPage;
