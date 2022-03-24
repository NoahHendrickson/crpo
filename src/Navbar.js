import React, { useState } from "react";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";
import {
  ProfileDropdown,
  DonateDropdown,
  FeedbackDropdown,
} from "./ProfileDropdown";
import NavPrices from "./NavPrices";
import onClickOutside from "react-onclickoutside";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo__container">
        <Logo className="navbar__logo" />
      </div>
      <NavPrices />
      <NavList>
        <NavButton icon="😇">
          <ProfileDropdown dropdownTitle="Profile" />
        </NavButton>
        <NavButton icon="🤑">
          <DonateDropdown dropdownTitle="Buy Me Chipotle" />
        </NavButton>
        <NavButton icon="🤬">
          <FeedbackDropdown dropdownTitle="Feedback" />
        </NavButton>
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

  document.addEventListener("click", (e) => {
    const thisDropdown = e.target.matches(".navButton__icon");
    const thisMenu = e.target.closest(".dropdown");
    if (!thisDropdown) {
      setOpen(false);
    }
    if (thisMenu) {
      setOpen(open);
    }
  });

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
