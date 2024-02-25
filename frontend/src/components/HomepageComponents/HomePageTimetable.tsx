import { useNavigate } from "react-router-dom";

export const HomePageTimetable = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col grow py-5 mx-auto w-full font-semibold border border-blue-600 border-solid bg-black bg-opacity-50 rounded-[30px] max-md:mt-6">
        <div className="flex flex-col px-5 max-md:pl-5">
          <div className="text-2xl text-white">今日管理員班表 📅 </div>
          <button
            className="self-end mt-1.5 text-sm text-right whitespace-nowrap text-white text-opacity-50"
            onClick={() => navigate("IntroductionPage")}
          >
            See all
          </button>
        </div>
        <div className="flex m-5 gap-5 justify-between self-center py-3.5 pr-14 pl-2.5 mt-3 w-64 max-w-full text-white whitespace-nowrap rounded-xl border border-solid border-slate-100 bg-black bg-opacity-50 border-blue-700 border-opacity-80 max-md:pr-5">
          <div className="flex flex-col self-start text-xs">
            <div className="self-center text-xs">時段</div>
            <div className="mt-8">09:00-12:00</div>
            <div className="mt-6">13:00-16:00(A)</div>
            <div className="mt-6">13:00-16:00(B)</div>
            <div className="mt-6">18:00-21:00</div>
          </div>
          <div className="flex flex-col text-sm">
            <div className="text-xs">值班者</div>
            <div className="mt-6">吳柏均Ａ</div>
            <div className="mt-5">吳柏均Ｂ</div>
            <div className="mt-6">吳柏均Ｃ</div>
            <div className="mt-5">吳柏均Ｄ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
