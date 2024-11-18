import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
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
import { useDispatch, useSelector } from "react-redux";
import { CorporateDashboard } from "../../Store/Apis/CorporateDashboard";
import { Loader } from "../../Loader";
import { CorporateCompliance } from "../../Store/Apis/CorporateCompliance";
import { CorporatePunctual } from "../../Store/Apis/CorporatePunctual";
import { YearlyComp } from "../../Store/Apis/YearlyComp";
import { Skeleton } from "@mui/material";

const ClientAdminDashboard = ({ title, overviewadmin }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [reload1, setReload1] = useState(false);
  const [reload2, setReload2] = useState(false);
  const [reload3, setReload3] = useState(false);

  const [id, setId] = useState(null);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 50))
  });
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [endDateThree, setEndDateThree] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [endDateFour, setEndDateFour] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker); // Toggle date picker visibility
  };

  useEffect(() => {
    const date = new Date(endDate);
    const monthNumber = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateThree = new Date(endDateThree);
    const monthNumberThree = dateThree.getMonth() + 1;
    const yearThree = dateThree.getFullYear();

    const dateFour = new Date(endDateFour);
    const monthNumberFour = dateFour.getMonth() + 1;
    const yearFour = dateFour.getFullYear();
    // if (id !== null) {
    dispatch(CorporateDashboard());
    if (endDate) {
      dispatch(CorporateCompliance({ monthNumber, year }));
    }
    if (endDateThree) {
      dispatch(
        CorporatePunctual({ monthNumber: monthNumberThree, year: yearThree })
      );
    }
    if (endDateFour) {
      dispatch(YearlyComp({ monthNumber: monthNumberFour, year: yearFour }));
    }
    // }
  }, []);

  const { corporatedashboard, authenticatingcorporatedashboard } = useSelector(
    (state) => state.corporatedashboard
  );

  const { corporatepunctual, authenticatingcorporatepunctual } = useSelector(
    (state) => state.corporatepunctual
  );

  console.log(corporatepunctual);

  const { corporatecompliance, authenticatingcorporatecompliance } =
    useSelector((state) => state.corporatecompliance);

  console.log(corporatecompliance);

  const { yearly, authenticatingyearly } = useSelector((state) => state.yearly);

  console.log(yearly);

  console.log(corporatedashboard?.data);
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

  useEffect(() => {
    const date = new Date(endDate);
    const monthNumber = date.getMonth() + 1;
    const year = date.getFullYear();
    if (reload1 && endDate) {
      dispatch(CorporateCompliance({ monthNumber, year }));
      setReload1(false);
    }
  }, [reload1, endDate]);

  useEffect(() => {
    const dateThree = new Date(endDateThree);
    const monthNumberThree = dateThree.getMonth() + 1;
    const yearThree = dateThree.getFullYear();
    if (reload2 && endDateThree) {
      dispatch(
        CorporatePunctual({ monthNumber: monthNumberThree, year: yearThree })
      );
      setReload2(false);
    }
  }, [reload2, endDateThree]);

  useEffect(() => {
    const dateFour = new Date(endDateFour);
    const monthNumberFour = dateFour.getMonth() + 1;
    const yearFour = dateFour.getFullYear();
    if (reload3 && endDateFour) {
      dispatch(YearlyComp({ monthNumber: monthNumberFour, year: yearFour }));
      setReload3(false);
    }
  }, [reload3, endDateFour]);

  const datePickerRefs = useRef(null);
  const datePickerRefsOne = useRef(null);
  const datePickerRefsFour = useRef(null);
  const datePickerRefsThree = useRef(null);

  const dateChangers = (date) => {
    console.log(date);
    setEndDate(date);
    setReload1(true);
  };

  const dateChangersThree = (date) => {
    console.log(date);
    setEndDateThree(date);
    setReload2(true);
  };

  const dateChangersFour = (date) => {
    console.log(date);
    setEndDateFour(date);
    setReload3(true);
  };

  const PickDater = () => {
    datePickerRefs.current.setOpen(true);
  };

  const PickDaterThree = () => {
    datePickerRefsThree.current.setOpen(true);
  };

  const PickDaterFour = () => {
    datePickerRefsFour.current.setOpen(true);
  };

  console.log(dateRange);
  return (
    <Flex
      comp={corporatecompliance?.data?.compliancePercentage}
      noncomp={corporatecompliance?.data?.nonCompliancePercentage}
      // comp={corporatedashboard?.data?.Punctuality?.punctualPercentage}
      // noncomp={corporatedashboard?.data?.Punctuality?.notPunctualPercentage}
    >
      <Navbar title={title} setId={setId} />
      {corporatedashboard?.data ? (
        <div className="maincontainer">
          <div className="top">
            <div className="start">
              <div className="numbers">
                <span className="name">Dashboard</span>
              </div>
              <span className="about">
                All general information appears in this field showing a summary
                of system status and key metrics
              </span>
            </div>
            {/* <div className="cover"> */}
            {/* {!showDatePicker && (
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
                  {dateRange?.endDate
                    ? formatDateString(dateRange.endDate)
                    : ""}
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
              </div>
            )} */}
            {/* </div> */}
          </div>
          <FeaturesGrid dashboard superoverview row={1}>
            <OverviewTotalCards
              data={corporatedashboard?.data}
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
          <FeaturesGrid dashboardmin superoverview row={2}>
            {authenticatingcorporatecompliance ? (
              <Skeleton width="100%" height="500px" />
            ) : (
              <div className="table">
                <div className="punctuality">
                  <div className="start">
                    <div className="numbers">
                      <span className="name">Time Stamp Compliance Rate</span>
                    </div>
                  </div>
                  <div className="main">
                    <DatePicker
                      className="input"
                      selected={endDate}
                      ref={datePickerRefs}
                      showMonthYearPicker
                      showFullMonthYearPicker
                      onChange={(date) => dateChangers(date)}
                      showTimeSelect={false}
                      dateFormat="MMM  yyyy"
                      placeholderText="13 Oct 2023"
                      popperPlacement="bottom-start"
                    />
                    <Calendar
                      onClick={() => PickDater()}
                      className="calendar"
                    />
                  </div>
                </div>
                <Donuts
                  overview
                  data1={
                    corporatecompliance?.data?.compliancePercentage
                      ? corporatecompliance?.data?.compliancePercentage
                      : 0
                  }
                  data2={
                    corporatecompliance?.data?.nonCompliancePercentage
                      ? corporatecompliance?.data?.nonCompliancePercentage
                      : 0
                  }
                />
                <div className="detailscompliance">
                  <div className="firstcompliance">
                    <span className="comp">Compliance</span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div className="bar"></div>
                      </div>
                      <span className="percent">
                        {corporatecompliance?.data?.compliancePercentage}
                      </span>
                    </div>
                  </div>
                  <div className="firstcompliance">
                    <span className="comp">Non Compliance</span>
                    <div className="bardiv">
                      <div className="backgrounddiv">
                        <div className="nonbar"></div>
                      </div>
                      <span className="percent">
                        {corporatecompliance?.data?.nonCompliancePercentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {authenticatingcorporatepunctual ? (
              <Skeleton width="100%" height="500px" />
            ) : (
              <div className="table">
                <div className="punctuality">
                  <div className="start">
                    <div className="numbers">
                      <span className="name">Punctuality Rate</span>
                    </div>
                  </div>
                  <div className="main">
                    <DatePicker
                      className="input"
                      selected={endDateThree}
                      ref={datePickerRefsThree}
                      onChange={(date) => dateChangersThree(date)}
                      showTimeSelect={false}
                      showMonthYearPicker
                      showFullMonthYearPicker
                      dateFormat="MMM  yyyy"
                      placeholderText="13 Oct 2023"
                      popperPlacement="bottom-start"
                    />
                    <Calendar
                      onClick={() => PickDaterThree()}
                      className="calendar"
                    />
                  </div>
                </div>
                <div className="last">
                  <div className="radial">
                    <Radial
                      overview
                      datacorp={corporatepunctual?.data?.punctualPercentage}
                      // datacorp2={
                      //   corporatedashboard?.data?.Punctuality?.punctualPercentage
                      // }
                    />
                  </div>
                  <div className="circlereal">
                    {/* <span className="label">Total Punctuality Rate</span> */}
                    {/* <span className="label">Total Eligible Days</span> */}
                    <span className="name">
                      {corporatepunctual?.data?.punctualPercentage <= 0
                        ? "0"
                        : `${corporatepunctual?.data?.punctualPercentage}%`}
                    </span>
                  </div>
                  <div className="target">
                    <div className="attendance">
                      <div className="wrap">
                        <span className="first"></span>
                        <span className="targeted">Punctual</span>
                      </div>
                      <span className="percent">
                        {corporatepunctual?.data?.punctualPercentage <= 0
                          ? "0"
                          : corporatepunctual?.data?.punctualPercentage}
                      </span>
                    </div>
                    <div className="attendant">
                      <div className="wrap">
                        <span className="second"></span>
                        <span className="targeted">Not Punctual</span>
                      </div>
                      <span className="percent">
                        {corporatepunctual?.data?.notPunctualPercentage <= 0
                          ? "0"
                          : corporatepunctual?.data?.notPunctualPercentage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </FeaturesGrid>

          <div className="table">
            <div className="punctuality">
              <div className="start">
                <div className="numbers">
                  <span className="name">
                    Punctuality Rate VS Time Stamp Compliance Rate(%)
                  </span>
                </div>
                <span className="about">
                  Overview of punctuality rate and time stamp compliance rate in
                  the past months
                </span>
              </div>
              <div className="main">
                <DatePicker
                  className="input"
                  selected={endDateFour}
                  ref={datePickerRefsFour}
                  showMonthYearPicker
                  showFullMonthYearPicker
                  onChange={(date) => dateChangersFour(date)}
                  showTimeSelect={false}
                  dateFormat="MMM  yyyy"
                  placeholderText="13 Oct 2023"
                  popperPlacement="bottom-start"
                />
                <Calendar
                  onClick={() => PickDaterFour()}
                  className="calendar"
                />
              </div>
            </div>
            <div className="doublebar">
              <div className="high">
                <span className="row">
                  <span className="square"></span>Punctuality Rate(%)
                </span>
                <span className="row">
                  <span className="squaretwo"></span>Time Stamp Compliance
                  Rate(%)
                </span>
              </div>
            </div>
            {authenticatingyearly ? (
              <Skeleton width="100%" height="350px" />
            ) : (
              <DoubleBarChart
                data={
                  yearly?.data?.monthlyPuncAndCompliance
                    ? yearly?.data?.monthlyPuncAndCompliance
                    : []
                }
              />
            )}
          </div>
          <div className="table">
            <div className="projects">
              <span>Clusters</span>
            </div>
            <Tables
              data={corporatedashboard?.data?.DisplayProjectsDetails}
              overviewproject
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
        font-size: 13px;
        font-weight: 400;
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
            padding: 12px 10px 12px 24px;
            border-radius: 5px;
            border: 1px;
            color: #344054;
            font-size: 13px;
            font-weight: 400;
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
            color: #1e1b39;
            font-weight: 400;
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
                width: ${({ comp, noncomp }) => {
                  const compValue = parseFloat(comp);
                  const noncompValue = parseFloat(noncomp);
                  return compValue + noncompValue === 100
                    ? `${(compValue / (compValue + noncompValue)) * 100}%`
                    : "0%";
                }};
                height: 10px;
                background: #1a87d7;
                border-radius: 6px;
              }

              .nonbar {
                width: ${({ comp, noncomp }) => {
                  const compValue = parseFloat(comp);
                  const noncompValue = parseFloat(noncomp);
                  return compValue + noncompValue === 100
                    ? `${(noncompValue / (compValue + noncompValue)) * 100}%`
                    : "0%";
                }};
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
        .circlereal {
          width: 170px;
          height: 175px;
          position: absolute;
          border-radius: 50%;
          background: #f2f4f7;
          z-index: 1000;
          margin-top: 34px;
          margin-left: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #101828;
          .name {
            font-size: 24px;
            /* font-weight: 600; */
            color: #28385c;
          }
          .label {
            font-size: 10px;
          }
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
          padding-top: 30px;
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
                color: #1e1b39;
                font-weight: 400;
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
                color: #1e1b39;
                font-weight: 400;
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

export default ClientAdminDashboard;
