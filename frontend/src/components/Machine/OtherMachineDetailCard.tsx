import { useUser } from "@/contexts/UserContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil, Share } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { EDIT_MACHINE_MUTATION, GET_ALL_MACHINES_QUERY } from "@/graphql";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { OtherMachineInput } from "@/shared/type";
import LoaderSpinner from "../LoaderSpinner";
import { OtherMachineDetailCardProps } from "@/shared/type";
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
import { OtherMachineBaseUrl } from "@/constants";

function OtherMachineDetailCard({
  id,
  name,
  partName,
  category,
  description,
  position,
  photoLink,
  tutorialLink,
}: OtherMachineDetailCardProps) {
  const { user } = useUser();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [machineName, setMachineName] = useState(name);
  const [machinePartName, setMachinePartName] = useState(partName);
  const [machineCategory, setMachineCategory] = useState(category);
  const [machineDescription, setMachineDescription] = useState(description);
  const [machinePhotoLink, setMachinePhotoLink] = useState(photoLink);
  const [machinePosition, setMachinePosition] = useState(position);
  const [machineTutorialLink, setMachineTutorialLink] = useState(tutorialLink!);

  const [editOtherMachine, { loading: editLoading, error: editError }] =
    useMutation(EDIT_MACHINE_MUTATION, {
      refetchQueries: [
        {
          query: GET_ALL_MACHINES_QUERY,
        },
      ],
    });

  const handleUpdate = async ({
    name,
    partName,
    category,
    description,
    photoLink,
    position,
    tutorialLink,
  }: OtherMachineInput) => {
    if (!id) {
      toast({ title: "id is undefined", variant: "destructive" });
    } else {
      try {
        await editOtherMachine({
          variables: {
            editMachineId: id,
            machineInput: {
              name,
              partName,
              category,
              description,
              photoLink,
              position,
              tutorialLink,
              usage: 0,
            },
          },
        });
        if (editLoading) return <LoaderSpinner />;
        if (editError) {
          toast({ title: `${editError.message}`, variant: "destructive" });
        }
        toast({ title: "Material updated successfully!" });
      } catch (error) {
        toast({ title: `${error}`, variant: "destructive" });
      }
      setVisible(false);
    }
  };

  const handleShare = () => {
    const shareableLink = `${window.location.origin}${OtherMachineBaseUrl}/${id}`;
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
    <div className="flex flex-col gap-2 p-3 dark:bg-[#15171C] bg-white w-10/12 mx-auto rounded-lg my-5 border dark:border-[#444444] shadow-md">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-4 mx-2 justify-evenly">
        <img
          src={machinePhotoLink}
          alt={machineName}
          className="w-11/12 mt-3 mx-auto bg-white sm:mx-auto sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12"
        />
        <div className="w-9/12 flex flex-col ml-5">
          <h1 className=" dark:text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2">
            {machineName}
          </h1>

          <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("partName")}: {machinePartName}
          </p>

          <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("category")}: {machineCategory}
          </p>

          <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("usage")}: 0
          </p>

          <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("description")}: {machineDescription}
          </p>

          <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
            {t("position")}: {machinePosition}
          </p>

          {machineTutorialLink && (
            <a
              href={machineTutorialLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-sky-300 cursor-pointer hover:underline w-8/12 active:scale-95 transition-transform duration-200 focus:text-blue-600 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg"
            >
              {t("tutorialLink")}
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-row-reverse gap-1.5 mb-1 mx-1">
        {user?.isAdmin && (
          <Dialog
            open={visible}
            onOpenChange={(visible) => setVisible(visible)}
          >
            <Tooltip>
              <TooltipTrigger>
                <div className="w-10 h-10 rounded-full p-2  dark:text-white dark:hover:text-sky-300 hover:text-blue-500 hover:bg-sky-300 hover:bg-opacity-20 bg-transparent flex justify-center items-center">
                  <DialogTrigger
                    asChild
                    onClick={() => setVisible(true)}
                    className="transform active:scale-90 transition-transform duration-200"
                  >
                    <Pencil size={33} />
                  </DialogTrigger>
                </div>
              </TooltipTrigger>
              <TooltipContent
                className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
                side="bottom"
              >
                <p className="text-white text-xs">{t("edit")}</p>
              </TooltipContent>
            </Tooltip>
            <DialogContent className="w-11/12 sm:w-11/12  dark:text-white dark:bg-black rounded-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {t("editMaterial")}
                </DialogTitle>
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
                    value={machineName}
                    onChange={(e) => setMachineName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="partName" className="text-right">
                    {t("partName")}
                  </Label>
                  <Input
                    id="partName"
                    placeholder="partName"
                    className="col-span-3 input-class"
                    value={machinePartName}
                    onChange={(e) => setMachinePartName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="position" className="text-right">
                    {t("category")}
                  </Label>
                  <Input
                    id="category"
                    placeholder="category"
                    className="col-span-3 input-class"
                    value={machineCategory}
                    onChange={(e) => setMachineCategory(e.target.value)}
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
                    value={machineDescription}
                    onChange={(e) => setMachineDescription(e.target.value)}
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
                    value={machinePhotoLink}
                    onChange={(e) => setMachinePhotoLink(e.target.value)}
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
                    value={machinePosition}
                    onChange={(e) => setMachinePosition(e.target.value)}
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
                    value={machineTutorialLink || ""}
                    onChange={(e) => setMachineTutorialLink(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse gap-2">
                <Button
                  onClick={() =>
                    handleUpdate({
                      name: machineName,
                      partName: machinePartName,
                      category: machineCategory,
                      description: machineDescription,
                      photoLink: machinePhotoLink,
                      position: machinePosition,
                      tutorialLink: machineTutorialLink,
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
        )}
        <div className="w-10 h-10 rounded-full p-2 dark:text-white hover:text-green-500 dark:hover:text-green-300 hover:bg-green-300 hover:bg-opacity-20 bg-transparent flex justify-center items-center cursor-pointer">
          <Tooltip>
            <TooltipTrigger
              asChild
              onClick={handleShare}
              className="transform active:scale-90 transition-transform duration-200"
            >
              <Share size={33} />
            </TooltipTrigger>
            <TooltipContent
              className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
              side="bottom"
            >
              <p className="text-white text-xs">{t("share")}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default OtherMachineDetailCard;
