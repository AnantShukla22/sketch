import Image from "next/image";
import logo from "../../public/images/logo.png";

const TripleD = () => {
  return (
    <div className="triple_container">
      <div className="triple_content">
        <div className="triple_wrapper">
          <h1> Motto - Triple D's </h1>
          <div className="triple_accordian">
            <div className="topic">
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
            </div>
            <div className="topic">
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
            </div>
            <div className="topic">
              <div className="heading">
                <span>003... </span> DELEVER
                <br />
              </div>
              <p className="desc">
                Our belief is that creativity and knowledge produce the best
                outcome. We encourage our student community to work hard towards
                the outcome by associating them with fests, hackathons and our
                Alumnus where their interests can be put to use.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="triple_img">
        <Image src={logo} alt="" />
      </div>
    </div>
  );
};

export default TripleD;
