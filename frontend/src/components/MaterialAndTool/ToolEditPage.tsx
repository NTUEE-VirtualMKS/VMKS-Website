import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TOOL_BY_ID_QUERY, EDIT_TOOL_MUTATION } from "@/graphql";
import { Button } from "@/components/ui/button";
import LoaderSpinner from "../LoaderSpinner";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { ToolInput } from "@/shared/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function ToolEditPage() {
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
  } = useQuery(GET_TOOL_BY_ID_QUERY, {
    variables: { id: parseInt(id as string) },
  });

  if (queryLoading) return <LoaderSpinner />;
  if (queryError) {
    toast({ title: `${queryError.message}`, variant: "destructive" });
  }

  const tool = data?.GetToolById;

  const [visible, setVisible] = useState(true);
  const [name, setName] = useState(tool!.name);
  const [description, setDescription] = useState(tool!.description);
  const [photoLink, setPhotoLink] = useState(tool!.photoLink);
  const [category, setCategory] = useState(tool!.category);
  const [position, setPosition] = useState(tool!.position);
  const [usage, setUsage] = useState(`${tool!.usage}`);
  const [remain, setRemain] = useState(`${tool!.remain}`);
  const [tutorialLink, setTutorialLink] = useState(`${tool!.tutorialLink}`);
  const [partName, setPartName] = useState(`${tool!.partName}`);

  const handleClose = () => {
    setVisible(false);
    navigate(`/ToolPage/Tool/${id}/`);
  };

  const [updateTool, { loading: updateLoading, error: updateError }] =
    useMutation(EDIT_TOOL_MUTATION, {
      refetchQueries: [{ query: GET_TOOL_BY_ID_QUERY }],
    });

  const handleUpdate = async ({
    name,
    description,
    photoLink,
    category,
    position,
    usage,
    remain,
    tutorialLink,
    partName,
  }: ToolInput) => {
    if (!id) {
      toast({ title: "id is undefined", variant: "destructive" });
    }
    if (!tool) {
      toast({ title: "Tool is undefined", variant: "destructive" });
    }

    const updatedTool = await updateTool({
      variables: {
        editToolId: parseInt(id),
        toolInput: {
          name,
          description,
          photoLink,
          category,
          position,
          usage: parseInt(`${usage}`),
          remain: parseInt(`${remain}`),
          tutorialLink,
          partName,
        },
      },
    });
    if (updateLoading) return <LoaderSpinner />;
    if (updateError) {
      toast({ title: `${updateError.message}`, variant: "destructive" });
    } else {
      navigate(`/ToolPage/Tool/${updatedTool.data?.EditTool?.id}`);
    }
  };

  return (
    <>
      <Dialog open={visible} onOpenChange={handleClose}>
        <DialogTrigger asChild>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button
              className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
              onClick={() => setVisible(true)}
            >
              編輯工具
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] text-white bg-black">
          <DialogHeader>
            <DialogTitle className="text-2xl">編輯工具</DialogTitle>
            <DialogDescription className="text-sm">
              請填寫以下資訊:
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-1">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                名稱
              </Label>
              <Input
                id="name"
                placeholder="name"
                className="col-span-3 input-class"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                描述
              </Label>
              <Textarea
                id="description"
                placeholder="description"
                className="col-span-3 input-class"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="photoLink" className="text-right">
                圖片連結
              </Label>
              <Input
                id="photoLink"
                type="url"
                placeholder="photo link"
                className="col-span-3 input-class"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                類別
              </Label>
              <Input
                id="category"
                placeholder="category"
                className="col-span-3 input-class"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                擺放位置
              </Label>
              <Input
                id="position"
                placeholder="position"
                className="col-span-3 input-class"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="remain" className="text-right">
                剩餘數量
              </Label>
              <Input
                id="remain"
                type="number"
                placeholder="remain"
                className="col-span-3 input-class"
                value={remain}
                onChange={(e) => setRemain(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="usage" className="text-right">
                使用量
              </Label>
              <Input
                id="usage"
                type="number"
                placeholder="usage"
                className="col-span-3 input-class"
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tutorialLink" className="text-right">
                教學連結
              </Label>
              <Input
                id="tutorialLink"
                placeholder="tutorial link"
                className="col-span-3 input-class"
                value={tutorialLink || ""}
                onChange={(e) => setTutorialLink(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="partName" className="text-right">
                型號
              </Label>
              <Input
                id="partName"
                placeholder="part name"
                className="col-span-3 input-class"
                value={partName || ""}
                onChange={(e) => setPartName(e.target.value)}
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
              onClick={() =>
                handleUpdate({
                  name,
                  description,
                  photoLink,
                  category,
                  position,
                  usage,
                  remain,
                  tutorialLink,
                  partName,
                })
              }
              className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
            >
              提交
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ToolEditPage as React.FC;
