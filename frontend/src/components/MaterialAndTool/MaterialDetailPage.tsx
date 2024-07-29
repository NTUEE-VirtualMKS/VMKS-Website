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
import { useToast } from "../ui/use-toast.ts";

function MaterialDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useUser();
  const { data, loading, error } = useQuery(GET_MATERIAL_BY_ID_QUERY, {
    variables: { id: parseInt(id as string) },
  });

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const material = data?.GetMaterialById;

  const handleRepair = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      toast({
        title: "Login required",
        description: "Please login to report repair",
        variant: "destructive",
      });
    }
  };

  const handleBorrow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault();
      toast({
        title: "Login required",
        description: "Please login to borrow materials",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {material && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RouteBar route={material?.category} />
          </div>
          <div className="flex flex-col gap-2 p-3 bg-[#15171C] w-10/12 mx-auto rounded-lg my-5 border border-[#444444]">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-4 mx-2">
              <img
                src={material?.photoLink}
                alt={material?.name}
                className="w-11/12 mt-3 mx-auto bg-white sm:mx-auto sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12"
              />
              <div className="w-9/12 flex flex-col ml-5">
                <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2">
                  {material?.name}
                </h1>
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  描述: {material?.description}
                </p>
                {material?.partName && (
                  <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                    型號: {material?.partName}
                  </p>
                )}
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  位置: {material?.position}
                </p>
                <div className="flex flex-row gap-2">
                  <Label
                    htmlFor="valuable"
                    className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg"
                  >
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
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  剩餘數量: {material?.remain}（個）
                </p>
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  使用量: {material?.usage}（個）
                </p>
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  價錢: NT${material?.fee}
                </p>
                {material?.tutorialLink && (
                  <a
                    href={material?.tutorialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-sky-300 cursor-pointer hover:underline w-5/12 active:scale-95 transition-transform duration-200 focus:text-blue-600 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg"
                  >
                    使用教學
                  </a>
                )}
              </div>
            </div>
            {user?.isAdmin && (
              <div className="flex flex-row-reverse">
                <Button
                  onClick={() => navigate(`/MaterialPage/Material/${id}/edit`)}
                  className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                >
                  編輯
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-row-reverse gap-2">
            <Button className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXeqhK9OoII0DYkdMv8injfqSh0k3Y0exXxrEI0_GQvTn2LQ/viewform"
                target="_blank"
                onClick={handleBorrow}
              >
                借用
              </a>
            </Button>
            <Button className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200">
              <a onClick={handleRepair}>報修</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaterialDetailPage;
