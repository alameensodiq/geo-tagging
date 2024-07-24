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
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Editeye } from "../../assets/editeye.svg";
import { ReactComponent as List } from "../../assets/list.svg";
import { ReactComponent as Create } from "../../assets/create.svg";
import { ReactComponent as DarkCreate } from "../../assets/darkcreate.svg";
import { ReactComponent as ActivateDark } from "../../assets/activatedark.svg";
import { ReactComponent as DeactivateDark } from "../../assets/deactivatedark.svg";
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
import AppUserModal from "../../Modal/AppUserModal";

const ClientUsermanagementDetails = ({ title }) => {
  const navigate = useNavigate();
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [activated2, SetActivate2] = useState(false);
  const [pend2, SetPend2] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [step, setStep] = useState(0);
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

  //   const { businessrepdetails, authenticatingbusinessrepdetails } = useSelector(
  //     (state) => state.businessrepdetails
  //   );
  //   console.log(businessrepdetails);

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
            <span className="name">Sheidu Susan</span>
          </div>
        </div>
        <div className="top-div">
          <div className="activeinfo">
            <div className="activedetails">
              <span className="image"></span>
              <span className="name">Sheidu Susan</span>
              <span className="assigned">
                Role: <span className="super">Supervisor</span>
              </span>
              <span className="date">
                Date Created:{" "}
                <span className="super">
                  <Moment format="DD-MM-YYYY">12-07-2023</Moment>
                </span>
              </span>
            </div>
          </div>
          <div className="contactinfo">
            <span className="contact">Contact Information</span>
            <div className="info">
              <div className="first">
                <Call />
                <div className="phone">
                  <span className="mobile">Mobile Number</span>
                  <span className="number">07057007046</span>
                </div>
              </div>
              <div className="copy">
                <Contact />
              </div>
            </div>
            <div className="info">
              <div className="first">
                <Busemail />
                <div className="phone">
                  <span className="mobile">Email Address</span>
                  <span className="number">alameensodiq@yahoo.com</span>
                </div>
              </div>
              {/* <Contact /> */}
            </div>
            <div className="info">
              <div className="first">
                <Buslocate />
                <div className="phone">
                  <span className="mobile">Address</span>
                  <span className="number">29A, Berkeley Street</span>
                </div>
              </div>
              <div className="copy">
                <Contact />
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="permissioncontainer">
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
                  <button className="view" onClick={() => setStep(48)}>
                    <Eye />
                    View
                  </button>
                  {/* <button className="view" onClick={() => setStep(18)}>
                    <Editeye />
                    Edit
                  </button> */}
                </div>
              </div>
              <div className="rolename">
                <span className="name">2.Business Reps</span>
                <div className="button-group">
                  <button className="view" onClick={() => setStep(48)}>
                    <Eye />
                    View
                  </button>
                  <button className="view" onClick={() => setStep(46)}>
                    <Editeye />
                    Edit
                  </button>
                  <button className="view" onClick={() => setStep(50)}>
                    <List />
                    List
                  </button>
                  <button className="view" onClick={() => setStep(50)}>
                    <Create />
                    Create
                  </button>
                  <button className="darkview" onClick={() => setStep(44)}>
                    <ActivateDark />
                    Activate
                  </button>
                  <button className="view" onClick={() => setStep(42)}>
                    <DeactivateDark />
                    Deactivate
                  </button>
                </div>
              </div>
              <div className="rolename">
                <span className="name">3. User management</span>
                <div className="button-group">
                  <button className="view" onClick={() => setStep(48)}>
                    <Eye />
                    View
                  </button>
                  <button className="view" onClick={() => setStep(46)}>
                    <Editeye />
                    Edit
                  </button>
                  <button className="darkview" onClick={() => setStep(50)}>
                    <DarkCreate />
                    Create
                  </button>
                </div>
              </div>
              <div className="rolename">
                <span className="name">4. Subscriptions</span>
                <div className="button-group">
                  <button className="view" onClick={() => setStep(48)}>
                    <Eye />
                    View
                  </button>
                  <button className="view" onClick={() =>setStep(50)}>
                    <List />
                    List
                  </button>
                  <button className="view" onClick={() => setStep(50)}>
                    <Eye />
                    Plan view
                  </button>
                </div>
              </div>
              <div className="rolename">
                <span className="name">5. Projects</span>
                <div className="button-group">
                  <button className="view" onClick={() => setStep(48)}>
                    <Eye />
                    View
                  </button>
                  <button className="view" onClick={() => setStep(46)}>
                    <Editeye />
                    Edit
                  </button>
                  <button className="view" onClick={() => setStep(50)}>
                    <List />
                    List
                  </button>
                  <button className="view" onClick={() => setStep(50)}>
                    <Create />
                    Create
                  </button>
                </div>
              </div>
              <div className="rolename">
                <span className="name">6.Reports</span>
                <div className="button-group">
                  <button className="view" onClick={() =>setStep(48)}>
                    <Eye />
                    View
                  </button>
                </div>
              </div>
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
      padding-inline: 10px;
      padding-block: 15px;
      display: flex;
      flex-direction: row;
      .activeinfo {
        border-right: 1px solid #ebebeb;
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 50%;
        justify-content: center;
        align-items: center;
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
            font-size: 16px;
            font-weight: 500;
          }
          .assigned {
            font-size: 14px;
            color: #667085;
            .super {
              color: #5a6376;
              font-size: 14px;
              font-weight: 600;
            }
          }
          .date {
            font-size: 14px;
            color: #667085;
            .super {
              color: #5a6376;
              font-size: 14px;
              font-weight: 600;
            }
          }
        }
      }
      .contactinfo {
        display: flex;
        flex-direction: column;
        width: 50%;
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
            font-weight: 500;
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
            gap: 200px;
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
            gap: 170px;
            border-bottom: 1px solid rgba(235, 235, 235, 1);
            align-items: center;
            height: 90px;
            .name {
              color: rgba(0, 0, 0, 1);
              font-size: 16px;
              width: 15%;
              font-weight: 500;
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
                height: 24px;
                justify-content: center;
                width: 80px;
                font-size: 10px;
                align-items: center;
                background: rgba(26, 135, 215, 0.1);
              }
              .darkview {
                display: flex;
                flex-direction: row;
                cursor: pointer;
                gap: 6px;
                border: 1px solid #5A6376;
                border-radius: 6px;
                color: #5A6376;
                height: 24px;
                justify-content: center;
                width: 80px;
                font-size: 10px;
                align-items: center;
                background:  #5A63761A;
                ;
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
`;

export default ClientUsermanagementDetails;
