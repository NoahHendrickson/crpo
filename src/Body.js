import React from "react";

const Body = () => {
  return (
    <div className="body">
      <Wallet />
      <Content />
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet__slidedown">
        <form className="wallet__form">
          <input className="wallet__input" placeholder="ticker" />
          <input className="wallet__input" placeholder="Quantity" />
          <input className="wallet__input" placeholder="Exchange" />
          <button>Submit</button>
        </form>
      </div>
      <h1 className="wallet__title">Wallets</h1>
      <ul className="wallet__list">
        <li className="asset">
          <p>ETH</p>
          <p>2</p>
          <p>Coinbase</p>
          <p>3009</p>
        </li>
      </ul>
    </div>
  );
};

const Content = () => {
  return <div className="content"></div>;
};

export default Body;
