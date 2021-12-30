import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBarCategory.css'
const NavBarCategory = () => {
    return (
        <nav >
            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <NavLink to="/category/all" acctiveClassName="active" className="item">
                        GENERAL
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/category/kits" acctiveClassName="active" className="item">
                        KITS
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/category/electronica" acctiveClassName="active" className="item">
                        ELECTRÓNICA
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/category/mecanica" acctiveClassName="active" className="item">
                        MECANICA
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarCategory
