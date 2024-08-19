import { useQuery } from "@apollo/client";
import { GET_ALL_MATERIALS_QUERY } from "@/graphql/queries";
import type { MaterialType } from "@/shared/type.ts";
import MaterialCard from "./MachineCard";
import Suggestion from "../Suggestion";
import { useState, useEffect, useRef, useCallback } from "react";
import { Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useToast } from "../ui/use-toast";

function MaterialList() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [cursor, setCursor] = useState<string | null>(null);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const limit = 12;
  const observerTarget = useRef(null);

  const { data, loading, error, fetchMore } = useQuery(
    GET_ALL_MATERIALS_QUERY,
    {
      variables: {
        cursor,
        limit,
      },
    }
  );

  const materials = data?.GetAllMaterials?.materials as MaterialType[];
  const nextCursor = data?.GetAllMaterials?.cursor as string | null;

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
              ...prev.GetAllMaterials,
              materials: [
                ...prev.GetAllMaterials?.materials!,
                ...fetchMoreResult.GetAllMaterials?.materials!,
              ],
              cursor: fetchMoreResult.GetAllMaterials?.cursor,
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
        {materials && materials.length !== 0 ? (
          materials.map((material: MaterialType, index: number) => {
            return <MaterialCard key={index} material={material} search="" />;
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
            {materials?.length >= 12 && (
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

export default MaterialList;
