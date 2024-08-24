import { useNavigate, useParams } from "react-router-dom";
import RouteBar from "@/components/MaterialAndTool/RouteBar.tsx";
import { useQuery } from "@apollo/client";
import { GET_THREEDP_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "@/components/LoaderSpinner.tsx";
import ThreeDPDetailCard from "@/components/Machine/ThreeDPDetailCard";
import { useEffect } from "react";

function ThreeDPDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_THREEDP_BY_ID_QUERY, {
    variables: { getThreeDpByIdId: id as string },
  });

  useEffect(() => {
    if (!loading && !error && !data?.GetThreeDPById) {
      navigate("/NotFound");
    }
  }, [loading, error, data, navigate]);

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const material = data?.GetThreeDPById;

  return (
    <div>
      {material && (
        <div className="flex flex-col">
          {/* <div className="flex flex-row">
            <RouteBar route={material?.category} />
          </div> */}
          <ThreeDPDetailCard
            id={id!}
            photoLink={material?.photoLink!}
            name={material?.name!}
            description={material?.description!}
            position={material?.position!}
            tutorialLink={material?.tutorialLink!}
            broken={material.broken}
          />
        </div>
      )}
    </div>
  );
}

export { ThreeDPDetailPage };
