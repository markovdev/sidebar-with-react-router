import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ text, path, icon }) => {
  return (
    <li className="sidebar__item">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
        }
        activeClassName="sidebar__link sidebar__link--active"
      >
        {icon}
        {text}
      </NavLink>
    </li>
  );
};

export default Link;
