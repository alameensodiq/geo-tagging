import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Goback } from "../../assets/goback.svg";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import { ReactComponent as Call } from "../../assets/call.svg";
import { ReactComponent as Contact } from "../../assets/contactedit.svg";
import { ReactComponent as Busemail } from "../../assets/busemail.svg";
import { ReactComponent as Buslocate } from "../../assets/buslocation.svg";
import BusinessRepsTransactionCards from "../../Reusable/BusinessRepsTransactionCards";
import Tables from "../../bits/Tables";
import InputSearch from "../../bits/InputSearch";
import DatePicker from "react-datepicker";
import Donuts from "../../bits/Donuts";
import BarChart from "../../bits/BarChart";
import StackedBarchart from "../../bits/StarckedBarchart";
import { ModalButton } from "../../bits/ModalButton";
import Radial from "../../bits/Radial";
import { useDispatch, useSelector } from "react-redux";
import { CorporateBusinessRepDetails } from "../../Store/Apis/CorporateBusinessRepDetails";
import Moment from "react-moment";
import { Complaince } from "../../Store/Apis/Complaince";

const ClientAdminBusinessDetails = ({ title }) => {
  const navigate = useNavigate();
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [activated2, SetActivate2] = useState(false);
  const [pend2, SetPend2] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));

  const datePickerRef = useRef(null);
  const dispatch = useDispatch();
  console.log(window?.location?.pathname.split("/")[3]);
  let id = window?.location?.pathname.split("/")[3];
  console.log(id);

  useEffect(() => {
    dispatch(CorporateBusinessRepDetails({ id }));
    dispatch(Complaince({ id }));
  }, [id]);

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  const dateChanger = (date) => {
    setStartDate(date);
  };

  const setActivate = () => {
    SetActivate(true);
    SetPend(false);
    SetActivate2(false);
    SetPend2(false);
  };
  const setPending = () => {
    SetActivate(false);
    SetPend(true);
    SetActivate2(false);
    SetPend2(false);
  };
  const setActivate2 = () => {
    SetActivate(false);
    SetPend(false);
    SetActivate2(true);
    SetPend2(false);
  };
  const setPending2 = () => {
    SetActivate(false);
    SetPend(false);
    SetActivate2(false);
    SetPend2(true);
  };

  const { businessrepdetails, authenticatingbusinessrepdetails } = useSelector(
    (state) => state.businessrepdetails
  );
  console.log(businessrepdetails?.data);

  const { compliance, authenticatingcompliance } = useSelector(
    (state) => state.compliance
  );
  console.log(compliance?.data);

  return (
    <Flex>
      <Navbar title={title} />
      <div className="maincontainer">
        <div className="firstdiv">
          <div className="backbutton">
            <Goback
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
            <span className="name">
              {businessrepdetails?.data?.user?.lastName}{" "}
              {businessrepdetails?.data?.user?.firstName}
            </span>
          </div>
        </div>
        <div className="top-div">
          <div className="activeinfo">
            <div className="activediv">
              <span className="active">Active</span>
            </div>
            <div className="activedetails">
              {/* <span className="image"></span> */}
              <img
                src={businessrepdetails?.data?.user?.avatar}
                className="image"
                alt="pics"
              />
              <span className="name">
                {businessrepdetails?.data?.user?.lastName}{" "}
                {businessrepdetails?.data?.user?.firstName}
              </span>
              <span className="assigned">
                Assigned Project:{" "}
                {businessrepdetails?.data?.user?.project
                  ? businessrepdetails?.data?.user?.project
                  : "N/A"}
              </span>
              <span className="date">
                Date Created:{" "}
                <Moment format="DD-MM-YYYY">
                  {businessrepdetails?.data?.user?.dateJoined}
                </Moment>
              </span>
            </div>
            <ModalButton onClick={() => ""} remove color title={"Deactivate"} />
          </div>
          <div className="contactinfo">
            <span className="contact">Contact Information</span>
            <div className="info">
              <div className="first">
                <Call />
                <div className="phone">
                  <span className="mobile">Mobile Number</span>
                  <span className="number">
                    {businessrepdetails?.data?.user?.phoneNumber}
                  </span>
                </div>
              </div>
              <div className="copy">{/* <Contact /> */}</div>
            </div>
            <div className="info">
              <div className="first">
                <Busemail />
                <div className="phone">
                  <span className="mobile">Email Address</span>
                  <span className="number">
                    {businessrepdetails?.data?.user?.email}
                  </span>
                </div>
              </div>
              {/* <Contact /> */}
            </div>
            <div className="info">
              <div className="first">
                <Buslocate />
                <div className="phone">
                  <span className="mobile">Address</span>
                  <span className="number">
                    {businessrepdetails?.data?.user?.address}
                  </span>
                </div>
              </div>
              <div className="copy">{/* <Contact /> */}</div>
            </div>
          </div>
          <div className="last">
            <div className="cover">
              <div className="radial">
                <Radial
                  data={
                    businessrepdetails?.data?.targetAttendance
                      ? businessrepdetails?.data?.targetAttendance
                      : []
                  }
                />
              </div>
              <div className="circlereal">
                {/* <span className="label">Total Attendance</span> */}
                {/* <span className="name">50%</span> */}
              </div>
            </div>
            <div className="target">
              <div className="attendance">
                <div className="wrap">
                  <span className="first"></span>
                  <span className="targeted">Targeted Attendance</span>
                </div>
                <span>{businessrepdetails?.data?.targetAttendance}</span>
              </div>
              <div className="attendant">
                <div className="wrap">
                  <span className="second"></span>
                  <span className="targeted">Attendance Captured</span>
                </div>
                <span>{businessrepdetails?.data?.attendanceCaptured}</span>
              </div>
            </div>
          </div>
        </div>
        <BusinessRepsTransactionCards data={businessrepdetails?.data} />
        <div className="statuses">
          <div
            onClick={() => setActivate()}
            className={`${activated ? "active" : "status"}`}
          >
            <span>Punctuality Rate</span>
          </div>
          <div
            onClick={() => setPending()}
            className={`${pend ? "active" : "status"}`}
          >
            <span>Attendance rate</span>
          </div>
          <div
            onClick={() => setActivate2()}
            className={`${activated2 ? "active" : "status"}`}
          >
            <span>Projects</span>
          </div>
          <div
            onClick={() => setPending2()}
            className={`${pend2 ? "active" : "status"}`}
          >
            <span>Monthly wages</span>
          </div>
        </div>
        <div className="table">
          {activated ? (
            <>
              <div className="searchContainer">
                <span className="rate">Puntuality Rate(%)</span>
                <div className="date-search">
                  <div className="main">
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
                </div>
              </div>
              <div className="donuts">
                <Donuts
                  data1={
                    businessrepdetails?.data?.totalPunctual
                      ? businessrepdetails?.data?.totalPunctual
                      : []
                  }
                  data2={
                    businessrepdetails?.data?.totalNonPunctual
                      ? businessrepdetails?.data?.totalNonPunctual
                      : []
                  }
                />
                <div className="label">
                  <div className="punctual-div">
                    <span className="punctual"></span>
                    <span className="rate">
                      Punctual-
                      {businessrepdetails?.data?.totalPunctual
                        ? (businessrepdetails?.data?.totalPunctual /
                            (businessrepdetails?.data?.totalPunctual +
                              businessrepdetails?.data?.totalNonPunctual)) *
                          100
                        : "0"}
                    </span>
                  </div>
                  <div className="late-div">
                    <span className="late"></span>
                    <span className="rate">
                      Late-
                      {businessrepdetails?.data?.totalNonPunctual
                        ? (businessrepdetails?.data?.totalNonPunctual /
                            (businessrepdetails?.data?.totalPunctual +
                              businessrepdetails?.data?.totalNonPunctual)) *
                          100
                        : "0"}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : pend ? (
            <>
              <div className="top">
                <div className="start">
                  <div className="numbers">
                    <span className="name">Attendance Compliance (%)</span>
                  </div>
                  <span className="about">
                    Overview of attendance compliance in the past months
                  </span>
                </div>
                <div className="date-search">
                  <div className="main">
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
                </div>
              </div>
              <div className="label">
                <div className="punctual-div">
                  <span className="punctual"></span>
                  <span className="rate">Targeted Attendance-(%)</span>
                </div>
                <div className="late-div">
                  <span className="late"></span>
                  <span className="rate">Attendance captured-(0%)</span>
                </div>
              </div>
              <StackedBarchart data={compliance?.data} />
            </>
          ) : activated2 ? (
            <>
              <div className="date-search">
                <InputSearch
                  onChange={(e) => setSearcher(e.target.value)}
                  placeholder="Search for Project name, geo location, e.t.c"
                />
              </div>
              <Tables
                projects
                data={
                  businessrepdetails?.data?.projects
                    ? businessrepdetails?.data?.projects
                    : []
                }
              />
            </>
          ) : pend2 ? (
            <>
              <div className="searchContainer">
                <span className="rating">
                  Earned wages from Jan - Dec:{" "}
                  <span className="amount">
                    {businessrepdetails?.data?.totalEarned?.AMOUNT}
                  </span>
                </span>
              </div>
              <BarChart
                data={
                  businessrepdetails?.data?.monthlyWages
                    ? businessrepdetails?.data?.monthlyWages
                    : []
                }
              />
            </>
          ) : (
            ""
          )}
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
    padding-inline: 45px;
    gap: 20px;
    .firstdiv {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .backbutton {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .name {
          font-size: 15px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: #212529;
        }
      }
    }
    .top-div {
      border: 1px solid #ebebeb;
      border-radius: 5px;
      padding-inline: 10px;
      padding-block: 15px;
      display: flex;
      flex-direction: row;
      .activeinfo {
        border-right: 1px solid #ebebeb;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-left: 30px;
        padding-block: 20px;
        width: 30%;
        .activediv {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          .active {
            color: #45b202;
            font-size: 14px;
          }
        }
        .activedetails {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #000000;
          }
          .name {
            color: #1e1b39;
            font-size: 14px;
          }
          .assigned {
            font-size: 12px;
            color: #667085;
          }
          .date {
            font-size: 12px;
            color: #667085;
          }
        }
      }
      .contactinfo {
        border-right: 1px solid #ebebeb;
        display: flex;
        flex-direction: column;
        width: 30%;
        padding-left: 30px;
        padding-top: 15px;
        gap: 25px;
        .contact {
          color: #1e1b39;
          font-size: 15px;
          font-weight: bold;
        }
        .info {
          display: flex;
          flex-direction: row;
          gap: 10%;
          width: 100%;
          .first {
            display: flex;
            flex-direction: row;
            gap: 10px;
            width: 50%;
            .phone {
              display: flex;
              flex-direction: column;
              gap: 5px;
              .mobile {
                color: #667085;
                font-size: 12px;
              }
              .number {
                color: #667085;
                font-size: 13px;
                font-weight: bold;
              }
            }
          }
          .copy {
            display: flex;
            flex-direction: row;
            gap: 10px;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .last {
        display: flex;
        flex-direction: column;
        width: 40%;
        /* position: relative; */
        gap: 50px;
        .cover {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          .radial {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .circlereal {
            /* width: 22%;
            height: 82%; */
            width: 115px;
            height: 115px;
            position: absolute;
            border-radius: 50%;
            background: #f2f4f7;
            z-index: 1000;
            margin-top: 27px;
            margin-left: 37.5%;
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
          .circle {
            /* width: 22%;
            height: 82%; */
            width: 95px;
            height: 95px;
            position: absolute;
            border-radius: 50%;
            background: #f2f4f7;
            z-index: 1000;
            margin-top: 42px;
            margin-left: 39.5%;
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
          @media (max-width: 1200px) {
            .circle {
              margin-left: 36.5%; /* Adjusted margin-left for screens less than 900px */
            }
          }
        }
        .target {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 40px;
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
    }
    .statuses {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 5px;
      border-bottom: 1.02px solid #dbdade;
      .status {
        display: flex;
        flex-direction: row;
        gap: 7px;
        font-size: 12px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #8d9196;
        cursor: pointer;
        width: 130px;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
      }
      .active {
        display: flex;
        flex-direction: row;
        gap: 7px;
        font-size: 12px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #1a87d7;
        border-bottom: 1.02px solid #1a87d7;
        cursor: pointer;
        width: 130px;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
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
      .searchContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-inline: 10px;
        .rate {
          font-size: 12px;
          color: #1e1b39;
        }
        .rating {
          color: #5a6376;
          font-size: 15px;
          display: flex;
          flex-direction: row;
          gap: 5px;
          .amount {
            color: #7c65e0;
            font-weight: 600;
          }
        }
        .date-search {
          display: flex;
          flex-direction: row;
          gap: 20px;
          .main {
            position: relative;
            .input {
              width: 103px;
              height: 30px;
              padding: 12px 1px 12px 30px;
              border-radius: 5px;
              border: 1px;
              color: #8d9196;
              outline: none;
              font-size: 10px;
              cursor: pointer;
              border: 1px solid #e2e8f0;
            }
            .calendar {
              position: absolute;
              left: 10px;
              top: 8px;
            }
          }
        }
      }
      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        .start {
          display: flex;
          flex-direction: column;
          gap: 1px;
          .numbers {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .name {
              color: #212529;
              font-size: 14px;
              font-weight: bold;
            }
            .count {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              border-radius: 40%;
              background-color: #f4f3ff;
              width: 90px;
              height: 20px;
              color: #1a87d7;
              font-size: 9px;
            }
          }
          .about {
            font-size: 10px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #8d9196;
          }
        }
        .date-search {
          display: flex;
          flex-direction: row;
          gap: 20px;
          .main {
            position: relative;
            .input {
              width: 103px;
              height: 30px;
              padding: 12px 1px 12px 30px;
              border-radius: 5px;
              border: 1px;
              color: #8d9196;
              outline: none;
              font-size: 10px;
              cursor: pointer;
              border: 1px solid #e2e8f0;
            }
            .calendar {
              position: absolute;
              left: 10px;
              top: 8px;
            }
          }
        }
      }
      .label {
        display: flex;
        flex-direction: row;
        padding-inline: 20px;
        gap: 10px;
        .punctual-div {
          display: flex;
          flex-direction: row;
          gap: 5px;
          align-items: center;
          .punctual {
            width: 5px;
            height: 5px;
            background: #eaecf0;
          }
          .rate {
            color: #000000;
            font-size: 12px;
          }
        }
        .late-div {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          .late {
            width: 5px;
            height: 5px;
            background: #28385c;
          }
          .rate {
            color: #000000;
            font-size: 12px;
          }
        }
      }
      .donuts {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .label {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .punctual-div {
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            .punctual {
              width: 50px;
              height: 50px;
              background: #28385c;
            }
            .rate {
              color: #5a6376;
              font-size: 20px;
            }
          }
          .late-div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            .late {
              width: 50px;
              height: 50px;
              background: #f3827c;
            }
            .rate {
              color: #5a6376;
              font-size: 20px;
            }
          }
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

export default ClientAdminBusinessDetails;
