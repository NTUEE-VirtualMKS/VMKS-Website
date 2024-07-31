import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import { TooltipContent } from "./ui/tooltip";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { user, handleEditLanguage } = useUser();

  const changeLanguage = (lng: string) => {
    if (user) {
      handleEditLanguage({ language: lng });
    }
    i18n.changeLanguage(lng);
  };

  return (
    <Tooltip>
      <DropdownMenu>
        <TooltipTrigger>
          <div className="flex flex-col justify-center items-center w-12 h-12 rounded-full aspect-square bg-zinc-300 bg-opacity-15 hover:bg-opacity-30 transform active:scale-90 transition-transform duration-200 hover:cursor-pointer">
            <DropdownMenuTrigger asChild>
              <Languages className="text-white w-12 h-12 aspect-square p-2.5" />
            </DropdownMenuTrigger>
          </div>
        </TooltipTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-black bg-opacity-90 border border-white text-white"
        >
          <DropdownMenuLabel>{t("languages")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => changeLanguage("en")}>
            <span>English (United States)</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => changeLanguage("zh")}>
            <span>中文 (繁體)</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent className="bg-black bg-opacity-80">
        <p className="text-white text-xs">{t("languages")}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default LanguageSwitcher;
