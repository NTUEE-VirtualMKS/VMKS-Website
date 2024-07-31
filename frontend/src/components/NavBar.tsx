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
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import UserAvatarDropdownMenu from "./UserAvatarDropdownMenu";
import { useWindow } from "@/context/WindowContext";
import useNetworkStatus from "@/hooks/useNetworkStatus";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function NavBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isOnline } = useNetworkStatus();
  const { user, setPushToLoginPage } = useUser();
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

  const handlePushToLoginPage = () => {
    setPushToLoginPage(true);
    navigate("/login");
  };

  return (
    <nav
      className={cn(
        "flex-1 px-5 flex flex-row justify-between bg-slate-900",
        windowWidth > 600 ? "py-1" : "py-3.5"
      )}
    >
      <>
        <div className="flex items-center gap-4">
          <img
            src="/logo-2.png"
            className="w-12 object-cover mb-1 cursor-pointer aspect-square "
            alt="logo"
            onClick={() => navigate("/")}
          />

          {windowWidth > 600 && (
            <p
              className="text-5xl text-white font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              VMKS
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {windowWidth > 446 && <LanguageSwitcher />}
          {user?.isMinister && windowWidth > 720 && (
            <IconButton
              onClick={() => navigate("/AuthorizedCodePage")}
              Icon={KeyRound}
              ariaLabel={t("authorizedCode")}
            />
          )}
          {user?.isAdmin && windowWidth > 720 && (
            <IconButton
              onClick={() => navigate("/UsersBorrowingPage")}
              Icon={Database}
              ariaLabel={t("usersBorrowingData")}
            />
          )}
          <IconButton
            onClick={() => navigate("/MapPage")}
            Icon={Globe}
            ariaLabel={t("map")}
          />
          <IconButton
            onClick={() => navigate("/advanced/forum")}
            Icon={NotebookPen}
            ariaLabel={t("forum")}
          />
          <IconButton
            onClick={() => navigate("/TutorialPage")}
            Icon={Info}
            ariaLabel={t("info")}
          />
          {user && (
            <IconButton
              onClick={() => navigate("/ShoppingCartPage")}
              Icon={ShoppingCart}
              ariaLabel={t("shoppingCart")}
            />
          )}
          {isOnline && (
            <>
              {user === null ? (
                <IconButton
                  onClick={handlePushToLoginPage}
                  Icon={UserRound}
                  ariaLabel={t("login")}
                />
              ) : (
                <UserAvatarDropdownMenu>
                  <div className="relative inline-block">
                    <img
                      src={imgUrl}
                      className="rounded-full w-11 h-11 aspect-square transform active:scale-90 transition-transform duration-200 cursor-pointer bg-[#444444]"
                      alt="avatar"
                    />
                    <span className="absolute -top-[0.2rem] -right-[0.2rem] flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400 ml-[0.075rem] mt-[0.075rem]"></span>
                    </span>
                  </div>
                </UserAvatarDropdownMenu>
              )}
            </>
          )}
        </div>
      </>
    </nav>
  );
}

export default NavBar;
