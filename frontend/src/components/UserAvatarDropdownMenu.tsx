import { LogOut, UserRound, History, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";

function UserAvatarDropdownMenu({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { logout } = useUser();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black bg-opacity-90 border border-white text-white"
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/UserProfilePage")}>
          <UserRound className="mr-2 h-4 w-4" />
          <span>Profile</span>
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
          <span>Notifications</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate("/BorrowHistoryPage")}>
          <History className="mr-2 h-4 w-4" />
          <span>Borrow history</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatarDropdownMenu;
