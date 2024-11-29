import React from "react";
import Chart from "react-apexcharts";

function SuperAdminDoubleBarChart({ data }) {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
  ];

  const series =
    data && data
      ? [
          {
            name: "Income (Standard)",
            type: "column",
            data: months.map((month) => data[month]?.STANDARD || 0)
          },
          {
            name: "Cashflow (Standard Plus)",
            type: "column",
            data: months.map((month) => data[month]?.STANDARD_PLUS || 0)
          },
          {
            name: "Cashflow (Enterprise)",
            type: "column",
            data: months.map((month) => data[month]?.ENTERPRISE || 0)
          },
          {
            name: "Cashflow (Enterprise Plus)",
            type: "column",
            data: months.map((month) => data[month]?.ENTERPRISE_PLUS || 0)
          },
          {
            name: "Cashflow (Free Trial)",
            type: "column",
            data: months.map((month) => data[month]?.FREE_TRIAL || 0)
          }
        ]
      : [
          {
            name: "Income (Standard)",
            type: "column",
            data: [60, 70, 25, 65, 35, 88, 38, 46, 45, 90, 78, 99]
          },
          {
            name: "Cashflow (Standard Plus)",
            type: "column",
            data: [100, 93, 31, 40, 41, 49, 55, 85, 45, 90, 78, 99]
          },
          {
            name: "Cashflow (Enterprise)",
            type: "column",
            data: [14, 70, 25, 75, 35, 28, 88, 46, 45, 90, 78, 99]
          },
          {
            name: "Cashflow (Enterprise Plus)",
            type: "column",
            data: [11, 73, 31, 70, 41, 49, 95, 85, 45, 90, 78, 99]
          },
          {
            name: "Cashflow (Free Trial)",
            type: "column",
            data: [11, 53, 31, 90, 41, 49, 95, 85, 45, 90, 78, 99]
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
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10%",
        borderRadius: 1
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"]
    },
    xaxis: {
      categories: months.map((month) => month.slice(0, 3))
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: Math.max(...series.flatMap((s) => s.data)) || 100
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "right"
    }
  };

  return <Chart options={options} series={series} type="bar" height={290} />;
}

export default SuperAdminDoubleBarChart;
