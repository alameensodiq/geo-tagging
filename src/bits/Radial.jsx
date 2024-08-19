import zIndex from "@mui/material/styles/zIndex";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

function Radial({ overview, data, datacorp, datacorp2 }) {
  const series = datacorp ? [datacorp, datacorp2] : [data ? data : "0"];

  // [data?.targetAttendance, data?.attendanceCaptured]

  const options = {
    chart: {
      width: overview ? 420 : 380,
      type: "radialBar"
    },
    // plotOptions: {
    //   radialBar: {
    //     startAngle: -90,
    //     endAngle: 270,
    //     hollow: {
    //       margin: 0,
    //       size: "70%",
    //       background: "#fff",
    //       image: undefined,
    //       imageOffsetX: 0,
    //       imageOffsetY: 0,
    //       position: "front",
    //       dropShadow: {
    //         enabled: true,
    //         top: 3,
    //         left: 0,
    //         blur: 4,
    //         opacity: 0.0008
    //       }
    //     }
    //   },
    //   track: {
    //     background: "#ffffff",
    //     strokeWidth: "67%",
    //     margin: 0, // margin is in pixels
    //     dropShadow: {
    //       enabled: true,
    //       top: -3,
    //       left: 0,
    //       blur: 4,
    //       opacity: 0.35
    //     }
    //   }
    // },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: ["#28385C", "#65ACE0"],
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: "#999",
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: "22px"
          }
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      show: true,
      name: {
        offsetY: -10,
        show: true,
        zIndex: 10000,
        // color: "#888",
        fontSize: overview ? "10px" : "14px"
      },
      value: {
        formatter: function (val) {
          return parseInt(val);
        },
        color: "#111",
        fontSize: overview ? "10px" : "12px",
        show: true
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    // fill: {
    //   type: "gradient",
    //   colors: ["#65ACE0", "#28385C"],
    //   gradient: {
    //     // shade: "dark",
    //     type: "horizontal",
    //     shadeIntensity: 0.1,
    //     gradientToColors: ["#65ACE0", "#28385C"],
    //     inverseColors: true,
    //     opacityFrom: 1,
    //     opacityTo: 1,
    //     stops: [0, 100]
    //   }
    // },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: [overview ? "Total Punctuality Rate" : "Total Attendance"]
  };

  return (
    <Flex>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={overview ? 290 : 220}
      />
    </Flex>
  );
}

const Flex = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding-bottom: 10px;

  .first {
    display: flex;
    flex-direction: column;
    padding-inline: 8px;
    padding-top: 15px;

    .firster {
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 43px;
      color: #212121;
    }

    .firstertwo {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 19px;
      color: #919191;
    }
  }

  .top {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    .sametop {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .sametopOne {
        display: flex;
        flex-direction: row;
        // width: 150px;
        justify-content: center;
        align-items: center;
        padding-inline: 10px;

        .shot {
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 10px;
          text-transform: uppercase;
          color: #212121;
          margin-left: 5px;
        }

        .shim {
          width: 12px;
          height: 12px;
          /* background: #46AA3B; */
          border-radius: 2px;
        }
      }
    }
  }
`;

export default Radial;
