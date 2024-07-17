import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Editeye } from "../../assets/editeye.svg";
import Tables from "../../bits/Tables";
import AppUserModal from "../../Modal/AppUserModal";
import SuperAdminNavbar from "./SuperAdminNavbar";
import InputSearch from "../../bits/InputSearch";
import { DownloadCsv } from "../../bits/DownloadCsv";
import { SubscribeEditButton } from "../../bits/SubscribeEditButton";

const SuperAdminSubscription = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activating1, SetActivating1] = useState(false);
  const [activating2, SetActivating2] = useState(false);
  const [activating3, SetActivating3] = useState(false);
  const [activating4, SetActivating4] = useState(false);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [status, setStatus] = useState("ACTIVE");
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

  useEffect(() => {
    // dispatch(CorporateBusinessRep())
    if (reload) {
      // dispatch(CorporateBusinessRep())
      setReload(false);
    }
  }, [reload]);

  //   const { businessrep, authenticatingbusinessrep } = useSelector((state) => state.businessrep);
  //   console.log(businessrep?.data?.data)

  //   const activate = businessrep?.data?.data?.filter((item) => item?.hasChangeDefaultPassword === true)
  //   const inactivate = businessrep?.data?.data?.filter((item) => item?.hasChangeDefaultPassword === false)

  const setActivate = () => {
    SetActivate(true);
    SetPend(false);
    SetLocker(false);
    SetActivating1(false);
    SetActivating2(false);
    SetActivating3(false);
    SetActivating4(false);
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
    SetActivating2(false);
    SetActivating3(false);
    SetActivating4(false);
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
    SetActivating2(false);
    SetActivating3(false);
    SetActivating4(false);
    SetActivate(false);
    SetPend(false);
  };

  const setPendingRole2 = () => {
    SetActivating2(true);
    SetActivating1(false);
    SetActivating3(false);
    SetActivating4(false);
    SetActivate(false);
    SetPend(false);
  };

  const setPendingRole3 = () => {
    SetActivating3(true);
    SetActivating1(false);
    SetActivating2(false);
    SetActivating4(false);
    SetActivate(false);
    SetPend(false);
  };

  const setPendingRole4 = () => {
    SetActivating4(true);
    SetActivating1(false);
    SetActivating2(false);
    SetActivating3(false);
    SetActivate(false);
    SetPend(false);
  };
  return (
    <Flex>
      <SuperAdminNavbar title={title} />
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="maincontainer">
        <div className="top">
          <div className="start">
            <div className="numbers">
              <span className="name">Subscriptions</span>
            </div>
            <span className="about">
              This page allows you to manage subscription.
            </span>
          </div>
          {/* <div>
              <ModalButton
                onClick={() => setStep(22)}
                background
                color
                title="New Corporate"
              />
          </div> */}
        </div>
        <div className="table">
          <div className="statuses">
            <div
              onClick={() => setActivate()}
              className={`${activated ? "active" : "status"}`}
            >
              <span>Free Trial</span>
            </div>
            <div
              onClick={() => setPending()}
              className={`${pend ? "active" : "status"}`}
            >
              <span>Standard</span>
            </div>
            <div
              onClick={() => setPendingRole1()}
              className={`${activating1 ? "active" : "status"}`}
            >
              <span>Standard Plus</span>
            </div>
            <div
              onClick={() => setPendingRole2()}
              className={`${activating2 ? "active" : "status"}`}
            >
              <span>Enterprise</span>
            </div>
            <div
              onClick={() => setPendingRole3()}
              className={`${activating3 ? "active" : "status"}`}
            >
              <span>Enterprise Plus</span>
            </div>
            <div
              onClick={() => setPendingRole4()}
              className={`${activating4 ? "active" : "status"}`}
            >
              <span>Custom</span>
            </div>
          </div>
          {activated ? (
            <div className="trialmaindiv">
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Edit Free Trial Days</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Free Trial Days - </span>
                    <span className="days">30 Days</span>
                  </div>
                  <SubscribeEditButton
                      onClick={() => setStep(36)}
                    background
                    color
                    title="Edit Free Trial days"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>
                    Edit Maximum Number of Business Reps per Corporates
                  </span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">
                      Maximun number of Business Reps -{" "}
                    </span>
                    <span className="days">20</span>
                  </div>
                  <SubscribeEditButton
                    //   onClick={() => setStep(22)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>
                    Edit Maximum Number of Geo-Location per Corporates
                  </span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">
                      Maximum Number of Geo-Location -
                    </span>
                    <span className="days">2</span>
                  </div>
                  <SubscribeEditButton
                     onClick={() => setStep(38)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Edit Maximum Number of projects per Corporates</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Maximum Number of Project -</span>
                    <span className="days">2</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(38)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
            </div>
          ) : pend ? (
            <div className="trialmaindiv">
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Plan Type</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Standard Plan</span>
                  </div>
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Edit Pricing For Standard plan</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">1.Monthly Price:</span>
                    <span className="days"> NGN 10,000</span>
                  </div>
                  <SubscribeEditButton
                      onClick={() => setStep(40)}
                    background
                    color
                    title="Edit pricing"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>
                    Edit Maximum Number of Business Reps per Corporates
                  </span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Number of Business Reps -</span>
                    <span className="days">99</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(38)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
            </div>
          ) : activating1 ? (
            <div className="trialmaindiv">
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Plan Type</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Standard Plus</span>
                  </div>
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Edit Pricing For enterprise plan</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">1.Monthly Price: </span>
                    <span className="days"> NGN 10,000</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(40)}
                    background
                    color
                    title="Edit pricing"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>
                    Edit Maximum Number of Business Reps per Corporates
                  </span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">
                      Maximum Number of Business Reps -
                    </span>
                    <span className="days">100+</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(38)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
            </div>
          ) : activating2 ? (
            <div className="trialmaindiv">
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Plan Type</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Enterprise Plan</span>
                  </div>
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Edit Pricing For enterprise plan</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">1.Monthly Price: </span>
                    <span className="days"> NGN 10,000</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(40)}
                    background
                    color
                    title="Edit pricing"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>
                    Edit Maximum Number of Business Reps per Corporates
                  </span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">
                      Maximum Number of Business Reps -
                    </span>
                    <span className="days">100+</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(38)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
            </div>
          ) : activating3 ? (
            <div className="trialmaindiv">
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Plan Type</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Enterprise Plus</span>
                  </div>
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Edit Pricing For enterprise plan</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">1.Monthly Price: </span>
                    <span className="days"> NGN 10,000</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(40)}
                    background
                    color
                    title="Edit pricing"
                  />
                </div>
              </div>
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>
                    Edit Maximum Number of Business Reps per Corporates
                  </span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">
                      Maximum Number of Business Reps -
                    </span>
                    <span className="days">100+</span>
                  </div>
                  <SubscribeEditButton
                    onClick={() => setStep(38)}
                    background
                    color
                    title="Edit number"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="trialmaindiv">
              <div className="trialdiv">
                <div className="trialdivtop">
                  <span>Plan Type</span>
                </div>
                <div className="trialdivbottom">
                  <div className="freedays">
                    <span className="free">Custom Plan</span>
                  </div>
                  <SubscribeEditButton
                   onClick={() => setStep(40)}
                    background
                    plus
                    color
                    title="Add new Custom"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="innertable">
            {activated || pend || activating1 || activating2 || activating3 ? (
              <div className="top">
                <div className="start">
                  <div className="numbers">
                    <span className="name">Current Subscribers</span>
                  </div>
                </div>
                <div>
                  <DownloadCsv
                    //   onClick={() => navigate(
                    //     `../${businessprojects}/location/:location`)}
                    exportdownload
                    all
                    downloadcsvnoborder
                    color
                    title="Download all"
                  />
                </div>
              </div>
            ) : (
              <div className="top">
                <div className="start">
                  <div className="numbers">
                    <span className="name">All Created Custom Plan</span>
                  </div>
                </div>
                <div>
                  <DownloadCsv
                    //   onClick={() => navigate(
                    //     `../${businessprojects}/location/:location`)}
                    exportdownload
                    all
                    downloadcsvnoborder
                    color
                    title="Download all"
                  />
                </div>
              </div>
            )}
            <div className="table">
              {activated ||
              pend ||
              activating1 ||
              activating2 ||
              activating3 ? (
                <>
                  <div className="date-search">
                    <InputSearch
                      onChange={(e) => setSearcher(e.target.value)}
                      placeholder="Search for Corporates name, email, RC Number, e.t.c"
                    />
                  </div>
                  <Tables currentsubscriber data={[]} setStep={setStep} />
                </>
              ) : (
                <>
                  <div className="date-search">
                    <InputSearch
                      onChange={(e) => setSearcher(e.target.value)}
                      placeholder="Search for Corporates name, email, RC Number, e.t.c"
                    />
                  </div>
                  <Tables customplan data={[]} setStep={setStep} />
                </>
              )}
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
    padding-inline: 25px;
    gap: 20px;
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
    }
    .table {
      padding-top: 65px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding-bottom: 40px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .trialmaindiv {
        display: flex;
        flex-direction: column;
        padding-inline: 20px;
        gap: 20px;
        .trialdiv {
          display: flex;
          flex-direction: column;
          border-radius: 10px 10px 10px 10px;
          border: 1px solid #65ace033;
          .trialdivtop {
            background: #f4f3ff;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-inline: 10px;
            color: #1e1b39;
            font-size: 12px;
            font-weight: 500;
            width: 100%;
            height: 40px;
          }
          .trialdivbottom {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 50px;
            padding-inline: 10px;
            justify-content: space-between;
            .freedays {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 5px;
              .free {
                color: #5a6376;
                font-weight: 400;
                font-size: 12px;
              }
              .days {
                color: #1e1b39;
                font-size: 12px;
                font-weight: 400;
              }
            }
          }
        }
      }
      .statuses {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding-left: 20px;
        gap: 10px;
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
          width: 120px;
          justify-content: center;
          align-items: center;
          /* padding-left: 20px; */
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
          width: 120px;
          justify-content: center;
          align-items: center;
          /* padding-left: 20px; */
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
      .permissioncontainer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .roles {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding-inline: 20px;
          .status {
            display: flex;
            flex-direction: row;
            gap: 7px;
            height: 30px;
            font-size: 12px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
            color: #8d9196;
            cursor: pointer;
            width: 160px;
            justify-content: center;
            align-items: center;
          }
          .active {
            display: flex;
            flex-direction: row;
            height: 30px;
            gap: 7px;
            font-size: 12px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: 0px;
            justify-content: center;
            color: #1a87d7;
            background: rgba(26, 135, 215, 0.12);
            border-radius: 8px;
            cursor: pointer;
            width: 160px;
            justify-content: center;
            align-items: center;
          }
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-inline: 20px;
          .header {
            font-size: 14px;
            color: #0a0a0a;
          }
          .content {
            font-size: 12px;
            color: #5a6376;
          }
        }
        .activities {
          padding-inline: 20px;
          display: flex;
          flex-direction: column;
          .activity-permission {
            display: flex;
            flex-direction: row;
            gap: 120px;
            color: #5a6376;
            font-size: 14px;
            font-weight: 500;
            .activitynames {
              width: 12%;
            }
          }
          .rolename {
            display: flex;
            flex-direction: row;
            gap: 120px;
            border-bottom: 1px solid rgba(235, 235, 235, 1);
            align-items: center;
            height: 90px;
            .name {
              color: rgba(0, 0, 0, 1);
              font-size: 13px;
              width: 12%;
            }
            .button-group {
              display: flex;
              flex-direction: row;
              gap: 15px;
              .view {
                display: flex;
                flex-direction: row;
                cursor: pointer;
                gap: 6px;
                border: 1px solid rgba(26, 135, 215, 1);
                border-radius: 6px;
                color: rgba(26, 135, 215, 1);
                height: 20px;
                justify-content: center;
                width: 70px;
                font-size: 10px;
                align-items: center;
                background: rgba(26, 135, 215, 0.1);
              }
            }
          }
          .editrole {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding-top: 20px;
          }
        }
      }
      .innertable {
        display: flex;
        flex-direction: column;
        padding-inline: 20px;
        gap: 10px;
        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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
                font-weight: 500;
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
        }
        .table {
          padding-top: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          .statuses {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding-left: 20px;
            gap: 10px;
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
              width: 120px;
              justify-content: center;
              align-items: center;
              /* padding-left: 20px; */
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
              width: 120px;
              justify-content: center;
              align-items: center;
              /* padding-left: 20px; */
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
          .permissioncontainer {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .roles {
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              padding-inline: 20px;
              .status {
                display: flex;
                flex-direction: row;
                gap: 7px;
                height: 30px;
                font-size: 12px;
                font-weight: 400;
                line-height: 23px;
                letter-spacing: 0px;
                text-align: left;
                color: #8d9196;
                cursor: pointer;
                width: 160px;
                justify-content: center;
                align-items: center;
              }
              .active {
                display: flex;
                flex-direction: row;
                height: 30px;
                gap: 7px;
                font-size: 12px;
                font-weight: 500;
                line-height: 23px;
                letter-spacing: 0px;
                justify-content: center;
                color: #1a87d7;
                background: rgba(26, 135, 215, 0.12);
                border-radius: 8px;
                cursor: pointer;
                width: 160px;
                justify-content: center;
                align-items: center;
              }
            }
            .details {
              display: flex;
              flex-direction: column;
              gap: 10px;
              padding-inline: 20px;
              .header {
                font-size: 14px;
                color: #0a0a0a;
              }
              .content {
                font-size: 12px;
                color: #5a6376;
              }
            }
            .activities {
              padding-inline: 20px;
              display: flex;
              flex-direction: column;
              .activity-permission {
                display: flex;
                flex-direction: row;
                gap: 120px;
                color: #5a6376;
                font-size: 14px;
                font-weight: 500;
                .activitynames {
                  width: 12%;
                }
              }
              .rolename {
                display: flex;
                flex-direction: row;
                gap: 120px;
                border-bottom: 1px solid rgba(235, 235, 235, 1);
                align-items: center;
                height: 90px;
                .name {
                  color: rgba(0, 0, 0, 1);
                  font-size: 13px;
                  width: 12%;
                }
                .button-group {
                  display: flex;
                  flex-direction: row;
                  gap: 15px;
                  .view {
                    display: flex;
                    flex-direction: row;
                    cursor: pointer;
                    gap: 6px;
                    border: 1px solid rgba(26, 135, 215, 1);
                    border-radius: 6px;
                    color: rgba(26, 135, 215, 1);
                    height: 20px;
                    justify-content: center;
                    width: 70px;
                    font-size: 10px;
                    align-items: center;
                    background: rgba(26, 135, 215, 0.1);
                  }
                }
              }
              .editrole {
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                padding-top: 20px;
              }
            }
          }
        }
      }
    }
  }
`;

export default SuperAdminSubscription;
