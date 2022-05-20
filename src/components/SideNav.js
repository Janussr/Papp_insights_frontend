import { NavLink } from "react-router-dom";
import { AiFillCar } from "react-icons/ai";
import { BsClipboardData, BsBarChartLine } from "react-icons/bs";

const SideNav = () => {
    return (
        <div className="NavBar">
            <div className="NavBarContent">
                <div className="navText"><BsBarChartLine className="carIcon" />Dashboard</div>
                <div className="navText"><AiFillCar className="carIcon" />Parkeringsoversigt</div>
                <div className="navText"><NavLink activeclassname='active' to='/reports'><BsClipboardData className="carIcon" />Rapporter</NavLink></div>
            </div>
        </div>
    )
}

export default SideNav