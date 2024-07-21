// TODO: handle rborrow and repair buttons
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RouteBar from "./RouteBar";
import { useQuery } from "@apollo/client";
import { GET_MATERIAL_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner.tsx";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label.tsx";
import { useUser } from "@/context/UserContext.tsx";

function MaterialDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { data, loading, error } = useQuery(GET_MATERIAL_BY_ID_QUERY, {
    variables: { id: parseInt(id as string) },
  });

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const material = data?.GetMaterialById;

  const handleRepair = () => {};

  return (
    <div>
      {material && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RouteBar route={material?.category} />
          </div>
          <div className="flex flex-col gap-2 border p-3 bg-[#15171C] w-10/12 mx-auto rounded-lg my-5">
            <div className="flex flex-row my-4 mx-2">
              <img
                src={material?.photoLink}
                alt={material?.name}
                className="w-6/12 mt-3 ml-1"
              />
              <div className="w-8/12 flex flex-col ml-5">
                <h1 className="text-white text-5xl">{material?.name}</h1>
                <p className="text-white">描述: {material?.description}</p>
                {material?.partName && (
                  <p className="text-white">型號: {material?.partName}</p>
                )}
                <p className="text-white">位置: {material?.position}</p>
                <div className="flex flex-row gap-2">
                  <Label htmlFor="valuable" className="text-white text-lg">
                    要錢:{" "}
                  </Label>
                  <Input
                    id="valuable"
                    type="checkbox"
                    checked={material?.valuable}
                    className="size-4 mt-1.5 bg-[#15171C] text-white"
                    onChange={() => {}}
                  />
                </div>
                <p className="text-white">剩餘數量: {material?.remain}（個）</p>
                <p className="text-white">使用量: {material?.usage}（個）</p>
                <p className="text-white">價錢: NT${material?.fee}</p>
                {material?.tutorialLink && (
                  <a
                    href={material?.tutorialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 cursor-pointer hover:underline text-lg w-3/12 active:scale-95 transition-transform duration-200 focus:text-blue-600"
                  >
                    使用教學
                  </a>
                )}
              </div>
            </div>
            {user?.isAdmin && (
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
            )}
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button
              onClick={handleRepair}
              className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
              disabled={!user}
            >
              報修
            </Button>
            <Button
              className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
              disabled={!user}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXeqhK9OoII0DYkdMv8injfqSh0k3Y0exXxrEI0_GQvTn2LQ/viewform"
                target="_blank"
              >
                借用
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialDetailPage;
