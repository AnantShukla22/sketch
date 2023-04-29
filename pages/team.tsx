import Swiper from "@/components/team/Swiper";
import { AiOutlineMail  } from "react-icons/ai";
import { FiInstagram  } from "react-icons/fi";
import { GiTigerHead  } from "react-icons/gi";
import { FaWolfPackBattalion  } from "react-icons/fa";
import { GiMonkey  } from "react-icons/gi";
import Header from "@/components/header/Header";
import { GetServerSideProps } from "next";
import gqlclient from "@/gql/client";
import { getMember } from "@/gql/queries";
import {useState } from "react";

const Team = ({members}:any) => {
  const [memType,setMemType]=useState("head");
  
  return (<>
  <Header/>
  <div className="team_container" id="team">
    <div className="swiper_container">
      <div className="swiper_leftBtns">
        <div className="btn_content">
          <button>
            < GiTigerHead size={23} onClick={()=>{setMemType("alu")}}/>
          </button>
          <span >Alumini</span>
        </div>
        <div className="btn_content">
          <button className="btn_mid">
            < FaWolfPackBattalion size={23} onClick={()=>{setMemType("head")}}/>
          </button>
          <span >Head</span>
        </div>
        <div className="btn_content">
          <button>
            <GiMonkey size={28} onClick={()=>{setMemType("mem")}}/>
          </button>
          <span >Members</span>
        </div>
      </div>
      <div className="swiper_wrapper">
        <Swiper member={members} type={memType}/>
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

export const getServerSideProps:GetServerSideProps=async()=>{
  const headm:any=await gqlclient.request(getMember,{
    memType:"Head",
  });
  const memberm:any=await gqlclient.request(getMember,{
    memType:"Member",
  });
  const aluminim:any=await gqlclient.request(getMember,{
    memType:"Alumini",
  });
const members={
   head:headm.memberCollection.items,
   mem:memberm.memberCollection.items,
   alu:aluminim.memberCollection.items,
};
  return{
    props:{members:members},
  };
};
export default Team;
