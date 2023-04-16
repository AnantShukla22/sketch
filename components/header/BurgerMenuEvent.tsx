import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { useRouter } from 'next/router'
import { useState } from "react"

const BurgerMenuEvent = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    return (
        <div className="event_burgerMenu" >

            {open?<BiRightArrow size={40} className="burger_icon" onClick={() => setOpen(!open)}/>:< BiLeftArrow size={40} className="burger_icon"onClick={() => setOpen(!open)}/>}
            {open &&
                <ul>
                    <li className="" onClick={() => router.push("/")}>Home</li>
                    <li className="" onClick={() => router.push("about")}>About </li>
                    <li className="" onClick={() => router.push("team")}>Team</li>
                    <li className="" onClick={() => router.push("events")}>Events</li>
                </ul>}
        </div>
    )
}

export default BurgerMenuEvent