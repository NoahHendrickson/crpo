import React from "react";

export const ProfileDropdown = () => {
  return (
    <div className="dropdown">
      <form>
        <label>Username</label>
        <input placeholder="Email" />
        <label>Password</label>
        <input placeholder="password" />
        <span className="forgotPassword">forgot password</span>
        <div className="formButtonContainer">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export const DonateDropdown = () => {
  return (
    <div className="dropdown">
      <form>
        <label>But me Chipotle</label>
        <input placeholder="Email" />
        <label>Messgae</label>
        <input placeholder="password" />
      </form>
    </div>
  );
};
