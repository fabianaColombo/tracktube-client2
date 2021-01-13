import React, { useState } from "react";
import { baseOptions } from "./constants";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function GraphSubscribersCount() {
  const [series, setSeries] = useState([
    { name: "S", data: [23, 32, 42] },
    { name: "R", data: [45, 54, 64] },
  ]);

  const options = {
    ...baseOptions,
    series,
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
