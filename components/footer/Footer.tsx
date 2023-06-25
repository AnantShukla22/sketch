import Link from "next/link";
import React from "react";
import { motion as m } from "framer-motion";

const Footer = () => {
  const animate = {
    initial: {
      opacity: 0,
    },
    heading: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: .4,
        delay: .6,
      },
    },
    input: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: .9,
        delay: 1,
      },
    },
    sketch: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.3,
        delay: 1.2,
      },
    },
  };
  return (
    <div className="footer_container">
      <div className="footer_content">
        <m.h1  variants={animate} 
        initial="initial"
        whileInView={"heading"}>Subscribe For Latest Updates.</m.h1>
        <m.div variants={animate} 
        initial="initial"
        whileInView={"input"} className="footer_input">
          <input type="text" placeholder="Email address" />
          <button>Submit</button>
        </m.div>
        <div className="footer_links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/event">Events</Link>
            </li>
          </ul>
        </div>
      </div>

      <m.div variants={animate} 
        initial="initial"
        whileInView={"sketch"} className="footer_logo">
        SKETCH
      </m.div>
    </div>
  );
};

export default Footer;
