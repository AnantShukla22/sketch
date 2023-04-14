import { motion as m } from "framer-motion";

const Vision = () => {
  const logos = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 1.2,
      },
    },
    spanAnimate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 1.2,
      },
    },
  };
  return (
    <m.div className="vision_container"  variants={logos}
    initial="initial"
    animate="animate">
      <h1>Our Vision</h1>
      <p>
        We are the horizon where your yearnings come true, we strives to balance
        fun and hard work while promoting personal growth and community
        building. Our workshops events, and mentorship programs bring students
        together to <br /> achieve greater goals and explore their creativeness.
      </p>
    </m.div>
  );
};

export default Vision;
