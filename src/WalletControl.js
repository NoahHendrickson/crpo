import Model, { from, ref } from "@expressive/mvc";
import { getJSON, getFromStorage, setToStorage, getPricingRt } from "./helpers";

const STORED_ASSETS = "assets list";
const STORED_PIECHART_LABELS = "Pie Chart Labels";
const STORED_PIECHART_AMOUNTS = "Pie Chart Amounts";
const COIN_GECKO = "https://api.coingecko.com/api/v3/coins/markets";
const STORED_COINS = "coins list";

class WalletControl extends Model {
  assetData = [];
  coins = getFromStorage(STORED_COINS) || [];
  assets = getFromStorage(STORED_ASSETS) || [];
  chartLabels = getFromStorage(STORED_PIECHART_LABELS) || [];
  chartAmounts = getFromStorage(STORED_PIECHART_AMOUNTS) || [];

  tickerRef = ref();
  inputNameRef = ref();
  inputAmountRef = ref();
  inputExchangeRef = ref();

  constructor() {
    super();

    this.effect((state) => {
      setToStorage(STORED_COINS, state.coins);
      setToStorage(STORED_ASSETS, state.assets);
      setToStorage(STORED_PIECHART_LABELS, state.chartLabels);
      setToStorage(STORED_PIECHART_AMOUNTS, state.chartAmounts);
    });

    const requestCoins = getJSON(COIN_GECKO, {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
    });

    requestCoins.then((coins) => {
      this.assetData = this.assetData.concat(coins);
    });
  }

  addCoin = (e) => {
    e.preventDefault();
    const { assetData } = this;
    let ticker = this.tickerRef.current.value;

    for (let i = 0; i < assetData.length; i++) {
      const coin = assetData[i];

      if (coin.symbol !== ticker) continue;

      this.coins = this.coins.concat({
        id: coin.id,
        name: coin.symbol,
        price: coin.current_price,
      });
    }
  };

  removeCoin = (e) => {
    const selected = e.target.closest(".coin");
    const { coins } = this;

    for (let i = 0; i < coins.length; i++) {
      if (coins[i].id === selected.getAttribute("data")) {
        const loser = coins.indexOf(coins[i]);
        coins.splice(loser, 1);

        this.coins = [...coins];
      }
    }
  };

  addAsset = (e) => {
    e.preventDefault();

    const { assetData } = this;
    let ticker = this.inputNameRef.current.value;
    let amount = this.inputAmountRef.current.value;
    let exchange = this.inputExchangeRef.current.value;

    const coin = this.assetData.find((coin) => {
      return coin.symbol === ticker.toLowerCase();
    });

    this.assets = this.assets.concat({
      id: coin.id,
      name: coin.symbol,
      price: coin.current_price,
      amount: amount,
      exchange: exchange,
    });

    this.chartLabels = this.chartLabels.concat(coin.symbol.toUpperCase());
    this.chartAmounts = this.chartAmounts.concat(coin.current_price * amount)

    // getPricingRt(coin.symbol, (price) => {
    //   this.chartAmounts = amount * price;
    // });
  };

  removeAsset = (e) => {
    e.preventDefault();

    const selected = e.target.closest("tr");
    const { assets, chartAmounts, chartLabels } = this;

    for (let i = 0; i < assets.length; i++) {
      if (assets[i].name === selected.getAttribute("data")) {
        const loser = assets.indexOf(assets[i]);

        assets.splice(loser, 1);
        this.assets = [...assets];
      }
      if (chartLabels[i].toLowerCase() === selected.getAttribute("data")) {
        const loser = chartLabels.indexOf(chartLabels[i]);

        chartLabels.splice(loser, 1);
        this.chartLabels = [...chartLabels];

        chartAmounts.splice(loser, 1);
        this.chartAmounts = [...chartAmounts];
      }
    }
  };

  removeAllAssets = () => {
    localStorage.removeItem(STORED_ASSETS);
    localStorage.removeItem(STORED_PIECHART_LABELS);
    localStorage.removeItem(STORED_PIECHART_AMOUNTS);

    this.assets = [];
    this.chartLabels = [];
    this.chartAmounts = [];
  };

  removeAllCoins = () => {
    localStorage.removeItem(STORED_COINS);

    this.coins = [];
  };
}

export default WalletControl;
