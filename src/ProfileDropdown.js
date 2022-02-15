import React from "react";

export const ProfileDropdown = (props) => {
  return (
    <div className="dropdown">
      <span className="dropdown__title">{props.dropdownTitle}</span>
      <form>
        <label>Username</label>
        <input placeholder="Email" />
        <label>Password</label>
        <input placeholder="password" />
        <span className="forgotPassword">forgot password</span>
        <div className="profileButton__container">
          <button className="profileButton">Sign Up</button>
          <button className="profileButton">Login</button>
        </div>
      </form>
    </div>
  );
};

export const DonateDropdown = (props) => {
  return (
    <div className="dropdown">
      <span className="dropdown__title">{props.dropdownTitle}</span>
      <div className="donateButton__container">
        <button className="donateButton">send BTC</button>
        <button className="donateButton">send ETH</button>
        <button className="donateButton">Cashapp</button>
        <button className="donateButton">Paypal</button>
      </div>
    </div>
  );
};
