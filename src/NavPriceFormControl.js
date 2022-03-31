import Model, { from, ref, set } from "@expressive/mvc";
import { getJSON, getFromStorage, setToStorage } from "./helpers";
import WalletControl from "./WalletControl";

const STORED_COINS = "coins list";

class NavPriceFormControl extends Model {
  coins = [];

  tickerRef = ref();

  removeAllCoins = () => {
    localStorage.removeItem(STORED_COINS);
    this.coins = [];
  };
}

export default NavPriceFormControl;
