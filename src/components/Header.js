import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul className='header'>
                <li><NavLink activeclassname='active' to='/'>Home</NavLink></li>
                <li><NavLink activeclassname='active' to='/reports'>Reports</NavLink></li>
            </ul>
        </div >

    )
}

export default Header