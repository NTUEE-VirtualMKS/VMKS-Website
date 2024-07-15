// TODO: implement updateMaterial and UI
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_MATERIAL_QUERY, EDIT_MATERIAL_MUTATION } from "@/graphql";
import RouteBar from "./RouteBar";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import type { MaterialType } from "@/shared/type.ts";
import LoaderSpinner from "../LoaderSpinner";

function MaterialEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useRef<any>(null);
  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(ALL_MATERIAL_QUERY);
  const allMaterials = JSON.parse(JSON.stringify(data?.AllMaterials));
  const material = allMaterials.find(
    (m: MaterialType) => m.id === parseInt(id as string)
  );
  const [updateMaterial, { loading: updateLoading, error: updateError }] =
    useMutation(EDIT_MATERIAL_MUTATION, {
      refetchQueries: [{ query: ALL_MATERIAL_QUERY }],
    });

  const handleUpdate = async (material: string) => {
    if (!id) throw new Error("id is undefined");
    if (!material) throw new Error("material is undefined!");
    if (updateLoading) return <LoaderSpinner />;
    if (updateError) throw new Error(`Error! ${updateError.message}`);

    const updatedMaterial = await updateMaterial({
      variables: {
        editMaterialId: parseInt(id),
        materialInput: {
          name: material.split("\n")[0].split("#")[1].trim(),
          description: material.split("\n")[2].split("##")[1].trim(),
          photoLink: "",
          category: material.split("\n")[5].split("類別: ")[1].trim(),
          valuable:
            material.split("\n")[6].split("要錢: ")[1].trim() === "true"
              ? true
              : false,
          position: material.split("\n")[7].split("擺放位置: ")[1].trim(),
          usage: parseInt(material.split("\n")[8].split("使用量: ")[1].trim()),
          remain: parseInt(
            material.split("\n")[9].split("剩餘數量: ")[1].trim()
          ),
          fee: parseInt(material.split("\n")[10].split("價錢: ")[1].trim()),
          tutorialLink: "",
          partName: "",
        },
      },
    });
    navigate(
      `/MaterialAndToolPage/Material/${updatedMaterial.data?.EditMaterial?.id}`
    );
  };

  if (queryLoading) return <LoaderSpinner />;
  if (queryError) throw new Error(`Error! ${queryError.message}`);

  return (
    <>
      <div className="flex flex-row">
        <RouteBar Route={material?.category} />
      </div>
      <div className="flex flex-col gap-2 h-full border p-3 bg-white w-6/12 mx-auto rounded-lg my-1">
        <img
          src={material?.photoLink}
          alt={material?.name}
          className="w-10/12 mx-auto mt-2"
        />
        <h2 className="text-black">{material?.name}</h2>
        <p className="text-black">所在位置: {material?.position}</p>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button
            onClick={() => navigate(`/MaterialAndToolPage/Material/${id}`)}
            className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
          >
            取消
          </Button>
          <Button
            onClick={() => handleUpdate(ref.current?.getMarkdown())}
            className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
          >
            儲存
          </Button>
        </div>
      </div>
    </>
  );
}

export default MaterialEditPage;
