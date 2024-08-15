import { useParams } from "react-router-dom";
import RouteBar from "@/components/MaterialAndTool/RouteBar.tsx";
import { useQuery } from "@apollo/client";
import { GET_TOOL_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "@/components/LoaderSpinner.tsx";
import ToolDetailCard from "@/components/MaterialAndTool/ToolDetailCard.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ToolDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_TOOL_BY_ID_QUERY, {
    variables: { getToolByIdId: parseInt(id as string) },
  });

  useEffect(() => {
    if (!loading && !error && !data?.GetToolById) {
      navigate("/NotFound");
    }
  }, [loading, error, data, navigate]);

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const tool = data?.GetToolById;

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
        </div>
      )}
    </div>
  );
}

export { ToolDetailPage };
