import { useState } from "react";
import MaterialList from "@/components/MaterialAndTool/MaterialList";
import {
  ALL_MATERIAL_QUERY,
  ADD_MATERIAL_MUTATION,
  SEARCH_MATERIAL_BY_NAME_QUERY,
} from "@/graphql";
import { useMutation } from "@apollo/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { MaterialInput } from "@/shared/type";
import MaterialImportButton from "@/components/MaterialAndTool/MaterialImportButton";
import { useToast } from "@/components/ui/use-toast";
import Searchbar from "@/components/Searchbar";
import { useUser } from "@/context/UserContext";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/lib/useDebounce";
import SkeletonList from "@/components/SkeletonList";
import { Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

function MaterialPage() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const debounceValue = useDebounce(search, 500);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [category, setCategory] = useState("");
  const [valuable, setValuable] = useState(false);
  const [position, setPosition] = useState("");
  const [usage, setUsage] = useState("0");
  const [remain, setRemain] = useState("0");
  const [fee, setFee] = useState("0");
  const [tutorialLink, setTutorialLink] = useState("");
  const [partName, setPartName] = useState("");
  const [length, setLength] = useState(0);
  const [materials, setMaterials] = useState<MaterialInput[]>([]);

  const [addMaterial, { loading, error }] = useMutation(ADD_MATERIAL_MUTATION, {
    refetchQueries: [
      { query: ALL_MATERIAL_QUERY },
      { query: SEARCH_MATERIAL_BY_NAME_QUERY, variables: { name: "" } },
    ],
  });

  const handleAddMaterial = async ({
    name,
    description,
    photoLink,
    category,
    valuable,
    position,
    usage,
    remain,
    fee,
    tutorialLink,
    partName,
  }: MaterialInput) => {
    await addMaterial({
      variables: {
        materialInput: {
          name,
          description,
          photoLink,
          category,
          valuable,
          position,
          usage: parseInt(`${usage}`),
          remain: parseInt(`${remain}`),
          fee: parseInt(`${fee}`),
          tutorialLink,
          partName,
        },
      },
    });
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setName("");
      setDescription("");
      setPhotoLink("");
      setCategory("");
      setValuable(false);
      setPosition("");
      setUsage("0");
      setRemain("0");
      setFee("0");
      setTutorialLink("");
      setPartName("");
      setVisible(false);
      toast({ title: "Material added successfully!" });
    }
  };

  const handleAddMaterials = async (materials: MaterialInput[]) => {
    materials.map(async (material) => {
      await addMaterial({
        variables: {
          materialInput: {
            name: material.name,
            partName: material.partName,
            category: material.category,
            valuable: material.valuable,
            position: material.position,
            description: material.description,
            photoLink: material.photoLink,
            usage: parseInt(`${material.usage}`),
            tutorialLink: material.tutorialLink,
            fee: parseInt(`${material.fee}`),
            remain: parseInt(`${material.remain}`),
          },
        },
      });
    });
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setMaterials([]);
      setLength(0);
      toast({ title: "Materials added successfully!" });
    }
  };

  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-24 mb-8 text-white">
        <h1 className="text-white p-1 flex flex-row gap-2 items-center">
          <Cpu className="text-white" size={35} />
          {t("allMaterials")}
        </h1>
        <div className="my-1">
          <Searchbar route="MaterialPage" placeholder={t("searchMaterial")} />
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          {user?.isAdmin && (
            <>
              <Dialog
                open={visible}
                onOpenChange={(visible) => setVisible(visible)}
              >
                <DialogTrigger asChild>
                  <div className="hidden md:flex md:flex-row md:justify-end md:space-x-2">
                    <Button
                      className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                      onClick={() => setVisible(true)}
                    >
                      {t("newMaterial")}
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] text-white bg-black">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {t("newMaterial")}
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
                      <Label htmlFor="valuable" className="text-right">
                        {t("valuable")}
                      </Label>
                      <Checkbox
                        id="valuable"
                        className="checkbox-class"
                        checked={valuable}
                        onCheckedChange={(checked: boolean) =>
                          setValuable(checked)
                        }
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
                      <Label htmlFor="remain" className="text-right">
                        {t("remain")}
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
                        {t("usage")}
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
                      <Label htmlFor="fee" className="text-right">
                        {t("fee")}
                      </Label>
                      <Input
                        id="fee"
                        type="number"
                        placeholder="fee"
                        className="col-span-3 input-class"
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
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
                      <Label htmlFor="partName" className="text-right">
                        {t("partName")}
                      </Label>
                      <Input
                        id="partName"
                        placeholder="part name"
                        className="col-span-3 input-class"
                        value={partName}
                        onChange={(e) => setPartName(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => setVisible(false)}
                      className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
                    >
                      {t("cancel")}
                    </Button>
                    <Button
                      onClick={() =>
                        handleAddMaterial({
                          name,
                          description,
                          photoLink,
                          category,
                          valuable,
                          position,
                          usage,
                          remain,
                          fee,
                          tutorialLink,
                          partName,
                        })
                      }
                      className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                    >
                      {t("submit")}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <div className="hidden md:flex md:flex-row md:justify-end md:space-x-2">
                <MaterialImportButton
                  setMaterials={setMaterials}
                  setLength={setLength}
                />
              </div>
              {length !== 0 && (
                <Button
                  onClick={() => handleAddMaterials(materials)}
                  className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                >
                  {t("upload")}
                </Button>
              )}
            </>
          )}
        </div>
        <div className="mt-2">
          <MaterialList search={debounceValue} />
        </div>
      </div>
    </>
  );
}

export default MaterialPage;
