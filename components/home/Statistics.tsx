import { BsFillPersonFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import { GiBookAura } from "react-icons/gi";
import { motion as m } from "framer-motion";

const Statistics = () => {
  const animate = {
    initial: {
      opacity: 0,
      // scale: 0,
    },
    heading: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay:.4
      },
    },
    spanAnimate1: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: .9,
      },
    },
    spanAnimate2: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        delay: 1.6,
      },
    },
  };
  return (
    <div className="statistics_container" id="statistics">
      <div className="statistics_content">
        <m.h1 variants={animate} 
        initial="initial"
        whileInView={"heading"}>Statistics</m.h1>
        <hr />
        <m.p variants={animate} 
        initial="initial"
        whileInView={"spanAnimate1"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
          repudiandae molestias! Magni eligendi incidunt, animi cumque eius
          autem illum voluptatem praesentium, sequi nulla repellat ea
          exercitationem. Voluptates fugiat eaque cupiditate!
        </m.p>
      </div>
      <m.div className="statistics_detail" variants={animate} 
        initial="initial"
        whileInView={"spanAnimate2"}>
        <div className="detail_1">
          <div className="detail_icon">
            <BsFillPersonFill size={70}/>
          </div>
          <div className="detail_category">
            <h1>Total 40 <span>+</span></h1>
            <h6>Members</h6>
          </div>
        </div>
        <div className="detail_2">
          <div className="detail_icon">
            <MdEmojiEvents size={70}/>
          </div>
          <div className="detail_category">
            <h1>25<span>+</span> </h1>
            <h6>Events Organized</h6>
          </div>
        </div>
        <div className="detail_3">
          <div className="detail_icon">
            <GiBookAura size={65}/>
          </div>
          <div className="detail_category">
            <h1>7 Years</h1>
            <h6>Of Establishment</h6>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Statistics;
