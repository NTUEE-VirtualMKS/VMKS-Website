import { useState } from "react";
import { ADD_MACHINE_MUTATION, GET_ALL_MACHINES_QUERY } from "@/graphql";
import { useMutation } from "@apollo/client";
import { OtherMachineInput } from "@/shared/type";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SkeletonList from "@/components/SkeletonList";
import { useTranslation } from "react-i18next";
import { useUser } from "@/contexts/UserContext";

function OtherMachineImportButton() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [partName, setPartName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [position, setPosition] = useState("");
  const [tutorialLink, setTutorialLink] = useState<string>("");
  const cursor = null;
  const limit = 12;

  const [addOtherMachine, { loading, error }] = useMutation(
    ADD_MACHINE_MUTATION,
    {
      refetchQueries: [
        {
          query: GET_ALL_MACHINES_QUERY,
          variables: {
            cursor: cursor,
            limit: limit,
          },
        },
      ],
    }
  );

  const handleAdd3DP = async ({
    name,
    partName,
    category,
    description,
    photoLink,
    position,
    tutorialLink,
  }: OtherMachineInput) => {
    await addOtherMachine({
      variables: {
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
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setVisible(false);
      setName("");
      setPartName("");
      setCategory("");
      setDescription("");
      setPhotoLink("");
      setPosition("");
      setTutorialLink("");
      toast({ title: "Machine added successfully!" });
    }
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
      {user?.isAdmin && (
        <>
          <Dialog
            open={visible}
            onOpenChange={(visible) => setVisible(visible)}
          >
            <DialogTrigger asChild>
              <div className="hidden sm:flex sm:flex-row sm:justify-end sm:space-x-2">
                <Button
                  className="submit-button hover:bg-blue-500 hover:bg-opacity-90 m-3"
                  onClick={() => setVisible(true)}
                >
                  {t("New Machine")}
                </Button>
              </div>
            </DialogTrigger>

            <DialogContent className="w-11/1 sm:w-11/12 rounded-xl dark:text-white dark:bg-black">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {t("New Machine")}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="position" className="text-right">
                    {t("partName")}
                  </Label>
                  <Input
                    id="partName"
                    placeholder="partName"
                    className="col-span-3 input-class"
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                    value={photoLink}
                    onChange={(e) => setPhotoLink(e.target.value)}
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
                    value={tutorialLink}
                    onChange={(e) => setTutorialLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row-reverse gap-2">
                <Button
                  onClick={() =>
                    handleAdd3DP({
                      name,
                      partName,
                      category,
                      description,
                      photoLink,
                      position,
                      tutorialLink,
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
        </>
      )}
    </div>
  );
}

export default OtherMachineImportButton;
