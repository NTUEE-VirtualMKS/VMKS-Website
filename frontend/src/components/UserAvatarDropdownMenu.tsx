// TODO: optional: settings page
import {
  LogOut,
  UserRound,
  History,
  ShoppingCart,
  MessageSquareWarning,
} from "lucide-react";
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
    } else {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    }
  };

  const handleLogout = () => {
    logout({ redirect: true });
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        sideOffset={5}
        className="dark:bg-[#2c2c2c] dark:border dark:border-[#444444] dark:text-white w-48"
      >
        <DropdownMenuLabel className="text-base">
          {t("myAccount")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-base"
          onClick={() => navigate(`/UserProfilePage`)}
        >
          <UserRound className="mr-2 h-5 w-5" />
          <span>{t("profile")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5" />
          <span>{t("logout")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-base"
          onClick={() => navigate("/ShoppingCartPage")}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          <span>{t("shoppingCart")}</span>
        </DropdownMenuItem>
        {/* <DropdownMenuItem className="text-base" onClick={() => navigate("/SettingsPage")}>
          <Settings className="mr-2 h-5 w-5" />
          <span>{t("settings")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />*/}
        <DropdownMenuItem
          className="text-base"
          onClick={() => navigate("/BorrowHistoryPage")}
        >
          <History className="mr-2 h-5 w-5" />
          <span>{t("borrowHistory")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {windowWidth < 446 && (
          <RadioGroup defaultValue={i18n.language}>
            <DropdownMenuItem>
              <RadioGroupItem
                value="en"
                id="en"
                className="w-3 h-3 mr-2"
                onClick={() => changeLanguage("en")}
              />
              <Label htmlFor="en" className="text-base">
                English
              </Label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RadioGroupItem
                value="zh"
                id="zh"
                className="w-3 h-3 mr-2"
                onClick={() => changeLanguage("zh")}
              />
              <Label htmlFor="zh" className="text-base">
                中文 (繁體)
              </Label>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </RadioGroup>
        )}
        <DropdownMenuItem className="text-base">
          <MessageSquareWarning className="mr-2 h-5 w-5" />
          <span>
            <a
              href="https://github.com/NTUEE-VirtualMKS/VMKS-Website/issues/new/choose"
              target="_blank"
              rel="noreferrer"
            >
              {t("feedback")}
            </a>
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatarDropdownMenu;
