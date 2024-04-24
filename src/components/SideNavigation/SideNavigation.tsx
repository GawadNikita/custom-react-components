import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes.constant";
import "./SideNavigation.scss";
const SideNavigation: React.FC = () => {
  const navLinksComponents = ROUTES.COMPONENTS;
  return (
    <aside className="sidebar-container">
      <h2>Components</h2>
      <nav>
        <ul className="side-nav-list">
          {Object.values(navLinksComponents).map((page: any, index) => {
            return (
              <li key={`nav-link-${index}`}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to={page.url}
                >
                  {page.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
