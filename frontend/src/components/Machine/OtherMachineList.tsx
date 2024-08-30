import { useQuery } from "@apollo/client";
import { GET_ALL_MACHINES_QUERY } from "@/graphql/queries";
import type { OtherMachineType } from "@/shared/type.ts";
import OtherMachineCard from "./OtherMachineCard";
import Suggestion from "../Suggestion";
import { useState, useEffect, useRef, useCallback } from "react";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "../ui/use-toast";

function OtherMachineList() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [cursor, setCursor] = useState<string | null>(null);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const limit = 12;
  const observerTarget = useRef(null);

  const { data, loading, error, fetchMore } = useQuery(
    GET_ALL_MACHINES_QUERY,
    {
      variables: {
        cursor,
        limit,
      },
    }
  );

  const otherMachines = data?.GetAllMachines?.machines as OtherMachineType[];
  const nextCursor = data?.GetAllMachines?.cursor as string | null;

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
            GetAllMaterials: {
              ...prev.GetAllMachines,
              materials: [
                ...prev.GetAllMachines?.machines!,
                ...fetchMoreResult.GetAllMachines?.machines!,
              ],
              cursor: fetchMoreResult.GetAllMachines?.cursor,
            },
          };
        },
      });
      setCursor(nextCursor);
    } catch (error) {
      console.error(`Error fetching more materials: ${error}`);
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
          }, 5000);
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
      <div className="flex flex-col gap-4 flex-wrap justify-start xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
        {otherMachines && otherMachines.length !== 0 ? (
          otherMachines.map((otherMachine: OtherMachineType, index: number) => {
            return <OtherMachineCard key={index} otherMachine={otherMachine} />;
          })
        ) : (
          <Suggestion search="" name="Material" />
        )}
      </div>
      <div ref={observerTarget} className="h-10 flex flex-col items-center">
        {fetchMoreLoading ? (
          <Loader
            className="animate-spin dark:text-sky-300 text-blue-500"
            size={50}
          />
        ) : (
          <>
            {otherMachines?.length >= 12 && (
              <p className="text-gray-500 text-xl mt-3">
                {t("noMoreMaterial")}
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default OtherMachineList;
