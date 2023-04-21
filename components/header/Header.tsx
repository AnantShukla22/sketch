import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/old_logo.png";
import { useRouter } from "next/router";

const Header = () => {

  return (
    <>
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
