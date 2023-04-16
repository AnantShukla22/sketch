import { motion as m } from "framer-motion";

const Whoweare = () => {
  const animate = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay:0.2
      },
    },
    spanAnimate1: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: .4,
      },
    },
    spanAnimate2: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: .5,
      },
    },
  };

  return (
    <div className="about_whoweare">
      <m.h1   variants={animate} 
        initial="initial"
        whileInView={"animate"}
        >WHO <br /> <span>WE ARE</span></m.h1>
      <m.p variants={animate} initial="initial" whileInView={"spanAnimate1"}>
      Our club values technical, non-technical, and design contributions. We offer workshops, mentorship,  and competitions to help members build 
       their profile and gain entrepreneurial experience.
      </m.p>

      <m.h3 variants={animate} initial="initial" whileInView={"spanAnimate2"}> We are dedicated towards building a happy place<br /> for all  our members to gain knowledge and <br />expertise in various fields.</m.h3>
    </div>
  );
};

export default Whoweare;
