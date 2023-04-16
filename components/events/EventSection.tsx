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
  eventName
}: any) => {
  return (
    <div className="event_section">
      <div className="event_section_left">
        <h1>{eventName}</h1>
        <p>{para1}</p>
        <p>{para3}</p>
      </div>
      <div className="event_section_mid">
        <Image src={img1} alt="" />
        <Image src={img2} alt="" />
        <Image src={img3} alt="" />
      </div>
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
