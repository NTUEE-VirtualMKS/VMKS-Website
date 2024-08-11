import { useNavigate } from "react-router-dom";
import {
  UserRound,
  Bell,
  Info,
  Globe,
  NotebookPen,
  KeyRound,
  Database,
} from "lucide-react";
import IconButton from "./IconButton";
import { useUser } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import UserAvatarDropdownMenu from "./UserAvatarDropdownMenu";
import { useWindow } from "@/contexts/WindowContext";
import useNetworkStatus from "@/hooks/useNetworkStatus";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

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
        "flex-1 px-3 flex flex-row justify-between bg-black bg-opacity-95 fixed top-0 w-full border-b border-[#444444]",
        windowWidth > 600 ? "py-0.5" : "py-2"
      )}
    >
      <>
        <div className="flex items-center gap-2">
          <img
            src="/logo-2.png"
            className="w-9 object-cover cursor-pointer aspect-square"
            alt="logo"
            onClick={() => navigate("/")}
          />
          {windowWidth > 600 && (
            <p
              className="text-4xl text-white font-bold cursor-pointer"
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
              onClick={() => navigate("/AllUsersBorrowingDataPage")}
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
            <div className="relative inline-block">
              <IconButton
                onClick={() => navigate("/MessagePage")}
                Icon={Bell}
                ariaLabel={t("notifications")}
              />
              <span className="absolute -top-[0.2rem] -right-[0.2rem] flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400 ml-[0.075rem] mt-[0.075rem]"></span>
              </span>
            </div>
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
                <Tooltip>
                  <UserAvatarDropdownMenu>
                    <TooltipTrigger>
                      <img
                        src={imgUrl}
                        className="rounded-full w-11 h-11 aspect-square transform active:scale-90 transition-transform duration-200 cursor-pointer bg-[#1f1f1f]"
                        alt="avatar"
                      />
                    </TooltipTrigger>
                  </UserAvatarDropdownMenu>
                  <TooltipContent className="bg-black bg-opacity-80">
                    <p className="text-white text-xs">{t("myAccount")}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </>
          )}
        </div>
      </>
    </nav>
  );
}

export default NavBar;
