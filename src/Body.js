import React from "react";
import Wallet from "./Wallet";

const Body = () => {
  return (
    <div className="body">
      <Wallet />
      <Content />
    </div>
  );
};

const Content = () => {
  return <div className="content"></div>;
};

export default Body;
