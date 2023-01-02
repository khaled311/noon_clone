import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const Slider = ({ data }: any) => {
  const { locale } = useRouter();
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      dir={locale === "en" ? "ltr" : "rtl"}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.map((item: any) => (
        <SwiperSlide key={item?.id}>
          <Image
            src={`${process.env.IMGURL}${item?.url}`}
            width={item?.width}
            height={item?.height}
            alt=""
            className="w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
