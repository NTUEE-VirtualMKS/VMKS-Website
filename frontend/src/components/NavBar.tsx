import { useNavigate } from "react-router-dom";
import {
  UserRound,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShoppingCart,
  Info,
  Globe,
  NotebookPen,
  KeyRound,
} from "lucide-react";
import IconButton from "./IconButton";
import { useUser } from "@/context/UserContext";

function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex-1 m-3 flex flex-row justify-between bg-black">
      <div className="flex items-start gap-4">
        <IconButton
          onClick={() => navigate(-1)}
          Icon={ChevronLeftIcon}
          ariaLabel="Go Back"
        />
        <IconButton
          onClick={() => navigate(1)}
          Icon={ChevronRightIcon}
          ariaLabel="Go Forward"
        />
      </div>
      <div className="flex items-start gap-3">
        {user?.isMinister && (
          <IconButton
            onClick={() => navigate("/AuthorizedCodePage")}
            Icon={KeyRound}
            ariaLabel="Authorized Code"
          />
        )}
        <IconButton
          onClick={() => navigate("/MapPage")}
          Icon={Globe}
          ariaLabel="Map"
        />
        <IconButton
          onClick={() => navigate("/advanced/forum")}
          Icon={NotebookPen}
          ariaLabel="Forum"
        />
        <IconButton
          onClick={() => navigate("/TutorialPage")}
          Icon={Info}
          ariaLabel="Info"
        />
        {user && (
          <>
            <IconButton
              onClick={() => navigate("/ShoppingList")}
              Icon={ShoppingCart}
              ariaLabel="Shopping List"
            />
            <IconButton
              onClick={() => navigate("/UserProfilePage")}
              Icon={UserRound}
              ariaLabel="User Profile"
            />
          </>
        )}
        <>
          {!user ? (
            <button
              onClick={() => navigate("/Login")}
              className="w-20 h-12 text-md bg-zinc-300 bg-opacity-20 rounded-3xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
            >
              Log in
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="w-20 h-12 text-md bg-zinc-300 bg-opacity-20 rounded-3xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
            >
              Log out
            </button>
          )}
        </>
      </div>
    </nav>
  );
}

export default NavBar;
