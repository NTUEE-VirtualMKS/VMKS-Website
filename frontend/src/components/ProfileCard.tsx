// TODO: send authorized code to backend
import { UserEditInput, type ProfileCardProps } from "@/shared/type";
import LoaderSpinner from "./LoaderSpinner";
import { useEffect, useState } from "react";
import { EDIT_USER_MUTATION, ALL_USER_QUERY } from "@/graphql";
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
import { EyeIcon, EyeOffIcon, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWindow } from "@/contexts/WindowContext";
import { useTranslation } from "react-i18next";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUser } from "@/contexts/UserContext";

function ProfileCard({
  id,
  name,
  studenetID,
  password,
  photoLink,
  language,
  laserCutAvailable,
  isAdmin,
  isMinister,
}: ProfileCardProps) {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { user } = useUser();
  if (!photoLink) return <LoaderSpinner />;
  const { windowWidth } = useWindow();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(name);
  const [studenetId, _setStudentId] = useState(studenetID);
  const [pwd, setPassword] = useState(password);
  const [confirmPassword, setConfirmPassword] = useState(password);
  const [imgUrl, setImgUrl] = useState(photoLink);
  const [userLanguage, _setUserLanguage] = useState(language);
  const [canUseLaser, _setCanUseLaser] = useState(laserCutAvailable);
  const [admin, _setAdmin] = useState(isAdmin);
  const [minister, _setMinister] = useState(isMinister);
  const [visible, setVisible] = useState(false);
  const [authorizedCode, setAuthorizedCode] = useState("");
  const [editUser, { loading, error }] = useMutation(EDIT_USER_MUTATION, {
    refetchQueries: [{ query: ALL_USER_QUERY }],
  });

  const handleUpdate = async ({
    name,
    studentID,
    password,
    photoLink,
    language,
    isAdmin,
    isMinister,
  }: UserEditInput) => {
    if (confirmPassword !== password) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
    } else {
      try {
        await editUser({
          variables: {
            editUserId: id,
            userEditInput: {
              name,
              studentID,
              password,
              photoLink,
              language,
              isAdmin,
              isMinister,
            },
          },
        });
        if (loading) return <LoaderSpinner />;
        if (error) {
          toast({ title: `${error.message}`, variant: "destructive" });
        }
        toast({ title: "User updated successfully!" });
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(pwd));
        localStorage.setItem(
          "confirmPassword",
          JSON.stringify(confirmPassword)
        );
        localStorage.setItem("imgUrl", JSON.stringify(imgUrl));
      } catch (e) {
        toast({ title: `${e}`, variant: "destructive" });
      }
      setVisible(false);
      window.location.reload();
    }
  };

  const handleCancel = () => {
    setVisible(false);
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedConfirmPassword = localStorage.getItem("confirmPassword");
    const storedImgUrl = localStorage.getItem("imgUrl");
    const storedUserLanguage = localStorage.getItem("language");
    if (
      storedUsername &&
      storedPassword &&
      storedConfirmPassword &&
      storedImgUrl &&
      storedUserLanguage
    ) {
      setUsername(JSON.parse(storedUsername));
      setPassword(JSON.parse(storedPassword));
      setConfirmPassword(JSON.parse(storedConfirmPassword));
      setImgUrl(JSON.parse(storedImgUrl));
    }
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedConfirmPassword = localStorage.getItem("confirmPassword");
    const storedImgUrl = localStorage.getItem("imgUrl");
    const storedUserLanguage = localStorage.getItem("language");
    if (
      storedUsername &&
      storedPassword &&
      storedConfirmPassword &&
      storedImgUrl &&
      storedUserLanguage
    ) {
      setUsername(JSON.parse(storedUsername));
      setPassword(JSON.parse(storedPassword));
      setConfirmPassword(JSON.parse(storedConfirmPassword));
      setImgUrl(JSON.parse(storedImgUrl));
    }
  }, []);

  return (
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="ml-2 my-6 flex flex-col gap-8 max-md:items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <img
          src={imgUrl}
          width={330}
          height={330}
          alt="User Image"
          className="aspect-square rounded-full bg-[#1f1f1f]"
        />
        <div className="flex flex-col max-md:items-center">
          <div className="flex flex-row items-center justify-between">
            <figure className="flex gap-2 max-md:justify-center">
              <img src="/verified.svg" width={25} height={25} alt="verified" />
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
              <DialogContent className="sm:max-w-[425px] text-white bg-black">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {t("editProfile")}
                  </DialogTitle>
                  <DialogDescription className="text-sm">
                    {t("pleaseFillInAllFields")}:
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2.5">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      {t("name")}
                    </Label>
                    <Input
                      id="name"
                      placeholder="name"
                      className="col-span-3 input-class"
                      value={username}
                      required
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={imgUrl}
                      required
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <Label htmlFor="password" className="text-right ml-12">
                      {t("password")}
                    </Label>
                    <PasswordInput
                      id="password"
                      placeholder="password"
                      className="input-class"
                      value={pwd}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <Label
                      htmlFor="confirm-password"
                      className="text-right ml-4"
                    >
                      {t("confirmPassword")}
                    </Label>
                    <PasswordInput
                      id="confirm-password"
                      className="input-class"
                      name="confirm-password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-row-reverse gap-2">
                  <Button
                    onClick={() =>
                      handleUpdate({
                        name: username,
                        studentID: studenetId,
                        photoLink: imgUrl,
                        language: userLanguage,
                        password: pwd,
                        isAdmin: admin,
                        isMinister: minister,
                      })
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
          <p className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold tracking-[-0.32px] text-white">
            {username}
          </p>
          <p className="text-lg text-white">
            {t("studentId")}: {studenetId}
          </p>
          <div className="flex flex-row">
            <p className="text-lg text-white">
              {t("password")}: {showPassword ? pwd : "＊＊＊＊＊＊"}
            </p>
            <button
              className="text-white ml-2 transform active:scale-90 transition-transform duration-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
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
              <Button className="ml-2 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200">
                {t("submit")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
