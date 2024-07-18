// TODO: solve the incorrect user id problem
import { createContext, useContext, useState, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { ALL_USER_QUERY } from "@/graphql";
import type { UserType } from "@/shared/type.ts";
import { useToast } from "@/components/ui/use-toast";

export type UserContextType = {
  user: UserType | null;
  signIn: () => Promise<void>;
  logOut: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  signIn: async () => {},
  logOut: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const { toast } = useToast();
  // const [getUsers] = useLazyQuery(ALL_USER_QUERY);
  const {
    data,
    loading: usersLoading,
    error: usersError,
  } = useQuery(ALL_USER_QUERY);
  const signIn = useCallback(async () => {
    // const { data } = await getUsers();
    if (usersLoading) {
      toast({ title: "Loading..." });
    }
    if (usersError) {
      toast({ title: `${usersError.message}`, variant: "destructive" });
      throw new Error(usersError.message);
    }
    if (!data?.AllUser) {
      toast({ title: "No user found", variant: "destructive" });
      throw new Error("No user found");
    }
    const [findUser] = data.AllUser.filter((e) => e?.id === 1); // incorrect
    if (!findUser) {
      toast({ title: "User not found", variant: "destructive" });
      throw new Error("User not found");
    } else {
      setUser({
        id: findUser.id,
        name: findUser.name,
        studentID: findUser.studentID,
        password: findUser.password,
        // photoLink: findUser?.photoLink,
        // threeDPId: findUser?.threeDPId,
        laserCutAvailable: findUser.laserCutAvailable,
        // borrowHistoryId: findUser?.borrowHistoryId,
        // articlesId: findUser?.articlesId,
        isAdmin: findUser.isAdmin,
        isMinister: findUser.isMinister,
      });
      toast({ title: "Sign in successfully!" });
    }
  }, [toast, usersError, usersLoading, data]);

  const logOut = () => {
    setUser(null);
    toast({ title: "Log out successfully!" });
  };

  return (
    <UserContext.Provider value={{ user, signIn, logOut }}>
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
