import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_QUERY } from "@/graphql/queries";
import {
  EDIT_USER_LANGUAGE_MUTATION,
  SIGNUP_MUTATION,
} from "@/graphql/mutations";
import type { UserType, SignupProps, LoginProps } from "@/shared/type.ts";
import { z } from "zod";
import { defaultPhotoUrl, validDepartmentCodes } from "@/constants/index";
import { jwtDecode } from "jwt-decode";
import { generateLoginInfo } from "@/lib/utils";

const studentIdSchema = z.string().refine((studentId) => {
  const lastThreeDigits = parseInt(studentId.substring(6, 9), 10);
  return (
    studentId.length === 9 &&
    validDepartmentCodes.has(studentId[0].toUpperCase()) &&
    /^\d{2}$/.test(studentId.substring(1, 3)) &&
    /^\d$/.test(studentId[3]) &&
    /^\d{2}$/.test(studentId.substring(4, 6)) &&
    lastThreeDigits >= 1 &&
    lastThreeDigits <= 200
  );
}, "Invalid student ID format");

const loginSchema = z.object({
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

export type UserContextType = {
  user: UserType | null;
  pushToLoginPage: boolean;
  setUser: (value: UserType | null) => void;
  setPushToLoginPage: (value: boolean) => void;
  login: ({ studentId, password, redirect }: LoginProps) => Promise<void>;
  signup: ({ name, studentId, password }: SignupProps) => Promise<void>;
  logout: ({ redirect }: { redirect: boolean }) => void;
  handleEditLanguage: ({ language }: { language: string }) => Promise<void>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  pushToLoginPage: false,
  setUser: () => {},
  setPushToLoginPage: () => {},
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  handleEditLanguage: async () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { i18n } = useTranslation();
  const [pushToLoginPage, setPushToLoginPage] = useState(false);
  const [user, setUser] = useState<UserType | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState<string | null>(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken ? savedToken : null;
  });

  useEffect(() => {
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      if (user.language) {
        i18n.changeLanguage(user.language);
        localStorage.setItem("language", user.language);
      }
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("language");
    }
  }, [user, i18n, token]);

  const isTokenExpired = (token: string) => {
    const decoded: { exp: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  };

  // Add this useEffect to automatically login the user on app load
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken && !isTokenExpired(savedToken)) {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      }
    } else {
      logout({ redirect: false });
    }
  }, []);

  const [createUser, { loading: createUserLoading, error: createUserError }] =
    useMutation(SIGNUP_MUTATION);

  const signup = async ({ name, studentId, password }: SignupProps) => {
    signupSchema.parse({ name, studentId, password });
    await createUser({
      variables: {
        signUpInput: {
          name,
          studentID: studentId.toUpperCase(),
          password,
          photoLink: defaultPhotoUrl,
          language: localStorage.getItem("language") || "en",
          isAdmin: false,
          isMinister: false,
          laserCutAvailable: false,
        },
      },
    });
    if (createUserLoading) {
      toast({ title: "Loading..." });
    }
    if (createUserError) {
      toast({ title: `${createUserError.message}`, variant: "destructive" });
      throw new Error(createUserError.message);
    } else {
      toast({ title: "Sign up successfully!" });
      navigate("/Login");
    }
  };

  const [userLogin, { loading: userLoginLoading, error: userLoginError }] =
    useLazyQuery(LOGIN_QUERY);

  const login = async ({ studentId, password, redirect }: LoginProps) => {
    if (userLoginLoading) {
      toast({ title: "Loading..." });
    }
    if (userLoginError) {
      toast({
        title: `${userLoginError.message}`,
        variant: "destructive",
      });
      throw new Error(userLoginError.message);
    }
    const { browserName, osName, time, timeZoneShort, date } =
      generateLoginInfo();

    try {
      loginSchema.parse({ studentId, password });
      const response = await userLogin({
        variables: {
          logInInput: {
            studentID: studentId.toUpperCase(),
            password: password,
            browser: browserName,
            os: osName,
            time,
            timeZone: timeZoneShort,
            date,
            redirect,
          },
        },
      });

      const data = response?.data?.LogIn;
      const user = data?.user;
      const token = data?.token;

      if (!user) {
        toast({ title: "User not found", variant: "destructive" });
        throw new Error("User not found");
      } else {
        setUser({
          id: user.id,
          name: user.name,
          studentID: user.studentID,
          password: user.password,
          photoLink: user?.photoLink,
          language: user.language,
          threeDPId: user?.threeDPId,
          laserCutAvailable: user.laserCutAvailable,
          articlesId: user?.articlesId,
          isAdmin: user.isAdmin,
          isMinister: user.isMinister,
          toolLikeIds: user?.toolLikeIds,
          userBorrowToolIds: user?.userBorrowToolIds,
          materialLikeIds: user?.materialLikeIds,
          userBorrowMaterialIds: user?.userBorrowMaterialIds,
        });
        setToken(token!);
        i18n.changeLanguage(user.language);
        if (redirect) {
          toast({
            title:
              (user.isMinister ? "Minister" : user.isAdmin ? "Admin" : "User") +
              " login successfully!",
          });
          navigate("/");
        }
        setPushToLoginPage(false);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Extract and display error messages from Zod validation
        const errorMessage = error.errors.map((e) => e.message).join(". ");
        toast({
          title: "Invalid input",
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        if (redirect) {
          toast({
            title: "User not found",
            description: "Student id or password is wrong!",
            variant: "destructive",
          });
        }
        logout({ redirect: false });
      }
    }
  };

  const logout = ({ redirect }: { redirect: boolean }) => {
    setUser(null);
    setToken(null);
    if (redirect) toast({ title: "Log out successfully!" });
    localStorage.clear();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("language");
  };

  const [
    editLanguage,
    { loading: EditLanguageLoading, error: EditLanguageError },
  ] = useMutation(EDIT_USER_LANGUAGE_MUTATION, {
    refetchQueries: [
      {
        query: LOGIN_QUERY,
        variables: { studentId: user?.studentID, password: user?.password },
      },
    ],
  });

  const handleEditLanguage = async ({ language }: { language: string }) => {
    try {
      if (!user) {
        toast({ title: "User not found", variant: "destructive" });
        throw new Error("User not found");
      }
      const response = await editLanguage({
        variables: {
          editUserLanguageId: user?.id,
          language,
        },
      });
      if (EditLanguageLoading) {
        console.log("Loading...");
      }
      if (EditLanguageError) {
        toast({
          title: `${EditLanguageError.message}`,
          variant: "destructive",
        });
        throw new Error(EditLanguageError.message);
      }
      const updatedUser = response?.data?.EditUserLanguage;
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser!);
      i18n.changeLanguage(language);
      toast({ title: "Language changed successfully!" });
    } catch (error) {
      toast({ title: "Language changed failed", variant: "destructive" });
      throw new Error("Language changed failed");
    }
  };

  const contextValue = useMemo(
    () => ({
      user,
      pushToLoginPage,
      setUser,
      login,
      logout,
      signup,
      setPushToLoginPage,
      handleEditLanguage,
    }),
    [user, pushToLoginPage]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

