import { useParams, useNavigate } from "react-router-dom";
import { handleBorrow, handleRepair } from "./Handle";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import Icon from "@mdi/react";
import { RouteBar } from "./RouteBar";
import { useQuery } from "@apollo/client";
import { ALL_MATERIAL_QUERY } from "../../graphql/queries";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { allPlugins } from "../MDX/allPlugins.ts";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import { colors } from "../../Color.ts";
import type { MaterialType } from "../../shared/type.ts";

const MaterialDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(ALL_MATERIAL_QUERY);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const allMaterials = JSON.parse(JSON.stringify(data?.AllMaterials));
  const eachMaterial = allMaterials.find(
    (material: MaterialType) => material.id === parseInt(id as string)
  );

  return (
    <div className="material-detail">
      {eachMaterial && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <button
              onClick={() => navigate("/MaterialAndToolPage")}
              className="transparent border-none ml-2.5 cursor-pointer"
            >
              <Icon
                path={mdiArrowLeftDropCircleOutline}
                size={3}
                color={colors.DarkSlateGray}
              />
            </button>
            <RouteBar Route={eachMaterial?.category} />
          </div>

          <div className="bg-white m-4 p-5 w-[50%] min-h-[400px] ml-[23%] rounded-lg border border-black py-6 px-10">
            <MDXEditor
              markdown={
                `# ${eachMaterial?.name}:\n` +
                `## ${eachMaterial?.description}\n` +
                `![](${eachMaterial?.photoLink})`
              }
              plugins={allPlugins("")}
              readOnly
            />
            <Button
              variant="outlined"
              onClick={() =>
                navigate(`/MaterialAndToolPage/Material/${id}/edit`)
              }
            >
              編輯
            </Button>
          </div>
          <div className="mx-2 my-4">
            <Stack direction="row" spacing={2}>
              <Button onClick={handleBorrow} variant="outlined">
                借用
              </Button>
              <Button onClick={handleRepair} variant="outlined">
                報修
              </Button>
            </Stack>
          </div>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default MaterialDetail;
