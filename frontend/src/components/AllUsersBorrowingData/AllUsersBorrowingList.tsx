// Admin only
import AllUsersBorrowingDataTable from "./AllUsersBorrowingDataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "../ui/use-toast";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { UserBorrowToolType } from "@/shared/type";
import { GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY } from "@/graphql";
import { allUsersBorrowingStatus, unreturnedStatus } from "@/constants/index";

// allUsersUnreturnedData
function AllUsersBorrowingList() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const {
    data: allUsersBorrowingData,
    loading: allUsersBorrowingDataLoading,
    error: allUsersBorrowingDataError,
  } = useQuery(GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY, {
    variables: { status: allUsersBorrowingStatus },
  });

  const {
    data: allUsersUnreturnedData,
    loading: allUsersUnreturnedDataLoading,
    error: allUsersUnreturnedDataError,
  } = useQuery(GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY, {
    variables: { status: unreturnedStatus },
  });

  if (allUsersBorrowingDataLoading) return <LoaderSpinner />;
  if (allUsersBorrowingDataError) {
    toast({
      title: `${allUsersBorrowingDataError.message}`,
      variant: "destructive",
    });
  }

  const allUsersBorrowingTools =
    (allUsersBorrowingData?.GetAllUserBorrowToolsByStatus as UserBorrowToolType[]) ||
    [];

  if (allUsersUnreturnedDataLoading) return <LoaderSpinner />;
  if (allUsersUnreturnedDataError) {
    toast({
      title: `${allUsersUnreturnedDataError.message}`,
      variant: "destructive",
    });
  }

  const allUsersUnreturnedTools =
    (allUsersUnreturnedData?.GetAllUserBorrowToolsByStatus as UserBorrowToolType[]) ||
    [];

  return (
    <Tabs defaultValue="tool">
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
        <AllUsersBorrowingDataTable
          tableName={t("material")}
          Icon={Cpu}
          allUsersBorrowingData={allUsersBorrowingTools}
          allUsersUnreturnedData={allUsersUnreturnedTools}
        />
      </TabsContent>
      <TabsContent value="tool">
        <AllUsersBorrowingDataTable
          tableName={t("tool")}
          Icon={Hammer}
          allUsersBorrowingData={allUsersBorrowingTools}
          allUsersUnreturnedData={allUsersUnreturnedTools}
        />
      </TabsContent>
    </Tabs>
  );
}

export default AllUsersBorrowingList;
