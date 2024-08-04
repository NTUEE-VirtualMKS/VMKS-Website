import { useUser } from "@/contexts/UserContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Pencil } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { GET_TOOL_BY_ID_QUERY, EDIT_TOOL_MUTATION } from "@/graphql";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { ToolInput } from "@/shared/type";
import LoaderSpinner from "../LoaderSpinner";
import { ToolDetailCardProps } from "@/shared/type";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

function ToolDetailCard({
  id,
  photoLink,
  name,
  description,
  partName,
  position,
  remain,
  usage,
  tutorialLink,
  category,
}: ToolDetailCardProps) {
  const { user } = useUser();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [toolName, setToolName] = useState(name);
  const [toolDescription, setToolDescription] = useState(description);
  const [toolPhotoLink, setToolPhotoLink] = useState(photoLink);
  const [toolPosition, setToolPosition] = useState(position);
  const [toolUsage, setToolUsage] = useState(`${usage}`);
  const [toolRemain, setToolRemain] = useState(`${remain}`);
  const [toolTutorialLink, setToolTutorialLink] = useState(tutorialLink!);
  const [toolPartName, setToolPartName] = useState(partName!);
  const [toolCategory, setToolCategory] = useState(category);

  const [editTool, { loading: editLoading, error: editError }] = useMutation(
    EDIT_TOOL_MUTATION,
    {
      refetchQueries: [
        { query: GET_TOOL_BY_ID_QUERY, variables: { getToolByIdId: id } },
      ],
    }
  );

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
    } else {
      try {
        await editTool({
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
        if (editLoading) return <LoaderSpinner />;
        if (editError) {
          toast({ title: `${editError.message}`, variant: "destructive" });
        }
        toast({ title: "Tool updated successfully!" });
      } catch (e) {
        toast({ title: `${e}`, variant: "destructive" });
      }
      setVisible(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-[#15171C] w-10/12 mx-auto rounded-lg my-5 border border-[#444444]">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-4 mx-2">
        <img
          src={toolPhotoLink}
          alt={toolName}
          className="w-11/12 mt-3 mx-auto bg-white sm:mx-auto sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-5/12"
        />
        <div className="w-9/12 flex flex-col ml-5">
          <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2">
            {toolName}
          </h1>
          <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("description")}: {toolDescription}
          </p>
          {toolPartName && (
            <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
              {t("partName")}: {toolPartName}
            </p>
          )}
          <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("position")}: {toolPosition}
          </p>
          <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("remain")}: {toolRemain} {t("piece")}
          </p>
          <p className="text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("usage")}: {toolUsage} {t("piece")}
          </p>
          {toolTutorialLink && (
            <a
              href={toolTutorialLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-sky-300 cursor-pointer hover:underline w-5/12 active:scale-95 transition-transform duration-200 focus:text-blue-600 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg"
            >
              {t("tutorialLink")}
            </a>
          )}
        </div>
      </div>
      {user?.isAdmin && (
        <div className="flex flex-row-reverse">
          <Dialog
            open={visible}
            onOpenChange={(visible) => setVisible(visible)}
          >
            <Tooltip>
              <TooltipTrigger>
                <div className="w-10 h-10  rounded-full p-2 text-white hover:text-sky-300 hover:bg-sky-300 hover:bg-opacity-20 bg-transparent flex justify-center items-center">
                  <DialogTrigger
                    asChild
                    onClick={() => setVisible(true)}
                    className="transform active:scale-90 transition-transform duration-200"
                  >
                    <Pencil size={33} />
                  </DialogTrigger>
                </div>
                <TooltipContent className="bg-black bg-opacity-80">
                  <p className="text-white text-xs">{t("edit")}</p>
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>

            <DialogContent className="sm:max-w-[425px] text-white bg-black">
              <DialogHeader>
                <DialogTitle className="text-2xl">{t("editTool")}</DialogTitle>
                <DialogDescription className="text-sm">
                  {t("pleaseFillInAllFields")}:
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-1">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    {t("name")}
                  </Label>
                  <Input
                    id="name"
                    placeholder="name"
                    className="col-span-3 input-class"
                    value={toolName}
                    onChange={(e) => setToolName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    {t("description")}
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="description"
                    className="col-span-3 input-class"
                    value={toolDescription}
                    onChange={(e) => setToolDescription(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="photoLink" className="text-right">
                    {t("photoLink")}
                  </Label>
                  <Input
                    id="photoLink"
                    type="url"
                    placeholder="photo link"
                    className="col-span-3 input-class"
                    value={toolPhotoLink}
                    onChange={(e) => setToolPhotoLink(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    {t("category")}
                  </Label>
                  <Input
                    id="category"
                    placeholder="category"
                    className="col-span-3 input-class"
                    value={toolCategory}
                    onChange={(e) => setToolCategory(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="position" className="text-right">
                    {t("position")}
                  </Label>
                  <Input
                    id="position"
                    placeholder="position"
                    className="col-span-3 input-class"
                    value={toolPosition}
                    onChange={(e) => setToolPosition(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="remain" className="text-right">
                    {t("remain")}
                  </Label>
                  <Input
                    id="remain"
                    type="number"
                    placeholder="remain"
                    className="col-span-3 input-class"
                    value={toolRemain}
                    onChange={(e) => setToolRemain(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="usage" className="text-right">
                    {t("usage")}
                  </Label>
                  <Input
                    id="usage"
                    type="number"
                    placeholder="usage"
                    className="col-span-3 input-class"
                    value={toolUsage}
                    onChange={(e) => setToolUsage(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tutorialLink" className="text-right">
                    {t("tutorialLink")}
                  </Label>
                  <Input
                    id="tutorialLink"
                    placeholder="tutorial link"
                    className="col-span-3 input-class"
                    value={toolTutorialLink || ""}
                    onChange={(e) => setToolTutorialLink(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="partName" className="text-right">
                    {t("partName")}
                  </Label>
                  <Input
                    id="partName"
                    placeholder="part name"
                    className="col-span-3 input-class"
                    value={toolPartName || ""}
                    onChange={(e) => setToolPartName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse gap-2">
                <Button
                  onClick={() =>
                    handleUpdate({
                      name: toolName,
                      description: toolDescription,
                      photoLink: toolPhotoLink,
                      category: toolCategory,
                      position: toolPosition,
                      usage: toolUsage,
                      remain: toolRemain,
                      tutorialLink: toolTutorialLink,
                      partName: toolPartName,
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
        </div>
      )}
    </div>
  );
}

export default ToolDetailCard;
