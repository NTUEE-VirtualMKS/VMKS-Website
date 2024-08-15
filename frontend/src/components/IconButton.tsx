import { NavButtonProps } from "@/shared/type";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function IconButton({ onClick, Icon, ariaLabel }: NavButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        className="flex flex-col justify-center items-center w-11 h-11 rounded-full aspect-square bg-zinc-300 dark:bg-opacity-20  bg-opacity-40 dark:hover:bg-opacity-30 hover:bg-opacity-70 transform active:scale-90 transition-transform duration-200"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <Icon className="dark:text-white" />
      </TooltipTrigger>
      <TooltipContent
        className="dark:bg-gray-500 bg-black dark:bg-opacity-95 bg-opacity-70"
        side="bottom"
      >
        <p className="text-white text-xs">{ariaLabel}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default IconButton;
