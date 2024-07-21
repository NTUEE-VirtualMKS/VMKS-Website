// TODO: jwt token
import { createContext, useContext, useState } from "react";
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
  login: ({ studentID, password }: LoginProps) => Promise<void>;
  signup: ({ name, studentID, password }: SignupProps) => Promise<void>;
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
  const [user, setUser] = useState<UserType | null>(null);
  const { toast } = useToast();
  const [createUser, { loading: createUserLoading, error: createUserError }] =
    useMutation(ADD_USER_MUTATION, {
      refetchQueries: [{ query: ALL_USER_QUERY }],
    });

  const signup = async ({ name, studentID, password }: SignupProps) => {
    try {
      await createUser({
        variables: {
          userInput: {
            name,
            studentID,
            password,
            photoLink: "https://http.cat/200",
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
    } catch (error) {
      toast({ title: "Sign up failed", variant: "destructive" });
      throw new Error("Sign up failed");
    }
  };

  const [
    getUserByStudentId,
    { loading: getUserByStudentIdLoading, error: getUserByStudentIdError },
  ] = useLazyQuery(GET_USER_BY_STUDENT_ID_QUERY);

  const login = async ({ studentID, password }: LoginProps) => {
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
      const response = await getUserByStudentId({ variables: { studentID } });
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
        });
        toast({
          title: user.isAdmin
            ? "Admin login successfully!"
            : "User login successfully!",
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
