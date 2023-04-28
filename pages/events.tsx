import EventPreface from "@/components/events/EventPreface";
import EventYear from "@/components/events/EventYear";
import { year1Details } from "@/components/events/eventData";
import { year2Details } from "@/components/events/eventData";
import { year3Details } from "@/components/events/eventData";
import { year1EventList } from "@/components/events/eventData";
import { year2EventList } from "@/components/events/eventData";
import { year3EventList } from "@/components/events/eventData";

const events = () => {

  return (
    <div className="events">
    <EventPreface/>
    <EventYear year={"2016"} yearDetail={year1Details} yearEventList={year1EventList} />
    <EventYear year={"2017"} yearDetail={year2Details}  yearEventList={year2EventList}/>
    <EventYear year={"2018"} yearDetail={year3Details}  yearEventList={year3EventList}/>
    

    </div>
  );
};

export default events;
