import React, { useState } from "react";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";
import { ProfileDropdown, DonateDropdown } from "./ProfileDropdown";
import NavPrices from "./NavPrices";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <NavPrices />
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
    <div className="navList">
      <ul className="navList__items">{props.children}</ul>
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
