import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import { ReactComponent as LeftArrow } from "../../assets/leftarrow.svg";
import { ReactComponent as LeftCarat } from "../../assets/leftcarat.svg";
import FeaturesGrid from "../../Reusable/FeaturesGrid";
import OverviewTotalCards from "../../Reusable/OverviewTotalCards";
import DatePicker from "react-datepicker";
import DoubleBarChart from "../../bits/DoubleBarChart";
import Tables from "../../bits/Tables";
import Radial from "../../bits/Radial";
import Donuts from "../../bits/Donuts";
import InputSearch from "../../bits/InputSearch";
import CorporateReportCards from "../../Reusable/CorporateReportCards";
import { businessreport } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClientReport } from "../../Store/Apis/ClientReport";
import { Loader } from "../../Loader";

const ClientAdminReports = ({ title, overviewadmin }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [reload, setReload] = useState(false);
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ClientReport());
    if (reload) {
      dispatch(ClientReport());
      setReload(false);
    }
  }, [reload]);

  const { clientreport, authenticatingclientreport } = useSelector(
    (state) => state.clientreport
  );

  console.log(clientreport?.data);
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
      <Navbar title={title} />
      {clientreport?.data ? (
        <div className="maincontainer">
          <div className="top">
            <div className="start">
              <div className="numbers">
                <span className="name">Reports</span>
              </div>
              <span className="about">
                This overview provides a comprehensive view of analysis of
                reports
              </span>
            </div>
          </div>
          <FeaturesGrid dashboard superoverview row={2}>
            <CorporateReportCards
              amount={
                clientreport?.data?.SituationReports?.totalSituationReports
              }
              statement={"Total No of Situation Reports"}
              percent={"18"}
            />
            <CorporateReportCards
              amount={clientreport?.data?.SituationReports?.totalWelfareReports}
              statement={"Total No of Welfare Reports"}
              percent={"16"}
            />
          </FeaturesGrid>
          <FeaturesGrid dashboard bigger superoverview row={2}>
            <div className="table">
              <div className="punctuality">
                <div className="start">
                  <div className="numbers">
                    <span className="name">Situation Reports</span>
                    {/* <span className="name">
                    <span className="round"></span>With Incident 
                  </span>
                  <span className="name">
                    <span className="rounder"></span>Without Incident
                  </span> */}
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
              <div className="reportdonut">
                <Donuts
                  report
                  data1={clientreport?.data?.SituationReports?.incidentReports}
                  data2={
                    clientreport?.data?.SituationReports?.incidentFreeReports
                  }
                />
                <div className="detailscompliancy">
                  <div
                    className="firstcompliance"
                    onClick={() => navigate(`../${businessreport}/abnormal`)}
                  >
                    <span className="comp">
                      With Incident{" "}
                      <span className="percent">
                        {clientreport?.data?.SituationReports?.incidentReports}
                      </span>
                    </span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div className="bar"></div>
                      </div>
                    </div>
                    <div className="viewdiv">
                      <span className="view">
                        View business reps <LeftArrow />
                      </span>
                    </div>
                  </div>
                  <div
                    className="firstcompliance"
                    onClick={() => navigate(`../${businessreport}/normal`)}
                  >
                    <span className="comp">
                      Without Incident{" "}
                      <span className="percent">
                        {
                          clientreport?.data?.SituationReports
                            ?.incidentFreeReports
                        }
                      </span>
                    </span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div className="nonbar"></div>
                      </div>
                    </div>
                    <div className="viewdiv">
                      <span className="view">
                        View business reps <LeftArrow />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabler">
              <div className="punctuality">
                <div className="start">
                  <div className="numbers">
                    <span className="name">Welfare Report</span>
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
              {/* <div className="emojidiv">
              <span className="emoji">😃</span>
              <span className="emoji">😃</span>
              <span className="emoji">😡</span>
              <span className="emoji">😃</span>
            </div> */}
              <div className="welfare">
                <div className="detailscompliancy">
                  {clientreport?.data?.WelfareReports && (
                    <div className="firstcompliance">
                      <span className="emoji">😃</span>
                      <div className="main">
                        <span className="comp">Great</span>
                        <div className="bardiv">
                          <div className="backgrounddiv">
                            <div
                              className="bar"
                              style={{
                                width:
                                  clientreport?.data?.WelfareReports?.onePercent
                              }}
                            ></div>
                          </div>
                          <span className="percent">
                            {clientreport?.data?.WelfareReports?.onePercent}%
                          </span>
                          <LeftCarat className="carat" />
                        </div>
                      </div>
                    </div>
                  )}
                  {clientreport?.data?.WelfareReports && (
                    <div className="firstcompliance">
                      <span className="emoji">😊</span>
                      <div className="main">
                        <span className="comp">Happy</span>
                        <div className="bardiv">
                          <div className="backgrounddiv">
                            <div
                              className="nonbar"
                              style={{
                                width:
                                  clientreport?.data?.WelfareReports?.twoPercent
                              }}
                            ></div>
                          </div>
                          <span className="percent">
                            {clientreport?.data?.WelfareReports?.twoPercent}%
                          </span>
                          <LeftCarat className="carat" />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <span className="emoji">😃</span> */}
                  {/* <div className="firstcompliance">
                  <span className="emoji">😊</span>
                  <div className="main">
                    <span className="comp">Happy</span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div className="nonbar"></div>
                      </div>
                      <span className="percent">35%</span>
                      <LeftCarat className="carat" />
                    </div>
                  </div>
                </div> */}
                  {clientreport?.data?.WelfareReports && (
                    <div className="firstcompliance">
                      <span className="emoji">😌</span>
                      <div className="main">
                        <span className="comp">Okay</span>
                        <div className="bardiv">
                          <div className="backgrounddiv">
                            <div
                              className="nonbar"
                              style={{
                                background: "#7C65E0",
                                width:
                                  clientreport?.data?.WelfareReports
                                    ?.threePercent
                              }}
                            ></div>
                          </div>
                          <span className="percent">
                            {clientreport?.data?.WelfareReports?.threePercent}%
                          </span>
                          <LeftCarat className="carat" />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="firstcompliance">
                  <span className="emoji">😌</span>
                  <div className="main">
                    <span className="comp">Okay</span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div
                          className="nonbar"
                          style={{ background: "#7C65E0" }}
                        ></div>
                      </div>
                      <span className="percent">35%</span>
                      <LeftCarat className="carat" />
                    </div>
                  </div>
                </div> */}
                  {clientreport?.data?.WelfareReports && (
                    <div className="firstcompliance">
                      <span className="emoji">😏</span>
                      <div className="main">
                        <span className="comp">Frustrated</span>
                        <div className="bardiv">
                          <div className="backgrounddiv">
                            <div
                              className="nonbar"
                              style={{
                                background: "#F3827C",
                                width:
                                  clientreport?.data?.WelfareReports
                                    ?.fourPercent
                              }}
                            ></div>
                          </div>
                          <span className="percent">
                            {clientreport?.data?.WelfareReports?.fourPercent}%
                          </span>
                          <LeftCarat className="carat" />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="firstcompliance">
                  <span className="emoji">😏</span>
                  <div className="main">
                    <span className="comp">Frustrated</span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div
                          className="nonbar"
                          style={{ background: "#F3827C" }}
                        ></div>
                      </div>
                      <span className="percent">35%</span>
                      <LeftCarat className="carat" />
                    </div>
                  </div>
                </div> */}
                  {clientreport?.data?.WelfareReports && (
                    <div className="firstcompliance">
                      <span className="emoji">😡</span>
                      <div className="main">
                        <span className="comp">Angry</span>
                        <div className="bardiv">
                          <div className="backgrounddiv">
                            <div
                              className="nonbar"
                              style={{
                                background: "#FE6510",
                                width:
                                  clientreport?.data?.WelfareReports
                                    ?.fivePercent
                              }}
                            ></div>
                          </div>
                          <span className="percent">
                            {clientreport?.data?.WelfareReports?.fivePercent}%
                          </span>
                          <LeftCarat className="carat" />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div
                  className="firstcompliance"
                  // onClick={() => navigate(`../${businessreport}/emoji`)}
                >
                  <span className="emoji">😡</span>
                  <div className="main">
                    <span className="comp">Angry</span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div
                          className="nonbar"
                          style={{ background: "#FE6510" }}
                        ></div>
                      </div>
                      <span className="percent">35%</span>
                      <LeftCarat className="carat" />
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </FeaturesGrid>
          <div className="table">
            <div className="date-search">
              {/* <div className="main">
              <DatePicker
                className="input"
                selected={startDate}
                ref={datePickerRef}
                onChange={(date) => dateChanger(date)}
                showTimeSelect={false}
                dateFormat="MMM d yyyy"
                placeholderText="13 Oct 2023"
                popperPlacement="bottom-start"
              />
              <Calendar onClick={() => PickDate()} className="calendar" />
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
            </div> */}
              <InputSearch
                onChange={(e) => setSearcher(e.target.value)}
                placeholder="Search for name, project name e.t.c"
              />
            </div>
            <Tables
              reporttable
              data={clientreport?.data?.IncidentsCheck?.userRemarksStats}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
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
        padding-inline: 25px;
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
            flex-direction: column;
            align-items: center;
            gap: 10px;
            .name {
              color: #212529;
              font-size: 14px;
              font-weight: 500;
              display: flex;
              width: 100%;
              flex-direction: row;
              gap: 10px;
              align-items: center;
              justify-content: flex-start;
              .rounder {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #1e1b39;
              }
              .round {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #1a87d7;
              }
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
            padding: 12px 10px 12px 24px;
            border-radius: 5px;
            border: 1px;
            font-weight: 400;
            color: #344054;
            font-size: 13px;
            outline: none;
            cursor: pointer;
            border: 1px solid #e2e8f0;
          }
          .calendar {
            position: absolute;
            right: 90px;
            top: 13px;
          }
        }
      }
      .emojidiv {
        display: flex;
        flex-direction: row;
        padding-inline: 20px;
        gap: 20px;
      }
      .welfare {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        .detailscompliancy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-inline: 20px;
          gap: 40px;
          width: 100%;
          /* gap: 30px; */
          .firstcompliance {
            display: flex;
            flex-direction: row;
            gap: 20px;
            width: 80%;
            border: 1px solid #ebebeb;
            border-radius: 5px;
            padding-inline: 15px;
            padding-block: 10px;
            .emoji {
              display: flex;
              flex-direction: row;
              margin-top: 10px;
            }
            .main {
              display: flex;
              flex-direction: column;
              width: 100%;
              .comp {
                color: #141414;
                font-size: 14px;
                display: flex;
                flex-direction: row;
                .emoji {
                  margin-top: 10px;
                }
              }
              .bardiv {
                display: flex;
                flex-direction: row;
                gap: 20px;
                align-items: center;
                width: 100%;
                .carat {
                  margin-bottom: 10%;
                }
                .percent {
                  color: #141414;
                  font-size: 14px;
                  margin-bottom: 6%;
                }
                .backgrounddiv {
                  background: #eaecf0;
                  border-radius: 6px;
                  width: 80%;
                  height: 10px;
                  .bar {
                    /* width: 70%; */
                    height: 10px;
                    background: #1a87d7;
                    border-radius: 6px;
                  }
                  .nonbar {
                    /* width: 70%; */
                    height: 10px;
                    background: #28385c;
                    border-radius: 6px;
                  }
                }
              }
              .viewdiv {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .view {
                  display: flex;
                  flex-direction: row;
                  font-size: 10px;
                  font-weight: 400;
                  color: #1a87d7;
                }
              }
            }
          }
        }
      }
      .reportdonut {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding-top: 30px;
        width: 100%;
        justify-content: center;
        .detailscompliancy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-inline: 20px;
          gap: 40px;
          width: 50%;
          /* gap: 30px; */
          .firstcompliance {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 70%;
            border: 1px solid #ebebeb;
            padding-inline: 15px;
            padding-block: 10px;
            cursor: pointer;
            .comp {
              color: #141414;
              font-size: 14px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .percent {
                color: #141414;
                font-size: 14px;
              }
            }
            .bardiv {
              display: flex;
              flex-direction: row;
              gap: 20px;
              align-items: center;
              width: 100%;
              .backgrounddiv {
                background: #eaecf0;
                border-radius: 6px;
                width: 80%;
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
            }
            .viewdiv {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .view {
                display: flex;
                flex-direction: row;
                font-size: 10px;
                font-weight: 400;
                color: #1a87d7;
              }
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
                font-size: 10px;
                color: #667085;
              }
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
                font-size: 10px;
                color: #667085;
              }
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
    .tabler {
      padding-top: 30px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding-bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 10px;
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
        padding-inline: 25px;
        padding-top: 0px;
        padding-bottom: 0px;
        justify-content: space-between;
        align-items: center;
        .start {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .numbers {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            .name {
              color: #212529;
              font-size: 14px;
              font-weight: 500;
              display: flex;
              width: 100%;
              flex-direction: row;
              gap: 10px;
              align-items: center;
              justify-content: flex-start;
              .rounder {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #1e1b39;
              }
              .round {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: #1a87d7;
              }
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
            padding: 12px 10px 12px 24px;
            border-radius: 5px;
            border: 1px;
            color: #344054;
            font-weight: 400;
            font-size: 13px;
            outline: none;
            cursor: pointer;
            border: 1px solid #e2e8f0;
          }
          .calendar {
            position: absolute;
            right: 90px;
            top: 13px;
          }
        }
      }
      .emojidiv {
        display: flex;
        flex-direction: row;
        padding-inline: 20px;
        gap: 20px;
      }
      .welfare {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        .detailscompliancy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-inline: 20px;
          align-items: center;
          gap: 20px;
          width: 100%;
          padding-top: 10px;
          /* gap: 30px; */
          .firstcompliance {
            display: flex;
            flex-direction: row;
            gap: 20px;
            width: 80%;
            height: 35%;
            border: 1px solid #ebebeb;
            border-radius: 5px;
            padding-inline: 15px;
            padding-top: 5px;
            cursor: pointer;
            .emoji {
              display: flex;
              flex-direction: row;
              margin-top: 10px;
            }
            .main {
              display: flex;
              flex-direction: column;
              width: 100%;
              .comp {
                color: #141414;
                font-size: 14px;
                display: flex;
                flex-direction: row;
                .emoji {
                  margin-top: 10px;
                }
              }
              .bardiv {
                display: flex;
                flex-direction: row;
                gap: 20px;
                align-items: center;
                width: 100%;
                .carat {
                  margin-bottom: 10%;
                }
                .percent {
                  color: #141414;
                  font-size: 14px;
                  margin-bottom: 6%;
                }
                .backgrounddiv {
                  background: #eaecf0;
                  border-radius: 6px;
                  width: 80%;
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
              }
              .viewdiv {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .view {
                  display: flex;
                  flex-direction: row;
                  font-size: 10px;
                  font-weight: 400;
                  color: #1a87d7;
                }
              }
            }
          }
        }
      }
      .reportdonut {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: 100%;
        justify-content: flex-start;
        .detailscompliancy {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-inline: 20px;
          gap: 40px;
          width: 50%;
          /* gap: 30px; */
          .firstcompliance {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 70%;
            border: 1px solid #ebebeb;
            padding-inline: 15px;
            padding-block: 10px;
            cursor: pointer;
            .comp {
              color: #141414;
              font-size: 14px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .percent {
                color: #141414;
                font-size: 14px;
              }
            }
            .bardiv {
              display: flex;
              flex-direction: row;
              gap: 20px;
              align-items: center;
              width: 100%;
              .backgrounddiv {
                background: #eaecf0;
                border-radius: 6px;
                width: 80%;
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
            }
            .viewdiv {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              .view {
                display: flex;
                flex-direction: row;
                font-size: 10px;
                font-weight: 400;
                color: #1a87d7;
              }
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
                font-size: 10px;
                color: #667085;
              }
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
                font-size: 10px;
                color: #667085;
              }
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

export default ClientAdminReports;
