// TODO: connect timetable with backend
import { timetable } from "@/constants/index";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "lucide-react";

function HomePageTimetable() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col grow py-5 mx-auto w-full font-semibold bg-[#202020] border border-[#444444] bg-opacity-50 rounded-[30px] max-md:mt-6 ">
        <div className="flex flex-col px-5 max-md:pl-5">
          <div className="text-2xl text-white flex flex-row items-center gap-2 font-semibold">
            <Calendar size={28} /> {t("todayAdminSchedule")}
          </div>
          <button
            className="self-end mt-1.5 text-sm text-right whitespace-nowrap text-white text-opacity-50 transform active:scale-90 transition-transform duration-200 font-semibold"
            onClick={() => navigate("/IntroductionPage")}
          >
            {t("seeAll")}
          </button>
        </div>
        <div className="flex m-5 justify-between self-center py-3.5 pr-14 pl-2.5 mt-3 w-64 max-w-full text-white whitespace-nowrap rounded-xl border border-[#444444] bg-[#303030] bg-opacity-50 hover:bg-opacity-70 max-md:pr-5 transform active:scale-95 transition-transform duration-200 cursor-pointer">
          <div className="flex flex-col self-start text-xs">
            <h1 className="self-center text-sm select-none">
              {t("timePeriod")}
            </h1>
            <div className="flex flex-col justify-center gap-7 my-5 ml-3">
              {timetable.map(({ time }) => (
                <div key={time} className="select-none">
                  {time}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col self-start text-xs">
            <h1 className="self-center text-sm select-none">
              {t("OnDutyAdmin")}
            </h1>
            <div className="flex flex-col justify-center gap-7 my-5 ml-3">
              {timetable.map(({ name }, index) => (
                <div key={index} className="select-none">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageTimetable;
