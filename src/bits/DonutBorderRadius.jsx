import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

function DonutBorderRadius({ overview, report, data }) {
  //  const series = data?.subscriptionPlan((item) => item.value)
  const series = data
    ? [data["Basic Count"], data["Premium Count"], 0, 0]
    : [60, 40, 30, 20, 30];

  const options = {
    chart: {
      width: 380,
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
      lineCap: "round"
    },
    fill: {
      colors: ["#1A87D7", "#7C65E0", "#F3827C", "#274079", "#7CC8F3"]
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

export default DonutBorderRadius;
