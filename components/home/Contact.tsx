import Image from "next/image";
import logo1 from "../../public/images/logo.png";
import logo2 from "../../public/images/old_logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { motion as m } from "framer-motion";

const Contact = () => {
  const animate = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    heading: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
    content: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    sketch: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.6,
        delay: 1.7,
      },
    },
  };
  return (
    <div className="contact_container">
      <m.div
        variants={animate}
        initial="initial"
        whileInView={"heading"}
        className="contact_info"
      >
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"content"}
          className="contact_heading"
        >
          <h1>SKETCH AROUND</h1>
          <h3>...and find out</h3>
        </m.div>

        <m.p variants={animate} initial="initial" whileInView={"content"}>
          Join our Discord to get an exclusive in-game reward bhaafsa wdda!
        </m.p>
        <button>
          Join Discord{" "}
          <span>
            <BsDiscord />
          </span>
        </button>
        <div className="contact_handles">
          <p>We're also on</p>
          <div className="social">
            <AiOutlineTwitter size={28} />
            <AiOutlineMail size={28} />
            <AiFillLinkedin size={28} />
            <AiFillYoutube size={28} />
          </div>
        </div>
        <m.div
          variants={animate}
          initial="initial"
          whileInView={"sketch"}
          className="img_container logo1"
        >
          <Image src={logo2} sizes="100" fill alt="" />
        </m.div>
      </m.div>
      <div className="img_container logo2">
        <Image src={logo1} sizes="100" fill alt=""  />
      </div>
    </div>
  );
};

export default Contact;
