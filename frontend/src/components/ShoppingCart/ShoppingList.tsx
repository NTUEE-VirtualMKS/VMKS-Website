import UserToolDataTable from "./UserToolDataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
  GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
} from "@/graphql";
import { useUser } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import { UserBorrowMaterialType, UserBorrowToolType } from "@/shared/type";
import { borrowingStatus, unborrowedStatus } from "@/constants/index";
import UserMaterialDataTable from "./UserMaterialDataTable";

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

  const {
    data: unborrowedMaterialsData,
    loading: unborrowedMaterialsDataLoading,
    error: unborrowedMaterialsDataError,
  } = useQuery(GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: { userId: user?.id!, status: unborrowedStatus },
  });

  const {
    data: borrowingMaterialsData,
    loading: borrowingMaterialsDataLoading,
    error: borrowingMaterialsDataError,
  } = useQuery(GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY, {
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

  if (unborrowedMaterialsDataLoading) return <LoaderSpinner />;
  if (unborrowedMaterialsDataError) {
    toast({
      title: `${unborrowedMaterialsDataError.message}`,
      variant: "destructive",
    });
  }

  const unborrowedMaterials =
    (unborrowedMaterialsData?.GetUserBorrowMaterialsByStatusAndUserId as UserBorrowMaterialType[]) ||
    [];

  if (borrowingMaterialsDataLoading) return <LoaderSpinner />;
  if (borrowingMaterialsDataError) {
    toast({
      title: `${borrowingMaterialsDataError.message}`,
      variant: "destructive",
    });
  }
  const borrowingMaterials =
    (borrowingMaterialsData?.GetUserBorrowMaterialsByStatusAndUserId as UserBorrowMaterialType[]) ||
    [];

  return (
    <Tabs defaultValue="material">
      <div className="flex flex-row-reverse">
        <div className="w-56 mt-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="material"
              className="dark:text-zinc-500 dark:bg-[#303030] bg-opacity-30 text-base font-semibold"
            >
              {t("material")}
            </TabsTrigger>
            <TabsTrigger
              value="tool"
              className="dark:text-zinc-500 dark:bg-[#303030] bg-opacity-30 text-base font-semibold"
            >
              {t("tool")}
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="material" className="w-full">
        <UserMaterialDataTable
          tableName={t("material")}
          Icon={Cpu}
          unborrowedData={unborrowedMaterials}
          borrowingData={borrowingMaterials}
        />
      </TabsContent>
      <TabsContent value="tool">
        <UserToolDataTable
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
