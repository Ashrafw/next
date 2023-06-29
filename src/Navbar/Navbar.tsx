import React from "react";
import { NavbarWrapper } from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="logo">Ashraf</div>
      <div className="mode">light/dark</div>
    </NavbarWrapper>
  );
};

export default Navbar;
