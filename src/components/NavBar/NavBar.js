import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import adlrobotics from './img/adlrobotics_navbar.png'

const NavBar = () => {
	return (
		<nav className='containerNavBar'>
			<ul>
				<li>
					<img src={adlrobotics} alt="imagen producto" width="60px" />
				</li>
				<li>
					<NavLink to="/" acctiveClassName="active" className="item">
						INICIO
					</NavLink>
				</li>
				<li>
					<NavLink to="/category/MLA3025" acctiveClassName="active" className="item">
						PRODUCTOS
					</NavLink>
				</li>
			</ul>
			<ul>
				<li>
					<CartWidget />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;