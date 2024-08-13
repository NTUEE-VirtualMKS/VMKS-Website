import { Link } from "react-router-dom";
import { MaterialType } from "@/shared/type";
import {
  ADD_MATERIAL_LIKE_MUTATION,
  DELETE_MATERIAL_LIKE_MUTATION,
  GET_MATERIAL_LIKES_QUERY,
  DELETE_MATERIAL_MUTATION,
  SEARCH_MATERIAL_BY_NAME_QUERY,
  GET_ALL_USER_BORROW_MATERIALS_QUERY,
  GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
  ADD_USER_BORROW_MATERIAL_MUTATION,
} from "@/graphql";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/contexts/UserContext";
import { useMutation } from "@apollo/client";
import { ShoppingCart, Trash2, Star, Share } from "lucide-react";
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
  materialBaseUrl,
  unborrowedStatus,
} from "@/constants/index";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

function MaterialCard({
  material,
  search,
}: {
  material: MaterialType;
  search: string;
}) {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  const [star, setStar] = useState(() => {
    if (
      user?.materialLikeIds?.some((id) =>
        material?.materialLikeIds?.includes(id)
      )
    ) {
      return true;
    } else {
      return false;
    }
  });

  const [deleteMaterial, { loading, error }] = useMutation(
    DELETE_MATERIAL_MUTATION,
    {
      refetchQueries: [
        { query: SEARCH_MATERIAL_BY_NAME_QUERY, variables: { name: search } },
        { query: GET_ALL_USER_BORROW_MATERIALS_QUERY },
        {
          query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
          variables: { userId: user?.id!, status: unborrowedStatus },
        },
        {
          query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
          variables: {
            userId: user?.id!,
            status: borrowingStatus,
          },
        },
      ],
    }
  );

  const handleDelete = async () => {
    await deleteMaterial({
      variables: {
        deleteMaterialId: material.id,
      },
    });
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      toast({ title: "Material deleted successfully!" });
    }
  };

  const [
    addUserBorrowMaterial,
    {
      loading: AddUserBorrowMaterialLoading,
      error: AddUserBorrowMaterialError,
    },
  ] = useMutation(ADD_USER_BORROW_MATERIAL_MUTATION, {
    refetchQueries: [
      { query: GET_ALL_USER_BORROW_MATERIALS_QUERY },
      {
        query: GET_USER_BORROW_MATERIALS_BY_STATUS_AND_USER_ID_QUERY,
        variables: { userId: user?.id!, status: unborrowedStatus },
      },
    ],
  });

  const handleAddToShoppingCart = async () => {
    if (!user) {
      toast({
        title: "Please log in to borrow the material!",
      });
      return;
    }
    await addUserBorrowMaterial({
      variables: {
        userBorrowMaterialInput: {
          userId: user?.id!,
          materialId: material.id,
          quantity: 0,
        },
      },
    });
    if (AddUserBorrowMaterialLoading) return <LoaderSpinner />;
    if (AddUserBorrowMaterialError) {
      toast({
        title: `${AddUserBorrowMaterialError.message}`,
        variant: "destructive",
      });
    } else {
      toast({ title: "Material added to shopping cart!" });
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
    addMaterialLike,
    { loading: AddMaterialLikeLoading, error: AddMaterialLikeError },
  ] = useMutation(ADD_MATERIAL_LIKE_MUTATION, {
    refetchQueries: [
      { query: GET_MATERIAL_LIKES_QUERY },
      { query: SEARCH_MATERIAL_BY_NAME_QUERY, variables: { name: "" } },
      { query: SEARCH_MATERIAL_BY_NAME_QUERY, variables: { name: search } },
    ],
  });

  const [
    deleteMaterialLike,
    { loading: DeleteMaterialLikeLoading, error: DeleteMaterialLikeError },
  ] = useMutation(DELETE_MATERIAL_LIKE_MUTATION, {
    refetchQueries: [
      { query: GET_MATERIAL_LIKES_QUERY },
      { query: SEARCH_MATERIAL_BY_NAME_QUERY, variables: { name: "" } },
      { query: SEARCH_MATERIAL_BY_NAME_QUERY, variables: { name: search } },
    ],
  });

  // Load the star state from local storage
  useEffect(() => {
    const storedState = localStorage.getItem(`starred-material-${material.id}`);
    if (storedState) {
      setStar(JSON.parse(storedState));
    }
  }, [material.id]);

  const handleStarClick = () => {
    const newState = !star;
    setStar(newState);
    localStorage.setItem(
      `starred-material-${material.id}`,
      JSON.stringify(newState)
    );
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
      await addMaterialLike({
        variables: {
          materialLikeInput: {
            userId: user?.id!,
            materialId: material.id,
          },
        },
      });
      if (AddMaterialLikeLoading) return <SkeletonList />;
      if (AddMaterialLikeError) {
        toast({
          title: `${AddMaterialLikeError.message}`,
          variant: "destructive",
        });
      } else {
        toast({ title: "Added to side bar.", variant: "star" });
      }
    } else {
      await deleteMaterialLike({
        variables: {
          materialLikeInput: {
            userId: user?.id!,
            materialId: material.id,
          },
        },
      });
      if (DeleteMaterialLikeLoading) return <SkeletonList />;
      if (DeleteMaterialLikeError) {
        toast({
          title: `${DeleteMaterialLikeError.message}`,
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
    const shareableLink = `${window.location.origin}${materialBaseUrl}/${material.id}`;
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
      key={material.id}
    >
      <div className="flex flex-col justify-between h-full p-3 dark:bg-[#181b20] w-11/12 mx-auto rounded-lg border dark:border-[#444444] shadow-md bg-white">
        <Link to={`/MaterialPage/Material/${material.id}`}>
          <img
            src={material.photoLink}
            alt={material.name}
            className="w-10/12 mx-auto mt-2 bg-white"
          />
          <div className="ml-3 mt-2">
            <h2 className="dark:text-white text-24">{material.name}</h2>
            <p className="dark:text-white text-16">
              {t("partName")}:{" "}
              {material?.partName ? `${material?.partName}` : t("none")}
            </p>
            <p className="dark:text-white text-16">
              {t("position")}: {material.position}
            </p>
            <p className="dark:text-white text-16">
              {t("remain")}: {material?.remain} {t("piece")}
            </p>
            <p className="dark:text-white text-16">
              {t("usage")}: {material?.usage} {t("piece")}
            </p>
          </div>
        </Link>
        <div className="flex flex-row mt-1 justify-center gap-2">
          {user?.isAdmin && (
            <Tooltip>
              <div className="rounded-full hover:bg-red-400 hover:bg-opacity-20">
                <div className="w-[35px] h-[35px]">
                  <AlertDialog>
                    <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                      <AlertDialogTrigger asChild>
                        <Trash2
                          className="p-1.5 dark:hover:text-red-400 hover:text-red-500"
                          size={35}
                        />
                      </AlertDialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black bg-opacity-80">
                      <p className="text-white text-xs">{t("delete")}</p>
                    </TooltipContent>
                    <AlertDialogContent className="dark:text-white dark:bg-black">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {t("alertDialogTitle")}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          {t("alertDialogDescription")}{" "}
                          <span className="lowercase">
                            {" " + t("material")}
                          </span>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="text-blue-500 dark:text-sky-300 border border-blue-400 dark:border-sky-300 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-transparent dark:hover:text-sky-300 hover:text-blue-500 shadow-md">
                          {t("cancel")}
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 transform active:scale-90 transition-transform duration-200 bg-transparent dark:hover:bg-primary/90 hover:bg-transparent shadow-md"
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
                        fill={star ? "#fff126" : "none"}
                        className={cn(
                          "p-1.5",
                          star || hover ? "text-[#fff126]" : "dark:text-white"
                        )}
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
                            className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index} hover:text-[#fff126]`}
                            key={index}
                            viewBox="0 0 122 117"
                            width="7"
                            height="7"
                          >
                            <path
                              className="fill-[#fff126]"
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
                          title: "Please log in to star the material.",
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
                user && "hover:bg-sky-400"
              )}
            >
              <div className="w-[35px] h-[35px]">
                <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                  <ShoppingCart
                    className={cn(
                      "p-1.5",
                      user
                        ? "hover:text-blue-500 dark:hover:text-sky-300"
                        : "dark:text-white text-gray-300 dark:text-opacity-50"
                    )}
                    size={35}
                    onClick={handleAddToShoppingCart}
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-black bg-opacity-80">
                  <p className="text-white text-xs">{t("addToShoppingCart")}</p>
                </TooltipContent>
              </div>
            </div>
          </Tooltip>
          <Tooltip>
            <div className="rounded-full hover:bg-green-400 hover:bg-opacity-20">
              <div className="w-[35px] h-[35px]">
                <TooltipTrigger
                  className="rounded-full transform active:scale-90 transition-transform duration-200"
                  onClick={handleShare}
                >
                  <Share
                    className="p-1.5 dark:hover:text-green-300 hover:text-green-500"
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

export default MaterialCard;
