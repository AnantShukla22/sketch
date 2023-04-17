import Image from "next/image";
import logo from "../../public/images/logo.png";
import { motion as m } from "framer-motion";

const LandingPage = () => {
  const animate = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    heading: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 1,
        delay: 0.1,
      },
    },
    headingSpan: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  };
  return (
    <div className="landing_container">
      <m.div
        className="img_container"
        variants={animate}
        initial="initial"
        whileInView={"heading"}
      >
        <Image src={logo}  alt="" />
      </m.div>

      <m.span variants={animate} initial="initial" whileInView={"headingSpan"}>
        Design . Develop . Deliver
      </m.span>
    </div>
  );
};

export default LandingPage;
