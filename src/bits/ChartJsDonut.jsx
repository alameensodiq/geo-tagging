import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutBorder = ({ datas }) => {
  console.log(datas);
  const data = {
    labels: ["Mac", "Window", "Linux"],
    datasets: [
      {
        label: "",
        //   data: [datas?.macOs ? datas?.macOs : 0, datas?.windowsOs ? datas?.windowsOs : 0, datas?.linuxOs ? datas?.linuxOs : 0],
        data:
          datas && datas
            ? [
                // data["Basic Count"] ? data["Basic Count"] : 0,
                // data["Premium Count"] ? data["Premium Count"] : 0,
                datas["ENTERPRISE Count"] ? datas["ENTERPRISE Count"] : 0,
                datas["ENTERPRISE_PLUS Count"]
                  ? datas["ENTERPRISE_PLUS Count"]
                  : 0,
                // data["FREE_TRIAL Count"] ? data["FREE_TRIAL Count"] : 0,
                datas["STANDARD Count"] ? datas["STANDARD Count"] : 0,
                datas["STANDARD_PLUS Count"] ? datas["STANDARD_PLUS Count"] : 0,
                datas["FREE_TRIAL Count"] ? datas["FREE_TRIAL Count"] : 0
              ]
            : [60, 40, 30, 20, 30],
        backgroundColor: [
          // "#1A87D7",
          "#7C65E0",
          // "#F3827C",
          // "#274079",
          "#7CC8F3",
          "#277927",
          "#f37cbf",
          "#82f37c"
        ],
        hoverOffset: 4
      }
    ]
  };
  const options = {
    borderRadius: 20,
    cutout: "90%",
    height: 300,
    responsive: true,
    maintainAspectRatio: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw: (chart) => {
      const { ctx, chartArea } = chart;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const lineHeight = 15; // Adjust as needed

      // Draw "Total Devices"
      ctx.save();
      ctx.font = 'normal 12px "inter"';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#1E1B39";
      ctx.fillText("Total Subscribers", centerX, centerY - lineHeight);
      ctx.restore();

      // Draw "1700"
      ctx.save();
      ctx.font = 'bold 25px "inter"';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#1E1B39";
      ctx.fillText(
        `${datas?.totalSubscriptions ? datas?.totalSubscriptions : 0}`,
        centerX,
        centerY + lineHeight
      );
      ctx.restore();
    }
  };
  return (
    <Flex>
      <Doughnut
        data={data}
        options={options}
        plugins={[doughnutLabel]}
      ></Doughnut>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 200px;
`;

export default DonutBorder;
