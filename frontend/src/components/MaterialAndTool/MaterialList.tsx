// TODO: remove admin prop when userContext is implemented
import { useQuery } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "@/graphql/queries";
import type { MaterialType } from "@/shared/type.ts";
import LoaderSpinner from "../LoaderSpinner";
import MaterialCard from "./MaterialCard";

function MaterialList({ admin }: { admin: boolean }) {
  const { data, loading, error } = useQuery(ALL_MATERIAL_QUERY);
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const allMaterials = data?.AllMaterials;
  const materials = allMaterials?.map((material) => {
    return {
      id: material!.id,
      name: material!.name,
      description: material!.description,
      photoLink: material!.photoLink,
      position: material!.position,
      category: material!.category,
      valuable: material!.valuable,
      usage: material!.usage,
      remain: material!.remain,
      fee: material!.fee,
      tutorialLink: material!.tutorialLink,
      partName: material!.partName,
    };
  });

  return (
    <div className="flex flex-col gap-4 flex-wrap justify-start xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
      {materials?.map((material: MaterialType) => {
        return (
          <MaterialCard key={material.id} material={material} admin={admin} />
        );
      })}
    </div>
  );
}

export default MaterialList;
