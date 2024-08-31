import { Link } from "react-router-dom";
import type { ThreeDPType } from "@/shared/type.ts";
import { DELETE_THREE_DP_MUTATION, GET_ALL_THREEDPS_QUERY } from "@/graphql";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/contexts/UserContext";
import { useMutation } from "@apollo/client";
import { Trash2, Share } from "lucide-react";
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
import { threedpBaseUrl } from "@/constants/index";

function ThreeDPCard({ threedp }: { threedp: ThreeDPType }) {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();
  const cursor = null;
  const limit = 12;

  const [deleteThreeDP, { loading, error }] = useMutation(
    DELETE_THREE_DP_MUTATION,
    {
      refetchQueries: [
        {
          query: GET_ALL_THREEDPS_QUERY,
          variables: {
            cursor: cursor,
            limit: limit,
          },
        },
      ],
    }
  );

  const handleDelete = async () => {
    await deleteThreeDP({
      variables: {
        deleteThreeDpId: threedp.id,
      },
    });
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      toast({ title: "ThreeDP deleted successfully!" });
    }
  };

  // Load the star state from local storage

  const handleShare = () => {
    const shareableLink = `${window.location.origin}${threedpBaseUrl}/${threedp.id}`;
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
      key={threedp.id}
    >
      <div
        className={cn(
          "flex flex-col justify-between h-full p-3 dark:bg-[#181b20] w-11/12 mx-auto rounded-lg border dark:border-[#444444] shadow-md bg-white",
          threedp.broken && "border-red-500"
        )}
      >
        <Link to={`/MachinePage/ThreeDP/${threedp.id}`}>
          <img
            src={threedp.photoLink}
            alt={threedp.name}
            className="w-10/12 mx-auto mt-2 bg-white"
          />
          <div className="ml-3 mt-2">
            <h2 className="dark:text-white text-24">{threedp.name}</h2>

            <p className="dark:text-white text-16">
              {t("position")}: {threedp.position}
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
                    <TooltipContent
                      className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                      side="bottom"
                    >
                      <p className="text-white text-xs">{t("delete")}</p>
                    </TooltipContent>
                    <AlertDialogContent className="dark:text-white dark:bg-black">
                      {threedp.threeDPRequestIds?.length == 0 ? (
                        <>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              {t("alertDialogTitle")}
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              {t("alertDialogDescription")}{" "}
                              <span className="lowercase">
                                {" " + t("threedp")}
                              </span>
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="submit-button  hover:bg-blue-500 hover:bg-opacity-90">
                              {t("cancel")}
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="cancel-button  hover:bg-red-500 hover:bg-opacity-90"
                              onClick={handleDelete}
                            >
                              {t("continue")}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </>
                      ) : (
                        <>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Warning</AlertDialogTitle>
                            <AlertDialogDescription>
                              The threeDP still have some requests
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="submit-button  hover:bg-blue-500 hover:bg-opacity-90">
                              {t("cancel")}
                            </AlertDialogCancel>
                          </AlertDialogFooter>
                        </>
                      )}
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </Tooltip>
          )}

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
                <TooltipContent
                  className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                  side="bottom"
                >
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

export default ThreeDPCard;
