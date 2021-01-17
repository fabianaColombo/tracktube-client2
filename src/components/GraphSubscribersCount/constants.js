import Highcharts from "highcharts";
export const baseOptions = {
  chart: {
    type: "line",
  },
  title: {
    text: "Compare Subscribers",
  },
  subtitle: {
    text:
      "Explore the data and spot the differences in the number of subscribers for different YouTube channels.",
  },
  credits: {
    enabled: false,
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            enabled: false,
          },
        },
      },
    ],
  },
  yAxis: {
    title: {
      text: "subscribers",
    },
  },
  xAxis: {
    type: "datetime",
    title: {
      text: "days",
    },

    labels: {
      formatter: function () {
        return Highcharts.dateFormat("%Y-%m-%e", this.value);
      },
    },
    ordinal: true,
    lineWidth: 1,
    minorGridLineWidth: 1,
    minorTickInterval: "auto",
    showLastLabel: true,
    endOnTick: false,
  },
};
