// Admin only
import AllUsersBorrowingToolDataTable from "./AllUsersBorrowingToolDataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "../ui/use-toast";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { UserBorrowToolType, UserBorrowMaterialType } from "@/shared/type";
import {
  GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY,
  GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY,
} from "@/graphql";
import { allUsersBorrowingStatus, unreturnedStatus } from "@/constants/index";
import AllUsersBorrowingMaterialDataTable from "./AllUsersBorrowingMaterialDataTable";

// allUsersUnreturnedToolData
function AllUsersBorrowingList() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const {
    data: allUsersBorrowingToolData,
    loading: allUsersBorrowingToolDataLoading,
    error: allUsersBorrowingToolDataError,
  } = useQuery(GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY, {
    variables: { status: allUsersBorrowingStatus },
  });

  const {
    data: allUsersUnreturnedToolData,
    loading: allUsersUnreturnedToolDataLoading,
    error: allUsersUnreturnedToolDataError,
  } = useQuery(GET_ALL_USER_BORROW_TOOLS_BY_STATUS_QUERY, {
    variables: { status: unreturnedStatus },
  });

  const {
    data: allUsersBorrowingMaterialData,
    loading: allUsersBorrowingMaterialDataLoading,
    error: allUsersBorrowingMaterialDataError,
  } = useQuery(GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY, {
    variables: { status: allUsersBorrowingStatus },
  });

  const {
    data: allUsersUnreturnedMaterialData,
    loading: allUsersUnreturnedMaterialDataLoading,
    error: allUsersUnreturnedMaterialDataError,
  } = useQuery(GET_ALL_USER_BORROW_MATERIALS_BY_STATUS_QUERY, {
    variables: { status: unreturnedStatus },
  });

  if (allUsersBorrowingToolDataLoading) return <LoaderSpinner />;
  if (allUsersBorrowingToolDataError) {
    toast({
      title: `${allUsersBorrowingToolDataError.message}`,
      variant: "destructive",
    });
  }

  const allUsersBorrowingTools =
    (allUsersBorrowingToolData?.GetAllUserBorrowToolsByStatus as UserBorrowToolType[]) ||
    [];

  if (allUsersUnreturnedToolDataLoading) return <LoaderSpinner />;
  if (allUsersUnreturnedToolDataError) {
    toast({
      title: `${allUsersUnreturnedToolDataError.message}`,
      variant: "destructive",
    });
  }

  const allUsersUnreturnedTools =
    (allUsersUnreturnedToolData?.GetAllUserBorrowToolsByStatus as UserBorrowToolType[]) ||
    [];

  if (allUsersBorrowingMaterialDataLoading) return <LoaderSpinner />;
  if (allUsersBorrowingMaterialDataError) {
    toast({
      title: `${allUsersBorrowingMaterialDataError.message}`,
      variant: "destructive",
    });
  }

  const allUsersBorrowingMaterials =
    (allUsersBorrowingMaterialData?.GetAllUserBorrowMaterialsByStatus as UserBorrowMaterialType[]) ||
    [];

  if (allUsersUnreturnedMaterialDataLoading) return <LoaderSpinner />;
  if (allUsersUnreturnedMaterialDataError) {
    toast({
      title: `${allUsersUnreturnedMaterialDataError.message}`,
      variant: "destructive",
    });
  }

  const allUsersUnreturnedMaterials =
    (allUsersUnreturnedMaterialData?.GetAllUserBorrowMaterialsByStatus as UserBorrowMaterialType[]) ||
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
        <AllUsersBorrowingMaterialDataTable
          tableName={t("material")}
          Icon={Cpu}
          allUsersBorrowingMaterialData={allUsersBorrowingMaterials}
          allUsersUnreturnedMaterialData={allUsersUnreturnedMaterials}
        />
      </TabsContent>
      <TabsContent value="tool">
        <AllUsersBorrowingToolDataTable
          tableName={t("tool")}
          Icon={Hammer}
          allUsersBorrowingToolData={allUsersBorrowingTools}
          allUsersUnreturnedToolData={allUsersUnreturnedTools}
        />
      </TabsContent>
    </Tabs>
  );
}

export default AllUsersBorrowingList;
