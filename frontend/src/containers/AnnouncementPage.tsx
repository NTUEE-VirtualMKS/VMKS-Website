import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_ANNOUNCEMENT_QUERY, ADD_ANNOUNCEMENT_MUTATION } from "@/graphql";
import type { AnnouncementInput } from "../../../backend/src/types/types";
import AnnouncementList from "@/components/AnnouncementList";
import LoaderSpinner from "@/components/LoaderSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import { Volume2 } from "lucide-react";

function AnnouncementPage() {
  const { user } = useUser();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [addAnnouncement, { loading, error }] = useMutation(
    ADD_ANNOUNCEMENT_MUTATION,
    {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    }
  );

  const handleSubmit = ({ title, content }: AnnouncementInput) => {
    addAnnouncement({
      variables: {
        announcementInput: {
          title: title,
          content: content,
        },
      },
    });
    if (loading) return <LoaderSpinner />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setTitle("");
      setContent("");
      setVisible(false);
      toast({ title: "Announcement added successfully!" });
    }
  };

  return (
    <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8">
      <h1 className="text-white p-1 flex flex-row items-center gap-1 text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
        <Volume2 className="text-white" size={35} />
        {t("announcements")}
      </h1>
      <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
        <DialogTrigger asChild>
          {user?.isAdmin && (
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button
                className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 cursor-pointer lowercase"
                onClick={() => setVisible(true)}
              >
                {t("newAnnouncement")}
              </Button>
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="w-11/12 sm:w-11/12 rounded-lg text-white bg-black">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {t("newAnnouncement")}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {t("pleaseFillInAllFields")}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                {t("title")}
              </Label>
              <Input
                id="title"
                placeholder="title"
                className="col-span-3 input-class"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                {t("content")}
              </Label>
              <Textarea
                id="content"
                placeholder="content"
                className="col-span-3 input-class"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row-reverse gap-2">
            <Button
              onClick={() => handleSubmit({ title, content })}
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
      <div>
        <AnnouncementList />
      </div>
    </div>
  );
}

export default AnnouncementPage;
