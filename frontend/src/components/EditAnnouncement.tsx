import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_ANNOUNCEMENT_MUTATION, ALL_ANNOUNCEMENT_QUERY } from "@/graphql";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoaderSpinner from "./LoaderSpinner";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "./ui/use-toast";

const EditAnnouncement = () => {
  const { toast } = useToast();
  const { id } = useParams();
  if (!id) {
    return toast({ title: "id is undefined", variant: "destructive" });
  }
  const navigate = useNavigate();
  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(ALL_ANNOUNCEMENT_QUERY);

  const allAnnouncements = data?.AllAnnouncements;
  // TODO: get announcement by id
  const announcement = allAnnouncements!.find(
    (a: any) => a.id === parseInt(id)
  );
  const [visible, setVisible] = useState(true);
  const [title, setEditTitleNow] = useState(announcement!.title);
  const [content, setEditContentNow] = useState(announcement!.content);

  const handleClose = () => {
    setVisible(false);
    navigate(`/AnnouncementPage`);
  };

  const [editAnnouncement, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    });

  const handleSubmit = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    if (!id) {
      return toast({ title: "id is undefined", variant: "destructive" });
    }
    editAnnouncement({
      variables: {
        editAnnouncementId: parseInt(id),
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
      handleClose();
      navigate(`/AnnouncementPage`);
      toast({ title: "Announcement edited successfully!" });
    }
  };

  if (queryLoading) return <LoaderSpinner />;
  if (queryError) {
    return toast({ title: `${queryError.message}`, variant: "destructive" });
  }

  return (
    <Dialog open={visible} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <Button
            className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            onClick={() => setVisible(true)}
          >
            編輯公告
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  text-white bg-black">
        <DialogHeader>
          <DialogTitle className="text-2xl">編輯公告</DialogTitle>
          <DialogDescription className="text-sm">
            請填寫以下資訊:
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              標題
            </Label>
            <Input
              id="title"
              placeholder="title"
              className="col-span-3 input-class"
              value={title}
              onChange={(e) => setEditTitleNow(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="content" className="text-right">
              內文
            </Label>
            <Textarea
              id="content"
              placeholder="content"
              className="col-span-3 input-class"
              value={content}
              onChange={(e) => setEditContentNow(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleClose}
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
  );
};
export default EditAnnouncement as React.FC;
