import React, { useState } from "react";
import "./Dashboard.css";
import { Table } from "./component/Table";
import { Footer } from "./component/Footer";
import { Card } from "./component/Card";
import { SideBar } from "./component/SideBar";
import { TopBar } from "./component/TopBar";

export const Dashboard = () => {
  const [style, setStyle] = useState(
    "navbar-nav nav-color sidebar sidebar-dark accordion"
  );

  return (
    <div>
      <body id="page-top">
        <div id="wrapper">
          <SideBar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <Card />
            </div>
            <Table />
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
};
