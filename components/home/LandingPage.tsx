import Image from "next/image";
import logo from "../../public/images/logo.png";
import { motion as m } from "framer-motion";

const LandingPage = () => {
  const logos = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 1.2,
      },
    },
    spanAnimate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 1.2,
      },
    },
  };
  return (
    <div className="landing_container">
      <m.div className="img_container"
        variants={logos}
        initial="initial"
        animate="animate"
      >
        <Image src={logo} sizes="100" fill alt="" />
      </m.div>

      <m.span variants={logos} initial="initial" animate="spanAnimate">
        Design . Develop . Deliver
      </m.span>
    </div>
  );
};

export default LandingPage;
