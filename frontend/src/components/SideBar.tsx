import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { useQuery } from "@apollo/client";
import { GET_LIKED_TOOLS_BY_USER_ID_QUERY } from "@/graphql";
import LoaderSpinner from "./LoaderSpinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
function SideBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useUser();

  const { data, loading, error, refetch } = useQuery(
    GET_LIKED_TOOLS_BY_USER_ID_QUERY,
    {
      variables: {
        userId: user?.id!,
      },
    }
  );

  if (loading) return <LoaderSpinner />;
  if (error) console.log("login");
  const likedTools = data?.GetLikedToolsByUserId || [];

  const handleShow = async () => {
    await refetch();
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-row">
      <div
        className={cn(
          "w-24 fixed inset-y-0 left-0 transform transition-transform duration-200 bg-slate-900 rounded-r-lg",
          isVisible ? "translate-x-0" : "-translate-x-[6.4rem]"
        )}
      >
        <button onClick={() => navigate("/")}>
          <img
            className="w-10/12 mx-auto my-1.5 object-cover"
            src="/logo.png"
            alt="logo"
          />
        </button>
        <div className="h-px bg-zinc-600" />
        <div className="w-full flex flex-col justify-center items-center p-2">
          <div className="flex-wrap px-1 text-white text-base font-medium font-inter tracking-wide">
            {t("starred")}
          </div>
        </div>
        {!isVisible ? (
          <Tooltip>
            <TooltipTrigger
              className="relative text-white ml-24 top-40 transition-transform duration-200 ease-in-out transform hover:scale-110"
              onClick={handleShow}
            >
              <ChevronRight />
            </TooltipTrigger>
            <TooltipContent
              className="bg-black bg-opacity-80 text-white"
              side="right"
            >
              {t("sidebar")}
            </TooltipContent>
          </Tooltip>
        ) : (
          <>
            <div className="flex flex-col gap-0.5 overflow-y-auto h-[72%]">
              <div className="flex flex-col gap-2">
                {likedTools.length !== 0 &&
                  likedTools.map((tool) => (
                    <Tooltip key={tool?.id}>
                      <TooltipTrigger className="w-10/12 mx-auto p-1">
                        <img
                          className="bg-white object-cover transform active:scale-90 transition-transform duration-200"
                          src={tool?.photoLink}
                          alt={tool?.name}
                          onClick={() => navigate(`/ToolPage/Tool/${tool?.id}`)}
                        />
                        <TooltipContent
                          className="bg-black bg-opacity-80 text-white"
                          side="right"
                        >
                          {tool?.name}
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  ))}
              </div>
            </div>
            <button
              className="w-6/12 ml-6 mt-2.5 p-1 text-xs bg-zinc-300 bg-opacity-15 hover:bg-opacity-30 rounded-xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
              onClick={() => setIsVisible(!isVisible)}
            >
              {t("hide")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SideBar;
