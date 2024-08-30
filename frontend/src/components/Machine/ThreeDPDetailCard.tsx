import { useUser } from "@/contexts/UserContext";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil, Share, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "@apollo/client";
import {
  EDIT_THREE_DP_MUTATION,
  GET_THREEDP_BY_ID_QUERY,
  ADD_THREE_DP_REQUEST_MUTATION,
  GET_THREE_DP_REQUESTS_BY_THREE_DP_ID_QUERY,
  GET_THREE_DP_REQUESTS_BY_USER_ID_QUERY,
  GET_USER_BY_STUDENT_ID_QUERY
} from "@/graphql";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { ThreeDPInput, ThreeDPRequestInput } from "@/shared/type";
import LoaderSpinner from "../LoaderSpinner";
import { ThreeDPDetailCardProps, UserType } from "@/shared/type";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ThreeDPRequestTable from "./ThreeDPRequestTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { threedpBaseUrl } from "@/constants";

function ThreeDPDetailCard({
  id,
  photoLink,
  name,
  description,
  position,
  tutorialLink,
  broken,
}: ThreeDPDetailCardProps) {
  const { user } = useUser();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [threedpName, setThreedpName] = useState(name);
  const [threedpDescription, setThreedpDescription] = useState(description);
  const [threedpPhotoLink, setThreedpPhotoLink] = useState(photoLink);
  const [threedpPosition, setThreedpPosition] = useState(position);
  const [threedpTutorialLink, setThreedpTutorialLink] = useState(tutorialLink!);
  const [threedpBroken, setThreedpBroken] = useState(broken);

  const [editThreeDP, { loading: editLoading, error: editError }] =
    useMutation(EDIT_THREE_DP_MUTATION, {
      refetchQueries: [
        {
          query: GET_THREEDP_BY_ID_QUERY,
          variables: { getThreeDpByIdId: id },
        },
      ],
    });

  const [addThreeDPRequest, {loading: addloading, error: adderror}] = 
    useMutation(ADD_THREE_DP_REQUEST_MUTATION, {
      refetchQueries:[
        {
          query: GET_THREE_DP_REQUESTS_BY_USER_ID_QUERY,
          variables: {
            userId: user?.id,
          },
        },
        {
          query: GET_THREE_DP_REQUESTS_BY_THREE_DP_ID_QUERY,
          variables: {
            threeDpId: id,
          }
        },
        {
          query: GET_USER_BY_STUDENT_ID_QUERY,
          variables: {
            studentId: user?.studentID,
          }
        }
      ]
    });

  const { data: fetchedUserData, loading: getUserLoading, error: getUserError } = 
    useQuery(
      GET_USER_BY_STUDENT_ID_QUERY,
      {
        variables: {
          studentId: user? user?.studentID : "",
        }
      }
    );
  if (getUserLoading) return <LoaderSpinner />;
  if (getUserError) {
    toast({ title: `${getUserError.message}`, variant: "destructive" });
  }
  const fetchedUser = fetchedUserData?.GetUserByStudentID as UserType || [];

  const handleReserve = async ({
    name,
    studentID,
    userId,
    threeDPId,
  }: ThreeDPRequestInput) => {
    if (!id) {
      toast({ title: "id is undefined", variant: "destructive" });
    } else {
      try {
        await addThreeDPRequest({
          variables: {
            threeDpRequestInput: {
              name,
              studentID,
              userId,
              threeDPId,
            },
          },
        });
        if (addloading) return <LoaderSpinner />;
        if (adderror) {
          toast({ title: `${adderror.message}`, variant: "destructive" });
        }
        toast({ title: "ThreeDP reserved successfully!" });
      } catch (error) {
        toast({ title: `${error}`, variant: "destructive" });
      }
      setVisible(false);
    }
  };
  

  const handleUpdate = async ({
    name,
    description,
    photoLink,
    position,
    tutorialLink,
    broken,
  }: ThreeDPInput) => {
    if (!id) {
      toast({ title: "id is undefined", variant: "destructive" });
    } else {
      try {
        await editThreeDP({
          variables: {
            editThreeDpId: id,
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
    const shareableLink = `${window.location.origin}${threedpBaseUrl}/${id}`;
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
      <h1 className=" dark:text-white text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mt-2">
        {threedpName}
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row my-4 mx-2 justify-evenly">
        <div className="w-3/12">
          <img
            src={threedpPhotoLink}
            alt={threedpName}
            className="w-11/12 mt-3 mx-auto bg-white sm:mx-auto sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-6/12"
          />
          <div className="w-9/12 flex flex-col ml-5">

            <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
              {t("description")}: {threedpDescription}
            </p>
            
            <p className=" dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
              {t("position")}: {threedpPosition}
            </p>

            {threedpTutorialLink && (
              <a
                href={threedpTutorialLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 text-sky-300 cursor-pointer hover:underline w-8/12 active:scale-95 transition-transform duration-200 focus:text-blue-600 text-base sm:text-base md:text-lg lg:text-lg xl:text-lg"
              >
                {t("tutorialLink")}
              </a>
            )}

            {broken && <p className=" text-red-500 dark:text-white text-base sm:text-base md:text-lg lg:text-lg xl:text-lg">
              {t("broken")}
            </p>}
          </div>
        </div>
        <div className="w-8/12">
          <ThreeDPRequestTable id={id}/>
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
                    value={threedpName}
                    onChange={(e) => setThreedpName(e.target.value)}
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
                    value={threedpDescription}
                    onChange={(e) => setThreedpDescription(e.target.value)}
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
                    value={threedpPhotoLink}
                    onChange={(e) => setThreedpPhotoLink(e.target.value)}
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
                    value={threedpPosition}
                    onChange={(e) => setThreedpPosition(e.target.value)}
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
                    value={threedpTutorialLink || ""}
                    onChange={(e) => setThreedpTutorialLink(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="broken" className="text-right">
                    {t("broken")}
                  </Label>
                  <Checkbox
                    id="broken"
                    className="checkbox-class"
                    checked={threedpBroken}
                    onCheckedChange={(checked: boolean) =>
                      setThreedpBroken(checked)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse gap-2">
                <Button
                  onClick={() =>
                    handleUpdate({
                      name: threedpName,
                      description: threedpDescription,
                      photoLink: threedpPhotoLink,
                      position: threedpPosition,
                      tutorialLink: threedpTutorialLink,
                      broken: threedpBroken
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
        <div className={cn(
          "w-10 h-10 rounded-full p-2 dark:text-white",
          (user && fetchedUser?.threeDPId === null && !broken)? 
              "hover:text-orange-500 dark:hover:text-orange-300 hover:bg-orange-300 hover:bg-opacity-20 bg-transparent"
            :
              "dark:text-white text-gray-300 dark:text-opacity-50 bg-transparent",
          "flex justify-center items-center cursor-pointer"
        )}>
          <Tooltip>              
            {(user && fetchedUser?.threeDPId === null && !broken)? 
              <TooltipTrigger 
                asChild 
                onClick={() =>
                  handleReserve({
                    name: user?.name,
                    studentID: user?.studentID,
                    userId: user?.id,
                    threeDPId: id,
                  })
                }
                className="transform active:scale-90 transition-transform duration-200 "
              >
                <Calendar size={33}/>
              </TooltipTrigger>
              :
              <TooltipTrigger
                onClick={() =>{
                    user?
                      broken?
                        toast({ title: "Machine is broken" })
                      :  
                        toast({ title: "You've already reserved" })
                    :
                      toast({ title: "Please log in to reserve threeDP" })
                  }
                }
                className="transform active:scale-90 transition-transform duration-200 "
              >
                <Calendar size={26} />
              </TooltipTrigger>
            }
            <TooltipContent
              className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
              side="bottom"
            >
              <p className="text-white text-xs">{t("reserve")}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        
      </div>
    </div>
  );
}

export default ThreeDPDetailCard;
