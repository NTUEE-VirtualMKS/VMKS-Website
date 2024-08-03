import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useToast } from "@/components/ui/use-toast";
import {
  ALL_USER_QUERY,
  GET_USER_BY_STUDENT_ID_QUERY,
} from "@/graphql/queries";
import {
  ADD_USER_MUTATION,
  EDIT_USER_LANGUAGE_MUTATION,
} from "@/graphql/mutations";
import type { UserType, SignupProps, LoginProps } from "@/shared/type.ts";
import { z } from "zod";
import { validDepartmentCodes } from "@/constants/index";

const studentIdSchema = z.string().refine((studentId) => {
  return (
    studentId.length === 9 &&
    validDepartmentCodes.has(studentId[0].toUpperCase()) &&
    /^\d{2}$/.test(studentId.substring(1, 3)) &&
    /^\d$/.test(studentId[3]) &&
    /^\d{2}$/.test(studentId.substring(4, 6)) &&
    /^\d{3}$/.test(studentId.substring(6, 9))
  );
}, "Invalid student ID format");

const loginSchema = z.object({
  studentId: studentIdSchema,
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  studentId: studentIdSchema,
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type UserContextType = {
  user: UserType | null;
  pushToLoginPage: boolean;
  setUser: (value: UserType | null) => void;
  setPushToLoginPage: (value: boolean) => void;
  login: ({ studentId, password }: LoginProps) => Promise<void>;
  signup: ({ name, studentId, password }: SignupProps) => Promise<void>;
  logout: () => void;
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

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      if (user.language) {
        i18n.changeLanguage(user.language);
        localStorage.setItem("language", user.language);
      }
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("language");
    }
  }, [user, i18n]);

  const [createUser, { loading: createUserLoading, error: createUserError }] =
    useMutation(ADD_USER_MUTATION, {
      refetchQueries: [{ query: ALL_USER_QUERY }],
    });

  const signup = async ({ name, studentId, password }: SignupProps) => {
    const defaultPhotoUrl =
      "https://firebasestorage.googleapis.com/v0/b/vmks-a0293.appspot.com/o/images%2Fuser.png?alt=media&token=5ac30e77-4881-423c-80ba-1e2c148f9a43";
    try {
      signupSchema.parse({ name, studentId, password });
      await createUser({
        variables: {
          userInput: {
            name,
            studentID: studentId.toUpperCase(),
            password,
            photoLink: defaultPhotoUrl,
            language: "en",
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
      }
      toast({ title: "Sign up successfully!" });
      navigate("/Login");
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
        toast({
          title: "Error",
          description: `${error}`.split(":")[1],
          variant: "destructive",
        });
      }
    }
  };

  const [
    getUserByStudentId,
    { loading: getUserByStudentIdLoading, error: getUserByStudentIdError },
  ] = useLazyQuery(GET_USER_BY_STUDENT_ID_QUERY);

  const login = async ({ studentId, password }: LoginProps) => {
    if (getUserByStudentIdLoading) {
      toast({ title: "Loading..." });
    }
    if (getUserByStudentIdError) {
      toast({
        title: `${getUserByStudentIdError.message}`,
        variant: "destructive",
      });
      throw new Error(getUserByStudentIdError.message);
    }

    try {
      loginSchema.parse({ studentId, password });
      const response = await getUserByStudentId({
        variables: { studentId: studentId.toUpperCase() },
      });

      const user = response?.data?.GetUserByStudentID;
      if (!user) {
        toast({ title: "User not found", variant: "destructive" });
        throw new Error("User not found");
      } else if (user.password !== password) {
        toast({ title: "Password incorrect", variant: "destructive" });
        throw new Error("Password incorrect");
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
        });
        i18n.changeLanguage(user.language);
        toast({
          title:
            (user.isMinister ? "Minister" : user.isAdmin ? "Admin" : "User") +
            " login successfully!",
        });
        setPushToLoginPage(false);
        navigate("/");
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
        toast({
          title: "User not found",
          description: "Student id or password is wrong!",
          variant: "destructive",
        });
        throw new Error(error as string);
      }
    }
  };

  const logout = () => {
    setUser(null);
    toast({ title: "Log out successfully!" });
    localStorage.clear();
  };

  const [
    editLanguage,
    { loading: EditLanguageLoading, error: EditLanguageError },
  ] = useMutation(EDIT_USER_LANGUAGE_MUTATION, {
    refetchQueries: [{ query: ALL_USER_QUERY }],
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
        toast({ title: "Loading..." });
      }
      if (EditLanguageError) {
        toast({
          title: `${EditLanguageError.message}`,
          variant: "destructive",
        });
        throw new Error(EditLanguageError.message);
      }
      const updatedUser = response?.data?.EditUserLanguage;
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
      setUser,
      login,
      logout,
      signup,
      pushToLoginPage,
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
