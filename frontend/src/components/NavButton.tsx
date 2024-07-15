import { NavButtonProps } from "@/shared/type";

function NavButton({ onClick, Icon, ariaLabel }: NavButtonProps) {
  return (
    <button
      className="flex flex-col justify-center items-center w-11 h-11 rounded-full border border-white transform active:scale-90 transition-transform duration-200"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <Icon className="text-white" />
    </button>
  );
}

export default NavButton;
