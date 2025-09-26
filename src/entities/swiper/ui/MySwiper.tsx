import { memo, useState, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { createImageUrl } from "@/shared/utils";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";

interface Props {
  data: any;
}

export const MySwiper: FC<Props> = memo(({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-[12px]"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          1024: { slidesPerView: 1, spaceBetween: 20 },
          1280: { slidesPerView: 1, spaceBetween: 30 },
        }}
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item.id} className="relative">
            <img
              src={createImageUrl(item.backdrop_path)}
              alt={item.title}
              className="w-full max-h-[640px] md:min-h-[500px] object-cover rounded-[12px]"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-6 ">
              <div className="text-white flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2  hidden md:flex">
                <h2 className="text-2xl md:text-3xl font-inter font-medium text-center">
                  {item.title}
                </h2>

                <div className="flex items-end justify-center gap-2 mt-2 text-sm md:text-base">
                  <p className="font-inter font-normal">
                    {item.release_date?.split("-")[0]}
                  </p>
                  <span className="font-inter font-normal">•</span>

                  <p className="font-inter font-normal">Test</p>
                  <span className="font-inter font-normal">•</span>

                  <p className="font-inter font-normal">Test min</p>
                  <span className="font-inter font-normal">•</span>

                  <p className="font-inter font-normal">
                    {item.original_language.toUpperCase()}
                  </p>
                </div>

                <div className="w-[70%]">
                  <button className="mt-8  py-4 bg-white text-py font-inter font-medium rounded-lg w-full cursor-pointer flex items-center justify-center gap-2  border border-transparent hover:bg-transparent hover:border hover:border-py hover:text-white transition ">
                    <TbPlayerPlayFilled />
                    {t("hero.see_more")}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-2"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 5 },
          640: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1280: { slidesPerView: 5, spaceBetween: 15 },
        }}
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item.id} className="cursor-pointer">
            <img
              src={createImageUrl(item.backdrop_path)}
              alt={item.title}
              className="rounded-[8px] w-full h-[80px] md:h-[100px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
