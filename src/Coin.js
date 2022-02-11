import React from "react";

const Coin = ({ coins }) => {
  return (
    <ul className="coin">
      <li>{coins.name} 🚀</li>
      <li>${coins.price}</li>
    </ul>
  );
};

export default Coin;
