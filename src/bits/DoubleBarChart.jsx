import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DoubleBarChart({ data }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const series = data &&
    data && [
      {
        name: "Income",
        type: "column",
        data: months.map((month) => data[month]?.punctualityPercent || 0)
      },
      {
        name: "Cashflow",
        type: "column",
        data: months.map(
          (month) => data[month]?.timeStampCompliancePercent || 0
        )
      }
    ];

  const options = {
    colors: ["#1A87D7", "#28385C"],
    chart: {
      height: 220,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    grid: {
      //   show: false,
      xaxis: {
        lines: {
          show: false // Show grid lines along x-axis
        }
      },
      yaxis: {
        lines: {
          show: true // Show grid lines along x-axis
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
        borderRadius: 1
        //   endingShape: 'rounded',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      //   curve: "smooth",
      //   width: [1, 1, 4]
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    },
    fill: {
      opacity: 1
    },
    // tooltip: {
    //   x: {
    //     formatter: undefined,
    //     title: "Title: "
    //   }
    // },
    legend: {
      show: false // Set this to false to hide legend labels
    }
  };

  return <Chart options={options} series={series} type="bar" height={290} />;
}
export default DoubleBarChart;
