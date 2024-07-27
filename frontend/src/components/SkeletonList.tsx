import { Skeleton } from "@/components/ui/skeleton";

function SkeletonList() {
  return (
    <div className="flex flex-col gap-4 flex-wrap justify-start xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row xs:gap-5 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
      {[1, 2, 3, 4, 5, 6, 7].map((key) => {
        return (
          <div
            className="bg-transparent mb-5 w-full xs:w-full sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12"
            key={key}
          >
            <div className="flex flex-col justify-between h-full p-1 w-11/12 mx-auto rounded-xl">
              <Skeleton className="h-96 w-full rounded-xl bg-zinc-800" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkeletonList;
