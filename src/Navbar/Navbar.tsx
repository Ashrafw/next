import React, { Dispatch, SetStateAction } from "react";
import { NavbarWrapper } from "./Navbar.styles";
import { FaMoon, FaSun } from "react-icons/fa";

type NavbarProps = {
  nightMode: boolean;
  setNightMode: Dispatch<SetStateAction<boolean>>;
};
const Navbar = ({ nightMode, setNightMode }: NavbarProps) => {
  return (
    <NavbarWrapper>
      <div className="logo">Ashraf</div>
      <div className="mode" onClick={() => setNightMode((prev) => !prev)}>
        {nightMode ? <FaMoon /> : <FaSun />}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
