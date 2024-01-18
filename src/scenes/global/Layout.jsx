import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Import your Sidebar component
import Topbar from "./Topbar"; // Import your Topbar component
import Welcome from "../welcome/Welcome";


const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
      <Sidebar isSidebar={isSidebar} />
      <div className="content-container">
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Welcome /> {/* Render the Welcome component */}
          <Outlet /> {/* This will render nested components */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
