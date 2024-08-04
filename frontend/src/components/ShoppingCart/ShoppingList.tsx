import UserDataTable from "./UserDataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY } from "@/graphql";
import { useUser } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import { UserBorrowToolType } from "@/shared/type";
import { borrowingStatus, unborrowedStatus } from "@/constants/index";

// status: "Unborrowed" | "Processing" | "Success" | "Failed" | "Not Returned Yet" | "Returned";
function ShoppingList() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { toast } = useToast();
  const {
    data: unborrowedToolsData,
    loading: unborrowedToolsDataLoading,
    error: unborrowedToolsDataError,
  } = useQuery(GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: { userId: user?.id!, status: unborrowedStatus },
  });

  const {
    data: borrowingToolsData,
    loading: borrowingToolsDataLoading,
    error: borrowingToolsDataError,
  } = useQuery(GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: {
      userId: user?.id!,
      status: borrowingStatus,
    },
  });

  if (unborrowedToolsDataLoading) return <LoaderSpinner />;
  if (unborrowedToolsDataError) {
    toast({
      title: `${unborrowedToolsDataError.message}`,
      variant: "destructive",
    });
  }

  const unborrowedTools =
    (unborrowedToolsData?.GetUserBorrowToolsByStatusAndUserId as UserBorrowToolType[]) ||
    [];

  if (borrowingToolsDataLoading) return <LoaderSpinner />;
  if (borrowingToolsDataError) {
    toast({
      title: `${borrowingToolsDataError.message}`,
      variant: "destructive",
    });
  }
  const borrowingTools =
    (borrowingToolsData?.GetUserBorrowToolsByStatusAndUserId as UserBorrowToolType[]) ||
    [];

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
        <UserDataTable
          tableName={t("material")}
          Icon={Cpu}
          unborrowedData={unborrowedTools} // TODO: Change to unborrowedMaterials
          borrowingData={borrowingTools} // TODO: Change to borrowingMaterials
        />
      </TabsContent>
      <TabsContent value="tool">
        <UserDataTable
          tableName={t("tool")}
          Icon={Hammer}
          unborrowedData={unborrowedTools}
          borrowingData={borrowingTools}
        />
      </TabsContent>
    </Tabs>
  );
}

export default ShoppingList;
