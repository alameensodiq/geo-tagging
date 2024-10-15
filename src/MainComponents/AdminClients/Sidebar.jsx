import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// import {ReactComponent as Livemonitor} from '../../assets/livemonitor.svg';
// import {ReactComponent as Screenshots} from '../../assets/screenshotsmenu.svg';
// import {ReactComponent as Attendance} from '../../assets/attendance.svg';
// import {ReactComponent as Supports} from '../../assets/supports.svg';
// import {ReactComponent as Subscription} from '../../assets/subscription.svg';
// import {ReactComponent as Reports} from '../../assets/reports.svg';
import { ReactComponent as Logo } from "../../../src/assets/smalllogo.svg";
import { ReactComponent as Logout } from "../../../src/assets/logout.svg";
import { ReactComponent as Rep } from "../../../src/assets/Rep.svg";
import { ReactComponent as Project } from "../../../src/assets/Project.svg";
import { ReactComponent as User } from "../../../src/assets/usermanage.svg";
import { ReactComponent as Sub } from "../../../src/assets/subscription.svg";
import { ReactComponent as Report } from "../../../src/assets/Reporting.svg";
import { ReactComponent as Account } from "../../../src/assets/accounting.svg";
import {
  businessprojects,
  businessusers,
  clients,
  businesssub,
  businessreport,
  businessaccounting
} from "../../Routes";

import { LogOutAuthentication } from "../../bits/LogOutAuthentication";
import { businessreps } from "../../Routes";
import { CorporateBusinessRep } from "../../Store/Apis/CorporateBusinessRep";
import { useDispatch, useSelector } from "react-redux";
import { CorporateDashboard } from "../../Store/Apis/CorporateDashboard";

