import React from "react";

export const ProfileDropdown = (props) => {
  return (
    <div className="dropdown">
      <span className="dropdown__title">{props.dropdownTitle}</span>
      <span className="fillerContent">
        This is where profile info will go when I learn how to use firebase :)
      </span>
      {/* <form>
        <label>Username</label>
        <input placeholder="Email" />
        <label>Password</label>
        <input placeholder="password" />
        <span className="forgotPassword">forgot password</span>
        <div className="profileButton__container">
          <button className="profileButton">Sign Up</button>
          <button className="profileButton">Login</button>
        </div>
      </form> */}
    </div>
  );
};

export const DonateDropdown = (props) => {
  return (
    <div className="dropdown">
      <span className="dropdown__title">{props.dropdownTitle}</span>
      <div className="donateButton__container">
        <span className="fillerContent">
          A place to support me once the app is deployed
        </span>
        {/* <button className="donateButton">send BTC</button>
        <button className="donateButton">send ETH</button>
        <button className="donateButton">Cashapp</button>
        <button className="donateButton">Paypal</button> */}
      </div>
    </div>
  );
};

export const FeedbackDropdown = (props) => {
  return (
    <div className="dropdown">
      <span className="dropdown__title">{props.dropdownTitle}</span>
      <div className="donateButton__container">
        <span className="fillerContent">
          A place to give me feedback when the app is deployed
        </span>
        {/* <button className="donateButton">send BTC</button>
        <button className="donateButton">send ETH</button>
        <button className="donateButton">Cashapp</button>
        <button className="donateButton">Paypal</button> */}
      </div>
    </div>
  );
};
