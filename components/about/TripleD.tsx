import Image from "next/image";
import logo from "../../public/images/logo.png";
import { motion as m } from "framer-motion";

const TripleD = () => {
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
        duration: .8,
        delay: .5,
      },
    },
    part2: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        delay: 1.3,
      },
    },
  };
  return (
    <div className="triple_container">
      <div className="triple_content">
        <div className="triple_wrapper">
          <m.h1 variants={animate} initial="initial" whileInView={"heading"}>
            Motto - Triple D
          </m.h1>
          <div className="triple_accordian">
            <m.div
              variants={animate}
              initial="initial"
              whileInView={"part1"}
              className="topic"
            >
              <div className="heading">
                <span>001... </span> DESIGN
                <br />
              </div>
              <p className="desc">
                We are a firm that believes, design is the soul of everything.
                We conduct exciting events and workshops for our fellow students
                to learn and explore, not only graphic designing but also dive
                into UI (User Interface)/ UX (User Experience).
              </p>
            </m.div>
            <m.div
              variants={animate}
              initial="initial"
              whileInView={"part1"}
              className="topic"
            >
              <div className="heading">
                <span>002... </span> DEVELOP
                <br />
              </div>

              <p className="desc">
                An idea needs a way to develop and thus, development has become
                the elves to the shoemaker. We help young developers focus on
                roadmap to success. We often partner with technology firms,
                startups and other student communities, helping us step up.
              </p>
            </m.div>
            <m.div
              variants={animate}
              initial="initial"
              whileInView={"part1"}
              className="topic"
            >
              <div className="heading">
                <span>003... </span> DELIVER
                <br />
              </div>
              <p className="desc">
                Our belief is that creativity and knowledge produce the best
                outcome. We encourage our student community to work hard towards
                the outcome by associating them with fests, hackathons and our
                Alumnus where their interests can be put to use.
              </p>
            </m.div>
          </div>
        </div>
      </div>
      <m.div
        variants={animate}
        initial="initial"
        whileInView={"part2"}
        className="triple_img"
      >
        <Image src={logo} alt="" />
      </m.div>
    </div>
  );
};

export default TripleD;