function Sidebar({ name, role, open, setOpen }) {
  const router = useLocation();
  const dispatch = useDispatch();
  const [searcher, setSearcher] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    // dispatch(CorporateBusinessRep({ searcher, currentPage }));
    dispatch(CorporateDashboard());
  }, []);

  const { corporatedashboard, authenticatingcorporatedashboard } = useSelector(
    (state) => state.corporatedashboard
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setOpen(true);
      } else {
        // setOpen(false);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);

  // background: ${({open})  => ( open ? '#333481' : 'transparent')};
  return (
    <Sidecontent open={open}>
      {open ? (
        ""
      ) : (
        <div className="header">
          <div className="first">
            <Logo />
          </div>
        </div>
      )}

      <div className={`body ${open ? "sum" : "body"}`}>
        {open ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <span style={{ fontSize: "10px" }} onClick={() => setOpen(!open)}>
              Menu
            </span>
          </div>
        ) : (
          <div className="menu-div" style={{ cursor: "pointer" }}>
            <span className="menu" onClick={() => setOpen(!open)}>
              Menu
            </span>
          </div>
        )}
        <Link
          to={clients}
          className={`item ${router.pathname === `${clients}` ? "active" : ""}`}
        >
          <div className="paint"></div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nav-svg1"
          >
            <path
              d="M18.3333 7.10008V3.31675C18.3333 2.14175 17.8 1.66675 16.475 1.66675H13.1083C11.7833 1.66675 11.25 2.14175 11.25 3.31675V7.09175C11.25 8.27508 11.7833 8.74175 13.1083 8.74175H16.475C17.8 8.75008 18.3333 8.27508 18.3333 7.10008Z"
              fill="#848D87"
            />
            <path
              d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
              fill="#848D87"
            />
            <path
              d="M8.75008 7.10008V3.31675C8.75008 2.14175 8.21675 1.66675 6.89175 1.66675H3.52508C2.20008 1.66675 1.66675 2.14175 1.66675 3.31675V7.09175C1.66675 8.27508 2.20008 8.74175 3.52508 8.74175H6.89175C8.21675 8.75008 8.75008 8.27508 8.75008 7.10008Z"
              fill="#848D87"
            />
            <path
              d="M8.75008 16.475V13.1083C8.75008 11.7833 8.21675 11.25 6.89175 11.25H3.52508C2.20008 11.25 1.66675 11.7833 1.66675 13.1083V16.475C1.66675 17.8 2.20008 18.3333 3.52508 18.3333H6.89175C8.21675 18.3333 8.75008 17.8 8.75008 16.475Z"
              fill="#848D87"
            />
          </svg>
          <p className="man">Overview</p>
        </Link>
        <Link
          to={businessreps}
          className={`item ${
            router.pathname === `${clients}/${businessreps}` ||
            router.pathname.startsWith(`${clients}/${businessreps}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Rep className="nav-svg1" />
          <p className="man">Business Reps</p>
          <span
            style={{
              width: "20%",
              height: "40%",
              background: "#FF0007",
              color: "#FFFFFF",
              fontSize: "10px",
              display: "flex",
              flexDirection: "row",
              borderRadius: "10px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {corporatedashboard?.data?.TotalBusinessReps?.totalBusinessReps}
          </span>
        </Link>
        <Link
          to={businessprojects}
          className={`item ${
            router.pathname === `${clients}/${businessprojects}` ||
            router.pathname.startsWith(`${clients}/${businessprojects}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Project className="nav-svg1" />
          <p className="man">Cluster Management</p>
        </Link>
        <Link
          to={businesssub}
          className={`item ${
            router.pathname === `${clients}/${businesssub}` ||
            router.pathname.startsWith(`${clients}/${businesssub}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Sub className="nav-svg1" />
          <p className="man">Subscriptions</p>
        </Link>
        <Link
          to={businessusers}
          className={`item ${
            router.pathname === `${clients}/${businessusers}` ||
            router.pathname.startsWith(`${clients}/${businessusers}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <User className="nav-svg1" />
          <p className="man">User management</p>
        </Link>
        <Link
          to={businessreport}
          className={`item ${
            router.pathname === `${clients}/${businessreport}` ||
            router.pathname.startsWith(`${clients}/${businessreport}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Report className="nav-svg1" />
          <p className="man">Reports</p>
        </Link>
        <div className="settingsdiv">
          {open ? "" : <span className="settings">SETTINGS</span>}
          <Link
            to={businessaccounting}
            className={`item ${
              router.pathname === `${clients}/${businessaccounting}` ||
              router.pathname.startsWith(`${clients}/${businessaccounting}`)
                ? "active"
                : ""
            }`}
          >
            <div className="paint"></div>
            <Account className="nav-svg1" />
            <p className="man">My Account</p>
          </Link>
        </div>
        {/* <Link
               to={screenshot}
               className={`item ${router.pathname === `${client}/${screenshot}` ? "active" : ""}`}
             >
            <div className="paint"></div>
            <Screenshots className="nav-svg1" />
            <p className="man">Screenshot</p>
          </Link>
          <Link
                to={timeattendance}
                className={`item ${router.pathname === `${client}/${timeattendance}` ? "active" : ""}`}
              >
            <div className="paint"></div>
            <Attendance className="nav-svg1" />
            <p className="man">Time Attendance</p>
          </Link> */}
      </div>
      <div
        onClick={() => LogOutAuthentication()}
        className={`log ${open ? "sum" : "log"}`}
      >
        {open ? (
          ""
        ) : (
          <div className="real">
            <span className="logbut">Log Out</span>
            <span className="admin">Corporate Admin</span>
          </div>
        )}
        <div className="buttonlogout">
          <Logout />
        </div>
      </div>
    </Sidecontent>
  );
}

const Sidecontent = styled.div`
  // padding: 30px;
  height: 100vh;
  width: ${({ open }) =>
    open ? "40px" : ""}; // Adjust the width based on open state
  transition: width 0.3s ease; // Smooth transition effect

  a {
    text-decoration: none;
    color: black;
  }

  .log {
    display: flex;
    flex-direction: row;
    height: 60px;
    padding: 20px 0px 10px 40px;
    cursor: pointer;
    align-items: "center";
    gap: 35px;

    .real {
      font-style: normal;
      display: flex;
      flex-direction: column;
      justify-items: "center";
      align-items: "center";
      padding: 10px 10px 20px 0px;

      .logbut {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        color: #5a6376;
      }

      .admin {
        color: #5a6376;
        font-size: 11px;
      }

      .client {
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        color: #999999;
        margin-top: 8%;
      }
    }

    .buttonlogout {
      // margin-left: 1%;
      margin-top: 5%;
    }
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    gap: 15px;
    margin-top: 4%;
    /* border-bottom: 0.5px solid; */
    /* border-bottom-color: rgb(135, 145, 163, 0.08) ; */
    padding-bottom: 5%;

    .first {
      // margin-top; 30px;
      display: flex;
      align-items: center;
      height: 5.1vh;
      padding-left: 3%;

      .very {
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 43px;
        color: #212121;
      }
    }

    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgb(135, 145, 163, 0.08);
    }
    .title {
      line-height: 1.5;
      font-size: 13px;
      margin-top: 10% h5 {
        color: #969494;
      }
      h6 {
        font-size: 12px;
        font-weight: 700;
        margin-top: 5px;
        color: #1a87d7;
      }
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .downimg {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      object-fit: contain;
    }
  }

  .body {
    // margin-block: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding-inline: 12%;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 0.5px solid;
    border-bottom-color: #e2e8f0;
    .menu-div {
      display: flex;
      flex-direction: row;
      padding-inline: 17px;
      padding-bottom: 25px;
      padding-top: 5px;
      .menu {
        display: flex;
        flex-direction: row;
        color: #5a6376;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .item {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 210px;
      height: 40px;
      gap: 4%;
      text-transform: capitalize;
      // padding-left: 17px;
      border-radius: 5px;
      padding: 0px 0px 0px 0px;
      //   background :  #4D47C3;

      p {
        // margin-bottom: 0rem;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #848d87;
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 10px;
      }

      .nav-svg {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }
      .man {
        color: #848d87 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .active {
      background: rgba(101, 172, 224, 0.06);
      border-radius: 6px;
      .paint {
        background: #1a87d7 !important;
        width: 4px;
        height: 40px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      .nav-svg {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
        }
      }

      .man {
        color: #1a87d7 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }

    .item:hover,
    .item:focus {
      background: #f3f6ff;
      border-radius: 6px;
      .paint {
        background: #1a87d7 !important;
        width: 4px;
        height: 40px;
      }
      .nav-svg {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
          stroke-width: 0.1px;
        }
      }
      .nav-svg1 {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
        }
      }
      .man {
        color: #1a87d7 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .settingsdiv {
      display: flex;
      flex-direction: column;
      padding-top: 15%;
      padding-bottom: 4%;
      gap: 10px;
      .settings {
        color: #5a6376;
        font-size: 14px;
        font-weight: 500;
        padding-left: 15px;
      }
      .menu-div {
        display: flex;
        flex-direction: row;
        padding-inline: 17px;
        padding-block: 25px;
        .menu {
          display: flex;
          flex-direction: row;
          color: #5a6376;
          font-size: 15px;
          font-weight: 500;
        }
      }

      .item {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 210px;
        height: 40px;
        gap: 4%;
        text-transform: capitalize;
        // padding-left: 17px;
        border-radius: 5px;
        padding: 0px 0px 0px 0px;
        //   background :  #4D47C3;

        p {
          // margin-bottom: 0rem;

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #848d87;
        }

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          margin-right: 10px;
        }

        .nav-svg {
          path {
            fill: #848d87;
            stroke: #ffffff;
            stroke-width: 0.1px;
          }
        }

        .nav-svg1 {
          path {
            fill: #848d87;
            stroke: #ffffff;
            stroke-width: 0.1px;
          }
        }
        .man {
          color: #848d87 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }
      .active {
        background: rgba(101, 172, 224, 0.06);
        border-radius: 6px;
        .paint {
          background: #1a87d7 !important;
          width: 4px;
          height: 40px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        .nav-svg {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
            stroke-width: 0.1px;
          }
        }

        .nav-svg1 {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
          }
        }

        .man {
          color: #1a87d7 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }

      .item:hover,
      .item:focus {
        background: #f3f6ff;
        border-radius: 6px;
        .paint {
          background: #1a87d7 !important;
          width: 4px;
          height: 40px;
        }
        .nav-svg {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
            stroke-width: 0.1px;
          }
        }
        .nav-svg1 {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
          }
        }
        .man {
          color: #1a87d7 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }
    }
  }

  .logout {
    color: red;
  }

  .advertise {
    background: linear-gradient(107.91deg, #eaabf0 7.37%, #4623e9 95.19%);
    border-radius: 20px;
    padding: 15px;
    text-align: center;
    margin-block: 5px;
    height: 130px;
    display: grid;
    place-items: center;

    p {
      color: #fff;
    }

    button {
      background: #fff;
      border: 1px solid #fff;
      border-radius: 30px;
      padding: 10px;
      color: #000;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-block: 20px 0;
    gap: 15px;
    .title {
      line-height: 1.5;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .downimg {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      object-fit: contain;
    }
  }

  .sum {
    // margin-block: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding-inline: 12%;
    gap: 10px;
    padding-bottom: 50px;
    border-bottom: 0.5px solid;
    border-bottom-color: #e2e8f0;
    .menu-div {
      display: flex;
      flex-direction: row;
      padding-inline: 17px;
      padding-block: 25px;
      .menu {
        display: flex;
        flex-direction: row;
        color: #5a6376;
        font-size: 15px;
        font-weight: 500;
      }
    }

    .item {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 210px;
      height: 40px;
      gap: 4%;
      text-transform: capitalize;
      // padding-left: 17px;
      border-radius: 5px;
      padding: 0px 0px 0px 0px;
      //   background :  #4D47C3;

      p {
        // margin-bottom: 0rem;

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #848d87;
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        margin-right: 10px;
      }

      .nav-svg {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #848d87;
          stroke: #ffffff;
          stroke-width: 0.1px;
        }
      }
      .man {
        color: #848d87 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .active {
      background: rgba(101, 172, 224, 0.06);
      border-radius: 6px;
      .paint {
        background: #1a87d7 !important;
        width: 4px;
        height: 40px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      .nav-svg {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
        }
      }

      .man {
        color: #1a87d7 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }

    .item:hover,
    .item:focus {
      background: #f3f6ff;
      border-radius: 6px;
      .paint {
        background: #1a87d7 !important;
        width: 4px;
        height: 40px;
      }
      .nav-svg {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
          stroke-width: 0.1px;
        }
      }
      .nav-svg1 {
        path {
          fill: #1a87d7 !important;
          stroke: #1a87d7 !important;
        }
      }
      .man {
        color: #1a87d7 !important;
        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }
    .settingsdiv {
      display: flex;
      flex-direction: column;
      padding-top: 15%;
      padding-bottom: 4%;
      gap: 10px;
      .settings {
        color: #5a6376;
        font-size: 14px;
        font-weight: 500;
        padding-left: 15px;
      }
      .menu-div {
        display: flex;
        flex-direction: row;
        padding-inline: 17px;
        padding-block: 25px;
        .menu {
          display: flex;
          flex-direction: row;
          color: #5a6376;
          font-size: 15px;
          font-weight: 500;
        }
      }

      .item {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 210px;
        height: 40px;
        gap: 4%;
        text-transform: capitalize;
        // padding-left: 17px;
        border-radius: 5px;
        padding: 0px 0px 0px 0px;
        //   background :  #4D47C3;

        p {
          // margin-bottom: 0rem;

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: #848d87;
        }

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          margin-right: 10px;
        }

        .nav-svg {
          path {
            fill: #848d87;
            stroke: #ffffff;
            stroke-width: 0.1px;
          }
        }

        .nav-svg1 {
          path {
            fill: #848d87;
            stroke: #ffffff;
            stroke-width: 0.1px;
          }
        }
        .man {
          color: #848d87 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }
      .active {
        background: rgba(101, 172, 224, 0.06);
        border-radius: 6px;
        .paint {
          background: #1a87d7 !important;
          width: 4px;
          height: 40px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        .nav-svg {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
            stroke-width: 0.1px;
          }
        }

        .nav-svg1 {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
          }
        }

        .man {
          color: #1a87d7 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }

      .item:hover,
      .item:focus {
        background: #f3f6ff;
        border-radius: 6px;
        .paint {
          background: #1a87d7 !important;
          width: 4px;
          height: 40px;
        }
        .nav-svg {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
            stroke-width: 0.1px;
          }
        }
        .nav-svg1 {
          path {
            fill: #1a87d7 !important;
            stroke: #1a87d7 !important;
          }
        }
        .man {
          color: #1a87d7 !important;
          font-size: 12px;
          font-weight: 500;
          line-height: 17px;
          letter-spacing: 0em;
        }
      }
    }
  }

  .logout {
    color: red;
  }

  .advertise {
    background: linear-gradient(107.91deg, #eaabf0 7.37%, #4623e9 95.19%);
    border-radius: 20px;
    padding: 15px;
    text-align: center;
    margin-block: 5px;
    height: 130px;
    display: grid;
    place-items: center;

    p {
      color: #fff;
    }

    button {
      background: #fff;
      border: 1px solid #fff;
      border-radius: 30px;
      padding: 10px;
      color: #000;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
    }
  }

  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-block: 20px 0;
    gap: 15px;
    .title {
      line-height: 1.5;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    .downimg {
      width: 15px;
      height: 15px;
      margin-top: 5px;
      object-fit: contain;
    }
  }
`;

export default Sidebar;
