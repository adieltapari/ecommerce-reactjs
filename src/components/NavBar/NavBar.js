import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
	return (
		<nav className='containerNavBar'>
			<ul>
				<li>
					<a href='https://www.google.com'>INICIO</a>
				</li>
				<li>
					<a href='https://www.google.com'>PRODUCTOS</a>
				</li>
				<li>
					<a href='https://www.google.com'>NOSOTROS</a>
				</li>
				<li>
					<a href='https://www.google.com'>INFORMACIÓN ÚTIL</a>
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