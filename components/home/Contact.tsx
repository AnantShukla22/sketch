import Image from "next/image";
import logo1 from "../../public/images/logo.png";
import logo2 from "../../public/images/old_logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_info">
        <div className="contact_heading">
          <h1>SKETCH AROUND</h1>
          <h3>...and find out</h3>
        </div>

        <p>Join our Discord to get an exclusive in-game reward bhaafsa wdda!</p>
        <button>Join Discord <span><BsDiscord/></span></button>
        <div className="contact_handles">
          <p>We're also on</p>
          <div className="social">
            <AiOutlineTwitter size={28}/>
            <AiOutlineMail size={28}/>
            <AiFillLinkedin size={28}/>
            <AiFillYoutube size={28}/>
          </div>
        </div>
        <div className="img_container logo1">
          <Image src={logo2} sizes="100" fill alt="" />
        </div>
      </div>
      <div className="img_container logo2">
        <Image src={logo1} sizes="100" fill alt="" />
      </div>
    </div>
  );
};

export default Contact;
