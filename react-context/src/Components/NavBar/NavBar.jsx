import {NavLink} from 'react-router-dom';

import "./NavBar.css"

const Navbar = () => {
  return (
    <nav>
        <ul className="nav-bar">
            <li className="nav-item">
                {/*<Link to="/">Home</Link> */}
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                {/*<Link to="/about">About</Link>*/}
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                {/*<Link to="/about">About</Link>*/}
                <NavLink to="/company">Products</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar