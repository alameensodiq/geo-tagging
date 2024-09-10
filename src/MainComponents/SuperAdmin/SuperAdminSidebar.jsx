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
import { ReactComponent as Corp } from "../../../src/assets/Corp.svg";
import { ReactComponent as Auditor } from "../../../src/assets/Auditor.svg";
// import { ReactComponent as Project } from "../../../src/assets/Project.svg";
import { ReactComponent as User } from "../../../src/assets/usermanage.svg";
import { ReactComponent as Sub } from "../../../src/assets/subscription.svg";
import { ReactComponent as Account } from "../../../src/assets/accounting.svg";
// import { ReactComponent as Report } from "../../../src/assets/Reporting.svg";
import {
  corporate,
  superadmins,
  clients,
  businessusers,
  businesssub,
  audit,
  superusers,
  accounting,
  supersub
} from "../../Routes";

import {
  LogOutAuthentication,
  LogOutAuthenticationSuperAdmin
} from "../../bits/LogOutAuthentication";
import { businessreps } from "../../Routes";
import { useDispatch, useSelector } from "react-redux";
import { SuperCorporate } from "../../Store/Apis/SuperCorporate";

function SuperAdminSidebar({ name, role, open, setOpen }) {
  const router = useLocation();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setSearcher] = useState("");
  useEffect(() => {
    dispatch(SuperCorporate({ searcher, currentPage }));
  }, []);

  const { supercorporate, authenticatingsupercorporate } = useSelector(
    (state) => state.supercorporate
  );
  console.log(supercorporate?.data?.data);

  // background: ${({open})  => ( open ? '#333481' : 'transparent')};
  return (
    <Sidecontent>
      <div className="header">
        <div className="first">
          <Logo />
        </div>
      </div>

      <div className={`body ${open ? "sum" : "body"}`}>
        <div className="menu-div">
          <span className="menu">Menu</span>
        </div>
        <Link
          to={superadmins}
          className={`item ${
            router.pathname === `${superadmins}` ? "active" : ""
          }`}
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
          to={corporate}
          className={`item ${
            router.pathname === `${superadmins}/${corporate}` ||
            router.pathname.startsWith(`${superadmins}/${corporate}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Corp className="nav-svg1" />
          <p className="man">Corporates</p>
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
            {supercorporate?.data?.data?.length}
          </span>
        </Link>
        <Link
          to={supersub}
          className={`item ${
            router.pathname === `${superadmins}/${supersub}` ||
            router.pathname.startsWith(`${superadmins}/${supersub}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Sub className="nav-svg1" />
          <p className="man">Subscriptions</p>
        </Link>
        <Link
          to={superusers}
          className={`item ${
            router.pathname === `${superadmins}/${superusers}` ||
            router.pathname.startsWith(`${superadmins}/${superusers}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <User className="nav-svg1" />
          <p className="man">User management</p>
        </Link>
        <Link
          to={audit}
          className={`item ${
            router.pathname === `${superadmins}/${audit}` ||
            router.pathname.startsWith(`${superadmins}/${audit}`)
              ? "active"
              : ""
          }`}
        >
          <div className="paint"></div>
          <Auditor className="nav-svg1" />
          <p className="man">Audit Trail</p>
        </Link>
        <div className="settingsdiv">
          <span className="settings">SETTINGS</span>
          <Link
            to={accounting}
            className={`item ${
              router.pathname === `${superadmins}/${accounting}` ||
              router.pathname.startsWith(`${superadmins}/${accounting}`)
                ? "active"
                : ""
            }`}
          >
            <div className="paint"></div>
            <Account className="nav-svg1" />
            <p className="man">My Account</p>
          </Link>
        </div>
      </div>
      <div
        onClick={() => LogOutAuthenticationSuperAdmin()}
        className={`log ${open ? "sum" : "log"}`}
      >
        <div className="real">
          <span className="logbut">Log Out</span>
          <span className="admin">Super Admin</span>
        </div>
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

  .sum {
    // margin-block: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 19px;
    background: transparent;
    padding-bottom: 80px;
    border-bottom: 0.5px solid;
    border-bottom-color: rgb(135, 145, 163, 0.08);

    .item {
      display: flex;
      justify-content: start;
      align-items: center;
      width: 210px;
      height: 45px;
      gap: 15px;
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
      // .data-title {
      //   margin-top: 17px;
      //   padding: 0;
      //   p {
      //     margin-bottom: 0rem;
      //   }
      // }

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
      background: rgb(22, 157, 7, 0.1);
      /* background: #169D07; */

      border-radius: 6px;
      // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      /* color: #169D07; */

      .paint {
        background: #169d07 !important;
        width: 4px;
        height: 45px;
      }

      .nav-svg {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
        }
      }

      // .nav-svg {
      //   fill:  #169D07 !important;
      //   stroke:  #169D07 !important;
      // }

      // .nav-svg1 {
      //   // fill:   #4D47C3 !important;
      //   stroke:  #4D47C3 !important;
      // }

      .man {
        color: #169d07 !important;

        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
      }
    }

    .item:hover,
    .item:focus {
      background: rgb(22, 157, 7, 0.1);
      border-radius: 6px;

      /* color: #169D07; */

      //   .paint{
      //     background: #169D07 !important;
      //     width: 4px;
      //     height: 45px;
      // }
      .paint {
        background: #169d07 !important;
        width: 4px;
        height: 45px;
      }

      .nav-svg {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
          stroke-width: 0.1px;
        }
      }

      .nav-svg1 {
        path {
          fill: #169d07 !important;
          stroke: #169d07 !important;
        }
      }

      // .nav-svg {
      //   fill: #169D07 !important;
      //   stroke:#169D07 !important;
      // }

      // .nav-svg1 {
      //   // fill: #169D07 !important;
      //   stroke: #169D07 !important;
      // }

      .man {
        color: #169d07 !important;

        font-size: 12px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0em;
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

export default SuperAdminSidebar;
