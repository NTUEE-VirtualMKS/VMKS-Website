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

function LoginPage() {
  const { login, signup } = useUser();
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
    <form onSubmit={onSubmit} className="w-4/12 mx-auto mt-28 rounded-lg">
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
            <div>登入</div>
          </TabsTrigger>
          <TabsTrigger
            asChild
            key="Sign Up"
            value="signup"
            className="bg-[#303030] text-zinc-400 cursor-pointer rounded-tr-lg font-semibold text-base"
            onClick={() => setSignupMode(true)}
          >
            <div>註冊</div>
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
            {!signupMode ? "登入以借用元件與工具" : "註冊帳號以借用元件與工具"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center space-y-4">
            {signupMode && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="username" className="text-white">
                  姓名
                </Label>
                <Input
                  id="username"
                  className="input-class"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="flex flex-col gap-1">
              <Label htmlFor="studentId" className="text-white">
                學號
              </Label>
              <Input
                id="studentId"
                className="input-class"
                type="text"
                name="studentId"
                placeholder="Student ID"
                required
                value={studentId}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="password" className="text-white">
                密碼
              </Label>
              <PasswordInput
                id="password"
                className="input-class"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {signupMode && (
              <div className="flex flex-col gap-1">
                <Label htmlFor="confirm-password" className="text-white">
                  確認密碼
                </Label>
                <PasswordInput
                  id="confirm-password"
                  className="input-class"
                  name="confirm-password"
                  placeholder="Confirm Password"
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
                <div onClick={() => setSignupMode(false)}>已有帳號?</div>
              </Button>
              <Button
                size="sm"
                className="text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                註冊
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
                <div onClick={() => setSignupMode(true)}>尚未註冊帳號?</div>
              </Button>
              <Button
                size="sm"
                className="text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                登入
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
