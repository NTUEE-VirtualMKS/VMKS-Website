import { NavButtonProps } from "@/shared/type";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function IconButton({ onClick, Icon, ariaLabel }: NavButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        className="flex flex-col justify-center items-center w-12 h-12 rounded-full aspect-square  bg-zinc-300 bg-opacity-15 hover:bg-opacity-30 transform active:scale-90 transition-transform duration-200"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <Icon className="text-white" />
      </TooltipTrigger>
      <TooltipContent className="bg-black bg-opacity-80">
        <p className="text-white text-xs">{ariaLabel}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default IconButton;
