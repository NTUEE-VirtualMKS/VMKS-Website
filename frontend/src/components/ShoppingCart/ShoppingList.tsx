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
    data: unborrowedData,
    loading: unborrowedDataLoading,
    error: unborrowedDataError,
  } = useQuery(GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: { userId: user?.id!, status: unborrowedStatus },
  });

  const {
    data: borrowingData,
    loading: borrowingDataLoading,
    error: borrowingDataError,
  } = useQuery(GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: {
      userId: user?.id!,
      status: borrowingStatus,
    },
  });

  if (unborrowedDataLoading) return <LoaderSpinner />;
  if (unborrowedDataError) {
    toast({ title: `${unborrowedDataError.message}`, variant: "destructive" });
  }

  const unborrowedTools =
    (unborrowedData?.GetUserBorrowToolsByStatusAndUserId as UserBorrowToolType[]) ||
    [];

  if (borrowingDataLoading) return <LoaderSpinner />;
  if (borrowingDataError) {
    toast({ title: `${borrowingDataError.message}`, variant: "destructive" });
  }
  const borrowingTools =
    (borrowingData?.GetUserBorrowToolsByStatusAndUserId as UserBorrowToolType[]) ||
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
        <UserDataTable
          tableName={t("material")}
          Icon={Cpu}
          unborrowedData={unborrowedTools}
          borrowingData={borrowingTools}
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
