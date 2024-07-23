import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import InputSearch from "../../bits/InputSearch";
import { ReactComponent as Goback } from "../../assets/goback.svg";
import Tables from "../../bits/Tables";
import { CorporateBusinessRep } from "../../Store/Apis/CorporateBusinessRep";
import AppUserModal from "../../Modal/AppUserModal";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Color } from "../../assets/colormark.svg";
import { ReactComponent as UnColor } from "../../assets/uncolormark.svg";
import { ReactComponent as Danger } from "../../assets/danger.svg";
import { LocationModalButton } from "../../bits/LocationModalButton";

const ClientLocationDetails = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [status, setStatus] = useState("ACTIVE");
  const [activating1, SetActivating1] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [locker, SetLocker] = useState(false);
  const [reload, setReload] = useState(false);
  const [onload, setOnload] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState("activate");
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(CorporateBusinessRep())
    if (reload) {
      // dispatch(CorporateBusinessRep())
      setReload(false);
    }
  }, [reload]);

  const { businessrep, authenticatingbusinessrep } = useSelector(
    (state) => state.businessrep
  );
  console.log(businessrep?.data?.data);

  const activate = businessrep?.data?.data?.filter(
    (item) => item?.hasChangeDefaultPassword === true
  );
  const inactivate = businessrep?.data?.data?.filter(
    (item) => item?.hasChangeDefaultPassword === false
  );

  const setActivate = () => {
    SetActivate(true);
    SetPend(false);
    SetActivating1(false);
    SetLocker(false);
    setStatus("ACTIVE");
    setSearcher("");
    setStartDate(new Date("2022-01-01"));
    setEndDate(new Date(Date.now() + 3600 * 1000 * 24));
    setCurrentPage(0);
    setActivater(1);
    setTimeout(() => {
      setFirst("activate");
    }, [500]);
  };
  const setPending = () => {
    SetActivate(false);
    SetPend(true);
    SetActivating1(false);
    SetLocker(false);
    setStatus("PENDING");
    setSearcher("");
    setStartDate(new Date("2022-01-01"));
    setEndDate(new Date(Date.now() + 3600 * 1000 * 24));
    setCurrentPage(0);
    setActivater(1);
    setTimeout(() => {
      setFirst("pending");
    }, [500]);
  };

  const setPendingRole1 = () => {
    SetActivating1(true);
    SetActivate(false);
    SetPend(false);
  };
  return (
    <Flex>
      <Navbar title={title} />
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="maincontainer">
        <div className="firstdiv">
          <div className="backbutton">
            <Goback
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
            <span className="name">Assign Project</span>
          </div>
        </div>
        <div className="statuses">
          <div
            onClick={() => setActivate()}
            className={`${activated ? "active" : "status"}`}
          >
            <span>1. Project Details</span>
          </div>
          <div
            onClick={() => setPending()}
            className={`${pend ? "active" : "status"}`}
          >
            <span>2. Add Locations</span>
          </div>
          <div
            onClick={() => setPendingRole1()}
            className={`${activating1 ? "active" : "status"}`}
          >
            <span>3. Assign Business Reps</span>
          </div>
        </div>
        <div className="table">
          {activated ? (
            <div className="head">
              <div className="projectassign">
                <span className="project">1.Assign project</span>
                <span className="fill">Please fill in the details needed</span>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Project name</span>
                    <input
                      className="nametype"
                      placeholder="Enter project name"
                    />
                  </div>
                  <div className="projectnametwo">
                    <span className="name">Hourly Time stamp?</span>
                    <div className="wrapper">
                      <div className="yescontainer">
                        <span className="circle"></span>
                        <span className="yes">Yes</span>
                      </div>
                      <div className="yescontainer">
                        <span className="circle"></span>
                        <span className="yes">No</span>
                      </div>
                    </div>
                  </div>
                  <div className="projectnamethree">
                    <span className="name">Daily Pay</span>
                    <input className="nametype" placeholder="Enter daily pay" />
                  </div>
                </div>
              </div>
              <div className="projectassign">
                <span className="project">2.Active Days & Time</span>
                <span className="fill">Please select active days</span>
                <div className="selectors">
                  <div className="top">
                    <div className="days">
                      <UnColor />
                      <span className="round">Sunday</span>
                    </div>
                    <div className="days">
                      <Color />
                      <span className="round">Monday</span>
                    </div>
                    <div className="days">
                      <UnColor />
                      <span className="round">Tuesday</span>
                    </div>
                    <div className="days">
                      <Color />
                      <span className="round">Wednesday</span>
                    </div>
                  </div>
                  <div className="top">
                    <div className="days">
                      <UnColor />
                      <span className="round">Thursday</span>
                    </div>
                    <div className="days">
                      <Color />
                      <span className="round">Friday</span>
                    </div>
                    <div className="days">
                      <Color />
                      <span className="round">Saturday</span>
                    </div>
                  </div>
                </div>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Resumption time</span>
                    <select className="nametype">
                      <option>9:00A.M</option>
                    </select>
                  </div>
                  <div className="projectnamethree">
                    <span className="name">Closing time</span>
                    <select className="nametype">
                      <option>10:00A.M</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="lastdiv">
                <LocationModalButton
                  onClick={() => setPending()}
                  background
                  remove
                  color
                  title="Next"
                />
              </div>
            </div>
          ) : pend ? (
            <div className="head">
              <div className="projectassign">
                <span className="project">3.Assign locations</span>
                <span className="fill">
                  Please fill in the details needed...
                </span>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Address</span>
                    <input className="nametype" placeholder="Enter Address" />
                  </div>
                  <div className="projectnamethree">
                    <span className="name">State</span>
                    <select className="nametype">
                      <option>Select State</option>
                    </select>
                  </div>
                  <div className="addaddress">
                    <ModalButton
                      onClick={() => ""}
                      background
                      color
                      short
                      title="Add Address"
                    />
                  </div>
                </div>
                <div className="addresswrapper">
                  <div className="heading">
                    <span className="title">Address</span>
                    <span className="title">State</span>
                    <span className="title">Landmark</span>
                    <span className="title">Action</span>
                  </div>
                  <div className="arrange">
                    <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lastdiv">
                <LocationModalButton
                  whitey
                  onClick={() => setActivate()}
                  title="Back"
                />
                <LocationModalButton
                  onClick={() => setPendingRole1()}
                  background
                  remove
                  color
                  title="Next"
                />
              </div>
            </div>
          ) : (
            <div className="head">
              <div className="projectassign">
                <span className="project">4.Assign Business Reps</span>
                <span className="fill">
                  Please fill in the details needed...
                </span>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Business Reps</span>
                    <select className="nametype">
                      <option>Select business reps</option>
                    </select>
                  </div>
                  <div className="projectnamethree">
                    <span className="name">Location</span>
                    <select className="nametype">
                      <option>Select location</option>
                    </select>
                  </div>
                  <div className="addaddress">
                    <ModalButton
                      onClick={() => ""}
                      background
                      color
                      short
                      title="Add"
                    />
                  </div>
                </div>
                <div className="addresswrappertwo">
                  <div className="heading">
                    <span className="titlereps">
                      Business Reps Selected <Color />
                    </span>
                    <span className="title">Address</span>
                    <span className="title">State</span>
                    <span className="title">Landmark</span>
                    <span className="title">Action</span>
                  </div>
                  <div className="arrange">
                    <div className="details">
                      <div className="front">
                        <Color />
                        Sheidu Susan
                      </div>
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="front">
                        <Color />
                        Sheidu Susan
                      </div>
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="front">
                        <Color />
                        Sheidu Susan
                      </div>
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="front">
                        <Color />
                        Sheidu Susan
                      </div>
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lastdiv">
                <LocationModalButton
                  whitey
                  onClick={() => setPending()}
                  title="Back"
                />
                <LocationModalButton
                  onClick={() => ""}
                  background
                  color
                  title="Complete project"
                />
              </div>
            </div>
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
    padding-inline: 25px;
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
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: #212529;
        }
      }
    }
    .statuses {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      /* gap: 10px; */
      border-bottom: 1.02px solid #dbdade;
      .status {
        display: flex;
        flex-direction: row;
        gap: 7px;
        font-size: 15px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #8d9196;
        cursor: pointer;
        width: 180px;
        justify-content: center;
        align-items: center;
        /* padding-left: 20px; */
      }
      .active {
        display: flex;
        flex-direction: row;
        gap: 7px;
        font-size: 15px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #1a87d7;
        border-bottom: 1.02px solid #1a87d7;
        cursor: pointer;
        width: 180px;
        justify-content: center;
        align-items: center;
        /* padding-left: 20px; */
      }
      .active-number {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 40px;
        background-color: #edf4f9;
        border-radius: 50%;
        color: #65ace0;
        font-size: 10px;
      }
      .status-number {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 40px;
        background-color: #f0f0f0;
        border-radius: 50%;
        color: #868e96;
        font-size: 10px;
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
      .head {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 40px;
        .projectassign {
          display: flex;
          flex-direction: column;
          gap: 30px;
          .project {
            color: #667085;
            font-size: 15px;
          }
          .fill {
            color: #667085;
            font-size: 13px;
          }
          .filling {
            display: flex;
            flex-direction: row;
            gap: 15px;
            .projectname {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 40%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .projectnametwo {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .wrapper {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .yescontainer {
                  display: flex;
                  flex-direction: row;
                  gap: 10px;
                  border: 1px solid var(--stroke-color, #e2e8f0);
                  border-radius: 8px;
                  height: 45px;
                  align-items: center;
                  width: 50%;
                  justify-content: flex-start;
                  padding-left: 20px;
                  .circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ebebeb;
                  }
                  .yes {
                    color: #1e1b39;
                    font-size: 15px;
                  }
                }
              }
            }
            .projectnamethree {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .addaddress {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              height: 70px;
            }
          }
          .selectors {
            display: flex;
            flex-direction: column;
            gap: 40px;
            .top {
              display: flex;
              flex-direction: row;
              gap: 50px;
              .days {
                display: flex;
                flex-direction: row;
                gap: 5px;
                width: 10%;
                .round {
                  color: #141414;
                  font-size: 14px;
                }
              }
            }
          }
          .addresswrapper {
            border: 1px solid #ebebeb;
            border-radius: 6px;
            width: 60%;
            display: flex;
            flex-direction: column;
            .heading {
              display: flex;
              flex-direction: row;
              padding-block: 10px;
              padding-inline: 20px;
              /* border-bottom: 1px solid #ebebeb; */
              .title {
                width: 25%;
                color: #667085;
                font-size: 14px;
                display: flex;
                flex-direction: row;
                justify-content: center;
              }
            }
            .arrange {
              display: flex;
              flex-direction: column;
              border-top: 1px solid #ebebeb;
              .details {
                display: flex;
                flex-direction: row;
                padding-inline: 20px;
                .first {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                .second {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                .third {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  font-size: 12px;
                  height: 50px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                .four {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                }
              }
            }
          }
          .addresswrappertwo {
            border: 1px solid #ebebeb;
            border-radius: 6px;
            width: 60%;
            display: flex;
            flex-direction: column;
            .heading {
              display: flex;
              flex-direction: row;
              padding-inline: 20px;
              /* border-bottom: 1px solid #ebebeb; */
              .title {
                width: 20%;
                color: #667085;
                font-size: 13px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-block: 10px;
                padding-inline: 10px;
              }
              .titlereps {
                width: 20%;
                color: #667085;
                font-size: 13px;
                display: flex;
                padding-block: 10px;
                flex-direction: row;
                padding-inline: 10px;
                justify-content: center;
                border-right: 1px solid #ebebeb;
              }
            }
            .arrange {
              display: flex;
              flex-direction: column;
              border-top: 1px solid #ebebeb;
              .details {
                display: flex;
                flex-direction: row;
                padding-inline: 20px;
                .front {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .first {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .second {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .third {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  font-size: 12px;
                  height: 50px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .four {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                  padding-inline: 10px;
                }
              }
            }
          }
        }
        .lastdiv {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          gap: 20px;
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

export default ClientLocationDetails;
