import { useNavigate } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY } from "../../graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { useTranslation } from "react-i18next";
import { Volume2 } from "lucide-react";

function HomePageAnnounce() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const announcements = data?.AllAnnouncements || [];

  return (
    <>
      <div className="flex flex-col grow px-6 pt-5 pb-5 w-full font-semibold bg-[#202020] border border-[#444444] bg-opacity-50 rounded-[30px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-2xl text-white flex flex-row gap-2 items-center font-semibold">
              <Volume2 size={28} />
              {t("announcements")}
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="mt-2">🔥</div>
              <div className="mt-2 text-base whitespace-nowrap text-white text-opacity-50 font-semibold">
                {t("trendingNow")}
              </div>
            </div>
          </div>
          <button
            className="self-end mt-9 text-sm text-right text-white text-opacity-50 transform active:scale-90 transition-transform duration-200 font-semibold"
            onClick={() => navigate("AnnouncementPage")}
          >
            {t("seeAll")}
          </button>
        </div>
        <div className="flex flex-col gap-3 justify-between mt-3 w-full text-xs text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full">
          {
            // TODO: link each announcement to its detailed page (optional)
            announcements
              .filter((announcement) => announcement !== null)
              .sort((a, b) => (b?.id || 0) - (a?.id || 0))
              .slice(0, 2)
              .map(
                (announcement) =>
                  announcement && (
                    <div
                      key={announcement.id}
                      className="flex flex-col gap-3 w-full rounded-lg border border-[#444444] p-4 text-xs text-white text-opacity-50 hover:bg-opacity-70 max-md:flex-wrap max-md:max-w-full transform active:scale-95 transition-transform duration-200 cursor-pointer select-none bg-[#303030] bg-opacity-50"
                    >
                      <div className="flex flex-col justify-between">
                        <div className="self-start text-white text-lg">
                          <b>{announcement.title.slice(0, 25) + " ..."}</b>
                        </div>
                        <div className="self-start">{announcement.date}</div>
                      </div>
                      <div className="flex justify-between items-start text-sm text-slate-200">
                        <div>{announcement.content.slice(0, 70) + " ..."}</div>
                      </div>
                    </div>
                  )
              )
          }
        </div>
      </div>
    </>
  );
}

export default HomePageAnnounce;
