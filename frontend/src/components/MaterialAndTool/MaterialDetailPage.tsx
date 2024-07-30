// TODO: handle rborrow and repair buttons
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RouteBar from "./RouteBar";
import { useQuery } from "@apollo/client";
import { GET_MATERIAL_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner.tsx";
import { useUser } from "@/context/UserContext.tsx";
import { useToast } from "../ui/use-toast.ts";
import { useTranslation } from "react-i18next";
import MaterialDetailCard from "./MaterialDetailCard.tsx";

function MaterialDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { user } = useUser();
  const { data, loading, error } = useQuery(GET_MATERIAL_BY_ID_QUERY, {
    variables: { id: parseInt(id as string) },
  });

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const material = data?.GetMaterialById;

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
        description: "Please login to borrow materials",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {material && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RouteBar route={material?.category} />
          </div>
          <MaterialDetailCard
            id={id!}
            photoLink={material?.photoLink!}
            name={material?.name!}
            description={material?.description!}
            partName={material?.partName!}
            position={material?.position!}
            remain={material?.remain!}
            usage={material?.usage!}
            tutorialLink={material?.tutorialLink!}
            category={material?.category!}
            fee={material?.fee!}
            valuable={material?.valuable!}
          />
          <div className="flex flex-row-reverse gap-2">
            <Button className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXeqhK9OoII0DYkdMv8injfqSh0k3Y0exXxrEI0_GQvTn2LQ/viewform"
                target="_blank"
                onClick={handleBorrow}
              >
                {t("borrow")}
              </a>
            </Button>
            <Button className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200">
              <a onClick={handleRepair}>{t("repair")}</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialDetailPage;
