import { useNavigate } from "react-router-dom";
import { GET_ALL_ANNOUNCEMENTS_QUERY } from "../../graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";
import { useTranslation } from "react-i18next";
import { Volume2 } from "lucide-react";
import { useWindow } from "@/contexts/WindowContext";
import { AnnouncementType } from "@/shared/type";

function HomePageAnnouncement() {
  const navigate = useNavigate();
  const { windowWidth } = useWindow();
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_ALL_ANNOUNCEMENTS_QUERY);
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const announcements = data?.GetAllAnnouncements
    ?.announcements as AnnouncementType[];

  return (
    <>
      <div className="flex flex-col grow px-6 pt-5 pb-5 w-full font-semibold dark:bg-[#202020] border shadow-md dark:border-[#444444] bg-opacity-50 rounded-[30px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col">
            <div className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl dark:text-white flex flex-row gap-2 items-center font-semibold">
              <Volume2 size={28} />
              {t("announcements")}
            </div>
            <div className="flex flex-row items-center gap-1 mt-2">
              <div>🔥</div>
              <div className="text-base whitespace-nowrap dark:text-white text-opacity-50 font-semibold">
                {t("trendingNow")}
              </div>
            </div>
          </div>
          <button
            className="self-end mt-0 sm:mt-0 md:mt-2 lg:mt-9 xl:mt-9 text-sm text-right dark:text-white text-opacity-50 transform active:scale-90 transition-transform duration-200 font-semibold"
            onClick={() => navigate("AnnouncementPage")}
          >
            {t("seeAll")}
          </button>
        </div>
        {announcements.length === 0 ? (
          <>
            <div className="flex flex-col flex-center w-full h-full">
              <p className="dark:text-white text-3xl text-opacity-50">
                {t("noAnnouncement")}
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-3 justify-between mt-3 w-full text-xs dark:text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full">
            {announcements.slice(0, 2).map(
              (announcement) =>
                announcement && (
                  <div
                    key={announcement.id}
                    className="flex flex-col gap-2 w-full rounded-lg border shadow dark:border-[#444444] p-4 text-xs dark:text-white dark:text-opacity-50 dark:hover:bg-opacity-90 max-md:flex-wrap max-md:max-w-full dark:bg-[#303030] bg-opacity-50 transform active:scale-[0.98] transition-transform duration-200 cursor-pointer"
                    onClick={() => {}} // TODO: link to detailed page
                  >
                    <div className="flex flex-col justify-between">
                      <div className="self-start dark:text-white text-lg">
                        <b>
                          {windowWidth > 600
                            ? announcement.title.slice(0, 25)
                            : announcement.title.slice(0, 20)}{" "}
                          {announcement.title.length > 25 ? " ..." : ""}
                        </b>
                      </div>
                      <div className="self-start text-gray-500 dark:text-gray-400">
                        {announcement.date}
                      </div>
                    </div>
                    <div className="flex justify-between items-start text-sm dark:text-slate-200">
                      <div>
                        {windowWidth > 458
                          ? announcement.content.slice(0, 65)
                          : announcement.content.slice(0, 40)}{" "}
                        <span>
                          {announcement.content.length > 65 && (
                            <span> ...{t("more")}</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePageAnnouncement;
