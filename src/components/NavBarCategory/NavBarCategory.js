import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarCategory.css";
const NavBarCategory = () => {
  return (
    <>
      <div className="navCategoryContainer">
        <NavLink to="/category/all" acctiveClassName="active" className="item">
          GENERAL
        </NavLink>
        <NavLink to="/category/kits" acctiveClassName="active" className="item">
          KITS
        </NavLink>
        <NavLink
          to="/category/electronica"
          acctiveClassName="active"
          className="item"
        >
          ELECTRÓNICA
        </NavLink>
        <NavLink
          to="/category/mecanica"
          acctiveClassName="active"
          className="item"
        >
          MECANICA
        </NavLink>
      </div>
    </>
  );
};

export default NavBarCategory;
