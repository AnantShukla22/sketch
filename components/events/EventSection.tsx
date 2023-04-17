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
      {/* make it flex in responsive */}
      <div className="event_section_left">
        {/* display under width 700 */}
        {/* <div className="event_section_left_resp">
          <h1>{eventName}</h1>
          <div className="event_dates">
            <span className="event_date">{date}</span>
            <span className="event_month">{month}</span>
          </div>
        </div> */}
        {/* hide this heading at 700px */}
        <h1>{eventName}</h1>
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
