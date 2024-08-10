import type { ProfileCardProps } from "@/shared/type";
import LoaderSpinner from "./LoaderSpinner";
import { useEffect, useRef, useState } from "react";
import { EDIT_USER_MUTATION, PROMOTE_USER_MUTATION } from "@/graphql";
import { useMutation } from "@apollo/client";
import { useToast } from "./ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { PasswordInput } from "@/components/PasswordInput";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWindow } from "@/contexts/WindowContext";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@/contexts/UserContext";
import PasswordInputDialog from "./PasswordInputDialog";
import UserAvatarUploader from "@/components/UserAvatarUploader";
import StudentIDCardUploadDialog from "./StudentIDCardUploadDialog";

function ProfileCard({
  id,
  name,
  studentID,
  photoLink,
  language,
  laserCutAvailable,
  isAdmin,
  isMinister,
}: ProfileCardProps) {
  if (!photoLink) return <LoaderSpinner />;
  const { toast } = useToast();
  const { t } = useTranslation();
  const { user, login } = useUser();
  const { windowWidth } = useWindow();
  const imageRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState(name);
  const [studentId, _setStudentId] = useState(studentID);
  const [pwd, setPwd] = useState("");
  const [imgUrl, setImgUrl] = useState(photoLink);
  const [userLanguage, setUserLanguage] = useState(language);
  const [canUseLaser, _setCanUseLaser] = useState(laserCutAvailable);
  const [admin, setAdmin] = useState(isAdmin);
  const [minister, _setMinister] = useState(isMinister);
  const [visible, setVisible] = useState(false);
  const [authorizedCode, setAuthorizedCode] = useState("");
  const [editUser, { loading, error }] = useMutation(EDIT_USER_MUTATION);
  const [
    promoteUser,
    { loading: promoteUserLoading, error: promoteUserError },
  ] = useMutation(PROMOTE_USER_MUTATION);
  const [enterPasswordForPromotingUser, setEnterPasswordForPromotingUser] =
    useState(false);
  const [
    enterPasswordForEdittingUserProfile,
    setEnterPasswordForEdittingUserProfile,
  ] = useState(false);

  const handleEditUser = async () => {
    try {
      setEnterPasswordForEdittingUserProfile(false);
      const updatedUser = await editUser({
        variables: {
          editUserId: id,
          userEditInput: {
            name: username,
            studentID: studentId,
            photoLink: imgUrl,
            language: userLanguage,
            password: pwd,
          },
        },
      });
      if (loading) return <LoaderSpinner />;
      if (error) {
        toast({ title: `${error.message}`, variant: "destructive" });
      }
      toast({ title: "User updated successfully!" });
      login({ studentId, password: pwd, redirect: false });
      localStorage.setItem("user", JSON.stringify(updatedUser));
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("imgUrl", JSON.stringify(imgUrl));
      localStorage.setItem("language", userLanguage);
      setVisible(false);
    } catch (error) {
      toast({ title: `${error}`.split(":")[1], variant: "destructive" });
      handleCancel();
    }
    setPwd("");
  };

  const handleUserPromotion = async () => {
    try {
      setEnterPasswordForPromotingUser(false);
      await promoteUser({
        variables: {
          promoteUserId: id,
          promoteUserInput: {
            authorizedCode: authorizedCode,
            password: pwd,
            isAdmin: admin,
          },
        },
      });
      if (promoteUserLoading) return <LoaderSpinner />;
      if (promoteUserError) {
        toast({
          title: `${promoteUserError.message}`,
          variant: "destructive",
        });
      }
      toast({ title: "User role updated successfully!" });
      setAdmin(true);
      login({ studentId, password: pwd, redirect: false });
    } catch (error) {
      toast({ title: `${error}`.split(":")[1], variant: "destructive" });
      handleCancel();
    }
    setPwd("");
    setAuthorizedCode("");
  };

  const handleCancel = () => {
    setVisible(false);
    setPwd("");
    const storedUsername = localStorage.getItem("username");
    const storedImgUrl = localStorage.getItem("imgUrl");
    const storedUserLanguage = localStorage.getItem("language");
    const storedAdmin = localStorage.getItem("admin");
    if (storedUsername && storedImgUrl && storedUserLanguage && storedAdmin) {
      setUsername(JSON.parse(storedUsername));
      setImgUrl(JSON.parse(storedImgUrl));
      setUserLanguage(storedUserLanguage);
      setAdmin(JSON.parse(storedAdmin));
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedImgUrl = localStorage.getItem("imgUrl");
    const storedUserLanguage = localStorage.getItem("language");
    const storedAdmin = localStorage.getItem("admin");
    if (storedUsername && storedImgUrl && storedUserLanguage && storedAdmin) {
      setUsername(JSON.parse(storedUsername));
      setImgUrl(JSON.parse(storedImgUrl));
      setUserLanguage(storedUserLanguage);
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-11/12 mx-auto">
        <div className="ml-2 my-6 flex flex-col gap-8 max-md:items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <img
            src={imgUrl}
            width={330}
            height={330}
            alt="User Image"
            className="aspect-square rounded-full bg-[#1f1f1f] border border-[#444444]"
          />
          <div className="flex flex-col max-md:items-center">
            <div className="flex flex-row items-center justify-between">
              <figure className="flex gap-2 max-md:justify-center">
                <img
                  src="/verified.svg"
                  width={25}
                  height={25}
                  alt="verified"
                />
                <p className="text-18 font-medium text-white sm:text-18 md:text-18 bg:text-20 xl:text-20">
                  {t("verified")}{" "}
                  {minister ? t("minister") : admin ? t("admin") : t("user")}
                </p>
              </figure>
              <Dialog
                open={visible}
                onOpenChange={(visible) => setVisible(visible)}
              >
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-2 aspect-square text-white hover:text-sky-300 rounded-full  hover:bg-sky-300 hover:bg-opacity-20 bg-transparent w-10 h-10 flex justify-center items-center cursor-pointer">
                      <DialogTrigger
                        asChild
                        onClick={() => setVisible(true)}
                        className="transform active:scale-90 transition-transform duration-200"
                      >
                        <Pencil size={33} />
                      </DialogTrigger>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black bg-opacity-80">
                    <p className="text-white text-xs">{t("edit")}</p>
                  </TooltipContent>
                </Tooltip>
                <DialogContent className="text-white bg-black rounded-xl w-11/12 sm:w-11/12">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {t("editProfile")}
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                      {t("pleaseFillInAllFields")}:
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="name">{t("name")}</Label>
                      <Input
                        id="name"
                        placeholder="name"
                        className="col-span-3 input-class"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <p className="text-white text-base">{t("avatar")}</p>
                    <UserAvatarUploader
                      imgUrl={imgUrl}
                      setImgUrl={setImgUrl}
                      imageRef={imageRef}
                    />
                  </div>
                  <div className="flex flex-row-reverse gap-2">
                    <Button
                      onClick={() =>
                        setEnterPasswordForEdittingUserProfile(true)
                      }
                      className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                    >
                      {t("submit")}
                    </Button>
                    <Button
                      onClick={handleCancel}
                      className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
                    >
                      {t("cancel")}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <>
              <p className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold tracking-[-0.32px] text-white">
                {username}
              </p>
              <p className="text-lg text-white">
                {t("studentId")}: {studentId}
              </p>
              <p className="text-lg text-white">
                {t("laserCutAvailable") + ": "}
                <span
                  className={cn(
                    "font-bold",
                    canUseLaser ? "text-green-300" : "text-red-400"
                  )}
                >
                  {canUseLaser ? "Yes" : "No"}
                </span>
              </p>
              <StudentIDCardUploadDialog />
            </>
            {!user?.isAdmin && (
              <div className="flex flex-row mt-2 items-center">
                {windowWidth > 630 &&
                  !(windowWidth > 767 && windowWidth < 1031) && (
                    <Label
                      htmlFor="authorized-code"
                      className="text-white text-lg mr-1"
                    >
                      {t("authorizedCode") + ": "}
                    </Label>
                  )}
                <PasswordInput
                  id="authorized-code"
                  placeholder="Authorized Code"
                  name="authorized-code"
                  className="input-class"
                  autoComplete="new-password"
                  value={authorizedCode}
                  onChange={(e) => setAuthorizedCode(e.target.value)}
                />
                <Button
                  className="ml-2 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                  onClick={() => setEnterPasswordForPromotingUser(true)}
                >
                  {t("submit")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <PasswordInputDialog
        visible={enterPasswordForEdittingUserProfile}
        setVisible={setEnterPasswordForEdittingUserProfile}
        handleFunction={handleEditUser}
        pwd={pwd}
        setPwd={setPwd}
      />
      <PasswordInputDialog
        visible={enterPasswordForPromotingUser}
        setVisible={setEnterPasswordForPromotingUser}
        handleFunction={handleUserPromotion}
        pwd={pwd}
        setPwd={setPwd}
      />
    </>
  );
}

export default ProfileCard;
