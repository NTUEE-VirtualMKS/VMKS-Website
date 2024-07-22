import { NavButtonProps } from "@/shared/type";

function IconButton({ onClick, Icon, ariaLabel }: NavButtonProps) {
  return (
    <button
      className="flex flex-col justify-center items-center w-12 h-12 rounded-full border border-white bg-zinc-300 bg-opacity-20 transform active:scale-90 transition-transform duration-200"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon className="text-white" />
    </button>
  );
}

export default IconButton;
