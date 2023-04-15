import Swiper from "@/components/team/Swiper";
import { AiOutlineMail  } from "react-icons/ai";
import { FiInstagram  } from "react-icons/fi";
import { GiTigerHead  } from "react-icons/gi";
import { FaWolfPackBattalion  } from "react-icons/fa";
import { GiMonkey  } from "react-icons/gi";
import Header from "@/components/header/Header";

const Team = () => {
  return (<>
  <Header/>
  <div className="team_container" id="team">
    <div className="swiper_container">
      <div className="swiper_leftBtns">
        <div className="btn_content">
          <button>
            < GiTigerHead size={23} />
          </button>
          <span>Alumini</span>
        </div>
        <div className="btn_content">
          <button className="btn_mid">
            < FaWolfPackBattalion size={23} />
          </button>
          <span>Head</span>
        </div>
        <div className="btn_content">
          <button>
            <GiMonkey size={28}/>
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
            <FiInstagram size={23} />
          </button>
          <span>Insta</span>
        </div>
        <div className="btn_content">
          <button>
            <AiOutlineMail size={23} />
          </button>
          <span>Email</span>
        </div>
      </div>
    </div>
  </div>
  </>
    
  );
};

export async function getServerSideProps(){
  await new Promise((resolve)=>{
    setTimeout(resolve,3000);
  })

  return{
    props:{}
  }
}
export default Team;
