import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";
import { ProfileDropdown, DonateDropdown } from "./ProfileDropdown";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <NavList>
        <NavButton icon="😇">
          <ProfileDropdown dropdownTitle="Profile" />
        </NavButton>
        <NavButton icon="🤑">
          <DonateDropdown dropdownTitle="Buy Me Chipotle" />
        </NavButton>
        <NavButton icon="🤬" />
      </NavList>
    </nav>
  );
};

const NavList = (props) => {
  return (
    <div className="navListBG">
      <ul className="navList">{props.children}</ul>
    </div>
  );
};

const NavButton = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <a onClick={() => setOpen(!open)} href="#" className="navButton__icon">
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default Navbar;
