import Swiper from "@/components/team/Swiper";
import { FaHorseHead } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/images/old_logo.png";

const Team = () => {
  return (
    <div className="team_container" id="team">
    
      <div className="team_logo">
      <Image src={logo} alt=""/>

      </div>
      <div className="swiper_container">
        <div className="swiper_leftBtns">
          <div className="btn_content">
            <button>
              <FaHorseHead />
            </button>
            <span>Alumini</span>
          </div>
          <div className="btn_content">
            <button className="btn_mid">
              <FaHorseHead />
            </button>
            <span>Head</span>
          </div>
          <div className="btn_content">
            <button>
              <FaHorseHead />
            </button>
            <span>Members</span>
          </div>
        </div>
        <div className="swiper_wrapper">
          <Swiper />
        </div>
        <div className="swiper_rightBtns">
          <div className="btn_content">
            <button>
              <FaHorseHead />
            </button>
            <span>Insta</span>
          </div>
          <div className="btn_content">
            <button>
              <FaHorseHead />
            </button>
            <span>Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
