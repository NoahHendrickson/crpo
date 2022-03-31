import React, { useState, useRef, useEffect } from "react";
import { getPricingRt } from "./helpers";
import { ReactComponent as RemoveX } from "./icons/removeX-01.svg";
import Model, { set, ref } from "@expressive/mvc";
class PriceControl extends Model {
  currentPrice = [];

  // didCreate() {
  //   return getPricingRt(coins.name, (price) => {
  //     this.currentPrice = set([price])
  //   })
  // }
}



const Coin = ({ coins, removeCoin }) => {

  const {
    currentPrice
  } = PriceControl.use()

  // useEffect(() => {
  //   return getPricingRt(coins.name, (price) => {
  //     console.log(`the price is ${price}`)
  //     this.currentPrice = set([price])
  //   })
  // }, [coins]);
  // const [currentPrice, setCurrentPrice] = useState(coins.price);


  return (
    <div data={coins.id} className="coin">
      <ul className="coin__info">
        <li>{coins.name.toUpperCase()}</li>
        <li>${currentPrice}</li>
      </ul>
      <button onClick={removeCoin} className="coin__removeButton">
        <RemoveX />
      </button>
    </div>
  );
};

export default Coin;
