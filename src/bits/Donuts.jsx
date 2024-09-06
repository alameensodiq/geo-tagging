import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

function Donuts({ overview, report, data1, data2 }) {
  //  const series = data?.subscriptionPlan((item) => item.value)
  // Function to convert percentage strings to numbers
  const parsePercentage = (value) => {
    if (typeof value === "string") {
      // Remove '%' and convert to number
      return parseFloat(value.replace("%", ""));
    }
    return Number(value);
  };

  // Parse and validate data1 and data2
  const data1Number = parsePercentage(data1);
  const data2Number = parsePercentage(data2);

  // Create series if both data1 and data2 are valid percentages
  const series =
    data1Number >= 0 && data2Number >= 0 ? [data1Number, data2Number] : [];

  const options = {
    chart: {
      width: report ? 280 : 380,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true
            // total: {
            //   show: true,
            //   label: 'Total Devices',
            //   formatter: () => `${data?.totalRevenue ? data?.totalRevenue : 1700}`
            //   }
          }
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      lineCap: "butt"
    },
    fill: {
      colors: overview
        ? ["#1A87D7", "#28385C"]
        : report
        ? ["#1A87D7", "#28385C"]
        : ["#28385C", "#F3827C"]
      //   colors: backgroundColors?.map((item) => item),
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return (
    <Flex>
      <Chart options={options} series={series} type="donut" height={260} />
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

export default Donuts;
