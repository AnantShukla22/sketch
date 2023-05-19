import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";
import { motion as m } from "framer-motion";

const AccordianList = ({ question, answer }: any) => {
  const [active, setActive] = useState(false);

  const answers = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: .8,
        
      },
    },
    
  };
  return (
    <div className="accordian" onClick={() => setActive(!active)}>
      <hr />
      <div className="question">
        <h2>{question}</h2>
        {active?<BiUpArrow size={25} color="#8503c6"/>:<BiDownArrow size={25} color="#d00173" />}
        
      </div>
      {active && (
        <m.div
          className="answer"
          variants={answers}
          initial="initial"
          animate="animate"
        >
          {answer}
        </m.div>
      )}
    </div>
  );
};

export default AccordianList;
