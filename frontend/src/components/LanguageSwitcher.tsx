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
import { useUser } from "@/contexts/UserContext";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import { TooltipContent } from "./ui/tooltip";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const { user, handleEditLanguage } = useUser();

  const changeLanguage = (lng: string) => {
    if (user) {
      handleEditLanguage({ language: lng });
    } else {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    }
  };

  return (
    <Tooltip>
      <RadioGroup defaultValue={i18n.language}>
        <DropdownMenu>
          <TooltipTrigger>
            <div className="flex flex-col justify-center items-center w-11 h-11 rounded-full aspect-square bg-zinc-300 bg-opacity-20 hover:bg-opacity-30 transform active:scale-90 transition-transform duration-200 hover:cursor-pointer">
              <DropdownMenuTrigger asChild>
                <Languages className="text-white w-11 h-11 aspect-square p-2.5" />
              </DropdownMenuTrigger>
            </div>
          </TooltipTrigger>
          <DropdownMenuContent
            align="center"
            className="bg-black text-white mt-2.5"
          >
            <DropdownMenuLabel>{t("languages")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RadioGroupItem
                value="en"
                id="en"
                className="w-3 h-3 mr-2"
                onClick={() => changeLanguage("en")}
              />
              <Label htmlFor="en">English (United States)</Label>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </RadioGroup>
      <TooltipContent className="bg-black bg-opacity-80">
        <p className="text-white text-xs">{t("languages")}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default LanguageSwitcher;
