import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Recebimentos", "Pagamentos"],
  ["2020", 213000, 32032],
  ["2021", 55000, 19222],
  ["2022", 98600, 27211],
  ["2023", 311233, 44320],
];

export const options = {
  curveType: "function",
  legend: { position: "bottom" },
  hAxis: {
    slantedText: false,
    format: "none",
    textStyle: {
      color: "white", 
      fontName: "Poppins", 
    },
  },
  vAxis: {
    textStyle: {
      color: "white", 
      fontName: "Poppins",
    },
  },
  titleTextStyle: {
    color: "white", 
    fontName: "Poppins", 
  },
  colors: ["blue", "purple"],
  backgroundColor: "#FFFF",
  title: "Company Performance",
  titleTextStyles: {
    color: "white",
    fontName: "Poppins",
  },
};

export function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
