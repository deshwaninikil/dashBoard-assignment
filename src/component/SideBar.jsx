import React, { useState } from "react";
export const SideBar = () => {
  const [style, setStyle] = useState(
    "navbar-nav nav-color sidebar sidebar-dark accordion"
  );
  const changeStyle = () => {
    if (style == "navbar-nav nav-color sidebar sidebar-dark accordion") {
      setStyle("navbar-nav nav-color sidebar sidebar-dark accordion toggled");
    } else {
      setStyle("navbar-nav nav-color sidebar sidebar-dark accordion");
    }
  };
  return (
    <>
      <ul className={style} id="accordionSidebar">
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
              onClick={changeStyle}
            ></button>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Hotel Management</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>User Management</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Booking</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link">
            <i className="fas fa-fw fa-table"></i>
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </>
  );
};
