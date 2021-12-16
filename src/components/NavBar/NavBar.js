import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import adlrobotics from './img/adlrobotics_navbar.png'

const NavBar = () => {
	return (
		<nav className='containerNavBar'>
			<ul>
				<li>
					<NavLink to="/">
						<img src={adlrobotics} alt="imagen producto" width="60px" />
					</NavLink>
				</li>
				<li>
					<NavLink to="/" acctiveClassName="active" className="item">
						INICIO
					</NavLink>
				</li>
				<li>
					<NavLink to="/category/all" acctiveClassName="active" className="item">
						PRODUCTOS
					</NavLink>
				</li>
			</ul>
			<ul>
				<li>
					<NavLink to="/cart">
						<CartWidget />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;