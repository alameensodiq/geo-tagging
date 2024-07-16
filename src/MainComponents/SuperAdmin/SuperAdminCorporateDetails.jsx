import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Goback } from "../../assets/goback.svg";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import { ReactComponent as Call } from "../../assets/call.svg";
import { ReactComponent as Contact } from "../../assets/contactedit.svg";
import { ReactComponent as Copy } from "../../assets/copypaste.svg";
import BusinessRepsTransactionCards from "../../Reusable/BusinessRepsTransactionCards";
import Tables from "../../bits/Tables";
import InputSearch from "../../bits/InputSearch";
import DatePicker from "react-datepicker";
import Donuts from "../../bits/Donuts";
import BarChart from "../../bits/BarChart";
import StackedBarchart from "../../bits/StarckedBarchart";
import Radial from "../../bits/Radial";
import { useDispatch, useSelector } from "react-redux";
import { CorporateBusinessRepDetails } from "../../Store/Apis/CorporateBusinessRepDetails";
import Moment from "react-moment";
import SuperAdminNavbar from "./SuperAdminNavbar";
import { ModalButton } from "../../bits/ModalButton";
import AppUserModal from "../../Modal/AppUserModal";

const SuperAdminCorporateDetails = ({ title }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [activated2, SetActivate2] = useState(false);
  const [pend2, SetPend2] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [reload, setReload] = useState(false);

  const datePickerRef = useRef(null);
  const dispatch = useDispatch();
  console.log(window?.location?.pathname.split("/")[3]);
  let id = window?.location?.pathname.split("/")[3];
  console.log(id);

  useEffect(() => {
    // dispatch(CorporateBusinessRepDetails({ id }));
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

  return (
    <Flex>
      <SuperAdminNavbar title={title} />
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="maincontainer">
        <div className="firstdiv">
          <div className="backbutton">
            <Goback
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
            <span className="name">Al-ameen Sodiq</span>
          </div>
        </div>
        <div className="top-div">
          <div className="up">
            <div className="activeinfo">
              <div className="activedetails">
                <span className="image"></span>
                <span className="name">Al-ameen Sodiq</span>
                <span className="assigned">
                  <span
                    style={{
                      color: "#5A6376",
                      fontWeight: "400",
                      fontSize: "14px"
                    }}
                  >
                    RC:
                  </span>
                  102233
                </span>
                <span className="date">
                  <span
                    style={{
                      color: "#5A6376",
                      fontWeight: "400",
                      fontSize: "14px"
                    }}
                  >
                    Date Created:
                  </span>{" "}
                  22/04/2024
                  {/* <Moment format="DD-MM-YYYY">22-04-2024</Moment> */}
                </span>
              </div>
              <ModalButton
                onClick={() => setStep(26)}
                remove
                background
                color
                title={"Deactivate"}
              />
            </div>
            <div className="last">
              <div className="workdiv">
                <span className="active">Active Project</span>
                <spa className="number">10</spa>
              </div>
              <div className="workdiv">
                <span className="active">Total Business Reps</span>
                <spa className="number">20</spa>
              </div>
              <div className="workdiv">
                <span className="active">Total Geo Location</span>
                <spa className="number">40</spa>
              </div>
            </div>
            <div className="contactinfo">
              <div className="info">
                <div className="first">
                  <div className="phone">
                    <span className="mobile">Mobile Number</span>
                    <span className="number">07057007046</span>
                  </div>
                </div>
                <div className="copy">
                  <Contact />
                  <Copy />
                </div>
              </div>
              <div className="info">
                <div className="first">
                  <div className="phone">
                    <span className="mobile">Email Address</span>
                    <span className="number">alameensodiq@yahoo.com</span>
                  </div>
                </div>
                <div className="copy">
                  <Contact />
                  <Copy />
                </div>
              </div>
              <div className="info">
                <div className="first">
                  <div className="phone">
                    <span className="mobile">Address</span>
                    <span className="number">29A, Berkely Street</span>
                  </div>
                </div>
                <div className="copy">
                  <Contact />
                  <Copy />
                </div>
              </div>
            </div>
          </div>
          <div className="down">
            <div className="table">
              <div className="dater-search">
                <div className="project">
                  <span className="title">Project Details</span>
                </div>
                
                {/* <div className="inputsearch"> */}
                  <InputSearch
                    className='search'
                    onChange={(e) => setSearcher(e.target.value)}
                    placeholder="Search here"
                  />
                {/* </div> */}
              </div>
              <Tables superactivedetails/>
            </div>
          </div>
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
      display: flex;
      flex-direction: column;
      gap: 30px;
      .up {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #ebebeb;
        .activeinfo {
          border-right: 1px solid #ebebeb;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-block: 20px;
          gap: 12px;
          width: 30%;
          .activediv {
            display: flex;
            flex-direction: row;
            justify-content: center;
            .active {
              color: #45b202;
              font-size: 14px;
            }
          }
          .activedetails {
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            align-items: center;
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
          display: flex;
          flex-direction: column;
          width: 40%;
          padding-block: 20px;
          align-items: flex-start;
          justify-content: center;
          padding-left: 50px;
          gap: 25px;
          .contact {
            color: #1e1b39;
            font-size: 15px;
            font-weight: bold;
          }
          .info {
            display: flex;
            flex-direction: row;
            gap: 70px;
            width: 100%;
            .first {
              display: flex;
              flex-direction: row;
              width: 50%;
              .phone {
                display: flex;
                flex-direction: column;
                gap: 5px;
                .mobile {
                  color: #5a6376;
                  font-size: 13px;
                  font-weight: 400;
                }
                .number {
                  color: #1e1b39;
                  font-size: 15px;
                  font-weight: 500;
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
          padding-left: 10%;
          justify-content: center;
          width: 30%;
          border-right: 1px solid #ebebeb;
          gap: 10px;
          .workdiv {
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: flex-start;
            justify-content: center;
            .active {
              font-size: 14px;
              font-weight: 400;
              color: #5a6376;
            }
            .number {
              font-size: 15px;
              font-weight: 500;
              color: #1e1b39;
            }
          }
        }
      }
      .down {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        .table {
          padding-block: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
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
          .dater-search {
            display: flex;
            flex-direction: row;
            /* width: 100%; */
            height: 35px;
            padding-inline: 20px;
            justify-content: space-between;
            width: 100%;
            .project {
              display: flex;
              flex-direction: row;
              width: 100%;
              .title {
                color: #212529;
                font-weight: 600;
                font-size: 16px;
              }
            }
            .inputsearch{
                display: flex;
                width: 100%;
                flex-direction: row;
                justify-content: flex-end;
                .search{
                    width: 100%;
                }
            }
          }
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
  }
`;

export default SuperAdminCorporateDetails;
