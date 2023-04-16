import EventSection from "@/components/events/EventSection";
import Marquee from "react-fast-marquee";
const EventYear = ({ year, yearDetail, yearEventList }: any) => {
  console.log(yearDetail);

  return (
    <div className="event_year_container">
      <div className="event_year">{year}</div>
      <Marquee className="marquee">
        {Object.entries(yearEventList).map(([key, value]:any, i) => (
          <span key={i} >
            {value}
          </span>
        ))}
      </Marquee>
      {yearDetail.map((item: any) => (
        <EventSection
          img1={item.imgA}
          img2={item.imgB}
          img3={item.imgC}
          date={item.date}
          month={item.month}
          para1={item.paraA}
          para2={item.paraB}
          para3={item.paraC}
          eventName={item.eventName}
        />
      ))}
    </div>
  );
};

export default EventYear;
