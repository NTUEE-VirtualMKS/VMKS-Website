import { useState } from "react";
import { ADD_THREE_DP_MUTATION, GET_ALL_THREEDPS_QUERY } from "@/graphql";
import { useMutation } from "@apollo/client";
import { ThreeDPInput } from "@/shared/type";
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
import { Checkbox } from "@/components/ui/checkbox";
import SkeletonList from "@/components/SkeletonList";
import { useTranslation } from "react-i18next";
import { useUser } from "@/contexts/UserContext";

function ThreeDPImportButton() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [position, setPosition] = useState("");
  const [tutorialLink, setTutorialLink] = useState<string>("");
  const [broken, setBroken] = useState(false);
  const cursor = null;
  const limit = 12;

  const [add3DP, { loading, error }] = useMutation(ADD_THREE_DP_MUTATION, {
    refetchQueries: [
      {
        query: GET_ALL_THREEDPS_QUERY,
        variables: {
          cursor: cursor,
          limit: limit,
        },
      },
    ],
  });

  const handleAdd3DP = async ({
    name,
    description,
    photoLink,
    position,
    tutorialLink,
    broken,
  }: ThreeDPInput) => {
    await add3DP({
      variables: {
        threeDpInput: {
          name,
          description,
          photoLink,
          position,
          tutorialLink,
          broken,
        },
      },
    });
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setVisible(false);
      setName("");
      setDescription("");
      setPhotoLink("");
      setPosition("");
      setTutorialLink("");
      setBroken(false);
      toast({ title: "3DP added successfully!" });
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
                  {t("New 3DP Machine")}
                </Button>
              </div>
            </DialogTrigger>

            <DialogContent className="w-11/1 sm:w-11/12 rounded-xl dark:text-white dark:bg-black">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {t("New 3DP Machine")}
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

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="broken" className="text-right">
                    {t("broken")}
                  </Label>
                  <Checkbox
                    id="broken"
                    className="checkbox-class"
                    checked={broken}
                    onCheckedChange={(checked: boolean) => setBroken(checked)}
                  />
                </div>
              </div>

              <div className="flex flex-row-reverse gap-2">
                <Button
                  onClick={() =>
                    handleAdd3DP({
                      name,
                      description,
                      photoLink,
                      position,
                      tutorialLink,
                      broken,
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

export default ThreeDPImportButton;
