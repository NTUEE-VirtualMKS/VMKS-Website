import { LogOut, UserRound, History, ShoppingCart } from "lucide-react";
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
        align="center"
        className="bg-black bg-opacity-90 border border-[#444444] text-white mt-1.5"
      >
        <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigate(`/UserProfilePage/${user?.id}`)}
        >
          <UserRound className="mr-2 h-4 w-4" />
          <span>{t("profile")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/ShoppingCartPage")}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          <span>{t("shoppingCart")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem onClick={() => navigate("/SettingsPage")}>
          <Settings className="mr-2 h-4 w-4" />
          <span>{t("settings")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />*/}
        <DropdownMenuItem onClick={() => navigate("/BorrowHistoryPage")}>
          <History className="mr-2 h-4 w-4" />
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
              <Label htmlFor="en">English</Label>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RadioGroupItem
                value="zh"
                id="zh"
                className="w-3 h-3 mr-2"
                onClick={() => changeLanguage("zh")}
              />
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
