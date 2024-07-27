// TODO: handle borrow and repair buttons
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RouteBar from "./RouteBar.tsx";
import { useQuery } from "@apollo/client";
import { GET_TOOL_BY_ID_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner.tsx";
import { useUser } from "@/context/UserContext.tsx";
import { useToast } from "../ui/use-toast.ts";

function ToolDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useUser();
  const { data, loading, error } = useQuery(GET_TOOL_BY_ID_QUERY, {
    variables: { getToolByIdId: parseInt(id as string) },
  });

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const tool = data?.GetToolById;

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
        description: "Please login to borrow tools",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      {tool && (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <RouteBar route={tool?.category} />
          </div>
          <div className="flex flex-col gap-2 p-3 bg-[#15171C] w-10/12 mx-auto rounded-lg my-5 border border-white">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-4 mx-2">
              <img
                src={tool?.photoLink}
                alt={tool?.name}
                className="w-11/12 mt-3 mx-auto bg-white sm:mx-auto sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12"
              />
              <div className="w-9/12 flex flex-col ml-5">
                <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2">
                  {tool?.name}
                </h1>
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  描述: {tool?.description}
                </p>
                {tool?.partName && (
                  <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                    型號: {tool?.partName}
                  </p>
                )}
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  位置: {tool?.position}
                </p>
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  剩餘數量: {tool?.remain}（個）
                </p>
                <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
                  使用量: {tool?.usage}（個）
                </p>
                {tool?.tutorialLink && (
                  <a
                    href={tool?.tutorialLink}
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
                  onClick={() => navigate(`/ToolPage/Tool/${id}/edit`)}
                  className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 hover:bg-primary/90 bg-transparent"
                >
                  編輯
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-row-reverse gap-2">
            <Button className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 hover:bg-primary/90 bg-transparent">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXeqhK9OoII0DYkdMv8injfqSh0k3Y0exXxrEI0_GQvTn2LQ/viewform"
                target="_blank"
                onClick={handleBorrow}
              >
                借用
              </a>
            </Button>
            <Button className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200 hover:bg-primary/90 bg-transparent">
              <a onClick={handleRepair}>報修</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolDetailPage;
