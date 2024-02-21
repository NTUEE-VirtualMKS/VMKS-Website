import { createContext, useContext, useState, useCallback } from "react";
// import { env } from "../env";
import { useLazyQuery } from "@apollo/client";
import { ALL_USER_QUERY } from "../graphql";
import type { UserType } from "../shared/type.ts";

export type UserContextType = {
  user: UserType | null;
  fetchUser: () => Promise<void>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  fetchUser: async () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [getUsers] = useLazyQuery(ALL_USER_QUERY);

  const fetchUser = useCallback(async () => {
    const { data } = await getUsers();

    if (!data?.AllUser) {
      return console.error("No user found");
    }
    const [findUser] = data.AllUser.filter((e) => e?.id === 1); // incorrect
    if (!findUser) {
      return console.error("No user found");
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
    }
  }, [getUsers]);

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
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
