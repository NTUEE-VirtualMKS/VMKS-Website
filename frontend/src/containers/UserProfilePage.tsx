import { useUser } from "@/contexts/UserContext";
import ProfileCard from "@/components/ProfileCard";
import { useTranslation } from "react-i18next";
import { UserRound } from "lucide-react";
import { useParams } from "react-router-dom";

function UserProfilePage() {
  const { user } = useUser();
  const { id } = useParams();
  const { t } = useTranslation();
  return (
    <section className="flex flex-col w-10/12 mx-auto justify-start mt-20">
      <h1 className="dark:text-white p-1 flex flex-row items-center gap-2">
        <UserRound className="dark:text-white" size={35} />
        {t("userProfile")}
      </h1>
      <div className="flex flex-row gap-x-5">
        <ProfileCard
          id={id!}
          name={user?.name!}
          studentID={user?.studentID!}
          password={user?.password!}
          language={user?.language!}
          photoLink={user?.photoLink!}
          laserCutAvailable={user?.laserCutAvailable!}
          isAdmin={user?.isAdmin!}
          isMinister={user?.isMinister!}
        />
      </div>
    </section>
  );
}

export { UserProfilePage };
