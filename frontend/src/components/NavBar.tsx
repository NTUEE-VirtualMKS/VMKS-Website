import { useNavigate } from "react-router-dom";
import {
  UserRound,
  ShoppingCart,
  Info,
  Globe,
  NotebookPen,
  KeyRound,
  Database,
} from "lucide-react";
import IconButton from "./IconButton";
import { useUser } from "@/context/UserContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import UserAvatarDropdownMenu from "./UserAvatarDropdownMenu";
import { useWindow } from "@/context/WindowContext";
import useNetworkStatus from "@/hooks/useNetworkStatus";

function NavBar() {
  const navigate = useNavigate();
  const { isOnline } = useNetworkStatus();
  const { user } = useUser();
  const { windowWidth } = useWindow();
  const [imgUrl, setImgUrl] = useState<string>(() => {
    const storedImgUrl = localStorage.getItem("imgUrl");
    if (storedImgUrl) return JSON.parse(storedImgUrl);
    else return `${user?.photoLink}`;
  });

  useEffect(() => {
    const storedImgUrl = localStorage.getItem("imgUrl");
    if (storedImgUrl) setImgUrl(JSON.parse(storedImgUrl));
    else setImgUrl(`${user?.photoLink}`);
  }, []);

  return (
    <nav
      className={cn(
        "flex-1 px-5 flex flex-row justify-between bg-slate-900",
        windowWidth > 630 ? "py-1" : "py-3.5"
      )}
    >
      <TooltipProvider>
        <div className="flex items-center gap-4">
          <img
            src="/logo-2.png"
            className="w-12 object-cover mb-1 cursor-pointer aspect-square "
            alt="logo"
            onClick={() => navigate("/")}
          />

          {windowWidth > 630 && (
            <p
              className="text-5xl text-white font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              VMKS
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {user?.isMinister && windowWidth > 820 && (
            <IconButton
              onClick={() => navigate("/AuthorizedCodePage")}
              Icon={KeyRound}
              ariaLabel="Authorized Code"
            />
          )}
          {user?.isAdmin && windowWidth > 820 && (
            <IconButton
              onClick={() => navigate("/UsersBorrowingPage")}
              Icon={Database}
              ariaLabel="User Borrowing Data"
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
            <IconButton
              onClick={() => navigate("/ShoppingCartPage")}
              Icon={ShoppingCart}
              ariaLabel="Shopping Cart"
            />
          )}
          {isOnline && (
            <>
              {user === null ? (
                <IconButton
                  onClick={() => navigate("/Login")}
                  Icon={UserRound}
                  ariaLabel="Login"
                />
              ) : (
                <UserAvatarDropdownMenu>
                  <img
                    src={imgUrl}
                    className="rounded-full w-11 h-11 aspect-square transform active:scale-90 transition-transform duration-200 cursor-pointer bg-[#444444]"
                    alt="avatar"
                  />
                </UserAvatarDropdownMenu>
              )}
            </>
          )}
        </div>
      </TooltipProvider>
    </nav>
  );
}

export default NavBar;
