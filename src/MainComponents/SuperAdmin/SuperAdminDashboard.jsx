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
import { Dashboard } from "../../Store/Apis/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Radialy from "../../bits/Radialy";
import { Loader } from "../../Loader";
import { SuperFreeConversion } from "../../Store/Apis/SuperFreeConversion";
import { Container, Skeleton } from "@mui/material";
import { SuperSubCounts } from "../../Store/Apis/SuperSubCount";
import { SubAnalysis } from "../../Store/Apis/SubAnalysis";
import { SubCompliance } from "../../Store/Apis/SubCompliance";
import { SubPunctual } from "../../Store/Apis/SubPunctual";
import { SubProject } from "../../Store/Apis/SubProject";

const SuperAdminDashboard = ({ title, overviewadmin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bright, setBright] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reload, setReload] = useState(false);
  const [reload1, setReload1] = useState(false);
  const [reload2, setReload2] = useState(false);
  const [reload3, setReload3] = useState(false);
  const [reload4, setReload4] = useState(false);
  const [reload5, setReload5] = useState(false);
  const [reloadfree, setReloadFree] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 50))
  });
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );

  const initialStartDate = new Date("2022-01-01");
  const initialEndDate = new Date(Date.now() + 3600 * 1000 * 24);

  // State variables
  const [startDateOne, setStartDateOne] = useState(initialStartDate);
  const [endDateOne, setEndDateOne] = useState(initialEndDate);
  const [endDateThree, setEndDateThree] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [endDateFour, setEndDateFour] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [endDateFive, setEndDateFive] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [endDateSix, setEndDateSix] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );

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

    const dateFive = new Date(endDateFive);
    const monthNumberFive = dateFive.getMonth() + 1;
    const yearFive = dateFive.getFullYear();

    const dateSix = new Date(endDateSix);
    const monthNumberSix = dateSix.getMonth() + 1;
    const yearSix = dateSix.getFullYear();

    dispatch(Dashboard());
    dispatch(SuperFreeConversion({ endDateOne, startDateOne }));
    console.log(monthNumber, year);
    // if(monthNumber && year){
    //   dispatch(SuperSubCounts({ monthNumber, year }))
    // }
    if (endDate) {
      dispatch(SubAnalysis({ monthNumber, year }));
    }
    if (endDateThree) {
      dispatch(
        SuperSubCounts({ monthNumber: monthNumberThree, year: yearThree })
      );
    }
    if (endDateFour) {
      dispatch(SubCompliance({ monthNumber: monthNumberFour, year: yearFour }));
    }
    if (endDateFive) {
      dispatch(SubPunctual({ monthNumber: monthNumberFive, year: yearFive }));
    }
    if (endDateSix) {
      dispatch(SubProject({ monthNumber: monthNumberSix, year: yearSix }));
    }

    if (reload) {
      dispatch(Dashboard());
      setReload(false);
    }
  }, [
    reload
  ]);

  useEffect(() => {
    if (reloadfree && endDateOne && startDateOne) {
      dispatch(SuperFreeConversion({ endDateOne, startDateOne }));
      setReloadFree(false)
    }
  }, [reloadfree, endDateOne, startDateOne]);

  useEffect(() => {
    const date = new Date(endDate);
    const monthNumber = date.getMonth() + 1;
    const year = date.getFullYear();
    if (reload1 && endDate) {
      dispatch(SubAnalysis({ monthNumber, year }));
      setReload1(false);
    }
  }, [reload1, endDate]);


  useEffect(() => {
    const dateThree = new Date(endDateThree);
    // const monthNumberFour = dateThree.getMonth() + 1;
    const yearThree = dateThree.getFullYear();
    if (reload2 && endDateThree) {
      dispatch(SuperSubCounts({  year: yearThree }));
      setReload3(false);
    }
  }, [reload2, endDateThree]);

  useEffect(() => {
    const dateFour = new Date(endDateFour);
    const monthNumberFour = dateFour.getMonth() + 1;
    const yearFour = dateFour.getFullYear();
    if (reload3 && endDateFour) {
      dispatch(SubCompliance({ monthNumber: monthNumberFour, year: yearFour }));
      setReload3(false);
    }
  }, [reload3, endDateFour]);

  useEffect(() => {
    const dateFive = new Date(endDateFive);
    const monthNumberFive = dateFive.getMonth() + 1;
    const yearFive = dateFive.getFullYear();
    if (reload4 && endDateFive) {
      dispatch(SubPunctual({ monthNumber: monthNumberFive, year: yearFive }));
      setReload4(false);
    }
  }, [reload4, endDateFive]);

  useEffect(() => {
    const dateSix = new Date(endDateSix);
    const monthNumberSix = dateSix.getMonth() + 1;
    const yearSix = dateSix.getFullYear();
    if (reload5 && endDateSix) {
      dispatch(SubProject({ monthNumber: monthNumberSix, year: yearSix }));
      setReload5(false);
    }
  }, [reload5, endDateSix]);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker); // Toggle date picker visibility
  };

  const { dashboard, authenticatingdashboard } = useSelector(
    (state) => state.dashboard
  );

  const { supersubscount, authenticatingsupersubscount } = useSelector(
    (state) => state.supersubscount
  );

  const { superanalysis, authenticatingsuperanalysis } = useSelector(
    (state) => state.superanalysis
  );

  const { subproject, authenticatingsubproject } = useSelector(
    (state) => state.subproject
  );

  const { subcompliance, authenticatingsubcompliance } = useSelector(
    (state) => state.subcompliance
  );

  const { subpunctual, authenticatingsubpunctual } = useSelector(
    (state) => state.subpunctual
  );

  const { freeconversion, authenticatingfreeconversion } = useSelector(
    (state) => state.freeconversion
  );
  console.log(dashboard?.data);
  console.log(freeconversion?.data);
  console.log(supersubscount?.data);
  console.log(superanalysis?.data);

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
  const datePickerRefsOne = useRef(null);
  const datePickerRefsTwo = useRef(null);
  const datePickerRefsThree = useRef(null);
  const datePickerRefsFour = useRef(null);
  const datePickerRefsFive = useRef(null);
  const datePickerRefsSix = useRef(null);

  const dateChangersOne = (date) => {
    console.log(date);
    setStartDateOne(date);
    setReloadFree(true)
  };

  const dateChangersTwo = (date) => {
    console.log(date);
    setEndDateOne(date);
    setReloadFree(true)
  };

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

  const dateChangersFive = (date) => {
    console.log(date);
    setEndDateFive(date);
    setReload4(true);
  };

  const dateChangersSix = (date) => {
    console.log(date);
    setEndDateSix(date);
    setReload5(true);
  };

  const PickDater = () => {
    datePickerRefs.current.setOpen(true);
  };

  const PickDaterOne = () => {
    datePickerRefsOne.current.setOpen(true);
  };

  const PickDaterTwo = () => {
    datePickerRefsTwo.current.setOpen(true);
  };

  const PickDaterThree = () => {
    datePickerRefsThree.current.setOpen(true);
  };

  const PickDaterFour = () => {
    datePickerRefsFour.current.setOpen(true);
  };

  const PickDaterFive = () => {
    datePickerRefsFive.current.setOpen(true);
  };

  const PickDaterSix = () => {
    datePickerRefsSix.current.setOpen(true);
  };

  console.log(dateRange);
  return (
    <Flex
      progress={freeconversion?.data?.freeTrialOngoingPercentage}
      completed={freeconversion?.data?.freeTrialEndedPercentage}
      converted={freeconversion?.data?.trialConvertedPercentage}
    >
      <SuperAdminNavbar title={title} />
      {dashboard?.data ? (
        <>
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
            </div>
          )} */}
              {/* </div> */}
            </div>
            <FeaturesGrid dashboarder superoverview row={1}>
              <SuperAdminOverviewCards
                data={dashboard?.data}
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
              {authenticatingfreeconversion ? (
                <div className="table">
                  <Skeleton width="100%" height="100%" />
                </div>
              ) : (
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
                        selected={startDateOne}
                        ref={datePickerRefsOne}
                        onChange={(date) => dateChangersOne(date)}
                        showTimeSelect={false}
                        // showMonthYearPicker
                        // showFullMonthYearPicker
                        dateFormat="MMM d yyyy"
                        placeholderText="13 Oct 2023"
                        popperPlacement="bottom-start"
                      />

                      <Calendar
                        onClick={() => PickDaterOne()}
                        className="calendar"
                      />
                    </div>
                    <div className="main">
                      <DatePicker
                        className="input"
                        selected={endDateOne}
                        ref={datePickerRefsTwo}
                        onChange={(date) => dateChangersTwo(date)}
                        showTimeSelect={false}
                        // showMonthYearPicker
                        // showFullMonthYearPicker
                        dateFormat="MMM d yyyy"
                        placeholderText="13 Oct 2023"
                        popperPlacement="bottom-start"
                      />

                      <Calendar
                        onClick={() => PickDaterTwo()}
                        className="calendar"
                      />
                    </div>
                  </div>
                  <div className="superadminconversion">
                    <div className="freeconvert">
                      <span className="title">Free Trial Conversion Rate</span>
                      <span className="percent">
                        {freeconversion?.data?.trialConvertedPercentage}%
                      </span>
                    </div>
                    <div className="colortrialdiv">
                      <div className="trial">
                        <div className="color"></div>
                        <div className="colortitle">
                          <span className="round"></span>
                          <div className="progressdiv">
                            <span className="progress">Trial in Progress</span>
                            <span className="progresspercent">
                              {" "}
                              {freeconversion?.data?.freeTrialOngoingPercentage}
                              % ({freeconversion?.data?.freeTrialOngoing})
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="trialone">
                        <div className="color"></div>
                        <div className="colortitle">
                          <span className="round"></span>
                          <div className="progressdiv">
                            <span className="progress">Trial Completed</span>
                            <span className="progresspercent">
                              {" "}
                              {freeconversion?.data?.freeTrialEndedPercentage}%
                              ({freeconversion?.data?.freeTrialCompleted})
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="trialtwo">
                        <div className="color"></div>
                        <div className="colortitle">
                          <span className="round"></span>
                          <div className="progressdiv">
                            <span className="progress">Trial Converted</span>
                            <span className="progresspercent">
                              {" "}
                              {freeconversion?.data?.trialConvertedPercentage}%
                              ({freeconversion?.data?.trialConverted})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {authenticatingsuperanalysis ? (
                <div className="table">
                  <Skeleton width="100%" height="100%" />
                </div>
              ) : (
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
                  <div className="donutdiv">
                    <DonutBorderRadius
                      data={superanalysis?.data}
                    />
                    <div className="detailsmaindiv">
                      {/* <div className="detailsdiv">
                <div className="circle"></div>
                <span className="title">
                  Basic (
                  {dashboard?.data?.SubscriptionAnalysis["Basic Percent"]})
                </span>
              </div> */}
                      {/* <div className="detailsdiv">
                <div className="circletwo"></div>
                <span className="title">
                  Premium (
                  {dashboard?.data?.SubscriptionAnalysis["Premium Percent"]})
                </span>
              </div> */}
                      <div className="detailsdiv">
                        <div className="circlethree"></div>
                        <span className="title">
                          Enterprise (
                          {
                            superanalysis?.data[
                              "ENTERPRISE Percent"
                            ]
                          }
                          )
                        </span>
                      </div>
                    </div>
                    <div className="detailsmaindiv">
                      <div className="detailsdiv">
                        <div className="circlefour"></div>
                        <span className="title">
                          Enterprise Plus (
                          {
                            superanalysis?.data[
                              "ENTERPRISE_PLUS Percent"
                            ]
                          }
                          )
                        </span>
                      </div>
                      {/* <div className="detailsdiv">
                <div className="circlefive"></div>
                <span className="title">
                  Free Trial (
                  {
                    dashboard?.data?.SubscriptionAnalysis[
                      "FREE_TRIAL Percent"
                    ]
                  }
                  )
                </span>
              </div> */}
                    </div>
                    <div className="detailsmaindiv">
                      <div className="detailsdiv">
                        <div className="circlesix"></div>
                        <span className="title">
                          Standard (
                          {
                            superanalysis?.data[
                              "STANDARD Percent"
                            ]
                          }
                          )
                        </span>
                      </div>
                      <div className="detailsdiv">
                        <div className="circleseven"></div>
                        <span className="title">
                          Standard Plus (
                          {
                            superanalysis?.data[
                              "STANDARD_PLUS Percent"
                            ]
                          }
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </FeaturesGrid>
            <FeaturesGrid dashboarder bigger superoverview row={2}>
              {authenticatingsubpunctual || authenticatingsubcompliance ? (
                <div className="table">
                  <Skeleton width="100%" height="100%" />
                </div>
              ) : (
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
                          {bright
                            ? "Punctuality Rate"
                            : "Time Stamp Compliance"}
                        </span>
                      </div>
                    </div>
                    {bright ? (
                      <div className="main">
                        <DatePicker
                          className="input"
                          selected={endDateFive}
                          ref={datePickerRefsFive}
                          onChange={(date) => dateChangersFive(date)}
                          showMonthYearPicker
                          showFullMonthYearPicker
                          showTimeSelect={false}
                          dateFormat="MMM d yyyy"
                          placeholderText="13 Oct 2023"
                          popperPlacement="bottom-start"
                        />
                        <Calendar
                          onClick={() => PickDaterFive()}
                          className="calendar"
                        />
                      </div>
                    ) : (
                      <div className="main">
                        <DatePicker
                          className="input"
                          selected={endDateFour}
                          ref={datePickerRefsFour}
                          onChange={(date) => dateChangersFour(date)}
                          showMonthYearPicker
                          showFullMonthYearPicker
                          showTimeSelect={false}
                          dateFormat="MMM d yyyy"
                          placeholderText="13 Oct 2023"
                          popperPlacement="bottom-start"
                        />
                        <Calendar
                          onClick={() => PickDaterFour()}
                          className="calendar"
                        />
                      </div>
                    )}
                  </div>
                  <div className="last">
                    <div className="radial">
                      {bright ? (
                        <Radialy
                          data={
                            subpunctual?.data

                              ? subpunctual?.data

                              : []
                          }
                        />
                      ) : (
                        <Radialtime
                          data={
                            subcompliance?.data

                              ? subcompliance?.data

                              : []
                          }
                        />
                      )}
                    </div>
                    {bright ? (
                      <div className="circle">
                        <span className="label">Total Punctuality Rate</span>
                        <span className="name">
                          {
                            subpunctual?.data?.punctualPercentage
                          }
                        </span>
                      </div>
                    ) : (
                      <div className="circler">
                        <span className="label">Total Stamp Compliance</span>
                        <span className="name">
                          {" "}
                          {
                            subcompliance?.data?.compliancePercentage
                          }
                        </span>
                      </div>
                    )}
                    {bright ? (
                      <div className="target">
                        <div className="attendance">
                          <div className="wrap">
                            <span className="first"></span>
                            <span className="targeted">Total Compliance</span>
                          </div>
                          <span className="percent">
                            Total Number:
                            {/* {
                              subpunctual?.data
                                ?.PunctualityStatsForAllProjectsCumulative
                                ?.punctualDays
                            } */}
                            (
                            {
                              subpunctual?.data
                                ?.punctualPercentage
                            }
                            )
                          </span>
                        </div>
                        <div className="attendant">
                          <div className="wrap">
                            <span className="second"></span>
                            <span className="targeted">
                              Total Non-Compliance
                            </span>
                          </div>
                          <span className="percent">
                            Total Number:{" "}
                            {/* {
                              subpunctual?.data
                                ?.PunctualityStatsForAllProjectsCumulative
                                ?.notPunctualDays
                            } */}
                            (
                            {
                              subpunctual?.data
                                ?.notPunctualPercentage
                            }
                            )
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="target">
                        <div className="attendance">
                          <div className="wrap">
                            <span className="first"></span>
                            <span className="targeted">Total Compliance</span>
                          </div>
                          <span className="percent">
                      Total Number:
                      {/* {
                        dashboard?.data
                          ?.TimestampComplianceForPlatformCumulative
                          ?.totalCompliant
                      } */}
                      (
                      {
                        subcompliance?.data
                          ?.compliancePercentage
                      }
                      )
                    </span>
                        </div>
                        <div className="attendant">
                          <div className="wrap">
                            <span className="second"></span>
                            <span className="targeted">
                              Total Non-Compliance
                            </span>
                          </div>
                          <span className="percent">
                            Total Number:{" "}
                            {/* {subcompliance?.data
                              ?.expectedCompliance

                              ? subcompliance?.data
                                  ?.expectedCompliance

                              : 0} */}
                            (
                            {subcompliance?.data?.nonCompliancePercentage
                              ? subcompliance?.data
                                  ?.nonCompliancePercentage
                              : 0}
                            )
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {authenticatingsubproject ? (
                <div className="table">
                  <Skeleton width="100%" height="100%" />
                </div>
              ) : (
                <div className="table">
                  <div className="punctuality">
                    <div className="start">
                      <div className="numbers">
                        <span className="name">
                          Total hours put in by project
                        </span>
                      </div>
                    </div>
                    <div className="main">
                      <DatePicker
                        className="input"
                        selected={endDateSix}
                        ref={datePickerRefsSix}
                        showMonthYearPicker
                        showFullMonthYearPicker
                        onChange={(date) => dateChangersSix(date)}
                        showTimeSelect={false}
                        dateFormat="MMM d yyyy"
                        placeholderText="13 Oct 2023"
                        popperPlacement="bottom-start"
                      />
                      <Calendar
                        onClick={() => PickDaterSix()}
                        className="calendar"
                      />
                    </div>
                  </div>
                  {subproject?.data?.slice(
                    0,
                    6
                  )?.map((item) => (
                    <div className="totalhours">
                      <div className="lefthours">
                        <span className="project">Project Name</span>
                        <span className="campaign">{item?.projectName}</span>
                      </div>
                      <div className="righthours">
                        <div className="rightcircle"></div>
                        <span>{item?.totalHours}hours</span>
                      </div>
                    </div>
                  ))}
                  {/* <div className="totalhours">
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
            </div> */}
                  {/* <div className="lasthours">
              <span>Show more</span>
            </div> */}
                </div>
              )}
            </FeaturesGrid>
            {authenticatingsupersubscount ? (
              <div className="table">
                <Skeleton width="100%" height="100%" />
              </div>
            ) : (
              <div className="table">
                <div className="punctuality">
                  <div className="start">
                    <div className="numbers">
                      <span className="name">
                        Revenue Analysis for each Plan
                      </span>
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
                        <span className="squarefive"></span>FREE TRIAL
                      </span>
                      
                      {/* <span className="row">
                  <span className="squarefive"></span>Free Trial
                </span> */}
                    </div>
                  </div>
                  <div className="main">
                    <DatePicker
                      className="input"
                      selected={endDateThree}
                      ref={datePickerRefsThree}
                      onChange={(date) => dateChangersThree(date)}
                      showMonthYearPicker
                      showFullMonthYearPicker
                      showTimeSelect={false}
                      dateFormat="MMM d yyyy"
                      placeholderText="13 Oct 2023"
                      popperPlacement="bottom-start"
                    />
                    <Calendar
                      onClick={() => PickDaterThree()}
                      className="calendar"
                    />
                  </div>
                </div>
                <SuperAdminDoubleBarChart
                  data={supersubscount?.data}
                />
              </div>
            )}
          </div>
        </>
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
            font-size: 10px;
            cursor: pointer;
            padding-inline: 10px;
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
            .circlesix {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #277927;
            }
            .circleseven {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #f37cbf;
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
              width: ${({ progress }) =>
                progress === 0 ? "70%" : `${progress}%`};
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
              width: ${({ completed }) =>
                completed === 0 ? "70%" : `${completed}%`};
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
              width: ${({ converted }) =>
                converted === 0 ? "70%" : `${converted}%`};
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
