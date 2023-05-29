import React, { useState } from "react";
export const TopBar = () => {
  const [style, setStyle] = useState(
    "navbar-nav nav-color sidebar sidebar-dark accordion"
  );

  const changeStyle1 = () => {
    if (style == "navbar-nav nav-color sidebar sidebar-dark accordion") {
      setStyle("navbar-nav nav-color sidebar sidebar-dark accordion toggled1");
    } else {
      setStyle("navbar-nav nav-color sidebar sidebar-dark accordion");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={changeStyle1}
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle">
              <i className="fas fa-search fa-fw"></i>
            </a>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle">
              <i className="fas fa-bell fa-fw"></i>
            </a>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" id="userDropdown">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Nikil Deshwani
              </span>
              <img
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
