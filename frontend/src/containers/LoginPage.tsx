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

function LoginPage() {
  const { login, signup } = useUser();
  const [signupMode, setSignupMode] = useState(false);
  const [username, setUsername] = useState("");
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupMode) {
      await login({ studentID, password });
    } else {
      if (confirmPassword !== password) {
        toast({
          description: "Passwords do not match",
        });
      } else {
        await signup({ name: username, studentID, password });
      }
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-6/12 mx-auto mt-20  border border-white rounded-lg"
    >
      <Card className="w-sm border-none bg-black">
        <Tabs
          value={signupMode ? "signup" : "login"}
          className="text-white bg-black rounded-t-lg"
        >
          <TabsList className="grid grid-cols-2 rounded-t-md">
            <TabsTrigger
              asChild
              key="Login"
              value="login"
              className="bg-black border-t-0 border-white cursor-pointer rounded-tl-lg font-bold"
              onClick={() => setSignupMode(false)}
            >
              <div>Log In</div>
            </TabsTrigger>
            <TabsTrigger
              asChild
              key="Sign Up"
              value="signup"
              className="bg-black border-t-0 border-white cursor-pointer rounded-tr-lg font-bold"
              onClick={() => setSignupMode(true)}
            >
              <div>Sign Up</div>
            </TabsTrigger>
          </TabsList>
        </Tabs>
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
              ? "Login to Borrow Materials and Tools"
              : "Sign up to Borrow Materials and Tools"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center space-y-4">
            {signupMode && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  className="input-class"
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <Label htmlFor="studentID" className="text-white">
                Student ID
              </Label>
              <Input
                id="studentID"
                className="input-class"
                type="text"
                name="studentID"
                placeholder="Enter Student ID"
                required
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                className="input-class"
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {signupMode && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="confirm-password" className="text-white">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
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
                <div onClick={() => setSignupMode(false)}>
                  Already have an account?
                </div>
              </Button>
              <Button
                size="sm"
                className="text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                Sign Up
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
                  Don't have an account?
                </div>
              </Button>
              <Button
                size="sm"
                className="text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                Log In
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
