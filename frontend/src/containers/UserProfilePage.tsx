// TODO: implement UserProfilePage
import { useUser } from "@/context/userContext";
import { Button } from "@/components/ui/button";

function UserProfilePage() {
  const { user, signIn, logOut } = useUser();
  return (
    <div className="mt-20">
      {user ? (
        <Button
          onClick={logOut}
          className="m-3 text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
        >
          Log out
        </Button>
      ) : (
        <Button
          onClick={signIn}
          className="m-3 text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
        >
          Sign in
        </Button>
      )}
    </div>
  );
}

export default UserProfilePage;
