import { memo } from "react";

interface Props {
  count?: number; 
}

export const MovieCardSkeleton: React.FC<Props> = memo(({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden shadow-md animate-pulse bg-gray-100 dark:bg-gray-800"
        >
          {/* Poster */}
          <div className="w-full h-[300px] bg-gray-300 dark:bg-gray-700"></div>

          {/* Title and rating */}
          <div className="p-3 flex flex-col gap-2">
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
});
