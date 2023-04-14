import { BsFillPersonFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import { GiBookAura } from "react-icons/gi";

const Statistics = () => {
  return (
    <div className="statistics_container" id="statistics">
      <div className="statistics_content">
        <h1>Statistics</h1>
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
          repudiandae molestias! Magni eligendi incidunt, animi cumque eius
          autem illum voluptatem praesentium, sequi nulla repellat ea
          exercitationem. Voluptates fugiat eaque cupiditate!
        </p>
      </div>
      <div className="statistics_detail">
        <div className="detail_1">
          <div className="detail_icon">
            <BsFillPersonFill size={70}/>
          </div>
          <div className="detail_category">
            <h1>Total 40 <span>+</span></h1>
            <h6>Members</h6>
          </div>
        </div>
        <div className="detail_2">
          <div className="detail_icon">
            <MdEmojiEvents size={70}/>
          </div>
          <div className="detail_category">
            <h1>25<span>+</span> </h1>
            <h6>Events Organized</h6>
          </div>
        </div>
        <div className="detail_3">
          <div className="detail_icon">
            <GiBookAura size={65}/>
          </div>
          <div className="detail_category">
            <h1>7 Years</h1>
            <h6>Of Establishment</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
