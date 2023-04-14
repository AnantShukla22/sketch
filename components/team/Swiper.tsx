import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import logo1 from "../../public/images/logo.png";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";


// scss of sliper import
import "../../node_modules/swiper/swiper.scss";
import "../../node_modules/swiper/modules/navigation/navigation.scss";
import "../../node_modules/swiper/modules/pagination/pagination.scss";
import "../../node_modules/swiper/modules/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Swipers = () => {
  return (
    <>
  
      <Swiper
        className="swiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.5}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 130,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={{
          el: ".swiper_pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper_next_btn",
          prevEl: ".swiper_prev_btn",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
       
        <SwiperSlide className="swiperSlide">
          <div className="team_name">
            <span>Aishwarya Tewari</span>
            <p>Design</p>
          </div>
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image src={logo1} sizes="100" fill alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="swiper_id">
        <span>01</span> - 48
      </div>
      <div className="swiper_control_btns">
        <span></span>
        <button className="swiper_prev_btn">
          <BiLeftArrow />
        </button>
        <button className="swiper_next_btn">
          <BiRightArrow />
        </button>
      </div>
    </>
  );
};

export default Swipers;
