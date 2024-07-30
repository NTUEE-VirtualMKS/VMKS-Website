// TODO: handle borrow and repair buttons
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RouteBar from "./RouteBar.tsx";
import { useQuery } from "@apollo/client";
import { GET_TOOL_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner.tsx";
import { useUser } from "@/context/UserContext.tsx";
import { useToast } from "../ui/use-toast.ts";
import { useTranslation } from "react-i18next";
import ToolDetailCard from "./ToolDetailCard.tsx";

function ToolDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { user } = useUser();
  const { data, loading, error } = useQuery(GET_TOOL_BY_ID_QUERY, {
    variables: { getToolByIdId: parseInt(id as string) },
  });

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const tool = data?.GetToolById;

  const handleRepair = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      toast({
        title: "Login required",
        description: "Please login to report repair",
        variant: "destructive",
      });
    }
  };

  const handleBorrow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      toast({
        title: "Login required",
        description: "Please login to borrow tools",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {tool && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RouteBar route={tool?.category} />
          </div>
          <ToolDetailCard
            id={id!}
            photoLink={tool?.photoLink!}
            name={tool?.name!}
            description={tool?.description!}
            partName={tool?.partName!}
            position={tool?.position!}
            remain={tool?.remain!}
            usage={tool?.usage!}
            tutorialLink={tool?.tutorialLink!}
            category={tool?.category!}
          />
          <div className="flex flex-row-reverse gap-2">
            <Button className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 hover:bg-primary/90 bg-transparent">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXeqhK9OoII0DYkdMv8injfqSh0k3Y0exXxrEI0_GQvTn2LQ/viewform"
                target="_blank"
                onClick={handleBorrow}
              >
                {t("borrow")}
              </a>
            </Button>
            <Button className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200 hover:bg-primary/90 bg-transparent">
              <a onClick={handleRepair}>{t("repair")}</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolDetailPage;
