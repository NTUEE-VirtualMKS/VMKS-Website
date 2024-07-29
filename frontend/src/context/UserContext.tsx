// TODO: jwt token
import { createContext, useContext, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  ALL_USER_QUERY,
  ADD_USER_MUTATION,
  GET_USER_BY_STUDENT_ID_QUERY,
} from "@/graphql";
import type { UserType, SignupProps, LoginProps } from "@/shared/type.ts";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export type UserContextType = {
  user: UserType | null;
  login: ({ studentId, password }: LoginProps) => Promise<void>;
  signup: ({ name, studentId, password }: SignupProps) => Promise<void>;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<UserType | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const [createUser, { loading: createUserLoading, error: createUserError }] =
    useMutation(ADD_USER_MUTATION, {
      refetchQueries: [{ query: ALL_USER_QUERY }],
    });

  const signup = async ({ name, studentId, password }: SignupProps) => {
    const defaultPhotoLink =
      "https://firebasestorage.googleapis.com/v0/b/vmks-a0293.appspot.com/o/images%2Fuser.png?alt=media&token=5ac30e77-4881-423c-80ba-1e2c148f9a43";
    try {
      await createUser({
        variables: {
          userInput: {
            name,
            studentID: studentId,
            password,
            photoLink: defaultPhotoLink,
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
      toast({ title: "Sign up failed", variant: "destructive" });
      throw new Error("Sign up failed");
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
      const response = await getUserByStudentId({ variables: { studentId } });
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
          threeDPId: user?.threeDPId,
          laserCutAvailable: user.laserCutAvailable,
          borrowHistoryId: user?.borrowHistoryId,
          articlesId: user?.articlesId,
          isAdmin: user.isAdmin,
          isMinister: user.isMinister,
          toolLikeIds: user?.toolLikeIds,
        });
        toast({
          title:
            (user.isMinister ? "Minister" : user.isAdmin ? "Admin" : "User") +
            " login successfully!",
        });
        navigate("/");
      }
    } catch (error) {
      toast({ title: `${error}`, variant: "destructive" });
      throw new Error(`${error}`);
    }
  };

  const logout = () => {
    setUser(null);
    toast({ title: "Log out successfully!" });
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
