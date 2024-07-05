import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

function StackedBarchart() {
  const series = [
    {
      //   name: 'Net Profit',
      data: [200, 300, 500, 450, 670, 400, 450, 350, 790, 300, 200, 380]
    },
    {
      //   name: 'Net Profit',
      data: [220, 70, 50, 120, 100, 40, 50, 330, 120, 180, 200, 308]
    }
  ];

  const options = {
    colors: ["#EAECF0","#28385C"],
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
    responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        states: {
          hover: {
            color:" #EAECF0"
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
      colors: ["#EAECF0","#28385C"],
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
