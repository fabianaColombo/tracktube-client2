export const baseOptions = {
  chart: {
    type: "line",
  },
  title: {
    text: "Compare Subscribers",
  },
  subtitle: {
    text:
      "Explore the data, see the differences in the number of subscribers for different YouTube channels. Save view and build number of subscribers over time for better analysis of your competitors.",
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
    title: {
      text: "channel",
    },
    tickInterval: 1,
  },
};
