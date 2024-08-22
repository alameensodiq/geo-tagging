import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

function StackedBarchart({ data }) {
  const months = [
    "JAUNARY",
    "FEBRUAR",
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
  const series = [
    {
      //   name: 'Net Profit',
      data: months.map((month) => data[month]?.expectedNumberOfCheckins || 0)
    },
    {
      //   name: 'Net Profit',
      data: months.map((month) => data[month]?.actualNumberOfCheckins || 0)
    }
  ];

  const options = {
    colors: ["#EAECF0", "#28385C"],
    chart: {
      type: "bar",
      stacked: true,
      height: 350,
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        states: {
          hover: {
            color: " #EAECF0"
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
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

    legend: {
      show: false,
      fontSize: "11px",
      color: "#E6EEF5"
    },
    yaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    //   yaxis: {
    //     // title: {
    //     //   text: '$ (thousands)'
    //     // }
    //     show: false,
    //     labels: {
    //       show: false
    //     },
    //   },
    fill: {
      opacity: 1,
      colors: ["#28385C", "#EAECF0"]
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    }
  };

  return (
    <Flex>
      <Chart options={options} series={series} type="bar" height={270} />
    </Flex>
  );
}

const Flex = styled.div`
  border-radius: 10px;
`;

export default StackedBarchart;
