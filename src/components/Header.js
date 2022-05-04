import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul className='header'>
                <li><NavLink activeclassname='active' to='/'>Home</NavLink></li>

                <li> <NavLink activeclassname='active' to='/create-report'>Create Report</NavLink></li>
            </ul>
        </div >
    )
}

export default Header