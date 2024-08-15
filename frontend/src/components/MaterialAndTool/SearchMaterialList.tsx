import { useQuery } from "@apollo/client";
import { SEARCH_MATERIAL_BY_NAME_QUERY } from "@/graphql/queries";
import type { MaterialType } from "@/shared/type.ts";
import MaterialCard from "./MaterialCard";
import Suggestion from "../Suggestion";
import SkeletonList from "../SkeletonList";

function SearchMaterialList({ search }: { search: string }) {
  const { data, loading, error } = useQuery(SEARCH_MATERIAL_BY_NAME_QUERY, {
    variables: { name: search },
  });
  if (loading) return <SkeletonList />;
  if (error) throw new Error(`Error! ${error.message}`);

  const materials = data?.SearchMaterialByName as MaterialType[];

  return (
    <div className="flex flex-col gap-4 flex-wrap justify-start xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
      {materials?.length !== 0 ? (
        materials?.map((material: MaterialType) => {
          return (
            <MaterialCard
              key={material.id}
              material={material}
              search={search}
            />
          );
        })
      ) : (
        <Suggestion search={search} name="Material" />
      )}
    </div>
  );
}

export default SearchMaterialList;
