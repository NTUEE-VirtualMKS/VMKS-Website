import { LogOut, UserRound, History, Bell, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import { useTranslation } from "react-i18next";
import { useWindow } from "@/contexts/WindowContext";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function UserAvatarDropdownMenu({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { logout, user, handleEditLanguage } = useUser();
  const { windowWidth } = useWindow();
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (user) {
      handleEditLanguage({ language: lng });
    }
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    logout({ redirect: true });
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="bg-black bg-opacity-90 border border-white text-white mt-1.5"
      >
        <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/UserProfilePage")}>
          <UserRound className="mr-2 h-4 w-4" />
          <span>{t("profile")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/SettingsPage")}>
          <Settings className="mr-2 h-4 w-4" />
          <span>{t("settings")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/MessagePage")}>
          <div className="relative inline-block">
            <Bell className="mr-2 h-4 w-4" />
            <span className="absolute -top-[0.20rem] right-[0.48rem] flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-400 ml-[0.075rem] mt-[0.075rem]"></span>
            </span>
          </div>
          <span>{t("notifications")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/BorrowHistoryPage")}>
          <History className="mr-2 h-4 w-4" />
          <span>{t("borrowHistory")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {windowWidth < 601 && (
          <RadioGroup defaultValue={i18n.language}>
            <DropdownMenuItem onClick={() => changeLanguage("en")}>
              <RadioGroupItem value="en" id="en" className="w-3 h-3 mr-2" />
              <Label htmlFor="en">English</Label>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => changeLanguage("zh")}>
              <RadioGroupItem value="zh" id="zh" className="w-3 h-3 mr-2" />
              <Label htmlFor="zh">中文 (繁體)</Label>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </RadioGroup>
        )}
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatarDropdownMenu;
