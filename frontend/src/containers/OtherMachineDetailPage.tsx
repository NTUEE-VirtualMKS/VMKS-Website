import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MACHINE_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "@/components/LoaderSpinner.tsx";
import OtherMachineDetailCard from "@/components/Machine/OtherMachineDetailCard";
import { useEffect } from "react";

function OtherMachineDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_MACHINE_BY_ID_QUERY, {
    variables: { getMachineByIdId: id as string },
  });

  useEffect(() => {
    if (!loading && !error && !data?.GetMachineById) {
      navigate("/NotFound");
    }
  }, [loading, error, data, navigate]);

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const machine = data?.GetMachineById;

  return (
    <div>
      {machine && (
        <div className="flex flex-col">
          {/* <div className="flex flex-row">
            <RouteBar route={material?.category} />
          </div> */}
          <OtherMachineDetailCard
            id={id!}
            partName={machine?.partName!}
            category={machine?.category!}
            photoLink={machine?.photoLink!}
            name={machine?.name!}
            description={machine?.description!}
            position={machine?.position!}
            tutorialLink={machine?.tutorialLink!}
          />
        </div>
      )}
    </div>
  );
}

export { OtherMachineDetailPage };
