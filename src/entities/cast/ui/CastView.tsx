import { memo, type FC } from "react";
import { useCast } from "../model/useCast";
import { createImageUrl } from "../../../shared/utils";
import { Skeleton } from "antd";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  type: string;
}

export const CastView: FC<Props> = memo(({ id, type }) => {
  const { getCasts } = useCast();
  const { data, isLoading } = getCasts(id);
  const navigate = useNavigate();

  const renderCard = (item: any, i: number) => {
    if (isLoading) {
      return (
        <div
          key={i}
          className="bg-white dark:bg-sy rounded-xl shadow-sm p-2 
                     w-[120px] sm:w-[140px] md:w-[160px] flex-shrink-0"
        >
          <div className="w-full aspect-[2/3]">
            <Skeleton.Avatar active shape="square" className="w-full h-full" />
          </div>
          <Skeleton.Input active size="small" className="mt-2 w-full" />
        </div>
      );
    }

    return (
      <div
        key={item.cast_id || item.credit_id || i}
        className=" cursor-pointer bg-white dark:bg-sy rounded-xl shadow-sm 
                   hover:shadow-lg hover:scale-105 transition-transform duration-200 
                   w-[120px] sm:w-[140px] md:w-[160px] flex-shrink-0"
        onClick={() => navigate(`/crew/${item.id}`)}
      >
        {item.profile_path ? (
          <img
            className="w-full aspect-[2/3] object-cover rounded-t-xl"
            src={createImageUrl(item.profile_path)}
            alt={item.original_name}
          />
        ) : (
          <div
            className="w-full aspect-[2/3] flex items-center justify-center 
                          rounded-t-xl bg-gray-200 dark:bg-gray-700 text-gray-500"
          >
            <FaUser size={40} />
          </div>
        )}
        <div className="p-2">
          <p className="font-medium text-sm text-black dark:text-white truncate">
            {item.original_name}
          </p>
          <p className="text-xs text-th dark:text-gray-400 truncate">
            {type === "crew" ? item.job : item.character}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden px-1 scrollbar-hide">
        {(isLoading ? Array.from({ length: 10 }) : data?.[type]).map(
          (item: any, i: number) => renderCard(item, i)
        )}
      </div>
    </div>
  );
});
