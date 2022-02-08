import React from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";
import { ProfileDropdown, DonateDropdown } from "./ProfileDropdown";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <NavList>
        <NavButton icon="😇">
          <ProfileDropdown />
        </NavButton>
        <NavButton icon="🤑" />
        <NavButton icon="🤬" />
      </NavList>
    </nav>
  );
};

const NavList = (props) => {
  return <ul className="navList">{props.children}</ul>;
};

const NavButton = (props) => {
  return (
    <li>
      <a href="#" className="navButton__icon">
        {props.icon}
        {props.children}
      </a>
    </li>
  );
};

export default Navbar;
