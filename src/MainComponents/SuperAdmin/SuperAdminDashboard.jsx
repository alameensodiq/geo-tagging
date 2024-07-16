import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import FeaturesGrid from "../../Reusable/FeaturesGrid";
import OverviewTotalCards from "../../Reusable/OverviewTotalCards";
import DatePicker from "react-datepicker";
import DoubleBarChart from "../../bits/DoubleBarChart";
import Tables from "../../bits/Tables";
import Radial from "../../bits/Radial";
import Donuts from "../../bits/Donuts";
import SuperAdminNavbar from "./SuperAdminNavbar";

const SuperAdminDashboard = ({ title, overviewadmin }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 50))
  });
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker); // Toggle date picker visibility
  };

  const handleSelect = (ranges) => {
    console.log(ranges);
    if (ranges.selection) {
      const { startDate, endDate } = ranges.selection;
      setDateRange({
        startDate,
        endDate,
        key: "selection"
      });
    }
    setShowDatePicker(false); // Close date picker after selecting date range
  };
  const formatDateString = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  };

  const datePickerRefs = useRef(null);

  const dateChangers = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDater = () => {
    datePickerRefs.current.setOpen(true);
  };

  console.log(dateRange);
  return (
    <Flex>
      <SuperAdminNavbar title={title} />
     
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  .maincontainer {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-inline: 25px;
    gap: 20px;
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      .start {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .numbers {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .name {
            color: #212529;
            font-size: 26px;
            font-weight: 600;
          }
          .count {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background-color: #f4f3ff;
            width: 90px;
            height: 20px;
            color: #1a87d7;
            font-size: 12px;
            font-weight: 500;
          }
        }
        .about {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: #8d9196;
        }
      }
      .date {
        display: flex;
        flex-direction: row;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px 0px #1018280d;
        gap: 5px;
        color: #344054;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        width: 27%;
        height: 48px;
        border-radius: 8px;
        padding-inline: 5px;
      }
    }
    .table {
      padding-top: 30px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding-bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .projects {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-inline: 10px;
        font-size: 15px;
        font-weight: 500;
      }
      .punctuality {
        display: flex;
        flex-direction: row;
        border-bottom: 1.02px solid #dbdade;
        padding-inline: 10px;
        padding-top: 0px;
        padding-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        .start {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .numbers {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .name {
              color: #212529;
              font-size: 16px;
              font-weight: 600;
            }
            .count {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              border-radius: 10px;
              background-color: #f4f3ff;
              width: 90px;
              height: 20px;
              color: #1a87d7;
              font-size: 11px;
              font-weight: 500;
            }
          }
          .about {
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #8d9196;
          }
        }
        .main {
          position: relative;
          .input {
            width: 113px;
            height: 40px;
            padding: 12px 18px 12px 18px;
            border-radius: 5px;
            border: 1px;
            color: #8d9196;
            font-size: 13px;
            outline: none;
            cursor: pointer;
            border: 1px solid #e2e8f0;
          }
          .calendar {
            position: absolute;
            right: 97px;
            top: 13px;
          }
        }
      }
      .detailscompliance{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 60px;
        width: 100%;
        /* gap: 30px; */
        .firstcompliance{
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 50%;
          .comp{
            color: #141414;
            font-size: 14px;
          }
          .bardiv{
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
            .backgrounddiv{
              background: #EAECF0;
              border-radius: 6px;
              width: 50%;
              height: 10px;
              .bar{
                width: 70%;
                height: 10px;
                background: #1A87D7;
                border-radius: 6px;
              }
              .nonbar{
                width: 70%;
                height: 10px;
                background: #28385C;
                border-radius: 6px;
              }
            }
            .percent{
              color: #141414;
              font-size: 14px;
            }
          }
        }
      }
      .last {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .radial {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .circle {
          width: 125px;
          height: 125px;
          position: absolute;
          border-radius: 50%;
          background: #f2f4f7;
          z-index: 1000;
          margin-top: 64px;
          margin-left: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #101828;
          .name {
            font-size: 25px;
            font-weight: 600;
          }
          .label{
            font-size: 10px;
          }
        }
        .target {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 40px;
          padding-top: 70px;
          .attendance {
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 50px;
            .wrap {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .first {
                background: #65ace0;
                width: 10px;
                height: 10px;
                border-radius: 50%;
              }
              .targeted {
                font-size: 14px;
                color: #667085;
              }
            }
            .percent{
              padding-left: 29px;
            }
          }
          .attendant {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .wrap {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .second {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #28385c;
              }
              .targeted {
                font-size: 14px;
                color: #667085;
              }
            }
            .percent{
              padding-left: 29px;
            }
          }
        }
        .count {
          display: flex;
          flex-direction: row;
          padding-inline: 100px;
          gap: 130px;
        }
      }
      .doublebar {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-inline: 10px;
        .high {
          display: flex;
          flex-direction: row;
          gap: 15px;
          color: #000000;
          font-size: 12px;
          font-weight: 500;
          align-items: center;
          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .square {
              width: 10px;
              height: 10px;
              background: #1a87d7;
            }
            .squaretwo {
              width: 10px;
              height: 10px;
              background: #28385c;
            }
          }
        }
      }
      .statuses {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 30px;
        border-bottom: 1.02px solid #dbdade;
        .status {
          display: flex;
          flex-direction: row;
          gap: 7px;
          font-size: 14px;
          font-weight: 400;
          line-height: 23px;
          letter-spacing: 0px;
          text-align: left;
          color: #8d9196;
          cursor: pointer;
          width: 240px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }
        .active {
          display: flex;
          flex-direction: row;
          gap: 7px;
          font-size: 14px;
          font-weight: 600;
          line-height: 23px;
          letter-spacing: 0px;
          text-align: left;
          color: #1a87d7;
          border-bottom: 1.02px solid #1a87d7;
          cursor: pointer;
          width: 250px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }
        .active-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 40px;
          align-items: center;
          height: 20px;
          color: #65ace0;
          background-color: #edf4f9;
          border-radius: 10px;
          font-size: 10px;
        }
        .status-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 40px;
          align-items: center;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          color: #868e96;
          font-size: 10px;
        }
      }
      .date-search {
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 35px;
        padding-inline: 20px;
        .main {
          position: relative;
          .input {
            width: 143px;
            height: 40px;
            padding: 12px 18px 12px 15px;
            border-radius: 5px;
            border: 1px;
            color: #8d9196;
            outline: none;
            cursor: pointer;
            border: 1px solid #e2e8f0;
          }
          .calendar {
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
      }
    }
  }
`;

export default SuperAdminDashboard;
