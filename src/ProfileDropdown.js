import React from "react";

export const ProfileDropdown = (props) => {
  return (
    <div className="dropdown">
      {/* <div className="decorationBox"></div> */}
      <span className="dropdownTitle">{props.dropdownTitle}</span>
      <form>
        <label>Username</label>
        <input placeholder="Email" />
        <label>Password</label>
        <input placeholder="password" />
        <span className="forgotPassword">forgot password</span>
        <div className="formButtonContainer">
          <button className="profileButtons">Sign Up</button>
          <button className="profileButtons">Login</button>
        </div>
      </form>
    </div>
  );
};

export const DonateDropdown = (props) => {
  return (
    <div className="dropdown">
      <span className="dropdownTitle">{props.dropdownTitle}</span>
      <div className="donateButtonContainer">
        <button className="donateButton">send BTC</button>
        <button className="donateButton">send ETH</button>
        <button className="donateButton">Cashapp</button>
        <button className="donateButton">Paypal</button>
      </div>
    </div>
  );
};
