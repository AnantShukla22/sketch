import { motion as m } from "framer-motion";

const Domain = () => {
  const animate = {
    initial: {
      opacity: 0,
    },
    heading: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    part1: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    part2: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.5,
      },
    },
    part3: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.8,
      },
    },
  };
  return (
    <div className="domain_container" id="domain">
      <m.h1 variants={animate} initial="initial" whileInView={"heading"}>Domains</m.h1>

      <div className="domain_types">
        <m.div variants={animate} initial="initial" whileInView={"part1"} className="col_1">
          <div className="box">
            <h1>Gaming</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
        <m.div variants={animate} initial="initial" whileInView={"part2"} className="col_2">
          <div className="box">
            
            <h1>R & D</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Media</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
        <m.div variants={animate} initial="initial" whileInView={"part3"} className="col_3">
          <div className="box">
            <h1>Content</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Designing</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
              <h1>Org. & Pr.</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Domain;
