import { useNavigate } from "react-router-dom";

const timetable = [
  {
    time: "09:00-12:00",
    name: "吳柏均A",
  },
  {
    time: "13:00-16:00(A)",
    name: "吳柏均B",
  },
  {
    time: "13:00-16:00(B)",
    name: "吳柏均C",
  },
  {
    time: "18:00-21:00",
    name: "吳柏均D",
  },
];

function HomePageTimetable() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col grow py-5 mx-auto w-full font-semibold border-2 border-blue-600 border-solid bg-black bg-opacity-50 rounded-[30px] max-md:mt-6">
        <div className="flex flex-col px-5 max-md:pl-5">
          <div className="text-2xl text-white">今日管理員班表 📅 </div>
          <button
            className="self-end mt-1.5 text-sm text-right whitespace-nowrap text-white text-opacity-50 transform active:scale-90 transition-transform duration-200"
            onClick={() => navigate("IntroductionPage")}
          >
            See all
          </button>
        </div>
        <div className="flex m-5 justify-between self-center py-3.5 pr-14 pl-2.5 mt-3 w-64 max-w-full text-white whitespace-nowrap rounded-xl border border-solid border-slate-100 bg-black bg-opacity-50 border-opacity-80 max-md:pr-5">
          <div className="flex flex-col self-start text-xs">
            <h1 className="self-center text-sm select-none">時段</h1>
            <div className="flex flex-col justify-center gap-7 my-5 ml-3">
              {timetable.map(({ time }) => (
                <div key={time} className="select-none">
                  {time}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col self-start text-xs">
            <h1 className="self-center text-sm select-none">值班者</h1>
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
