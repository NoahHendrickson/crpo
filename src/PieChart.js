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

const PieChart = ({ assets, data }) => {
  // const [amounts, setAmounts] = useState([]);
  // const [values, setValues] = useState([]);
  // const [labels, setLabels] = useState([]);

  // useEffect(() => {
  //   for (let i = 0; i < assets.length; i++) {
  //     let label = assets[i].name;
  //     setLabels((prevLabels) => {
  //       return [...prevLabels, label];
  //     });
  //   }
  // }, [assets]);

  // useEffect(() => {
  //   assets.map((assets) => {
  //     let label;
  //     let quantity;
  //     let price;
  //     label = assets.name;
  //     quantity = assets.amount;
  //     price = assets.price;
  //     setLabels((prevLabels) => {
  //       if (prevLabels] === assets.name) {
  //         return [...prevLabels];
  //       } else {
  //         return [...prevLabels, label];
  //       }
  //     });
  //     setAmounts((prevQuantity) => {
  //       return [...prevQuantity, quantity * price];
  //     });
  //   });
  //   return () => {};
  // }, [assets]);

  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       data: amounts,
  //       backgroundColor: [
  //         "rgba(241, 119, 4, .5)",
  //         "rgba(91, 28, 237, .5)",
  //         "rgba(145, 255, 156, .5)",
  //         "rgba(67, 123, 226, .5)",
  //         "rgba(0, 202, 202, .5)",
  //         "rgba(2, 142, 119, .5)",
  //       ],
  //       borderColor: [
  //         "rgba(241, 119, 4, 1)",
  //         "rgba(91, 28, 237, 1)",
  //         "rgba(145, 255, 156, 1)",
  //         "rgba(67, 123, 226, 1)",
  //         "rgba(0, 202, 202, 1)",
  //         "rgba(2, 142, 119, 1)",
  //       ],
  //       borderWidth: 3,
  //     },
  //   ],
  // };

  // useEffect(() => {
  //   const storedAssets = JSON.parse(localStorage.getItem(STORED_ASSETS));
  //   if (storedAssets) {
  //     storedAssets.map((assets) => {
  //       let label = assets.name;
  //       setLabels((prevLabels) => {
  //         return [...prevLabels, label];
  //       });
  //     });
  //   }
  // }, [assets]);

  return <Doughnut data={data} width={200} height={300} />;
};

export default PieChart;
