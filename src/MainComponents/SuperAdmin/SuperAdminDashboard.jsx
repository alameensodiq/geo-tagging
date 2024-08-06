import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import FeaturesGrid from "../../Reusable/FeaturesGrid";
import DatePicker from "react-datepicker";
import Radial from "../../bits/Radial";
import SuperAdminNavbar from "./SuperAdminNavbar";
import SuperAdminOverviewCards from "../../Reusable/SuperAdminOverviewCards";
import DonutBorderRadius from "../../bits/DonutBorderRadius";
import SuperAdminDoubleBarChart from "../../bits/SuperAdminDoubleBarChart";
import Radialtime from "../../bits/Radialtime";

const SuperAdminDashboard = ({ title, overviewadmin }) => {
  const [bright, setBright] = useState(true);
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
      <div className="maincontainer">
        <div className="top">
          <div className="start">
            <div className="numbers">
              <span className="name">Dashboard</span>
            </div>
            <span className="about">
              This overview provides a comprehensive snapshot of general
              information over time
            </span>
          </div>
          {/* <div className="cover"> */}
          {!showDatePicker && (
            <div className="date" onClick={() => toggleDatePicker()}>
              <span>Showing for:</span>
              <Calendar />
              <span>
                {dateRange?.startDate
                  ? formatDateString(dateRange.startDate)
                  : ""}
              </span>
              -
              <span>
                {dateRange?.endDate ? formatDateString(dateRange.endDate) : ""}
              </span>
            </div>
          )}
          {showDatePicker && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                justifyContent: "flex-end",
                right: "0%",
                zIndex: "1000"
              }}
            >
              <DateRangePicker
                ranges={[
                  {
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    key: "selection"
                  }
                ]}
                onChange={handleSelect}
              />
              {/* <button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100px",
                  height: "40px",
                  backgroundColor: "red",
                  fontSize: "12px",
                  border: "none",
                  borderRadius: "8px",
                  marginLeft: "20px",
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => toggleDatePicker()}
              >
                Close
              </button> */}
            </div>
          )}
          {/* </div> */}
        </div>
        <FeaturesGrid dashboarder superoverview row={1}>
          <SuperAdminOverviewCards
            data={[]}
            number1={[]}
            number2={`[]`}
            number3={`[]`}
            number4={`[]`}
            percent1={1.0}
            percent2={2.0}
            percent3={4.0}
            percent4={2.5}
          />
        </FeaturesGrid>
        <FeaturesGrid dashboarder bigger superoverview row={2}>
          <div className="table">
            <div className="punctuality">
              <div className="start">
                <div className="numbers">
                  <span className="name">Free Trial Conversion Rate</span>
                </div>
              </div>
              <div className="main">
                <DatePicker
                  className="input"
                  selected={endDate}
                  ref={datePickerRefs}
                  onChange={(date) => dateChangers(date)}
                  showTimeSelect={false}
                  dateFormat="MMM d yyyy"
                  placeholderText="13 Oct 2023"
                  popperPlacement="bottom-start"
                />
                <Calendar onClick={() => PickDater()} className="calendar" />
              </div>
            </div>
            <div className="superadminconversion">
              <div className="freeconvert">
                <span className="title">Free Trial Conversion Rate</span>
                <span className="percent">78%</span>
              </div>
              <div className="colortrialdiv">
                <div className="trial">
                  <div className="color"></div>
                  <div className="colortitle">
                    <span className="round"></span>
                    <div className="progressdiv">
                      <span className="progress">Trial in Progress</span>
                      <span className="progresspercent">50% (90)</span>
                    </div>
                  </div>
                </div>
                <div className="trialone">
                  <div className="color"></div>
                  <div className="colortitle">
                    <span className="round"></span>
                    <div className="progressdiv">
                      <span className="progress">Trial Completed</span>
                      <span className="progresspercent">50% (90)</span>
                    </div>
                  </div>
                </div>
                <div className="trialtwo">
                  <div className="color"></div>
                  <div className="colortitle">
                    <span className="round"></span>
                    <div className="progressdiv">
                      <span className="progress">Trial Converted</span>
                      <span className="progresspercent">50% (90)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="punctuality">
              <div className="start">
                <div className="numbers">
                  <span className="name">Subscription Analysis</span>
                </div>
              </div>
              <div className="main">
                <DatePicker
                  className="input"
                  selected={endDate}
                  ref={datePickerRefs}
                  onChange={(date) => dateChangers(date)}
                  showTimeSelect={false}
                  dateFormat="MMM d yyyy"
                  placeholderText="13 Oct 2023"
                  popperPlacement="bottom-start"
                />
                <Calendar onClick={() => PickDater()} className="calendar" />
              </div>
            </div>
            <div className="donutdiv">
              <DonutBorderRadius />
              <div className="detailsmaindiv">
                <div className="detailsdiv">
                  <div className="circle"></div>
                  <span className="title">Standard (90%)</span>
                </div>
                <div className="detailsdiv">
                  <div className="circletwo"></div>
                  <span className="title">Standard Plus (50%)</span>
                </div>
                <div className="detailsdiv">
                  <div className="circlethree"></div>
                  <span className="title">Enterprise (30%)</span>
                </div>
              </div>
              <div className="detailsmaindiv">
                <div className="detailsdiv">
                  <div className="circlefour"></div>
                  <span className="title">Enterprise Plus (20%)</span>
                </div>
                <div className="detailsdiv">
                  <div className="circlefive"></div>
                  <span className="title">Custom (50%)</span>
                </div>
              </div>
            </div>
          </div>
        </FeaturesGrid>
        <FeaturesGrid dashboarder bigger superoverview row={2}>
          <div className="table">
            <div className="buttongroups">
              <div className="groupdiv">
                <button
                  className={`swap ${bright ? "itemize" : "notitemize"}`}
                  onClick={() => setBright(true)}
                >
                  Punctuality Rate
                </button>
                <button
                  className={`swap ${bright ? "notitemize" : "itemize"}`}
                  onClick={() => setBright(false)}
                >
                  Time Stamp Compliance
                </button>
              </div>
            </div>
            <div className="punctuality">
              <div className="start">
                <div className="numbers">
                  <span className="name">
                    {bright ? "Punctuality Rate" : "Time Stamp Compliance"}
                  </span>
                </div>
              </div>
              <div className="main">
                <DatePicker
                  className="input"
                  selected={endDate}
                  ref={datePickerRefs}
                  onChange={(date) => dateChangers(date)}
                  showTimeSelect={false}
                  dateFormat="MMM d yyyy"
                  placeholderText="13 Oct 2023"
                  popperPlacement="bottom-start"
                />
                <Calendar onClick={() => PickDater()} className="calendar" />
              </div>
            </div>
            <div className="last">
              <div className="radial">
                {bright ? <Radial overview /> : <Radialtime />}
              </div>
              {bright ? (
                <div className="circle">
                  <span className="label">Total Punctuality Rate</span>
                  <span className="name">80%</span>
                </div>
              ) : (
                <div className="circler">
                  <span className="label">Total Stamp Compliance</span>
                  <span className="name">60%</span>
                </div>
              )}
              <div className="target">
                <div className="attendance">
                  <div className="wrap">
                    <span className="first"></span>
                    <span className="targeted">Total Compliance</span>
                  </div>
                  <span className="percent">Total Number:200(40%)</span>
                </div>
                <div className="attendant">
                  <div className="wrap">
                    <span className="second"></span>
                    <span className="targeted">Total Non-Compliance</span>
                  </div>
                  <span className="percent">Total Number:200(40%)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="punctuality">
              <div className="start">
                <div className="numbers">
                  <span className="name">Total hours put in by project</span>
                </div>
              </div>
              <div className="main">
                <DatePicker
                  className="input"
                  selected={endDate}
                  ref={datePickerRefs}
                  onChange={(date) => dateChangers(date)}
                  showTimeSelect={false}
                  dateFormat="MMM d yyyy"
                  placeholderText="13 Oct 2023"
                  popperPlacement="bottom-start"
                />
                <Calendar onClick={() => PickDater()} className="calendar" />
              </div>
            </div>
            <div className="totalhours">
              <div className="lefthours">
                <span className="project">Project Name</span>
                <span className="campaign">Campaign Management</span>
              </div>
              <div className="righthours">
                <div className="rightcircle"></div>
                <span>12hours</span>
              </div>
            </div>
            <div className="totalhours">
              <div className="lefthours">
                <span className="project">Project Name</span>
                <span className="campaign">Campaign Management</span>
              </div>
              <div className="righthours">
                <div className="rightcircle"></div>
                <span>12hours</span>
              </div>
            </div>
            <div className="totalhours">
              <div className="lefthours">
                <span className="project">Project Name</span>
                <span className="campaign">Campaign Management</span>
              </div>
              <div className="righthours">
                <div className="rightcircle"></div>
                <span>12hours</span>
              </div>
            </div>
            <div className="totalhours">
              <div className="lefthours">
                <span className="project">Project Name</span>
                <span className="campaign">Campaign Management</span>
              </div>
              <div className="righthours">
                <div className="rightcircle"></div>
                <span>12hours</span>
              </div>
            </div>
            <div className="totalhours">
              <div className="lefthours">
                <span className="project">Project Name</span>
                <span className="campaign">Campaign Management</span>
              </div>
              <div className="righthours">
                <div className="rightcircle"></div>
                <span>12hours</span>
              </div>
            </div>
            <div className="lasthours">
              <span>Show more</span>
            </div>
          </div>
        </FeaturesGrid>
        <div className="table">
          <div className="punctuality">
            <div className="start">
              <div className="numbers">
                <span className="name">Revenue Analysis for each Plan</span>
              </div>
            </div>
            <div className="doublebar">
              <div className="high">
                <span className="row">
                  <span className="square"></span>Standard
                </span>
                <span className="row">
                  <span className="squaretwo"></span>Standard Plus
                </span>
                <span className="row">
                  <span className="squarethree"></span>Enterprise
                </span>
                <span className="row">
                  <span className="squarefour"></span>Enterprise Plus
                </span>
                <span className="row">
                  <span className="squarefive"></span>Custom
                </span>
              </div>
            </div>
            <div className="main">
              <DatePicker
                className="input"
                selected={endDate}
                ref={datePickerRefs}
                onChange={(date) => dateChangers(date)}
                showTimeSelect={false}
                dateFormat="MMM d yyyy"
                placeholderText="13 Oct 2023"
                popperPlacement="bottom-start"
              />
              <Calendar onClick={() => PickDater()} className="calendar" />
            </div>
          </div>
          <SuperAdminDoubleBarChart />
        </div>
      </div>
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
        width: 29%;
        height: 48px;
        border-radius: 8px;
        padding-inline: 5px;
      }
    }
    .table {
      padding-top: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding-bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
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
                border-radius: 2px;
              }
              .squaretwo {
                width: 10px;
                height: 10px;
                background: #28385c;
                border-radius: 2px;
              }
              .squarethree {
                width: 10px;
                height: 10px;
                background: #7c65e0;
                border-radius: 2px;
              }
              .squarefour {
                width: 10px;
                height: 10px;
                background: #7cc8f3;
                border-radius: 2px;
              }
              .squarefive {
                width: 10px;
                height: 10px;
                background: #f3827c;
                border-radius: 2px;
              }
            }
          }
        }
      }
      .buttongroups {
        display: flex;
        flex-direction: row;
        border-bottom: 1.02px solid #dbdade;
        padding-inline: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        justify-content: flex-start;
        align-items: center;
        .groupdiv {
          display: flex;
          flex-direction: row;
          border: 0.4px solid #7777774d;
          width: 252px;
          justify-content: center;
          height: 40px;
          border-radius: 5px;
          background: rgba(144, 138, 138, 0.15);
          padding-left: 2px;
          padding-right: 2px;
          padding-block: 3px;
          gap: 10px;
          .swap {
            font-size: 12px;
            cursor: pointer;
          }
          .itemize {
            background: #1a87d7;
            border: none;
            border-radius: 4px;
            outline: none;
            color: #ffffff;
          }
          .notitemize {
            border: none;
            color: #5a6376;
            outline: none;
          }
        }
      }
      .totalhours {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-inline: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e9edf5;
        .lefthours {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .project {
            color: #101828;
            font-size: 14px;
            font-weight: 500;
          }
          .campaign {
            font-size: 12px;
            font-weight: 400;
            color: #5a6376;
          }
        }
        .righthours {
          display: flex;
          flex-direction: row;
          gap: 5px;
          color: #7c65e0;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          .rightcircle {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #7c65e0;
          }
        }
      }
      .lasthours {
        padding-inline: 10px;
        color: #1a87d7;
        font-size: 14px;
        font-weight: 500;
        height: 5px;
      }
      .donutdiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .detailsmaindiv {
          display: flex;
          flex-direction: row;
          gap: 10px;
          .detailsdiv {
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            .circle {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #1a87d7;
            }
            .circletwo {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #274079;
            }
            .circlethree {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #7c65e0;
            }
            .circlefour {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #7cc8f3;
            }
            .circlefive {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #f3827c;
            }
            .title {
              font-size: 14px;
              font-weight: 500;
              color: #5a6376;
            }
          }
        }
      }
      .superadminconversion {
        display: flex;
        flex-direction: column;
        gap: 100px;
        padding-left: 10px;
        padding-top: 30px;
        .freeconvert {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          .title {
            color: #5a6376;
            font-size: 14px;
            font-weight: 400;
          }
          .percent {
            color: #1e1b39;
            font-size: 28px;
            font-weight: 700;
          }
        }
        .colortrialdiv {
          display: flex;
          flex-direction: row;
          gap: 10px;
          width: 100%;
          .trial {
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: flex-start;
            width: 30%;
            .color {
              width: 100%;
              height: 6px;
              background: #1a87d7;
            }
            .colortitle {
              display: flex;
              flex-direction: row;
              gap: 10px;
              .round {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #1a87d7;
              }
              .progressdiv {
                display: flex;
                flex-direction: column;
                gap: 10px;
                .progress {
                  color: #5a6376;
                  font-size: 14px;
                  font-weight: 400;
                }
                .progresspercent {
                  color: #212529;
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
          }
          .trialone {
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: flex-start;
            width: 30%;
            .color {
              width: 100%;
              height: 6px;
              background: #7c65e0;
            }
            .colortitle {
              display: flex;
              flex-direction: row;
              gap: 10px;
              .round {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #7c65e0;
              }
              .progressdiv {
                display: flex;
                flex-direction: column;
                gap: 10px;
                .progress {
                  color: #5a6376;
                  font-size: 14px;
                  font-weight: 400;
                }
                .progresspercent {
                  color: #212529;
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
          }
          .trialtwo {
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: flex-start;
            width: 30%;
            .color {
              width: 100%;
              height: 6px;
              background: #f3827c;
            }
            .colortitle {
              display: flex;
              flex-direction: row;
              gap: 10px;
              .round {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #f3827c;
              }
              .progressdiv {
                display: flex;
                flex-direction: column;
                gap: 10px;
                .progress {
                  color: #5a6376;
                  font-size: 14px;
                  font-weight: 400;
                }
                .progresspercent {
                  color: #212529;
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
      .detailscompliance {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 60px;
        width: 100%;
        /* gap: 30px; */
        .firstcompliance {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 50%;
          .comp {
            color: #141414;
            font-size: 14px;
          }
          .bardiv {
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
            .backgrounddiv {
              background: #eaecf0;
              border-radius: 6px;
              width: 50%;
              height: 10px;
              .bar {
                width: 70%;
                height: 10px;
                background: #1a87d7;
                border-radius: 6px;
              }
              .nonbar {
                width: 70%;
                height: 10px;
                background: #28385c;
                border-radius: 6px;
              }
            }
            .percent {
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
          .label {
            font-size: 10px;
          }
        }
        .circler {
          width: 125px;
          height: 125px;
          position: absolute;
          border-radius: 50%;
          background: #ffffff;
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
          .label {
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
            .percent {
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
            .percent {
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
