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
      <form
        className="feedback__form"
        action="https://formsubmit.co/noahjames017@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://noahhendrickson.github.io/crpo/?"
        ></input>
        <input
          className="feedback__input"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="feedback__input"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input type="hidden" name="_subject" value="New submission!"></input>
        <textarea
          className="feedback__input feedback__message"
          type="text"
          name="message"
          placeholder="Write Your Message Here"
          required
        ></textarea>

        <button className="feedback__button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
