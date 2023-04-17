import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/old_logo.png";
import { useRouter } from "next/router";

const Header = () => {

  const router=useRouter();
  return (
    <>
    <div className="header_container">

<div className="header_navList">
  <ul>
    <li>
      <span onClick={()=>{router.push("/")}}>Home</span>
    </li>
    <li>
      <span onClick={()=>{router.push("/about")}}>About</span>
    </li>
  </ul>
</div>
<div className="header_logo">
  <Image src={logo} alt="" />
</div>
<div className="header_navList">
  <ul>
    <li>
      <span onClick={()=>{router.push("/team")}}>Team</span>
    </li>
    <li>
      <span onClick={()=>{router.push("/events")}}>Events</span>
    </li>
  </ul>
</div>
</div>
    </>
    
  );
};

export default Header;
