import Image from "next/image";
import logo from "../../public/images/grpPic.jpeg";
import { Carousel} from "react-responsive-carousel";
import { motion as m } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCom = () => {
  const animate = {
    initial: {
      opacity: 0,
    },
    heading: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3,
        delay: .3,

      },
    },
  };
  return (
    <m.div className="carousel_container" variants={animate}
    initial="initial"
    whileInView={"heading"}>
      <h1 >The Legends</h1>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="about_carousel"
      >
        <div>
          <Image loading="lazy" src={logo} alt="" width={1000} height={500} />
        </div>
        <div>
          <Image loading="lazy" src={logo} alt="" width={1000} height={500} />
        </div>
        <div>
          <Image loading="lazy" src={logo} alt="" width={1000} height={500} />
        </div>
      </Carousel>
    </m.div>
  );
};

export default CarouselCom;
