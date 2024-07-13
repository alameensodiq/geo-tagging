import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Editeye } from "../../assets/editeye.svg";
import Tables from "../../bits/Tables";
import AppUserModal from "../../Modal/AppUserModal";

const ClientUsermanagement = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activating1, SetActivating1] = useState(true);
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
  };

  const setPendingRole2 = () => {
    SetActivating2(true);
    SetActivating1(false);
    SetActivating3(false);
    SetActivating4(false);
  };

  const setPendingRole3 = () => {
    SetActivating3(true);
    SetActivating1(false);
    SetActivating2(false);
    SetActivating4(false);
  };

  const setPendingRole4 = () => {
    SetActivating4(true);
    SetActivating1(false);
    SetActivating2(false);
    SetActivating3(false);
  };
  return (
    <Flex>
      <Navbar title={title} />
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="maincontainer">
        <div className="top">
          <div className="start">
            <div className="numbers">
              <span className="name">User Management</span>
              <span className="count">500 members</span>
            </div>
            <span className="about">
              This overview provides a comprehensive snapshot of User management
            </span>
          </div>
          <div>
            {activated ? (
              <ModalButton
                onClick={() => setStep(8)}
                background
                color
                title="New User Management"
              />
            ) : pend ? (
              <ModalButton
                onClick={() => setStep(13)}
                background
                color
                title="New Role"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="table">
          <div className="statuses">
            <div
              onClick={() => setActivate()}
              className={`${activated ? "active" : "status"}`}
            >
              <span>Manage User</span>
            </div>
            <div
              onClick={() => setPending()}
              className={`${pend ? "active" : "status"}`}
            >
              <span>Manage Role</span>
            </div>
          </div>
          {activated ? (
            <Tables manageuser data={[]} setStep={setStep} />
          ) : pend ? (
            <div className="permissioncontainer">
              <div className="roles">
                <div
                  onClick={() => setPendingRole1()}
                  className={`${activating1 ? "active" : "status"}`}
                >
                  <span>Super Admin</span>
                </div>
                <div
                  onClick={() => setPendingRole2()}
                  className={`${activating2 ? "active" : "status"}`}
                >
                  <span>Manage Role</span>
                </div>
                <div
                  onClick={() => setPendingRole3()}
                  className={`${activating3 ? "active" : "status"}`}
                >
                  <span>Supervisor</span>
                </div>
                <div
                  onClick={() => setPendingRole4()}
                  className={`${activating4 ? "active" : "status"}`}
                >
                  <span>Super Admin</span>
                </div>
              </div>
              <div className="details">
                <span className="header">Details</span>
                <div className="content">
                  <span>
                    Lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem
                  </span>
                  <span>
                    ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium
                  </span>
                </div>
              </div>
              <div className="activities">
                <div className="activity-permission">
                  <span className="activitynames">Activity</span>
                  <span>Permission</span>
                </div>

                <div className="rolename">
                  <span className="name">1.Dashboard</span>
                  <div className="button-group">
                    <button className="view" onClick={() => setStep(16)}>
                      <Eye />
                      View
                    </button>
                    <button className="view" onClick={() => setStep(18)}>
                      <Editeye />
                      Edit
                    </button>
                  </div>
                </div>

                <div className="rolename">
                  <span className="name">2.Business Reps</span>
                  <div className="button-group">
                    <button className="view" onClick={() => setStep(16)}>
                      <Eye />
                      View
                    </button>
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">3. User management</span>
                  <div className="button-group">
                    <button className="view"  onClick={() => setStep(16)}>
                      <Eye />
                      View
                    </button>
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">4. Subscriptions</span>
                  <div className="button-group">
                    <button className="view"  onClick={() => setStep(16)}>
                      <Eye />
                      View
                    </button>
                    <button className="view"  onClick={() => setStep(18)}>
                      <Editeye />
                      Edit
                    </button>
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">5. Projects</span>
                  <div className="button-group">
                    <button className="view"  onClick={() => setStep(16)}>
                      <Eye />
                      View
                    </button>
                    <button className="view"  onClick={() => setStep(18)}>
                      <Editeye />
                      Edit
                    </button>
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">6.Reports</span>
                  <div className="button-group">
                    <button className="view"  onClick={() => setStep(16)}>
                      <Eye />
                      View
                    </button>
                  </div>
                </div>
                <div className="editrole">
                  <ModalButton
                    onClick={() => setStep(20)}
                    background
                    color
                    remove
                    title="Edit roles"
                  />
                </div>
              </div>
            </div>
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
        /* gap: 10px; */
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
          width: 180px;
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
          .editrole{
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
`;

export default ClientUsermanagement;
