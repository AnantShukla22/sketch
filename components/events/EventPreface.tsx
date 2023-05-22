import BurgerMenu from "@/components/header/BurgerMenuEvent";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import EventIntroImg from "../../public/images/event/eventIntroImg.jpg";
import { Typewriter } from "react-simple-typewriter";

const EventPreface = () => {
  const router = useRouter();

  return (
    <div className="event_container">
      <div className="burgerHeader">
        <AiOutlineHome
          onClick={() => router.push("/")}
          className="event_burger_icon"
        />
        <BurgerMenu />
      </div>
      <div className="event_header">
        <div className="event_heading1">
          <span>SKETCH</span> EVENTS
        </div>
        <div className="event_heading2">
          <span>JAN</span>
          <div>
            <span>7 YEARS</span>
            <span>
            Of 
              <Typewriter
                loop
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1600}
                words={[" Establishment", " Achievements", " Inspiration", " Appreciation"]}
              />
            </span>
          </div>
          <span>DEC</span>
        </div>
      </div>
      <div className="event_introImg">
        <Image src={EventIntroImg} alt="" />
      </div>
      <div className="event_preface">
        <p>
          As the 2022 sports calendar rolled on, fansa hailed new heroes,
          saluted the latest champs and bid farewell to GOATs (and evendfsa
          welcomed a couple back). But no matter the season, our greeting was
          clear: we cheered on each moment that highlighted our year.
        </p>
      </div>
    </div>
  );
};

export default EventPreface;
