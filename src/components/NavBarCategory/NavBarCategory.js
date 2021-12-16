import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBarCategory.css'
const NavBarCategory = () => {
    return (
        <nav className='containerNavBarCategory'>
            <ul>
                <li>
                    <NavLink to="/category/kits" acctiveClassName="active" className="item">
                        KITS
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/electronica" acctiveClassName="active" className="item">
                        ELECTRÓNICA
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/mecanica" acctiveClassName="active" className="item">
                        MECANICA
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarCategory
