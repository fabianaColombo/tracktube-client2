import React from "react";
import { baseOptions } from "./constants";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function GraphSubscribersCount(props) {
  const options = {
    ...baseOptions,
    series: props.series,
  };
  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}
