import { useUser } from "@/context/UserContext";
import ProfileCard from "@/components/ProfileCard";

function UserProfilePage() {
  const { user } = useUser();
  return (
    <section className="flex flex-col w-10/12 mx-auto justify-start mt-24">
      <h1 className="font-bold p-1 text-white">User Profile</h1>
      <div className="flex flex-row gap-x-5">
        <ProfileCard
          name={user?.name!}
          studenetID={user?.studentID!}
          password={user?.password!}
          photoLink={user?.photoLink!}
          laserCutAvailable={user?.laserCutAvailable!}
          isAdmin={user?.isAdmin!}
          isMinister={user?.isMinister!}
        />
      </div>
    </section>
  );
}

export default UserProfilePage;
