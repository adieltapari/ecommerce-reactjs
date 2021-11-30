import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className='containerNavBar'>
			<ul>
				<li>
					<NavLink to="/" acctiveClassName="active" className="item">
						Inicio
					</NavLink>
				</li>
				<li>
					<NavLink to="/category/MLA3025" acctiveClassName="active" className="item">
						celulares
					</NavLink>				
				</li>
			</ul>
			<ul>
				<li>
					<CartWidget/>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;