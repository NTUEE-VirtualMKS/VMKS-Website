import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { useQuery } from "@apollo/client";
import { GET_LIKED_TOOLS_BY_USER_ID_QUERY } from "@/graphql";
import LoaderSpinner from "./LoaderSpinner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

function SideBar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useUser();
  
  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      if (event.clientX < 50) {
        setIsVisible(true);
      } else if (event.clientX > 200) {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { data, loading, error } = useQuery(GET_LIKED_TOOLS_BY_USER_ID_QUERY, {
    variables: {
      userId: user?.id!,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) console.log("login");
  const likedTools = data?.GetLikedToolsByUserId || [];


  return (
    <TooltipProvider>
      <div
        className={`w-24 fixed top-0 left-0 h-full transform transition-transform duration-300 bg-slate-900 rounded-r-lg ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
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
            Starred
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
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
    </TooltipProvider>
  );
}

export default SideBar;
