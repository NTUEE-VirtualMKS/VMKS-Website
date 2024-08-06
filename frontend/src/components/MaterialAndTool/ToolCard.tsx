import { Link } from "react-router-dom";
import { ToolType } from "@/shared/type";
import { useMutation } from "@apollo/client";
import {
  ADD_TOOL_LIKE_MUTATION,
  ALL_USER_QUERY,
  DELETE_TOOL_LIKE_MUTATION,
  GET_TOOL_LIKES_QUERY,
  DELETE_TOOL_MUTATION,
  SEARCH_TOOL_BY_NAME_QUERY,
  GET_ALL_USER_BORROW_TOOLS_QUERY,
  GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
  ADD_USER_BORROW_TOOL_MUTATION,
} from "@/graphql";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/contexts/UserContext";
import { Share, ShoppingCart, Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { stagger, useAnimate, animate } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SkeletonList from "../SkeletonList";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import LoaderSpinner from "../LoaderSpinner";
import {
  borrowingStatus,
  toolBaseUrl,
  unborrowedStatus,
} from "@/constants/index";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

function ToolCard({ tool, search }: { tool: ToolType; search: string }) {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { user } = useUser();
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const [star, setStar] = useState(() => {
    if (user?.toolLikeIds?.some((id) => tool?.toolLikeIds?.includes(id))) {
      localStorage.setItem(`starred-tool-${tool.id}`, JSON.stringify(true));
      return true;
    } else {
      localStorage.setItem(`starred-tool-${tool.id}`, JSON.stringify(false));
      return false;
    }
  });

  const [deleteTool, { loading: DeleteToolLoading, error: DeleteToolError }] =
    useMutation(DELETE_TOOL_MUTATION, {
      refetchQueries: [
        { query: SEARCH_TOOL_BY_NAME_QUERY, variables: { name: search } },
        { query: GET_ALL_USER_BORROW_TOOLS_QUERY },
        {
          query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
          variables: { userId: user?.id!, status: unborrowedStatus },
        },
        {
          query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
          variables: {
            userId: user?.id!,
            status: borrowingStatus,
          },
        },
      ],
    });

  const handleDelete = async () => {
    await deleteTool({
      variables: {
        deleteToolId: tool.id,
      },
    });
    if (DeleteToolLoading) return <SkeletonList />;
    if (DeleteToolError) {
      toast({ title: `${DeleteToolError.message}`, variant: "destructive" });
    } else {
      toast({ title: "Tool deleted successfully!" });
    }
  };

  const [
    addUserBorrowTool,
    { loading: AddUserBorrowToolLoading, error: AddUserBorrowToolError },
  ] = useMutation(ADD_USER_BORROW_TOOL_MUTATION, {
    refetchQueries: [
      { query: GET_ALL_USER_BORROW_TOOLS_QUERY },
      {
        query: GET_USER_BORROW_TOOLS_BY_STATUS_AND_USER_ID_QUERY,
        variables: { userId: user?.id!, status: ["Unborrowed"] },
      },
    ],
  });

  const handleAddToShoppingCart = async () => {
    await addUserBorrowTool({
      variables: {
        userBorrowToolInput: {
          userId: user?.id!,
          toolId: tool.id,
          quantity: 0,
        },
      },
    });
    if (AddUserBorrowToolLoading) return <LoaderSpinner />;
    if (AddUserBorrowToolError) {
      toast({
        title: `${AddUserBorrowToolError.message}`,
        variant: "destructive",
      });
    } else {
      toast({ title: "Tool added to shopping cart!" });
    }
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

  const [
    addToolLike,
    { loading: AddToolLikeLoading, error: AddToolLikeError },
  ] = useMutation(ADD_TOOL_LIKE_MUTATION, {
    refetchQueries: [
      { query: ALL_USER_QUERY },
      { query: GET_TOOL_LIKES_QUERY },
      { query: SEARCH_TOOL_BY_NAME_QUERY, variables: { name: "" } },
      { query: SEARCH_TOOL_BY_NAME_QUERY, variables: { name: search } },
    ],
  });

  const [
    deleteToolLike,
    { loading: DeleteToolLikeLoading, error: DeleteToolLikeError },
  ] = useMutation(DELETE_TOOL_LIKE_MUTATION, {
    refetchQueries: [
      { query: ALL_USER_QUERY },
      { query: GET_TOOL_LIKES_QUERY },
      { query: SEARCH_TOOL_BY_NAME_QUERY, variables: { name: "" } },
      { query: SEARCH_TOOL_BY_NAME_QUERY, variables: { name: search } },
    ],
  });

  // Load the star state from local storage
  useEffect(() => {
    const storedState = localStorage.getItem(`starred-tool-${tool.id}`);
    if (storedState) {
      setStar(JSON.parse(storedState));
    }
  }, [tool.id]);

  const handleStarClick = () => {
    const newState = !star;
    setStar(newState);
    localStorage.setItem(`starred-tool-${tool.id}`, JSON.stringify(newState));
  };

  const handleLike = async () => {
    if (!star) {
      animate([
        ...sparklesReset,
        [".letter", { y: 0 }, { duration: 0.2, delay: stagger(0.05) }],
        ["button", { scale: 0.5 }, { duration: 0.05, at: "<" }],
        ["button", { scale: 1 }, { duration: 0.1 }],
        ...sparklesAnimation,
        [".letter", { y: 0 }, { duration: 0.000001 }],
        ...sparklesFadeOut,
      ]);
      await addToolLike({
        variables: {
          toolLikeInput: {
            userId: user?.id!,
            toolId: tool.id,
          },
        },
      });
      if (AddToolLikeLoading) return <SkeletonList />;
      if (AddToolLikeError) {
        toast({ title: `${AddToolLikeError.message}`, variant: "destructive" });
      } else {
        toast({ title: "Added to side bar.", variant: "star" });
      }
    } else {
      await deleteToolLike({
        variables: {
          toolLikeInput: {
            userId: user?.id!,
            toolId: tool.id,
          },
        },
      });
      if (DeleteToolLikeLoading) return <SkeletonList />;
      if (DeleteToolLikeError) {
        toast({
          title: `${DeleteToolLikeError.message}`,
          variant: "destructive",
        });
      } else {
        toast({ title: "Removed from side bar.", variant: "star" });
      }
    }
    setStar(!star);
    handleStarClick();
  };

  const handleShare = () => {
    const shareableLink = `${window.location.origin}${toolBaseUrl}/${tool.id}`;
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
          <div className="ml-3 mt-2">
            <h2 className="text-white text-24">{tool.name}</h2>
            <p className="text-white text-16">
              {t("partName")}:{" "}
              {tool?.partName ? `${tool?.partName}` : t("none")}
            </p>
            <p className="text-white text-16">
              {t("position")}: {tool.position}
            </p>
            <p className="text-white text-16">
              {t("remain")}: {tool?.remain} {t("piece")}
            </p>
            <p className="text-white text-16">
              {t("usage")}: {tool?.usage} {t("piece")}
            </p>
          </div>
        </Link>
        <div className="flex flex-row mt-1 justify-evenly sm:justify-evenly md:justify-evenly lg:justify-center xl:justify-center gap-2">
          {user?.isAdmin && (
            <Tooltip>
              <div className="rounded-full hover:bg-red-400 hover:bg-opacity-20">
                <div className="w-[35px] h-[35px]">
                  <AlertDialog>
                    <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                      <AlertDialogTrigger asChild>
                        <Trash2
                          className="p-1.5 hover:text-red-400"
                          size={35}
                        />
                      </AlertDialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black bg-opacity-80">
                      <p className="text-white text-xs">{t("delete")}</p>
                    </TooltipContent>
                    <AlertDialogContent className="text-white bg-black">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {t("alertDialogTitle")}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {t("alertDialogDescription")}
                          <span className="lowercase">{" " + t("tool")}</span>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-primary/90 hover:text-sky-300">
                          {t("cancel")}
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-primary/90"
                          onClick={handleDelete}
                        >
                          {t("continue")}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </Tooltip>
          )}
          <Tooltip>
            <div
              className={cn(
                "rounded-full  hover:bg-opacity-20",
                user ? "hover:bg-yellow-300" : ""
              )}
            >
              <div ref={scope} className="w-[35px] h-[35px]">
                <TooltipTrigger>
                  {user ? (
                    <>
                      <Star
                        fill={star ? "yellow" : "none"}
                        color={star || hover ? "yellow" : "white"}
                        className="p-1.5"
                        size={35}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={handleLike}
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
                    </>
                  ) : (
                    <Star
                      className="p-1.5 transform active:scale-90 transition-transform duration-200 text-white text-opacity-50"
                      size={35}
                      onClick={() =>
                        toast({
                          title: "Please log in to star the tool.",
                          variant: "star",
                        })
                      }
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent className="bg-black bg-opacity-80">
                  <p className="text-white text-xs">
                    {star ? t("unstar") : t("star")}
                  </p>
                </TooltipContent>
              </div>
            </div>
          </Tooltip>
          <Tooltip>
            <div
              className={cn(
                "rounded-full hover:bg-opacity-20",
                user ? "hover:bg-sky-300" : ""
              )}
            >
              <div className="w-[35px] h-[35px]">
                <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                  {user ? (
                    <ShoppingCart
                      className="p-1.5 hover:text-sky-300"
                      size={35}
                      onClick={handleAddToShoppingCart}
                    />
                  ) : (
                    <ShoppingCart
                      className="p-1.5 text-white text-opacity-50"
                      size={35}
                      onClick={() =>
                        toast({ title: "Please log in to borrow the tool." })
                      }
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent className="bg-black bg-opacity-80">
                  <p className="text-white text-xs">{t("addToShoppingCart")}</p>
                </TooltipContent>
              </div>
            </div>
          </Tooltip>
          <Tooltip>
            <div className="rounded-full hover:bg-green-300 hover:bg-opacity-20">
              <div className="w-[35px] h-[35px]">
                <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                  <Share
                    className="p-1.5 hover:text-green-300"
                    size={35}
                    onClick={handleShare}
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-black bg-opacity-80">
                  <p className="text-white text-xs">{t("share")}</p>
                </TooltipContent>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default ToolCard;
