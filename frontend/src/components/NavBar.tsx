import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 m-3 flex flex-row justify-between ">
      <div className="flex items-start gap-[15px]">
        <button
          className="flex flex-col justify-center items-center w-[45px] h-[45px] rounded-full border border-white"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon sx={{ color: "white" }} />
        </button>
        <button
          className="flex flex-col justify-center items-center w-[45px] h-[45px]  rounded-full border border-white"
          onClick={() => navigate(1)}
        >
          <ChevronRightIcon sx={{ color: "white" }} />
        </button>
      </div>
      <div className="flex items-start gap-[15px]">
        <div className="w-[104px] h-[50px] relative">
          <button className="flex flex-col justify-center items-center w-[104px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white">
            <div
              className="flex flex-col justify-center items-center w-[38px] h-[23px] left-[34px] top-[13px] absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide"
              onClick={() => navigate("MapPage")}
            >
              map
            </div>
          </button>
        </div>
        <div className="w-[104px] h-[50px] relative">
          <button className=" flex flex-col justify-center items-center w-[104px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-[40px] border border-white">
            <div
              className="flex flex-col justify-center items-center w-[38px] h-[23px] left-[34px] top-[13px] absolute text-white text-sm font-medium font-['Inter'] uppercase leading-[16.96px] tracking-wide"
              onClick={() => navigate("/advanced/forum")}
            >
              Forum
            </div>
          </button>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <button
            className="flex flex-col justify-center items-center w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white"
            onClick={() => navigate("ShoppingList")}
          >
            <ShoppingCartRoundedIcon sx={{ color: "white" }} />
          </button>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <button
            className=" flex flex-col justify-center items-center  w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white"
            onClick={() => navigate("UserProfilePage")}
          >
            <PersonIcon sx={{ color: "white" }} />
          </button>
          {/* <div className="w-11 h-11 left-[3px] top-[1px] absolute" /> */}
        </div>
        <div className="w-[50px] h-[50px] relative">
          <button
            className="flex flex-col justify-center items-center  w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full border border-white"
            onClick={() => navigate("TutorialPage")}
          >
            <QuestionMarkIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
