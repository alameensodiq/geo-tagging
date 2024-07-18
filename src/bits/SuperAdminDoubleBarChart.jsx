import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function SuperAdminDoubleBarChart() {
  const series = [
    {
      name: "Income",
      type: "column",
      data: [60, 70, 25, 65, 35, 88, 38, 46]
    },
    {
      name: "Cashflow",
      type: "column",
      data: [15, 93, 31, 40, 41, 49, 55, 85]
    },
    {
      name: "Income",
      type: "column",
      data: [14, 70, 25, 75, 35, 28, 88, 46]
    },
    {
      name: "Cashflow",
      type: "column",
      data: [11, 73, 31, 70, 41, 49, 95, 85]
    },
    {
      name: "Cashflow",
      type: "column",
      data: [11, 53, 31, 90, 41, 49, 95, 85]
    }
  ];

  const options = {
    colors: ["#1A87D7", "#28385C", "#7C65E0", "#7CC8F3", "#F3827C"],
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
      width: 4,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
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
export default SuperAdminDoubleBarChart;
