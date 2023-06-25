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
        delay: 0.3,
      },
    },
    part1: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
    part2: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    },
    part3: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: .6,
      },
    },
  };
  return (
    <div className="domain_container" id="domain">
      <m.h1 variants={animate} initial="initial" whileInView={"heading"}>
        Domains
      </m.h1>

      <div className="domain_types">
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"part1"}
          className="col_1"
        >
          <div className="box">
            <h1>Gaming</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"part2"}
          className="col_2"
        >
          <div className="box">
            <h1>R & D</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Media</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"part3"}
          className="col_3"
        >
          <div className="box">
            <h1>Content</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Designing</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Org. & Pr.</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
      </div>
      <div className="domain_types_responsive">
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"part1"}
          className="col_1_responsive"
        >
          <div className="box">
            <h1>Gaming</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>R & D</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"part2"}
          className="col_2_responsive"
        >
          <div className="box">
            <h1>Media</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Content</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"part3"}
          className="col_3_responsive"
        >
          <div className="box">
            <h1>Designing</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
          <div className="box">
            <h1>Org. & Pr.</h1>
            <p>
              Hello my name is anant shukla and i am astudent in srm university
              aat chennai currently persuing my btech from conputer science
            </p>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Domain;
