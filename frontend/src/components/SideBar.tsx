import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useNavigate } from "react-router-dom";
export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="w-[231px] left-[1151px] top-[929px] absolute text-white text-opacity-70 text-sm font-normal font-['Poppins'] leading-tight">copyright © virtual makerspace️</div>  */}
      <div className="w-20 h-full left-0 top-0 fixed bg-slate-900 rounded-2xl border border-zinc-600 flex flex-col">
        <button onClick={() => navigate("")}>
          <img
            className="w-full h-[107px] object-cover"
            src="/logo.png"
            alt="Placeholder"
          />
        </button>
        <div className="h-px bg-zinc-600" />
        <div className="w-full flex flex-col justify-center items-center p-2">
          <FavoriteBorderOutlinedIcon className="w-5 h-5 text-white" />
          <div className="flex-wrap px-1 text-white text-xs font-medium font-inter uppercase tracking-wide">
            LIKE
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <button className="w-full flex flex-col justify-center items-center p-1">
            <img
              className="w-full object-cover"
              src="https://via.placeholder.com/60x60"
              alt="Placeholder"
            />
          </button>
          <button className="w-full flex flex-col justify-center items-center p-1">
            <img
              className="w-full object-cover"
              src="https://via.placeholder.com/60x60"
              alt="Placeholder"
            />
          </button>
          <button className="w-full flex flex-col justify-center items-center p-1">
            <img
              className="w-full object-cover"
              src="https://via.placeholder.com/60x60"
              alt="Placeholder"
            />
          </button>
        </div>
        {/* <div className="h-px bg-zinc-600" />
            <div className="px-6 py-4 bg-gray-800 rounded-bl-2xl rounded-br-2xl flex flex-col gap-2">
                <div className="w-1/4 h-9 relative">
                <div className="w-full h-8 bg-gray-900 rounded-2xl" />
                <div className="w-7 h-7 absolute bg-zinc-600 rounded-full shadow" style={{ left: '22px', top: '4px' }} />
                </div>
            </div> */}
        {/* <div className="p-1.5 left-[71px] top-[59px] absolute bg-gray-900 rounded-lg border border-zinc-600 justify-start items-start gap-2 inline-flex">
                <div className="w-4 h-4 relative" />
            </div> */}
        <button className="w-full flex flex-col justify-center items-center p-2">
          <AddCircleOutlineRoundedIcon className="w-5 h-5 text-white" />
          <div className="flex-wrap px-1 text-white text-xs font-medium font-inter uppercase tracking-wide">
            ADD
          </div>
        </button>
      </div>
    </>
  );
};
