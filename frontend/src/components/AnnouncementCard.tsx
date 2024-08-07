import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  EDIT_ANNOUNCEMENT_MUTATION,
  ALL_ANNOUNCEMENT_QUERY,
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
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    });

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

  const [editAnnouncement, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
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
        className="text-white border border-[#444444] my-2.5 mx-3 p-4 rounded-xl cursor-pointer bg-[#303030] bg-opacity-50 text-opacity-50 hover:bg-opacity-70"
      >
        <h2 className="text-white px-2">{announcementTitle}</h2>
        <p className="text-gray-400 text-base px-2">
          {t("date")}: {new Date(announcementDate).toLocaleString()}
        </p>
        <p className="text-white text-lg px-2">
          {announcementContent.length > 350
            ? announcementContent.slice(0, 280) + "..."
            : announcementContent}
        </p>
        {user?.isAdmin && (
          <div className="flex flex-row-reverse gap-2">
            <Tooltip>
              <Dialog
                open={visible}
                onOpenChange={(visible) => setVisible(visible)}
              >
                <TooltipTrigger className="rounded-full transform active:scale-90 transition-transform duration-200">
                  <>
                    <DialogTrigger
                      onClick={() => setVisible(true)}
                      className="aspect-square text-white hover:text-sky-300 rounded-full transform active:scale-90 transition-transform duration-200 hover:bg-sky-300 hover:bg-opacity-20 bg-transparent w-10 flex justify-center items-center"
                    >
                      <Pencil className="p-1.5" size={33} />
                    </DialogTrigger>
                  </>
                </TooltipTrigger>
                <TooltipContent className="bg-black bg-opacity-80">
                  <p className="text-white text-xs">{t("edit")}</p>
                </TooltipContent>
                <DialogContent className="w-11/12 sm:w-11/12 rounded-xl  text-white bg-black">
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
                      className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                    >
                      {t("submit")}
                    </Button>
                    <Button
                      onClick={() => setVisible(false)}
                      className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
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
                    <AlertDialogTitle>{t("alertDialogTitle")}</AlertDialogTitle>
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
