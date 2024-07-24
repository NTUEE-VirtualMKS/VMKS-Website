// TODO: implement searching
import { useEffect, useRef, useState } from "react";
import { ALL_TOOL_QUERY, ADD_TOOL_MUTATION } from "@/graphql";
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
import LoaderSpinner from "@/components/LoaderSpinner";
import type { ToolInput } from "@/shared/type";
import { useToast } from "@/components/ui/use-toast";
import Searchbar from "@/components/Searchbar";
import { useUser } from "@/context/UserContext";
import ToolList from "@/components/MaterialAndTool/ToolList";
import ToolImportButton from "@/components/MaterialAndTool/ToolImportButton";

function ToolPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { toast } = useToast();
  const { user } = useUser();
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
    refetchQueries: [{ query: ALL_TOOL_QUERY }],
  });

  const handleAddTool = ({
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
    addTool({
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
    if (loading) return <LoaderSpinner />;
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

  const handleAddTools = (tools: ToolInput[]) => {
    tools.map((material) => {
      addTool({
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
    if (loading) return <LoaderSpinner />;
    if (error) {
      toast({ title: `${error.message}`, variant: "destructive" });
    } else {
      setTools([]);
      setLength(0);
      toast({ title: "Tools added successfully!" });
    }
  };

  useEffect(() => {
    titleRef.current?.focus(); // Focus on the title when the component mounts
  }, []);

  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-24 mb-8 text-white">
        <h1 className="text-white p-1" ref={titleRef} tabIndex={-2}>
          工具一覽 All Tools
        </h1>
        <div className="my-1">
          <Searchbar />
        </div>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          {user?.isAdmin && (
            <>
              <Dialog
                open={visible}
                onOpenChange={(visible) => setVisible(visible)}
              >
                <DialogTrigger asChild>
                  <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <Button
                      className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                      onClick={() => setVisible(true)}
                    >
                      新增工具
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] text-white bg-black">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      新增工具 New Tool
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                      請填寫以下資訊:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-1.5">
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
                        value={tutorialLink}
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
                      取消
                    </Button>
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
                      className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                    >
                      提交
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <ToolImportButton setTools={setTools} setLength={setLength} />
              </div>
              {length !== 0 && (
                <Button
                  onClick={() => handleAddTools(tools)}
                  className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                >
                  Upload
                </Button>
              )}
            </>
          )}
        </div>
        <div className="mt-2">
          <ToolList />
        </div>
      </div>
    </>
  );
}

export default ToolPage;
