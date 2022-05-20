import { NavLink } from "react-router-dom";
import PappLogo from "../img/PappLogo.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ show, setShow }) => {

    return (
        <div className="TopBar">
            <AiOutlineMenu className="MenuIcon" onClick={() => setShow(!show)} />
            <NavLink className="insight" to='/'><img className="logo" src={PappLogo}></img>Insight</NavLink>
        </div >

    )
}

export default Header