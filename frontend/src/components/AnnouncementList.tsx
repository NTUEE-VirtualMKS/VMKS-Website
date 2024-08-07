import { ALL_ANNOUNCEMENT_QUERY } from "@/graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "./LoaderSpinner";
import { useToast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";
import AnnouncementCard from "./AnnouncementCard";

function AnnouncementList() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);

  if (loading) return <LoaderSpinner />;
  if (error) {
    toast({ title: `${error.message}`, variant: "destructive" });
  }

  const announcements = data?.AllAnnouncements || [];

  return (
    <>
      {announcements.length !== 0 ? (
        <div className="flex flex-col w-full">
          {announcements.map((announcement) => (
            <AnnouncementCard
              id={announcement?.id!}
              title={announcement?.title!}
              content={announcement?.content!}
              date={announcement?.date!}
              key={announcement?.id}
            />
          ))}
        </div>
      ) : (
        <section className="flex flex-col size-full flex-center">
          <div className="flex-center w-full flex-col mt-36">
            <p className="w-full text-4xl text-center font-bold text-white p-2 text-opacity-50">
              {t("noAnnouncement")}
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default AnnouncementList;
