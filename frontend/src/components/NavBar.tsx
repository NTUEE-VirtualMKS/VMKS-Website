import { useNavigate } from "react-router-dom";
import {
  UserRound,
  ChevronLeftIcon,
  ChevronRightIcon,
  ShoppingCart,
  Info,
} from "lucide-react";
import NavButton from "./NavButton";
import { useUser } from "@/context/UserContext";
import { Button } from "./ui/button";

function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  return (
    <nav className="flex-1 m-3 flex flex-row justify-between bg-black">
      <div className="flex items-start gap-4">
        <NavButton
          onClick={() => navigate(-1)}
          Icon={ChevronLeftIcon}
          ariaLabel="Go Back"
        />
        <NavButton
          onClick={() => navigate(1)}
          Icon={ChevronRightIcon}
          ariaLabel="Go Fprward"
        />
      </div>
      <div className="flex items-start gap-[15px]">
        {user?.isMinister && (
          <div className="w-28 h-12 relative">
            <button className="flex flex-col justify-center items-center w-28 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white transform active:scale-90 transition-transform duration-200">
              <div
                className="flex flex-col justify-center items-center w-9 h-6 top-3 absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide "
                onClick={() => navigate("/AuthorizedCodePage")}
              >
                Authorized Code
              </div>
            </button>
          </div>
        )}
        {/* TODO: optimize the following code just like the above one */}
        <div className="w-28 h-12 relative">
          <button className="flex flex-col justify-center items-center w-28 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white transform active:scale-90 transition-transform duration-200">
            <div
              className="flex flex-col justify-center items-center w-9 h-6 left-9 top-3 absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide "
              onClick={() => navigate("/MapPage")}
            >
              Map
            </div>
          </button>
        </div>
        <div className="w-28 h-12 relative">
          <button className=" flex flex-col justify-center items-center w-28 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white transform active:scale-90 transition-transform duration-200">
            <div
              className="flex flex-col justify-center items-center w-9 h-6 left-9 top-3 absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide"
              onClick={() => navigate("/advanced/forum")}
            >
              Forum
            </div>
          </button>
        </div>
        <div className="w-12 h-12 relative">
          <button
            className="flex flex-col justify-center items-center w-12 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white transform active:scale-90 transition-transform duration-200"
            onClick={() => navigate("/ShoppingList")}
          >
            <ShoppingCart className="text-white" />
          </button>
        </div>
        <div className="w-12 h-12 relative">
          <button
            className=" flex flex-col justify-center items-center  w-12 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white transform active:scale-90 transition-transform duration-200"
            onClick={() => navigate("/UserProfilePage")}
          >
            <UserRound className="text-white" />
          </button>
        </div>
        <div className="w-12 h-12 relative">
          <button
            className="flex flex-col justify-center items-center  w-12 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white transform active:scale-90 transition-transform duration-200"
            onClick={() => navigate("/TutorialPage")}
          >
            <Info className="text-white" />
          </button>
        </div>
        <div className="mt-0.5">
          {!user ? (
            <Button
              onClick={() => navigate("/Login")}
              size="lg"
              className=" text-md bg-zinc-300 bg-opacity-20 rounded-3xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
            >
              Log in
            </Button>
          ) : (
            <Button
              onClick={logout}
              size="lg"
              className=" text-md bg-zinc-300 bg-opacity-20 rounded-3xl font-bold text-white border border-white transform active:scale-95 transition-transform duration-200"
            >
              Log out
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
