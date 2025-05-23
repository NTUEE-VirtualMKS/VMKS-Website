import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTranslation } from "react-i18next";
import type { UserMaterialDataTableProps } from "@/shared/type";
import UnborrowedMaterialTableTabsContent from "./UnborrowedMaterialTableTabsContent";
import BorrowingMaterialTableTabsContent from "./BorrowingMaterialTableTabsContent";

function UserMaterialDataTable({
  tableName,
  Icon,
  unborrowedData,
  borrowingData,
}: UserMaterialDataTableProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Tabs defaultValue="unborrowed">
        <section className="mb-1">
          <p className="dark:text-white text-3xl font-bold flex flex-row gap-2 flex-center">
            <Icon className="dark:text-white" size={28} />
            {tableName}
          </p>
        </section>
        <div>
          <TabsList className="grid w-full grid-cols-2 rounded-b-none border-b-transparent">
            <TabsTrigger
              value="unborrowed"
              className="dark:text-zinc-500 dark:bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              {t("unborrowed")}
            </TabsTrigger>
            <TabsTrigger
              value="borrowing"
              className="dark:text-zinc-500 dark:bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              {t("borrowing")}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="unborrowed">
          <UnborrowedMaterialTableTabsContent unborrowedData={unborrowedData} />
        </TabsContent>
        <TabsContent value="borrowing">
          <BorrowingMaterialTableTabsContent borrowingData={borrowingData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default UserMaterialDataTable;
