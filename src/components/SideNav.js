import { NavLink } from "react-router-dom";
import { AiFillCar, AiFillFilePpt } from "react-icons/ai";
import { BsClipboardData, BsBarChartLine } from "react-icons/bs";

const SideNav = () => {
    return (
        <div className="NavBar">
            <div className="NavBarContent">
                <div className="navText"><NavLink to='/dashboard'><BsBarChartLine className="navIcon" />Dashboard</NavLink></div>
                <div className="navText"><NavLink to='/overview'><AiFillCar className="navIcon" />Parkeringsoversigt</NavLink></div>
                <div className="navText"><NavLink to='/reports'><BsClipboardData className="navIcon" />Rapporter</NavLink></div>
                <div className="navText"><NavLink to='/createreport'><AiFillFilePpt className="navIcon" />Lav egen rapport</NavLink></div>
            </div>
        </div>
    )
}

export default SideNav