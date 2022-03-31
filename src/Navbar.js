import React, { useState } from "react";
import { ReactComponent as Logo } from "./icons/crpo-logo.svg";
import {
  ProfileDropdown,
  DonateDropdown,
  FeedbackDropdown,
} from "./ProfileDropdown";
import NavPriceForm from "./NavPriceForm";
import onClickOutside from "react-onclickoutside";
import Model, { set } from "@expressive/mvc";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo__container">
        <Logo className="navbar__logo" />
      </div>
      <NavPriceForm />
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

debugger
class DropdownControl extends Model {
  open = false;

  toggleMenu = () => {
    this.open = !this.open;
  }


}


// document.addEventListener("click", (e) => {
//   const thisDropdown = e.target.closest(".navButton__icon");
//   const thisMenu = e.target.closest(".dropdown");
//   if (!thisDropdown) {
//     console.log('hello')
//     this.open = false;
//   }
//   // if (thisMenu) {
//   //   set(true);
//   // }
// });

const NavButton = (props) => {
  const {
    open,
    toggleMenu,
  } = DropdownControl.use()


  return (
    <li>
      <a onClick={ toggleMenu } href="#" className="navButton__icon">
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default Navbar;
