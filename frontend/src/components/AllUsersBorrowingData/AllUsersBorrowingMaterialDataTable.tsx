import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTranslation } from "react-i18next";
import type { AllUsersBorrowingMaterialDataTableProps } from "@/shared/type";
import BorrowingMaterialTableTabsContent from "./BorrowingMaterialTableTabsContent";
import UnreturnedMaterialTableTabsContent from "./UnreturnedMaterialTableTabsContent";

function AllUsersBorrowingMaterialDataTable({
  tableName,
  Icon,
  allUsersBorrowingMaterialData,
  allUsersUnreturnedMaterialData,
}: AllUsersBorrowingMaterialDataTableProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Tabs defaultValue="borrowing">
        <section className="mb-1">
          <p className="text-white text-3xl font-bold flex flex-row gap-2 flex-center">
            <Icon className="text-white" size={28} />
            {tableName}
          </p>
        </section>
        <div>
          <TabsList className="grid w-full grid-cols-2 rounded-b-none border-b-transparent">
            <TabsTrigger
              value="borrowing"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              {t("borrowing")}
            </TabsTrigger>
            <TabsTrigger
              value="unreturned"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-lg font-semibold"
            >
              {t("unreturned")}
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="borrowing">
          <BorrowingMaterialTableTabsContent
            allUsersBorrowingMaterialData={allUsersBorrowingMaterialData}
          />
        </TabsContent>
        <TabsContent value="unreturned">
          <UnreturnedMaterialTableTabsContent
            allUsersUnreturnedMaterialData={allUsersUnreturnedMaterialData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AllUsersBorrowingMaterialDataTable;
