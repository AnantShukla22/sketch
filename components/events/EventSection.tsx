import Image from "next/image";

const EventSection = ({
  img1,
  img2,
  img3,
  date,
  month,
  para1,
  para2,
  para3,
  eventName,
}: any) => {
  return (
    <div className="event_section">
      {/* hide this heading at 1100px */}
      <div className="event_section_left">
        <div className="event_section_left_main">
          <h1>{eventName}</h1>
          <p>{para1}</p>
          <p>{para3}</p>
        </div>

        {/* display under width 1100 */}
        <div className="event_section_left_resp">
          <h1>{eventName}</h1>
          <div className="event_dates">
            <span className="event_date">{date}</span>
            <span className="event_month">{month}</span>
          </div>
        </div>
      </div>

      <div className="para_res">
        <p>{para1}</p>
        <p>{para3}</p>
      </div>

      <div className="event_section_mid">
        {/* make this  flex row in responsive*/}
        <Image src={img1} alt="" />
        <Image src={img2} alt="" />
        <Image src={img3} alt="" />
      </div>
      {/* hide this completely  */}
      <div className="event_section_right">
        <div className="event_dates">
          <span className="event_date">{date}</span>
          <span className="event_month">{month}</span>
        </div>
        <p>{para2}</p>
      </div>
    </div>
  );
};

export default EventSection;
