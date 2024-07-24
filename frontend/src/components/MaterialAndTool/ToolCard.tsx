import { Link } from "react-router-dom";
import { ToolType } from "@/shared/type";
import { DELETE_TOOL_MUTATION } from "@/graphql";
import { useMutation } from "@apollo/client";
import { ALL_TOOL_QUERY } from "@/graphql/queries";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/context/UserContext";
import { Share, ShoppingCart, Star, Trash2 } from "lucide-react";
import { useState } from "react";
import { stagger, useAnimate, animate } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

function ToolCard({ tool }: { tool: ToolType }) {
  const { toast } = useToast();
  const { user } = useUser();
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const [like, setLike] = useState(false); // TODO: connect to backend
  const [deleteTool, { loading, error }] = useMutation(DELETE_TOOL_MUTATION, {
    refetchQueries: [{ query: ALL_TOOL_QUERY }],
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this tool?")) {
      deleteTool({
        variables: {
          deleteToolId: tool.id,
        },
      });
      if (loading) return <LoaderSpinner />;
      if (error) {
        toast({ title: `${error.message}`, variant: "destructive" });
      } else {
        toast({ title: "Tool deleted successfully!" });
      }
    }
  };

  // const handleBorrow = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   if (!user) {
  //     e.preventDefault();
  //     toast({
  //       title: "Login required",
  //       description: "Please login to borrow tools",
  //       variant: "destructive",
  //     });
  //   }
  // };
  const handleBorrow = () => {
    toast({ title: "Added to shopping cart." });
  };

  const sparkles = Array.from({ length: 12 });
  const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
    `.sparkle-${index}`,
    {
      x: randomNumberBetween(-20, 20),
      y: randomNumberBetween(-20, 20),
      scale: randomNumberBetween(0.5, 0.75),
      opacity: 1,
    },
    {
      duration: 0.4,
      at: "<",
    },
  ]);
  const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
    `.sparkle-${index}`,
    {
      opacity: 0,
      scale: 0,
    },
    {
      duration: 0.3,
      at: "<",
    },
  ]);
  const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
    `.sparkle-${index}`,
    {
      x: 0,
      y: 0,
    },
    {
      duration: 0.000001,
    },
  ]);

  const handleLike = () => {
    if (!like) {
      animate([
        ...sparklesReset,
        [".letter", { y: 0 }, { duration: 0.2, delay: stagger(0.05) }],
        ["button", { scale: 0.1 }, { duration: 0.1, at: "<" }],
        ["button", { scale: 1 }, { duration: 0.1 }],
        ...sparklesAnimation,
        [".letter", { y: 0 }, { duration: 0.000001 }],
        ...sparklesFadeOut,
      ]);
      toast({ title: "Added to side bar.", variant: "like" });
    } else {
      toast({ title: "Removed from side bar.", variant: "like" });
    }
    setLike(!like);
  };

  const handleShare = () => {
    const shareableLink = `${window.location.origin}/ToolPage/Tool/${tool.id}`;
    navigator.clipboard
      .writeText(shareableLink)
      .then(() => {
        toast({ title: "Link copied to clipboard!", variant: "share" });
      })
      .catch((err) => {
        toast({
          title: "Failed to copy the link.",
          description: err,
          variant: "destructive",
        });
      });
  };

  return (
    <TooltipProvider>
      <div
        className="bg-transparent mb-5 w-full xs:w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12"
        key={tool.id}
      >
        <div className="flex flex-col justify-between h-full p-3 bg-[#181b20] w-11/12 mx-auto rounded-lg border border-[#444444]">
          <Link to={`/ToolPage/Tool/${tool.id}`}>
            <img
              src={tool.photoLink}
              alt={tool.name}
              className="w-10/12 mx-auto mt-2 bg-white"
            />
            <h2 className="text-white text-24">{tool.name}</h2>
            <p className="text-white text-16">
              型號: {tool?.partName ? `${tool?.partName}` : "無"}
            </p>
            <p className="text-white text-16">位置: {tool.position}</p>
            <p className="text-white text-16">剩餘數量: {tool?.remain}（個）</p>
            <p className="text-white text-16">使用量: {tool?.usage}（個）</p>
          </Link>
          <div className="flex flex-row mt-1 justify-center gap-2">
            {user?.isAdmin && (
              <Tooltip>
                <div className="rounded-full hover:bg-red-400 hover:bg-opacity-20">
                  <div className="w-[35px] h-[35px]">
                    <TooltipTrigger
                      className="rounded-full transform active:scale-90 transition-transform duration-200"
                      onClick={handleDelete}
                    >
                      <Trash2 className="p-1.5 hover:text-red-400" size={35} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black bg-opacity-80">
                      <p className="text-white text-xs">delete</p>
                    </TooltipContent>
                  </div>
                </div>
              </Tooltip>
            )}
            <Tooltip>
              <div className="rounded-full hover:bg-yellow-300 hover:bg-opacity-20">
                <div ref={scope} className="w-[35px] h-[35px]">
                  <TooltipTrigger onClick={handleLike}>
                    <Star
                      fill={like ? "yellow" : "none"}
                      color={like || hover ? "yellow" : "white"}
                      className="p-1.5"
                      size={35}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 block"
                    >
                      {Array.from({ length: 12 }).map((_, index) => (
                        <svg
                          className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index} hover:text-yellow-300`}
                          key={index}
                          viewBox="0 0 122 117"
                          width="7"
                          height="7"
                        >
                          <path
                            className="fill-yellow-200"
                            d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                          />
                        </svg>
                      ))}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black bg-opacity-80">
                    <p className="text-white text-xs">like</p>
                  </TooltipContent>
                </div>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="rounded-full hover:bg-sky-300 hover:bg-opacity-20">
                <div className="w-[35px] h-[35px]">
                  <TooltipTrigger
                    className="rounded-full transform active:scale-90 transition-transform duration-200"
                    onClick={handleBorrow}
                  >
                    <ShoppingCart
                      className="p-1.5 hover:text-sky-300"
                      size={35}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-black bg-opacity-80">
                    <p className="text-white text-xs">borrow</p>
                  </TooltipContent>
                </div>
              </div>
            </Tooltip>
            <Tooltip>
              <div className="rounded-full hover:bg-green-300 hover:bg-opacity-20">
                <div className="w-[35px] h-[35px]">
                  <TooltipTrigger
                    className="rounded-full transform active:scale-90 transition-transform duration-200"
                    onClick={handleShare}
                  >
                    <Share className="p-1.5 hover:text-green-300" size={35} />
                  </TooltipTrigger>
                  <TooltipContent className="bg-black bg-opacity-80">
                    <p className="text-white text-xs">share</p>
                  </TooltipContent>
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default ToolCard;
