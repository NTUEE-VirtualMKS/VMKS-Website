import { GET_ALL_ANNOUNCEMENTS_QUERY } from "@/graphql";
import { useQuery } from "@apollo/client";
import LoaderSpinner from "./LoaderSpinner";
import { useToast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";
import AnnouncementCard from "./AnnouncementCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnnouncementType } from "@/shared/type";
import { Loader } from "lucide-react";

function AnnouncementList() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [cursor, setCursor] = useState<number | null>(null);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const limit = 6;
  const observerTarget = useRef(null);

  const { data, loading, error, fetchMore } = useQuery(
    GET_ALL_ANNOUNCEMENTS_QUERY,
    {
      variables: {
        cursor,
        limit,
      },
    }
  );

  if (loading) return <LoaderSpinner />;
  if (error) {
    toast({ title: `${error.message}`, variant: "destructive" });
  }

  const announcements = data?.GetAllAnnouncements
    ?.announcements as AnnouncementType[];
  const nextCursor = data?.GetAllAnnouncements?.cursor as number | null;

  const handleLoadMore = useCallback(async () => {
    if (!nextCursor) return;
    try {
      await fetchMore({
        variables: {
          cursor: nextCursor,
          limit,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            GetAllAnnouncements: {
              ...prev.GetAllAnnouncements,
              announcements: [
                ...prev.GetAllAnnouncements?.announcements!,
                ...fetchMoreResult.GetAllAnnouncements?.announcements!,
              ],
              cursor: fetchMoreResult.GetAllAnnouncements?.cursor,
            },
          };
        },
      });
      setCursor(nextCursor);
    } catch (error) {
      console.error(`Error fetching more announcements: ${error}`);
    }
  }, [nextCursor, fetchMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && nextCursor) {
          setFetchMoreLoading(true);
          handleLoadMore();
          setTimeout(() => {
            setFetchMoreLoading(false);
          }, 8000);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [handleLoadMore, loading, nextCursor]);

  if (error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive",
    });
    throw new Error(`Error! ${error.message}`);
  }

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
            <p className="w-full text-4xl text-center font-bold dark:text-white p-2 text-opacity-50">
              {t("noAnnouncement")}
            </p>
          </div>
        </section>
      )}
      <div ref={observerTarget} className="h-10 flex flex-col items-center">
        {fetchMoreLoading && (
          <Loader
            className="animate-spin dark:text-sky-300 text-blue-500"
            size={50}
          />
        )}
      </div>
    </>
  );
}
export default AnnouncementList;
