import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import styled from 'styled-components';




 function BarChart({data}) {
    
    const  series = [{
        //   name: 'Net Profit',
          data: [200, 300, 500, 450, 670, 400, 450, 350, 790, 300, 200, 380]
          // data: data?.map((item) => item?.AMOUNT)
        }]

    const   options = {
          colors: ["#7C65E0"],
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
              }
          },
          grid:{
            show: false
           }, 
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '45%',
              borderRadius: 3,
              dataLabels: {
                position: 'top', 
              },
              states: {
                hover: {
                    color: '#7C65E0',
                }
             },

              
            },
          },
          // dataLabels: {
          //   enabled: false
          // },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#101828"]
            }
          },
          
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories:['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          
          legend: {
            show: false,
            fontSize: '11px',
            color: '#E6EEF5'
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
            colors: '#7C65E0'
          },
          
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        }
      
      
      
  

  
      return (
        

        <Flex>
          <Chart options={options} series={series} type="bar" height={270} />
        </Flex>


      )

  }


  const Flex = styled.div`
     border-radius: 10px;

  `


  export default  BarChart