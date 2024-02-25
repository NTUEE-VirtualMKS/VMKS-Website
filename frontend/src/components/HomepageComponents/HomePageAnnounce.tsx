import { useNavigate } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY } from "../../graphql";
import { useQuery } from "@apollo/client";
export const HomePageAnnounce = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const announcements = data?.AllAnnouncements || [];
  return (
    <>
      <div className="flex flex-col grow px-9 pt-5 pb-5 w-full font-semibold border border-blue-600 border-solid bg-black bg-opacity-50 rounded-[30px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-2xl text-white">公告 🔥</div>
            <div className="mt-3 text-base whitespace-nowrap text-white text-opacity-50">
              Trending now
            </div>
          </div>
          <button
            className="self-end mt-9 text-sm text-right text-white text-opacity-50"
            onClick={() => navigate("AnnouncementPage")}
          >
            See all
          </button>
        </div>
        <div className="flex gap-5 justify-between mt-3 w-full text-xs text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full">
          {announcements
            .filter((announcement) => announcement !== null)
            .sort((a, b) => (b?.id || 0) - (a?.id || 0))
            .slice(0, 3)
            .map(
              (announcement) =>
                announcement && (
                  <div
                    key={announcement.id}
                    className="flex flex-col gap-5 w-full rounded-lg border p-3 text-xs text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="self-start text-white text-base">
                        <b>{announcement.title}</b>
                      </div>
                      <div className="self-start">{announcement.date}</div>
                    </div>
                    <div className="flex gap-5 justify-between items-start">
                      <div>{announcement.content}</div>
                    </div>
                  </div>
                )
            )}
        </div>
        {/* <div className="flex gap-5 justify-between pr-16 mt-1.5 text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex flex-col flex-1">
                <div className="text-xs">01/19, 2024</div>
                <div className="mt-2 text-sm whitespace-nowrap">
                    VMKS UI refinement
                </div>
                <div className="mt-2.5 text-xs leading-4">
                    今天公布新版UI長相
                    <br />
                    希望寒假結束前可以實現
                </div>
                </div>
                <div className="flex flex-col flex-1">
                <div className="text-xs">01/19, 2024</div>
                <div className="mt-2 text-sm">光舞啟動</div>
                <div className="mt-2 text-xs leading-4">光舞啟動 希望今年也順利</div>
                </div>
                <div className="flex flex-col flex-1 self-start">
                <div className="text-xs">01/19, 2024</div>
                <div className="mt-1.5 text-sm">管理員時段公佈</div>
                <div className="mt-2 text-xs leading-4">
                    管理員時段公布
                    <br />
                    請確認最新班表
                </div>
                </div>
            </div> */}
      </div>
    </>
  );
};
