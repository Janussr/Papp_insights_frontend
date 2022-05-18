import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul className='header'>
                <li><NavLink activeclassname='active' to='/'>Hjem</NavLink></li>
                <li><NavLink activeclassname='active' to='/reports'>Rapporter</NavLink></li>
            </ul>
        </div >

    )
}

export default Header