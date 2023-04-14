import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <h1>Subscribe For Latest Updates.</h1>
        <div className="footer_input">
          <input type="text" placeholder="Email address" />
          <button>Submit</button>
        </div>
        <div className="footer_links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
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

      <div className="footer_logo">
        SKETCH
      </div>
    </div>
  );
};

export default Footer;
