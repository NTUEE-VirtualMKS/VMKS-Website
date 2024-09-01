import { useEffect, useState, type FormEvent } from "react";
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
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/PasswordInput";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Mail, MailOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useLazyQuery } from "@apollo/client";
import {
  ADD_SIGNUP_AUTH_CODE_MUTATION,
  CHECK_SIGNUP_AUTH_CODE_QUERY,
} from "@/graphql";
import LoaderSpinner from "@/components/LoaderSpinner";
import { cn, generateLoginInfo } from "@/lib/utils";
import { validDepartmentCodes } from "@/constants";

const studentIdSchema = z
  .string()
  .length(9, "Student ID must be 9 characters long")
  .refine((studentId) => {
    const lastThreeDigits = parseInt(studentId.substring(6, 9), 10);
    return (
      validDepartmentCodes.has(studentId[0].toUpperCase()) &&
      /^\d{2}$/.test(studentId.substring(1, 3)) &&
      /^\d$/.test(studentId[3]) &&
      /^\d{2}$/.test(studentId.substring(4, 6)) &&
      lastThreeDigits >= 1 &&
      lastThreeDigits <= 200
    );
  }, "Invalid student ID format");

const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(15, "Name is too long, max 15 characters"),
  studentId: studentIdSchema,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .refine((password) => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /[0-9]/.test(password);
      const hasSymbols = /[~`!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/]/.test(password);

      const typesCount = [
        hasUpperCase,
        hasLowerCase,
        hasNumbers,
        hasSymbols,
      ].filter(Boolean).length;
      return typesCount >= 3;
    }, "Password must contain at least three of the following: uppercase letters, lowercase letters, numbers, and symbols"),
});

const FormSchema = z.object({
  signupAuthCode: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function LoginPage() {
  const { login, signup } = useUser();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [signupMode, setSignupMode] = useState(false);
  const [enterSignupAuthCode, setEnterSignupAuthCode] = useState(false);
  const [name, setName] = useState("");
  const [studentId, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [addSignupAuthCode, { loading, error }] = useMutation(
    ADD_SIGNUP_AUTH_CODE_MUTATION
  );
  const [showMailOpen, setShowMailOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMailOpen((prev) => !prev);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      signupAuthCode: "",
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupMode) {
      await login({ studentId, password, redirect: true });
    } else {
      if (confirmPassword !== password) {
        toast({
          title: "Passwords do not match",
          variant: "destructive",
        });
      } else {
        try {
          signupSchema.parse({ name, studentId, password });
          const { browserName, osName, time, timeZoneShort, date } =
            generateLoginInfo();
          await addSignupAuthCode({
            variables: {
              signupAuthCodeInput: {
                studentID: studentId.toUpperCase(),
                browser: browserName,
                os: osName,
                time,
                timeZone: timeZoneShort,
                date,
              },
            },
          });
          if (loading) return <LoaderSpinner />;
          if (error) {
            toast({
              title: "Error",
              description: `${error}`.split(":")[1],
              variant: "destructive",
            });
          } else {
            setEnterSignupAuthCode(true);
            toast({ title: "Auth code sent to your school email." });
          }
        } catch (error) {
          if (error instanceof z.ZodError) {
            const errorMessage = error.errors.map((e) => e.message).join(". ");
            toast({
              title: "Invalid format",
              description: errorMessage,
              variant: "destructive",
            });
          } else {
            toast({
              title: "Error",
              description: `${error}`.split(":")[1],
              variant: "destructive",
            });
          }
        }
      }
    }
  };

  const [checkSignupAuthCode, { loading: checkLoading }] = useLazyQuery(
    CHECK_SIGNUP_AUTH_CODE_QUERY
  );

  const onSignupAuthCodeSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { signupAuthCode } = data;
    try {
      await checkSignupAuthCode({
        variables: {
          studentId: studentId.toUpperCase(),
          code: signupAuthCode,
        },
      });
      if (checkLoading) return <LoaderSpinner />;
      await signup({ name, studentId, password });
      setSignupMode(false);
      setEnterSignupAuthCode(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors.map((e) => e.message).join(". ");
        toast({
          title: "Invalid input",
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: `${error}`.split(":")[1],
          variant: "destructive",
        });
      }
    }
  };

  return !enterSignupAuthCode ? (
    <form
      onSubmit={onSubmit}
      className={cn(
        "w-10/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto rounded-lg",
        signupMode ? "mt-1.5" : "mt-20"
      )}
    >
      <Tabs
        value={signupMode ? "signup" : "login"}
        className="text-black bg-white dark:text-white dark:bg-black rounded-lg"
      >
        <TabsList className="grid grid-cols-2 rounded-t-md p-1">
          <TabsTrigger
            asChild
            key="Login"
            value="login"
            className="dark:bg-[#303030] dark:text-zinc-400 cursor-pointer rounded-tl-lg font-semibold text-base"
            onClick={() => setSignupMode(false)}
          >
            <div>{t("login")}</div>
          </TabsTrigger>
          <TabsTrigger
            asChild
            key="Sign Up"
            value="signup"
            className="dark:bg-[#303030] dark:text-zinc-400 cursor-pointer rounded-tr-lg font-semibold text-base"
            onClick={() => setSignupMode(true)}
          >
            <div>{t("signup")}</div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Card className="w-sm dark:bg-black dark:border dark:border-[#444444] mt-2">
        <CardHeader>
          <CardTitle className="flex flex-row items-center dark:text-white justify-start gap-2 ml-1">
            <img
              data-testid="header-logo"
              className="w-12 h-12 bg-black rounded-full"
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
                <Label htmlFor="name" className="dark:text-white">
                  {t("name")}
                </Label>
                <Input
                  id="name"
                  className="input-class"
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="flex flex-col gap-1">
              <Label htmlFor="studentId" className="dark:text-white">
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
              <Label htmlFor="password" className="dark:text-white">
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
              {!signupMode && (
                <p className="text-[#71788B] text-sm">
                  {"Password must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters. " +
                    "~`!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/"}
                </p>
              )}
            </div>
            {signupMode && (
              <>
                <div className="flex flex-col gap-1">
                  <Label htmlFor="confirm-password" className="dark:text-white">
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
                <p className="text-[#71788B] text-sm">
                  {"Password must contain at least three of the following: uppercase letters, lowercase letters, numbers, and special characters. " +
                    "~`!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/"}
                </p>
              </>
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
                className="bg-black hover:bg-black text-white border border-white transform active:scale-90 transition-transform duration-200"
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
                className="bg-black hover:bg-black text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                {t("login")}
              </Button>
            </>
          )}
        </CardFooter>
        <Outlet />
      </Card>
    </form>
  ) : (
    <div className="w-[23rem] mx-auto mt-32 rounded-lg ">
      <Card className="w-sm dark:bg-black border dark:border-[#444444] p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSignupAuthCodeSubmit)}
            className="flex flex-col gap-10"
          >
            <FormField
              control={form.control}
              name="signupAuthCode"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center gap-5">
                  <FormLabel className="dark:text-white text-5xl flex flex-row items-center gap-2">
                    {showMailOpen ? <MailOpen size={42} /> : <Mail size={42} />}
                    Auth Code
                  </FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot
                          index={0}
                          className="w-12 h-14 text-2xl"
                        />
                        <InputOTPSlot
                          index={1}
                          className="w-12 h-14 text-2xl"
                        />
                        <InputOTPSlot
                          index={2}
                          className="w-12 h-14 text-2xl"
                        />
                        <InputOTPSlot
                          index={3}
                          className="w-12 h-14 text-2xl"
                        />
                        <InputOTPSlot
                          index={4}
                          className="w-12 h-14 text-2xl"
                        />
                        <InputOTPSlot
                          index={5}
                          className="w-12 h-14 text-2xl"
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription className="text-base">
                    Please enter the one-time auth code sent to your school
                    email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row-reverse">
              <Button
                type="submit"
                className="bg-black hover:bg-black text-white border border-white transform active:scale-90 transition-transform duration-200"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}

export { LoginPage };
