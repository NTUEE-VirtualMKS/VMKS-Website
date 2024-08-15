import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import {
  GET_LIKED_TOOLS_BY_USER_ID_QUERY,
  GET_LIKED_MATERIALS_BY_USER_ID_QUERY,
} from "@/graphql";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ChevronRight, Cpu, Hammer, Star } from "lucide-react";
import { MaterialType, ToolType } from "@/shared/type";
import LoaderSpinner from "./LoaderSpinner";

function Sidebar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useUser();

  const {
    data: likedToolsData,
    loading: likedToolsLoading,
    error: likedToolsError,
    refetch: refetchLikedTools,
  } = useQuery(GET_LIKED_TOOLS_BY_USER_ID_QUERY, {
    variables: {
      userId: user?.id!,
    },
  });

  const {
    data: likedMaterialsData,
    loading: likedMaterialsLoading,
    error: likedMaterialsError,
    refetch: refetchLikedMaterials,
  } = useQuery(GET_LIKED_MATERIALS_BY_USER_ID_QUERY, {
    variables: {
      userId: user?.id!,
    },
  });

  if (likedToolsLoading) return <LoaderSpinner />;
  if (likedToolsError) {
    throw new Error(likedToolsError.message);
  }

  const likedTools =
    (likedToolsData?.GetLikedToolsByUserId as ToolType[]) || [];

  if (likedMaterialsLoading) return <LoaderSpinner />;
  if (likedMaterialsError) {
    throw new Error(likedMaterialsError.message);
  }

  const likedMaterials =
    (likedMaterialsData?.GetLikedMaterialsByUserId as MaterialType[]) || [];

  const handleRefetch = async () => {
    await refetchLikedMaterials();
    await refetchLikedTools();
  };

  return (
    <Sheet>
      <Tooltip>
        <TooltipTrigger className="relative dark:text-white -left-1.5 top-72 transition-transform duration-200 ease-in-out transform hover:scale-110">
          <SheetTrigger asChild>
            <ChevronRight onClick={handleRefetch} />
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent
          className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
          side="right"
        >
          <p className="text-white text-xs">{t("sidebar")}</p>
        </TooltipContent>
      </Tooltip>
      <SheetContent side="left" className="dark:bg-[#111111] bg-gray-100">
        <SheetHeader>
          <button onClick={() => navigate("/")}>
            <img
              className="w-5/12 mx-auto bg-black rounded-full"
              src="/logo-2.png"
              alt="logo"
            />
          </button>
          <div className="flex flex-row gap-1 items-center dark:text-white text-lg font-medium">
            <Star size={20} />
            {t("starred")}
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-0.5 h-full mt-1.5">
          <div className="flex flex-col gap-2">
            <p className="flex flex-row gap-1 flex-center dark:text-white text-base border-b w-full border-gray-400 border-opacity-50">
              <Cpu size={16} />
              {t("material")}
            </p>
            <div className="flex flex-col gap-0.5 overflow-y-auto h-60">
              {likedMaterials.length !== 0 &&
                likedMaterials.map((material) => (
                  <Tooltip key={material?.id}>
                    <TooltipTrigger className="w-full p-1.5">
                      <img
                        className="bg-white object-cover transform active:scale-90 transition-transform duration-200"
                        src={material?.photoLink}
                        alt={material?.name}
                        onClick={() =>
                          navigate(`/MaterialPage/Material/${material?.id}`)
                        }
                      />
                      <TooltipContent
                        className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                        side="right"
                      >
                        <p className="text-white text-xs">{material?.name}</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                ))}
            </div>
            <p className="flex flex-row gap-1 flex-center dark:text-white text-base border-b w-full border-gray-400 border-opacity-50">
              <Hammer size={16} />
              {t("tool")}
            </p>
            <div className="flex flex-col gap-0.5 overflow-y-auto h-60">
              {likedTools.length !== 0 &&
                likedTools.map((tool) => (
                  <Tooltip key={tool?.id}>
                    <TooltipTrigger className="w-full p-1.5">
                      <img
                        className="bg-white object-cover transform active:scale-90 transition-transform duration-200"
                        src={tool?.photoLink}
                        alt={tool?.name}
                        onClick={() => navigate(`/ToolPage/Tool/${tool?.id}`)}
                      />
                      <TooltipContent
                        className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                        side="right"
                      >
                        <p className="text-white text-xs">{tool?.name}</p>
                      </TooltipContent>
                    </TooltipTrigger>
                  </Tooltip>
                ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
