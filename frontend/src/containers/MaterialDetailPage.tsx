import { useNavigate, useParams } from "react-router-dom";
import RouteBar from "@/components/MaterialAndTool/RouteBar.tsx";
import { useQuery } from "@apollo/client";
import { GET_MATERIAL_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "@/components/LoaderSpinner.tsx";
import MaterialDetailCard from "@/components/MaterialAndTool/MaterialDetailCard.tsx";
import { useEffect } from "react";

function MaterialDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_MATERIAL_BY_ID_QUERY, {
    variables: { id: parseInt(id as string) },
  });

  useEffect(() => {
    if (!loading && !error && !data?.GetMaterialById) {
      navigate("/NotFound");
    }
  }, [loading, error, data, navigate]);

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const material = data?.GetMaterialById;

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
        </div>
      )}
    </div>
  );
}

export { MaterialDetailPage };
