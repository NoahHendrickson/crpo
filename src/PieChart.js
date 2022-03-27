import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Legend, Tooltip);

const options = {
  animation: true,
  plugins: {
    title: {
      display: true,
      text: "Portfolio",
    },
  },
};

const PieChart = ({ assets, data }) => {
  // const [liveAmt, setLiveAmt] = useState([]);

  // assets.map((assets) => {
  //   const ws = new WebSocket(
  //     `wss://stream.binance.com:9443/ws/${assets.name}usdt@trade`
  //   );
  //   ws.onmessage = (e) => {
  //     let priceObject = JSON.parse(e.data);
  //     let current = parseFloat(priceObject.p).toFixed(2);
  //     setLiveAmt(() => {
  //       return [current];
  //     });
  //   };
  // });
  return <Doughnut options={options} data={data} width={200} height={300} />;
};

export default PieChart;
