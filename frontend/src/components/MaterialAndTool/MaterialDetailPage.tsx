import { useParams, useNavigate } from "react-router-dom";
import { handleBorrow, handleRepair } from "./Handle";
import { Button } from "@/components/ui/button";
import RouteBar from "./RouteBar";
import { useQuery } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "@/graphql/queries";
import type { MaterialType } from "@/shared/type.ts";
import LoaderSpinner from "../LoaderSpinner.tsx";

function MaterialDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(ALL_MATERIAL_QUERY);

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const allMaterials = JSON.parse(JSON.stringify(data?.AllMaterials));
  const eachMaterial = allMaterials.find(
    (material: MaterialType) => material.id === parseInt(id as string)
  );

  return (
    <div>
      {eachMaterial && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RouteBar Route={eachMaterial?.category} />
          </div>
          <div className="flex flex-col gap-2 h-full border p-3 bg-white w-6/12 mx-auto rounded-lg my-1">
            <img
              src={eachMaterial?.photoLink}
              alt={eachMaterial?.name}
              className="w-10/12 mx-auto mt-2"
            />
            <h2 className="text-black">{eachMaterial?.name}</h2>
            <p className="text-black">所在位置: {eachMaterial?.position}</p>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button
                onClick={() =>
                  navigate(`/MaterialAndToolPage/Material/${id}/edit`)
                }
                className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
              >
                編輯
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button
              onClick={handleRepair}
              className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
            >
              報修
            </Button>
            <Button
              onClick={handleBorrow}
              className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            >
              借用
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialDetailPage;
