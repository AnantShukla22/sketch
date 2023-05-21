import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/old_logo.png";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useRouter } from "next/router";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="header_responsive">
        {open ? (
          <BiRightArrow
            size={40}
            className="burger_icon"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <BiLeftArrow
            size={40}
            className="burger_icon"
            onClick={() => setOpen(!open)}
          />
        )}
        {open && (
          <ul>
            <li className="" onClick={() => router.push("/")}>
              Home
            </li>
            <li className="" onClick={() => router.push("about")}>
              About{" "}
            </li>
            <li className="" onClick={() => router.push("team")}>
              Team
            </li>
            <li className="" onClick={() => router.push("events")}>
              Events
            </li>
          </ul>
        )}
      </div>
      <div className="header_container">
        <div className="header_navList">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="header_logo">
          <Image src={logo} alt="" />
        </div>
        <div className="header_navList">
          <ul>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
