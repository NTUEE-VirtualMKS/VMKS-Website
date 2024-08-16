import { Skeleton } from "@/components/ui/skeleton";

function SkeletonDetailCard() {
  return (
    <div className="w-10/12 mx-auto rounded-xl">
      <Skeleton className="h-96 w-full rounded-xl dark:bg-zinc-800" />
    </div>
  );
}

export default SkeletonDetailCard;
