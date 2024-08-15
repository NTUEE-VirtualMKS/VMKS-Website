import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  GET_ALL_ANNOUNCEMENTS_QUERY,
  ADD_ANNOUNCEMENT_MUTATION,
} from "@/graphql";
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
      refetchQueries: [{ query: GET_ALL_ANNOUNCEMENTS_QUERY }],
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
      <h1 className="dark:text-white p-1 flex flex-row items-center gap-1 text-4xl sm:text-4xl md:text-[2.6rem] lg:text-text-[2.6rem] xl:text-[2.6rem]">
        <Volume2 className="dark:text-white" size={40} />
        {t("announcements")}
      </h1>
      <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
        {user?.isAdmin && (
          <DialogTrigger asChild>
            <div className="flex flex-row-reverse">
              <Button
                className="submit-button hover:bg-blue-500 hover:bg-opacity-90"
                onClick={() => setVisible(true)}
              >
                {t("newAnnouncement")}
              </Button>
            </div>
          </DialogTrigger>
        )}
        <DialogContent className="w-11/12 sm:w-11/12 rounded-lg dark:text-white dark:bg-black">
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
      <div>
        <AnnouncementList />
      </div>
    </div>
  );
}

export { AnnouncementPage };
