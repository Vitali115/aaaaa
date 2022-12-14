import React, { useState } from "react";
import DrawerComponent from "./Drawer";
import ToolbarComponent from "./Toolbar";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <div className="App">
      <ToolbarComponent openDrawerHandler={openDrawer} />
      <DrawerComponent open={isDrawerOpen} toggleDrawerHandler={toggleDrawer} />
    </div>
  );
};

export default Navbar;
