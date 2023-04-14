import AccordianList from "./AccordianList";
import { data } from "./accordianData";

const Accordian = () => {
  return (
    <div className="accordian_container">
      <h1>Frequently asked questions</h1>
      <div className="accordian_list">
        {data.map((item) => {
          const { id,question,answer } = item;
          return (
            <AccordianList key={id} question={question} answer={answer}/>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default Accordian;
