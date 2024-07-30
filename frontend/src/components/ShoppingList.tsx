import UserDataTable from "./UserDataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";

function ShoppingList() {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="material">
      <div className="flex flex-row-reverse">
        <div className="w-56 mt-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="material"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-base font-semibold"
            >
              {t("material")}
            </TabsTrigger>
            <TabsTrigger
              value="tool"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-base font-semibold"
            >
              {t("tool")}
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="material" className="w-full">
        <UserDataTable tableName={t("material")} Icon={Cpu} />
      </TabsContent>
      <TabsContent value="tool">
        <UserDataTable tableName={t("tool")} Icon={Hammer} />
      </TabsContent>
    </Tabs>
  );
}

export default ShoppingList;
