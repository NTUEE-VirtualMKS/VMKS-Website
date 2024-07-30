import { useNavigate } from "react-router-dom";
import {
  ALL_ANNOUNCEMENT_QUERY,
  DELETE_ANNOUNCEMENT_MUTATION,
} from "@/graphql";
import { useQuery, useMutation } from "@apollo/client";
import LoaderSpinner from "./LoaderSpinner";
import { useUser } from "@/context/UserContext";
import { useToast } from "./ui/use-toast";
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
import { useTranslation } from "react-i18next";
import { Pencil, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function AnnouncementList() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { toast } = useToast();
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  const [deleteAnnouncement, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    });

  if (loading) return <LoaderSpinner />;
  if (error) {
    toast({ title: `${error.message}`, variant: "destructive" });
  }

  const announcements = data?.AllAnnouncements || [];

  const handleDelete = async (id: number) => {
    await deleteAnnouncement({
      variables: {
        deleteAnnouncementId: id,
      },
    });
    if (deleteLoading) return <LoaderSpinner />;
    if (deleteError) {
      toast({ title: `${deleteError.message}`, variant: "destructive" });
    } else {
      toast({ title: "Announcement deleted successfully!" });
    }
  };
  return (
    <>
      {announcements.length !== 0 ? (
        <div className="flex flex-col mx-3">
          {announcements.map(
            (announcement) =>
              announcement !== null && (
                <div
                  key={announcement.id}
                  className="text-white border border-[#444444] my-2.5 mx-3 p-4 rounded-xl cursor-pointer bg-[#303030] bg-opacity-50 text-opacity-50 hover:bg-opacity-70"
                >
                  <h2 className="text-white px-2">{announcement.title}</h2>
                  <p className="text-gray-400 text-base px-2">
                    Date: {new Date(announcement.date).toLocaleString()}
                  </p>
                  <p className="text-white text-lg px-2">
                    {announcement.content.length > 350
                      ? announcement.content.slice(0, 280) + "..."
                      : announcement.content}
                  </p>
                  {user?.isAdmin && (
                    <div className="flex flex-row-reverse gap-2">
                      <Tooltip>
                        <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                          <button
                            onClick={() =>
                              navigate(`/EditAnnouncement/${announcement.id}`)
                            }
                            className="aspect-square text-white hover:text-sky-300 rounded-full transform active:scale-90 transition-transform duration-200 hover:bg-sky-300 hover:bg-opacity-20 bg-transparent w-10 flex justify-center items-center"
                          >
                            <Pencil className="p-1.5" size={33} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-black bg-opacity-80">
                          <p className="text-white text-xs">{t("edit")}</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <AlertDialog>
                          <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                            <AlertDialogTrigger asChild>
                              <button className="aspect-square text-white hover:text-red-400 rounded-full transform active:scale-90 transition-transform duration-200 hover:bg-red-400 hover:bg-opacity-20 bg-transparent w-10 flex justify-center items-center">
                                <Trash2 className="p-1.5" size={35} />
                              </button>
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
                                {t("alertDialogDescription")}{" "}
                                <span className="lowercase">
                                  {" " + t("announcement")}
                                </span>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-primary/90 hover:text-sky-300">
                                {t("cancel")}
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-primary/90"
                                onClick={() => handleDelete(announcement.id)}
                              >
                                {t("continue")}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </Tooltip>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      ) : (
        <section className="flex flex-col size-full flex-center">
          <div className="flex-center w-full flex-col mt-36">
            <p className="w-full text-5xl text-center font-bold text-white p-2">
              No Announcement
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default AnnouncementList;
