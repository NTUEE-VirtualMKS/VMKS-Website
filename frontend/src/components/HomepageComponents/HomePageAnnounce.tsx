// TODO: link to the detailed page of the announcement
import { useNavigate } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY } from "../../graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "../LoaderSpinner";

function HomePageAnnounce() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const announcements = data?.AllAnnouncements || [];

  return (
    <>
      <div className="flex flex-col grow px-6 pt-5 pb-5 w-full font-semibold border-2 border-blue-600 border-solid bg-black bg-opacity-50 rounded-[30px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="text-2xl text-white">公告 🔥</div>
            <div className="mt-2 text-base whitespace-nowrap text-white text-opacity-50">
              Trending now
            </div>
          </div>
          <button
            className="self-end mt-9 text-sm text-right text-white text-opacity-50 transform active:scale-90 transition-transform duration-200"
            onClick={() => navigate("AnnouncementPage")}
          >
            See all
          </button>
        </div>
        <div className="flex flex-col gap-3 justify-between mt-3 w-full text-xs text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full">
          {
            // TODO: link each announcement to its detailed page
            announcements
              .filter((announcement) => announcement !== null)
              .sort((a, b) => (b?.id || 0) - (a?.id || 0))
              .slice(0, 2)
              .map(
                (announcement) =>
                  announcement && (
                    <div
                      key={announcement.id}
                      className="flex flex-col gap-3 w-full rounded-lg border p-3 text-xs text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full transform active:scale-95 transition-transform duration-200 cursor-pointer select-none"
                    >
                      <div className="flex flex-col justify-between">
                        <div className="self-start text-white text-lg">
                          <b>{announcement.title}</b>
                        </div>
                        <div className="self-start">{announcement.date}</div>
                      </div>
                      <div className="flex justify-between items-start text-sm text-slate-200">
                        <div>{announcement.content.slice(0, 55) + " ..."}</div>
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
