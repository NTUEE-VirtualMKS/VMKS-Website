import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "../../graphql/queries";
import { EDIT_MATERIAL_MUTATION } from "../../graphql/mutations";
import { RouteBar } from "./RouteBar";
import TextArea from "../MDX/TextArea";
import { useRef } from "react";
import { Button } from "@mui/material";
import type { MaterialType } from "./MaterialType";

const MaterialEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useRef<any>();
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
    if (updateLoading) return "Submitting...";
    if (updateError) return `Submission error! ${updateError.message}`;
    const updatedMaterial = await updateMaterial({
      variables: {
        editMaterialId: parseInt(id),
        materialInput: {
          name: material.split("\n")[0].split("#")[1].trim(),
          description: material.split("\n")[2].split("##")[1].trim(),
          photoLink: material
            .split("\n")[4]
            .split("![](")[1]
            .split(")")[0]
            .trim(),
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
      `/MaterialAndTool/Material/${updatedMaterial.data?.EditMaterial?.id}`
    );
  };

  if (queryLoading) return <div>Loading...</div>;
  if (queryError) return <div>{queryError.message}</div>;

  // const materialId = parse(id);
  return (
    <>
      <RouteBar Route={material?.category} />
      <div className="bg-white m-4 p-5 w-[50%] min-h-[400px] ml-[23%] rounded-lg border border-black py-6 px-10">
        <TextArea
          markdown={
            `# ${material?.name}\n` +
            `## ${material?.description}\n` +
            `![](${material?.photoLink})\n` +
            `類別: ${material?.category}\n` +
            `要錢: ${material?.valuable}\n` +
            `擺放位置: ${material?.position}\n` +
            `使用量: ${material?.usage}\n` +
            `剩餘數量: ${material?.remain}\n` +
            `價錢: ${material?.fee}\n`
          }
          editorRef={ref}
        />
        <Button
          variant="outlined"
          onClick={() => navigate(`/MaterialAndTool/Material/${id}`)}
        >
          取消
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleUpdate(ref.current?.getMarkdown())}
        >
          儲存
        </Button>
      </div>
    </>
  );
};

export default MaterialEdit;
