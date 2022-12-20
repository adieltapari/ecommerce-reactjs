import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./NavBarCategory.css";
const NavBarCategory = () => {
  return (
    <>
      <div className="navCategoryContainer">
        <NavLink to="/category/all" acctiveClassName="active" className="item">
          <div className="iconContainer">
            <Icon name="bars" size="large" />
            GENERAL
          </div>
        </NavLink>
        <NavLink to="/category/kits" acctiveClassName="active" className="item">
          <div className="iconContainer">
            <Icon name="cog" size="large" />
            KITS
          </div>
        </NavLink>
        <NavLink
          to="/category/electronica"
          acctiveClassName="active"
          className="item"
        >
          <div className="iconContainer">
            <Icon name="microchip" size="large" />
            ELECTRÓNICA
          </div>
        </NavLink>
        <NavLink
          to="/category/mecanica"
          acctiveClassName="active"
          className="item"
        >
          <div className="iconContainer">
            <Icon name="key" size="large" />
            MECANICA
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default NavBarCategory;
