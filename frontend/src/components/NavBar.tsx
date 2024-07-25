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
import { TooltipProvider } from "@/components/ui/tooltip";

function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex-1 px-5 py-1 flex flex-row justify-between bg-slate-900 border-b border-[#444444]">
      <TooltipProvider>
        <div className="flex items-center gap-4">
          <img
            src="/logo-2.png"
            className="w-12 object-cover mb-1 cursor-pointer"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <p
            className="text-5xl text-white font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            VMKS
          </p>

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
        <div className="flex items-center gap-3">
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
                onClick={() => navigate("/ShoppingCartPage")}
                Icon={ShoppingCart}
                ariaLabel="Shopping Cart"
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
                className="w-20 h-12 text-md bg-zinc-300 bg-opacity-15 hover:bg-opacity-30 rounded-3xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
              >
                Log in
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="w-20 h-12 text-md bg-zinc-300 bg-opacity-15 hover:bg-opacity-30 rounded-3xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
              >
                Log out
              </button>
            )}
          </>
        </div>
      </TooltipProvider>
    </nav>
  );
}

export default NavBar;
