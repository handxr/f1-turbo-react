import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function DriversTableSkeleton() {
  return (
    <React.Fragment>
      <div className="flex items-center gap-4 py-4">
        <Skeleton className="flex w-full h-10 max-w-sm px-3 py-2 border rounded-md " />
        <Skeleton className="flex w-full h-10 px-3 py-2 border rounded-md " />
        <Skeleton className="flex w-full h-10 max-w-xs px-3 py-2 border rounded-md" />
      </div>
      <div className="border rounded-md ">
        <Skeleton className="w-full h-[700px]" />
      </div>
    </React.Fragment>
  );
}
