import BorrowHistoryTable from "./BorrowHistoryTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Cpu, Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY } from "@/graphql";
import { useUser } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import { UserBorrowToolType } from "@/shared/type";
import { returnedStatus } from "@/constants";

function BorrowHistoryList() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { toast } = useToast();
  const { data, loading, error } = useQuery(
    GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
    {
      variables: { userId: user?.id!, status: returnedStatus },
    }
  );
  if (loading) return <LoaderSpinner />;
  if (error) {
    toast({ title: `${error.message}`, variant: "destructive" });
  }

  const userBorrowedTools =
    (data?.GetUserBorrowToolsByStatusAndUserId as UserBorrowToolType[]) || [];

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
        <BorrowHistoryTable
          tableName={t("material")}
          Icon={Cpu}
          borrowHistoryData={userBorrowedTools} // TODO: Change to userBorrowedMaterials
        />
      </TabsContent>
      <TabsContent value="tool">
        <BorrowHistoryTable
          tableName={t("tool")}
          Icon={Hammer}
          borrowHistoryData={userBorrowedTools}
        />
      </TabsContent>
    </Tabs>
  );
}

export default BorrowHistoryList;
