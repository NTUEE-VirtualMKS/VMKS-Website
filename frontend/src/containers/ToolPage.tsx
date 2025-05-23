import { useRef, useState } from "react";
import {
  GET_ALL_TOOLS_QUERY,
  ADD_TOOL_MUTATION,
  SEARCH_TOOL_BY_NAME_QUERY,
  GET_LIKED_TOOLS_BY_USER_ID_QUERY,
} from "@/graphql";
import { useMutation } from "@apollo/client";
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
import type { ToolInput } from "@/shared/type";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/contexts/UserContext";
import ToolList from "@/components/MaterialAndTool/ToolList";
import ToolImportButton from "@/components/MaterialAndTool/ToolImportButton";
import Searchbar from "@/components/Searchbar";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";
import SkeletonList from "@/components/SkeletonList";
import { Hammer } from "lucide-react";
import { useTranslation } from "react-i18next";
import SearchToolList from "@/components/MaterialAndTool/SearchToolList";

function ToolPage() {
  const { toast } = useToast();
  const { user } = useUser();
  const { t } = useTranslation();
  const ref = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const debounceValue = useDebounce(search, 500);
  const [file, setFile] = useState<File | null>(null);
  const [isFileUploadLoading, setIsFileUploadLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [category, setCategory] = useState("");
  const [position, setPosition] = useState("");
  const [usage, setUsage] = useState("0");
  const [remain, setRemain] = useState("0");
  const [tutorialLink, setTutorialLink] = useState("");
  const [partName, setPartName] = useState("");
  const [length, setLength] = useState(0);
  const [tools, setTools] = useState<ToolInput[]>([]);

  const [addTool, { loading, error }] = useMutation(ADD_TOOL_MUTATION, {
    refetchQueries: [
      { query: GET_ALL_TOOLS_QUERY },
      { query: SEARCH_TOOL_BY_NAME_QUERY, variables: { name: "" } },
      {
        query: GET_LIKED_TOOLS_BY_USER_ID_QUERY,
        variables: { userId: user?.id! },
      },
    ],
  });

  const handleAddTool = async ({
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
    await addTool({
      variables: {
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
    if (loading) return <SkeletonList />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setName("");
      setDescription("");
      setPhotoLink("");
      setCategory("");
      setPosition("");
      setUsage("0");
      setRemain("0");
      setTutorialLink("");
      setPartName("");
      setVisible(false);
      toast({ title: "Material added successfully!" });
    }
  };

  const handleAddTools = async (tools: ToolInput[]) => {
    setIsFileUploadLoading(true);
    tools.map(async (material) => {
      await addTool({
        variables: {
          toolInput: {
            name: material.name,
            partName: material.partName,
            category: material.category,
            position: material.position,
            description: material.description,
            photoLink: material.photoLink,
            usage: parseInt(`${material.usage}`),
            tutorialLink: material.tutorialLink,
            remain: parseInt(`${material.remain}`),
          },
        },
      });
    });
    if (loading) {
      toast({ title: "Uploading tools..." });
    }
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setTools([]);
      setLength(0);
      toast({ title: "Tools added successfully!" });
      setFile(null);
      setIsFileUploadLoading(false);
    }
  };

  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8 dark:text-white">
        <h1 className="dark:text-white p-1 flex flex-row gap-2 items-center">
          <Hammer className="dark:text-white" size={35} />
          {t("allTools")}
        </h1>
        <div className="my-1">
          <Searchbar route="ToolPage" placeholder={t("searchTool")} />
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          {user?.isAdmin && (
            <>
              <Dialog
                open={visible}
                onOpenChange={(visible) => setVisible(visible)}
              >
                <DialogTrigger asChild>
                  <div className="hidden sm:flex sm:flex-row sm:justify-end">
                    <Button
                      className="submit-button hover:bg-blue-500 hover:bg-opacity-90 m-3"
                      onClick={() => setVisible(true)}
                    >
                      {t("newTool")}
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-11/1 sm:w-11/12 rounded-xl dark:text-white dark:bg-black">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {t("newTool")}
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                      {t("pleaseFillInAllFields")}:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-1.5">
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
                  <div className="flex flex-row-reverse gap-2">
                    <Button
                      onClick={() =>
                        handleAddTool({
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
              <div className="hidden sm:flex sm:flex-row sm:justify-end">
                <ToolImportButton
                  setTools={setTools}
                  setLength={setLength}
                  fileRef={ref}
                  file={file}
                  setFile={setFile}
                  isFileUploadLoading={isFileUploadLoading}
                />
                {length !== 0 && (
                  <Button
                    onClick={() => handleAddTools(tools)}
                    className={
                      "my-3 px-4 py-2 bg-blue-500 hover:bg-blue-500 hover:bg-opacity-90 text-white rounded-r rounded-l-none lowercase shadow-lg transform active:scale-95 transition-transform duration-200"
                    }
                    disabled={isFileUploadLoading}
                  >
                    {isFileUploadLoading ? t("uploading") + "..." : t("upload")}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
        <div className="mt-2">
          {debounceValue ? (
            <SearchToolList search={debounceValue} />
          ) : (
            <ToolList />
          )}
        </div>
      </div>
    </>
  );
}

export { ToolPage };
