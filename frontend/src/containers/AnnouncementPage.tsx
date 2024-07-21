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
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/context/UserContext";
import { useToast } from "@/components/ui/use-toast";

function AnnouncementPage() {
  const { user } = useUser();
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
      <h1 className="text-white">所有公告 All Announcements</h1>
      <Dialog open={visible} onOpenChange={(visible) => setVisible(visible)}>
        <DialogTrigger asChild>
          {user?.isAdmin && (
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button
                className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 cursor-pointer"
                onClick={() => setVisible(true)}
              >
                新增公告
              </Button>
            </div>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]  text-white bg-black">
          <DialogHeader>
            <DialogTitle className="text-2xl">新增公告</DialogTitle>
            <DialogDescription className="text-sm">
              請填寫以下資訊:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                標題
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
                內文
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
          <DialogFooter>
            <Button
              onClick={() => setVisible(false)}
              className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
            >
              取消
            </Button>
            <Button
              onClick={() => handleSubmit({ title, content })}
              className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            >
              提交
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <AnnouncementList />
    </div>
  );
}

export default AnnouncementPage;
