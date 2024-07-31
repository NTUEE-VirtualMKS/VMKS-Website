import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "@/contexts/UserContext";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_BY_STUDENT_ID_QUERY } from "@/graphql/queries";

const useUserLanguage = () => {
  const { i18n } = useTranslation();
  const { user, setUser } = useUser();
  const [getUserByStudentId, { data }] = useLazyQuery(
    GET_USER_BY_STUDENT_ID_QUERY,
    {
      fetchPolicy: "network-only",
    }
  );

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        getUserByStudentId({ variables: { studentId: parsedUser?.studentId } });
      }
    } else {
      i18n.changeLanguage(user.language);
    }
  }, [user, i18n, getUserByStudentId]);

  useEffect(() => {
    if (data?.GetUserByStudentID) {
      const userData = data.GetUserByStudentID;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      i18n.changeLanguage(userData.language);
    }
  }, [data, setUser, i18n]);
};

export default useUserLanguage;
