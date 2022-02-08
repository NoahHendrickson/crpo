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
      <h1>Wallets</h1>
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
