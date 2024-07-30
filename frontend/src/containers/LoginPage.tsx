import { useState, type FormEvent } from "react";
import { Outlet } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/PasswordInput";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const { login, signup } = useUser();
  const { t } = useTranslation();
  const [signupMode, setSignupMode] = useState(false);
  const [username, setUsername] = useState("");
  const [studentId, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupMode) {
      await login({ studentId, password });
    } else {
      if (confirmPassword !== password) {
        toast({
          title: "Passwords do not match",
          variant: "destructive",
        });
      } else {
        await signup({ name: username, studentId, password });
        setSignupMode(false);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-4/12 mx-auto mt-16 rounded-lg">
      <Tabs
        value={signupMode ? "signup" : "login"}
        className="text-white bg-black rounded-lg"
      >
        <TabsList className="grid grid-cols-2 rounded-t-md p-1 ">
          <TabsTrigger
            asChild
            key="Login"
            value="login"
            className="bg-[#303030] text-zinc-400 cursor-pointer rounded-tl-lg font-semibold text-base"
            onClick={() => setSignupMode(false)}
          >
            <div>{t("login")}</div>
          </TabsTrigger>
          <TabsTrigger
            asChild
            key="Sign Up"
            value="signup"
            className="bg-[#303030] text-zinc-400 cursor-pointer rounded-tr-lg font-semibold text-base"
            onClick={() => setSignupMode(true)}
          >
            <div>{t("signup")}</div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Card className="w-sm bg-black border border-[#444444] mt-2">
        <CardHeader>
          <CardTitle className="flex flex-row items-center text-white justify-start gap-2 ml-1">
            <img
              data-testid="header-logo"
              className="w-12 h-12"
              src="/logo-2.png"
              alt="logo"
            />
            <p className="text-5xl">VMKS</p>
          </CardTitle>
          <CardDescription className="ml-2">
            {!signupMode
              ? t("loginToBorrowMaterialsOrTools")
              : t("signUpToBorrowMaterialsOrTools")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center space-y-4">
            {signupMode && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="username" className="text-white">
                  {t("username")}
                </Label>
                <Input
                  id="username"
                  className="input-class"
                  type="text"
                  name="username"
                  placeholder={t("username")}
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="flex flex-col gap-1">
              <Label htmlFor="studentId" className="text-white">
                {t("studentId")}
              </Label>
              <Input
                id="studentId"
                className="input-class"
                type="text"
                name="studentId"
                placeholder={t("studentId")}
                required
                value={studentId}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password" className="text-white">
                {t("password")}
              </Label>
              <PasswordInput
                id="password"
                className="input-class"
                name="password"
                placeholder={t("password")}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {signupMode && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="confirm-password" className="text-white">
                  {t("confirmPassword")}
                </Label>
                <PasswordInput
                  id="confirm-password"
                  className="input-class"
                  name="confirm-password"
                  placeholder={t("confirmPassword")}
                  required={signupMode}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {signupMode ? (
            <>
              <Button
                asChild
                variant="link"
                size="sm"
                className="px-0 text-[#71788B] cursor-pointer"
                type="button"
              >
                <div onClick={() => setSignupMode(false)}>
                  {t("haveAccount")}
                </div>
              </Button>
              <Button
                size="sm"
                className="text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                {t("signup")}
              </Button>
            </>
          ) : (
            <>
              <Button
                asChild
                variant="link"
                size="sm"
                className="px-0 text-[#71788B] cursor-pointer"
                type="button"
              >
                <div onClick={() => setSignupMode(true)}>
                  {t("dontHaveAnAccount")}
                </div>
              </Button>
              <Button
                size="sm"
                className="text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                {t("login")}
              </Button>
            </>
          )}
        </CardFooter>
        <Outlet />
      </Card>
    </form>
  );
}

export default LoginPage;
