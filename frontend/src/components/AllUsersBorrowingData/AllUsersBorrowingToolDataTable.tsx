import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTranslation } from "react-i18next";
import type { UserBorrowToolType } from "@/shared/type";
import BorrowingToolTableTabsContent from "./BorrowingToolTableTabsContent";
import UnreturnedToolTableTabsContent from "./UnreturnedToolTableTabsContent";

type AllUsersBorrowingDataTableProps = {
  tableName: string;
  Icon: React.ElementType;
  allUsersBorrowingToolData: UserBorrowToolType[];
  allUsersUnreturnedToolData: UserBorrowToolType[];
};

function AllUsersBorrowingToolDataTable({
  tableName,
  Icon,
  allUsersBorrowingToolData,
  allUsersUnreturnedToolData,
}: AllUsersBorrowingDataTableProps) {
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
          <BorrowingToolTableTabsContent
            allUsersBorrowingToolData={allUsersBorrowingToolData}
          />
        </TabsContent>
        <TabsContent value="unreturned">
          <UnreturnedToolTableTabsContent
            allUsersUnreturnedToolData={allUsersUnreturnedToolData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AllUsersBorrowingToolDataTable;
