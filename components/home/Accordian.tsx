import AccordianList from "./AccordianList";
import { data } from "./accordianData";
import { motion as m } from "framer-motion";

const Accordian = () => {
  const animate = {
    initial: {
      opacity: 0,
    },
    heading: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: .5,

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
  };
  return (
    <div className="accordian_container">
      <m.h1  variants={animate} 
        initial="initial"
        whileInView={"heading"}>Frequently asked questions</m.h1>
      <m.div variants={animate} 
        initial="initial"
        whileInView={"spanAnimate1"} className="accordian_list">
        {data.map((item) => {
          const { id,question,answer } = item;
          return (
            <AccordianList key={id} question={question} answer={answer}/>
          );
        })}
        <hr />
      </m.div>
    </div>
  );
};

export default Accordian;
