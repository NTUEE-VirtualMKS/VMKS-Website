// TODO: can upload info through csv file
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "@/graphql/queries";
import type { MaterialType } from "@/shared/type.ts";
import { handleBorrow } from "./Handle";
import { Button } from "@/components/ui/button";
import LoaderSpinner from "../LoaderSpinner";

function MaterialList() {
  const { data, loading, error } = useQuery(ALL_MATERIAL_QUERY);
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const materials = JSON.parse(JSON.stringify(data?.AllMaterials));

  return (
    <div className="flex flex-col gap-4 flex-wrap justify-start xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
      {materials.map((material: MaterialType) => {
        return (
          <div
            className="bg-transparent mb-4 w-full xs:w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12"
            key={material.id}
          >
            <div className="h-full border p-3 bg-[#181b20] w-11/12 mx-auto rounded-lg">
              <Link to={`/MaterialAndToolPage/Material/${material.id}`}>
                <img
                  src={material.photoLink}
                  alt={material.name}
                  className="w-10/12 mx-auto mt-2"
                />
                <h2 className="text-white">{material.name}</h2>
              </Link>
              <p className="text-white">所在位置: {material.position}</p>
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <Button
                  onClick={handleBorrow}
                  className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                >
                  借用
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MaterialList;
