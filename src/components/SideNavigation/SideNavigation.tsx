import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavigation.scss";
const SideNavigation: React.FC = () => {
  return (
    <aside className="sidebar-container">
      <h2>Components</h2>
      <nav>
        <ul className="side-nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/button"
            >
              Button
            </NavLink>
          </li>
        </ul>
      </nav>
      <h2>Form Elements</h2>
      <nav>
        <ul className="side-nav-list">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/checkbox"
            >
              Checkbox
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
