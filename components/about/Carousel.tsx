import Image from "next/image";
import logo from "../../public/images/grpPic.jpeg";
import { Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCom = () => {
  return (
    <div className="carousel_container">
      <h1>The Legends</h1>
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
    </div>
  );
};

export default CarouselCom;
