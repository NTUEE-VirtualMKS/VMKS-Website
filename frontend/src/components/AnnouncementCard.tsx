import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  EDIT_ANNOUNCEMENT_MUTATION,
  GET_ALL_ANNOUNCEMENTS_QUERY,
  DELETE_ANNOUNCEMENT_MUTATION,
} from "@/graphql";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoaderSpinner from "./LoaderSpinner";
import { Textarea } from "@/components/ui/textarea";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useToast } from "./ui/use-toast";
import { useUser } from "@/contexts/UserContext";
import { useTranslation } from "react-i18next";
import { Pencil, Trash2 } from "lucide-react";
import { AnnouncementCardProps } from "@/shared/type";

function AnnouncementCard({ id, title, content, date }: AnnouncementCardProps) {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();
  if (!id) {
    return toast({ title: "id is undefined", variant: "destructive" });
  }

  const [visible, setVisible] = useState(false);
  const [announcementId, _setAnnouncementId] = useState(id);
  const [announcementTitle, setAnnouncementTitle] = useState(title);
  const [announcementContent, setAnnouncementContent] = useState(content);
  const [announcementDate, _setAnnouncementDate] = useState(date);
  const [deleteAnnouncement, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS_QUERY }],
    });

  const handleDelete = async (id: string) => {
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

  const [editAnnouncement, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS_QUERY }],
    });

  const handleUpdate = async ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    if (!id) {
      return toast({ title: "id is undefined", variant: "destructive" });
    }

    await editAnnouncement({
      variables: {
        editAnnouncementId: announcementId,
        announcementInput: {
          title,
          content,
        },
      },
    });
    if (editLoading) return <LoaderSpinner />;
    if (editError) {
      toast({ title: `${editError.message}`, variant: "destructive" });
    } else {
      setVisible(false);
      toast({ title: "Announcement edited successfully!" });
    }
  };

  return (
    <div>
      <div
        key={announcementId}
        className="dark:text-white shadow-md border dark:border-[#444444] my-2.5 mx-3 p-3.5 rounded-xl cursor-pointer dark:bg-[#303030] bg-opacity-50 text-opacity-50 hover:bg-opacity-70"
      >
        <h2 className="dark:text-white px-2">{announcementTitle}</h2>
        <p className="text-gray-400 text-base px-2">
          {t("date")}: {new Date(announcementDate).toLocaleString()}
        </p>
        <p className="dark:text-white text-lg px-2">
          {announcementContent.length > 350
            ? announcementContent.slice(0, 280) + "..."
            : announcementContent}
        </p>
        {user?.isAdmin && (
          <div className="flex flex-row-reverse gap-2 mt-2">
            <Tooltip>
              <Dialog
                open={visible}
                onOpenChange={(visible) => setVisible(visible)}
              >
                <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                  <div className="p-2 aspect-square dark:text-white dark:hover:text-sky-300 hover:text-blue-500 rounded-full hover:bg-blue-500 hover:bg-opacity-20 bg-transparent w-10 h-10 flex justify-center items-center cursor-pointer">
                    <DialogTrigger
                      asChild
                      onClick={() => setVisible(true)}
                      className="transform active:scale-90 transition-transform duration-200"
                    >
                      <Pencil />
                    </DialogTrigger>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                  side="bottom"
                >
                  <p className="text-white text-xs">{t("edit")}</p>
                </TooltipContent>
                <DialogContent className="w-11/12 sm:w-11/12 rounded-xl  dark:text-white dark:bg-black">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {t("editAnnouncement")}
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                      {t("pleaseFillInAllFields")}:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        {t("title")}
                      </Label>
                      <Input
                        id="title"
                        placeholder="title"
                        className="col-span-3 input-class"
                        value={announcementTitle}
                        onChange={(e) => setAnnouncementTitle(e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="content" className="text-right">
                        {t("content")}
                      </Label>
                      <Textarea
                        id="content"
                        placeholder="content"
                        className="col-span-3 input-class"
                        value={announcementContent}
                        onChange={(e) => setAnnouncementContent(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row-reverse gap-2">
                    <Button
                      onClick={() =>
                        handleUpdate({
                          title: announcementTitle,
                          content: announcementContent,
                        })
                      }
                      className="submit-button hover:bg-blue-500 hover:bg-opacity-90"
                    >
                      {t("submit")}
                    </Button>
                    <Button
                      onClick={() => setVisible(false)}
                      className="cancel-button  hover:bg-red-500 hover:bg-opacity-90"
                    >
                      {t("cancel")}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Tooltip>
            <Tooltip>
              <AlertDialog>
                <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                  <div className="p-2 aspect-square dark:text-white dark:hover:text-red-400 hover:text-red-500 rounded-full hover:bg-red-500 hover:bg-opacity-20 bg-transparent w-10 h-10 flex justify-center items-center cursor-pointer">
                    <AlertDialogTrigger
                      asChild
                      className="transform active:scale-90 transition-transform duration-200"
                    >
                      <Trash2 />
                    </AlertDialogTrigger>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                  side="bottom"
                >
                  <p className="text-white text-xs">{t("delete")}</p>
                </TooltipContent>
                <AlertDialogContent className="dark:text-white dark:bg-black">
                  <AlertDialogHeader>
                    <AlertDialogTitle>{t("alertDialogTitle")}</AlertDialogTitle>
                    <AlertDialogDescription>
                      {t("alertDialogDescription")}{" "}
                      <span className="lowercase">
                        {" " + t("announcement")}
                      </span>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="submit-button hover:bg-blue-500 hover:bg-opacity-90">
                      {t("cancel")}
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="cancel-button  hover:bg-red-500 hover:bg-opacity-90"
                      onClick={() => handleDelete(announcementId)}
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
    </div>
  );
}

export default AnnouncementCard as React.FC<AnnouncementCardProps>;
