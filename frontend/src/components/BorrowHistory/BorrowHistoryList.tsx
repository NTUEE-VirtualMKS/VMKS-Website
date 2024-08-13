import BorrowHistoryToolTable from "./BorrowHistoryToolTable";
import BorrowHistoryMaterialTable from "./BorrowHistoryMaterialTable";
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
import { returnedStatus } from "@/constants";

function BorrowHistoryList() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { toast } = useToast();
  const {
    data: userBorrowedToolsData,
    loading: userBorrowedToolsLoading,
    error: userBorrowedToolsError,
  } = useQuery(GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: { userId: user?.id!, status: returnedStatus },
  });

  const {
    data: userBorrowedMaterialsData,
    loading: userBorrowedMaterialsLoading,
    error: userBorrowedMaterialsError,
  } = useQuery(GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY, {
    variables: { userId: user?.id!, status: returnedStatus },
  });

  if (userBorrowedToolsLoading) return <LoaderSpinner />;
  if (userBorrowedToolsError) {
    toast({
      title: `${userBorrowedToolsError.message}`,
      variant: "destructive",
    });
  }

  const userBorrowedTools =
    (userBorrowedToolsData?.GetUserBorrowToolsByStatusAndUserId as UserBorrowToolType[]) ||
    [];

  if (userBorrowedMaterialsLoading) return <LoaderSpinner />;
  if (userBorrowedMaterialsError) {
    toast({
      title: `${userBorrowedMaterialsError.message}`,
      variant: "destructive",
    });
  }

  const userBorrowedMaterials =
    (userBorrowedMaterialsData?.GetUserBorrowMaterialsByStatusAndUserId as UserBorrowMaterialType[]) ||
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
        <BorrowHistoryMaterialTable
          tableName={t("material")}
          Icon={Cpu}
          borrowHistoryData={userBorrowedMaterials}
        />
      </TabsContent>
      <TabsContent value="tool">
        <BorrowHistoryToolTable
          tableName={t("tool")}
          Icon={Hammer}
          borrowHistoryData={userBorrowedTools}
        />
      </TabsContent>
    </Tabs>
  );
}

export default BorrowHistoryList;
