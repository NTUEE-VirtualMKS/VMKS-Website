import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import ThreeDPRequestTableTabsContent from "./ThreeDPRequestTableTabsContent";
import { GET_THREE_DP_REQUESTS_BY_THREE_DP_ID_QUERY } from "@/graphql";
import { ThreeDPRequestType } from "@/shared/type";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
function ThreeDPRequestTable({id}:{ id: string}) {
  const { t } = useTranslation();
  const { toast } = useToast();

  const {data, loading, error} = useQuery(GET_THREE_DP_REQUESTS_BY_THREE_DP_ID_QUERY,
    {variables: {threeDpId: id}}
  );
  const threeDPRequests = (data?.GetThreeDPRequestsByThreeDPId as ThreeDPRequestType[]) || [];
  if (loading) return <LoaderSpinner />;
  if (error) {
    toast({
      title: `${error.message}`,
      variant: "destructive",
    });
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="unborrowed">
        <section className="mb-1">
          <p className="dark:text-white text-3xl font-bold flex flex-row gap-2 flex-center">
            {t("Requests of this 3DP")};
          </p>
        </section>
        <div>
          <ThreeDPRequestTableTabsContent threeDPRequestData={threeDPRequests}/>
        </div>
        
      </Tabs>
    </div>
  );
}

export default ThreeDPRequestTable;
