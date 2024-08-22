import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Action } from "../assets/action.svg";
import { ReactComponent as Deactivate } from "../assets/deactivate.svg";
import { ReactComponent as View } from "../assets/view.svg";
import { ReactComponent as Activate } from "../assets/activate.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Colormark } from "../assets/colormark.svg";
import { ReactComponent as Uncolormark } from "../assets/uncolormark.svg";

import { ThemeProvider, createTheme } from "@mui/material";
import {
  businessprojects,
  businessreps,
  businessusers,
  corporate,
  superadmins,
  superusers
} from "../Routes";
import { ModalButton } from "./ModalButton";

const Tables = ({
  active,
  inactive,
  report,
  projects,
  data,
  activeproject,
  inactiveproject,
  setStep,
  detailsproject,
  manageuser,
  editrole,
  subhistory,
  overviewproject,
  reporttable,
  reportnormal,
  reportabnormal,
  reportemoji,
  supercorporateactive,
  supercorporateinactive,
  superactivedetails,
  audit,
  superuser,
  superuserdetail,
  currentsubscriber,
  customplan,
  setId,
  setDetail
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [identify, setIdentify] = useState(0);
  const [projectitemactive, setprojectitemactive] = useState(0);
  const [identifyinactive, setIdentifyinactive] = useState(0);
  const [projectactive, setProject] = useState(false);
  const [openprodetails, setopenprodetails] = useState(false);
  const [useractive, setuseractive] = useState("");
  const [superuseractivity, setSuperuseractivity] = useState("");
  const navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: ["Exo 2"].join(",")
    }
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // fontFamily: `Inter sans-serif`,
      fontWeight: 600,
      fontSize: "9px",
      lineHeight: "13px",
      // fontFamily: "Exo 2, !important",
      /* identical to box height, or 150% */
      alignItems: "center",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "#687182",
      borderBottom: "1px solid #E9EDF5",
      borderTop: "1px solid #E9EDF5",
      backgroundColor: "#E9EDF5",
      fontFamily: theme?.typography?.fontFamily
      //   alignItems: 'center',
      //   textTransform: 'uppercase',
      // border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "10px",
      fontWeight: 400,
      fontFamily: theme?.typography?.fontFamily,
      border: 0,
      color: "#5A6376",
      flexWrap: "wrap"
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff",
      cursor: "pointer",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    "&:nth-of-type(odd)": {
      cursor: "pointer",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));

  const Details = (item) => {
    setOpen(!open);
    setIdentify(item);
  };

  const Detailsinactive = (item) => {
    setOpen2(!open);
    setIdentifyinactive(item);
  };

  const ProjectActive = (item) => {
    setProject(!projectactive);
    setprojectitemactive(item);
  };

  const DeactivateProdetails = () => {
    setopenprodetails(!openprodetails);
  };

  const UserActive = (item) => {
    setuseractive(item);
  };

  const SuperserActiveMethod = (item) => {
    setSuperuseractivity(item);
  };

  const updateManager = (item) => {
    setStep(11);
    setId(item);
    setuseractive("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Flex report={report}>
        {active ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      BUSINESS REP NAMES
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TOTAL ACTIVE HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    PUNCTUALITY RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    TOTAL EARNED PAY
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    ASSIGNED PROJECT
                  </StyledTableCell>

                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "10%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px"
                        }}
                      >
                        {/* <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div> */}
                        <img
                          src={item?.avatar}
                          style={{
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            backgroundColor: "black"
                          }}
                          alt="pictures"
                        />
                      </div>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      {item?.lastName} {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      10 hours
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      50%
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      5000
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      Building Homes
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "12%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      <Action onClick={() => Details(item?.id)} />
                      {open && identify === item?.id && (
                        <div className="active">
                          <div
                            className="row"
                            onClick={() => {
                              setStep(59);
                              setId(item?.id);
                              setIdentifyinactive("");
                            }}
                          >
                            <Deactivate />
                            <span>Deactivate</span>
                          </div>
                          <div
                            className="row"
                            onClick={() =>
                              navigate(`../${businessreps}/${item?.id}`)
                            }
                          >
                            <View />
                            <span>View more</span>
                          </div>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : inactive ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      BUSINESS REP NAMES
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TOTAL ACTIVE HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    PUNCTUALITY RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    TOTAL EARNED PAY
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    ASSIGNED PROJECT
                  </StyledTableCell>

                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "10%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px"
                        }}
                      >
                        {/* <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div> */}
                        <img
                          src={item?.avatar}
                          style={{
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            backgroundColor: "black"
                          }}
                          alt="pictures"
                        />
                      </div>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      {item?.lastName} {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      10 hours
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      50%
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      5000
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      Building Hospital
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "12%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell> */}
                    <StyledTableCell style={{ width: "10%" }}>
                      <Action onClick={() => Detailsinactive(item?.id)} />
                      {open2 && identifyinactive === item?.id && (
                        <div className="active">
                          <div
                            className="row"
                            onClick={() => {
                              setStep(57);
                              setId(item?.id);
                              setIdentifyinactive("");
                            }}
                          >
                            <Activate />
                            <span>Activate</span>
                          </div>
                          <div
                            className="row"
                            onClick={() =>
                              navigate(`../${businessreps}/${item?.id}`)
                            }
                          >
                            <View />
                            <span>View more</span>
                          </div>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : projects ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIVE ON
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    INACTIVE ON
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    LOCATIONS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    CLOCK INS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIVE HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    WAGES EARNED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    COMPLIANCE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    STATUS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.startDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.stopDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.totalLocations}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.checkInCount}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.duration}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.dailyPay?.NGN}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      70%
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.isActive ? (
                        <button className="activer-button">
                          <div className="activer">
                            <span className="round"></span>Active
                          </div>
                        </button>
                      ) : (
                        <button className="inactive-button">
                          <div className="inactive">
                            <span className="round"></span>Inactive
                          </div>
                        </button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2023
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    11-12-2023
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>4</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    3 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    30,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    70%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    <button className="inactive-button">
                      <div className="inactive">
                        <span className="round"></span>Inactive
                      </div>
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2023
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    11-12-2023
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>4</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    3 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    30,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    70%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Active
                      </div>
                    </button>
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : activeproject ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    NAME OF BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PUNCTUALITY
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIVE ON
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DAILY WORKING HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TIME STAMP RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DAILY PAYOUT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    STAUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.punctualPercentage}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.startDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {parseInt(item?.stopTime) - parseInt(item?.startTime)}{" "}
                      hours
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.compliancePercentage}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.dailyPay?.NGN}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      <button className="activer-button">
                        <div className="activer">
                          <span className="round"></span>Active
                        </div>
                      </button>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      <Action onClick={() => ProjectActive(item?.id)} />
                      {projectactive && projectitemactive === item?.id && (
                        <div className="activeprojectmodal">
                          <div
                            className="row"
                            onClick={() =>
                              navigate(`../${businessprojects}/${item?.id}`)
                            }
                          >
                            <View />
                            <span>View more</span>
                          </div>
                          <div
                            className="row"
                            onClick={() => {
                              setStep(4);
                              setId(item?.id);
                              setProject(!projectactive);
                            }}
                          >
                            <Deactivate />
                            <span>Deactivate</span>
                          </div>
                          <div className="row" onClick={() => ""}>
                            <View />
                            <span>Renew Subscription</span>
                          </div>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    30%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    70%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    90,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Active
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <Action />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    70%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    90,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Active
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <Action />
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : inactiveproject ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    NAME OF BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    PUNCTAUALITY
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIVE ON
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DAILY WORKING HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TIME STAMP RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DAILY PAYOUT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    STAUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.punctualPercentage}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">{item?.startDate}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {parseInt(item?.stopTime) - parseInt(item?.startTime)}{" "}
                      hours
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.compliancePercentage}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.dailyPay?.NGN}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      <button className="inactive-button">
                        <div className="inactive">
                          <span className="round"></span>Inactive
                        </div>
                      </button>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      <span
                        className="projectactivate"
                        onClick={() => {
                          setStep(6);
                          setId(item?.id);
                        }}
                      >
                        Activate
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    15%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    70%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    90,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <button className="inactive-button">
                      <div className="inactive">
                        <span className="round"></span>Inactive
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <span className="projectactivate">Activate</span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    35%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    70%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    90,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <button className="inactive-button">
                      <div className="inactive">
                        <span className="round"></span>Inactive
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <span className="projectactivate">Activate</span>
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : detailsproject ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "8%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "14%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      BUSINESS REP NAMES
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    LOCATION NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    LOGIN FREQUENCY
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    WAGES
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    PAYMENT DATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    NO OF DAYS WORKED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "8%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px"
                        }}
                      >
                        <div
                          style={{
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            backgroundColor: "black"
                          }}
                        ></div>
                        {/* <img
                        src={item?.avatar}
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                        alt="pictures"
                      /> */}
                      </div>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "14%" }}>
                      {item?.businessRepName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      {item?.phone}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      {item?.projectLocation}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}></StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      {item?.earnedPay}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      {/* <Moment format="DD-MM-YYYY">12-4-2024</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      {item?.noOfHoursWorked}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "8%" }}>
                      <Action onClick={() => DeactivateProdetails()} />
                      {openprodetails && (
                        <div className="activeprojectdetailsmodal">
                          <div
                            className="row"
                            onClick={() => {
                              "";
                              // navigate(
                              //   `../${businessprojects}/location/:location`
                              // );
                              // setopenprodetails(!openprodetails);
                            }}
                          >
                            <Location />
                            <span>Change Location</span>
                          </div>
                          <div
                            className="row"
                            onClick={() => {
                              setStep(4);
                              setopenprodetails(!openprodetails);
                            }}
                          >
                            <Deactivate />
                            <span>Deactivate</span>
                          </div>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : manageuser ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      NAME
                    </div>
                  </StyledTableCell>
                  {/* <StyledTableCell style={{ width: "20%" }}>
                    ROLE
                  </StyledTableCell> */}
                  <StyledTableCell style={{ width: "30%" }}>
                    EMAIL ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      DATE CREATED
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      ACTION
                    </div>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.lastName} {""} {item?.firstName}
                    </StyledTableCell>
                    {/* <StyledTableCell style={{ width: "20%" }}>
                    Super Admin
                  </StyledTableCell> */}
                    <StyledTableCell style={{ width: "30%" }}>
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Action onClick={() => UserActive(item?.id)} />
                      {useractive === item?.id && (
                        <div className="activeusermodal">
                          <div
                            className="row"
                            onClick={() => updateManager(item?.id)}
                          >
                            <Deactivate />
                            <span>Deactivate</span>
                          </div>
                          <div
                            className="row"
                            onClick={() =>
                              navigate(`../${businessusers}/${item?.id}`)
                            }
                          >
                            <View />
                            <span>View more</span>
                          </div>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : editrole ? (
          <>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
            >
              <Table
                sx={{ minWidth: 400, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      ACTIVITY MENU
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      CAN VIEW
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      CAN EDIT
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Dashboard
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Business Reps
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      User management
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Subscriptions
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Projects
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Reports
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className="editrole">
              <ModalButton
                onClick={() => setStep(0)}
                background
                color
                remove
                title="Save"
              />
            </div>
          </>
        ) : subhistory ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    S/N
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    NAME OF BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    SUBSCRIPTION TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    PAYMENT METHOD
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE SUBSCRIBED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item, index) => (
                  <StyledTableRow>
                    <StyledTableCell style={{ width: "10%" }}>
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.projectName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.noOfBusinessReps}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.subscriptionType}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.paymentMethod}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Moment format="DD-MM-YYYY">
                        {item?.dateSubscribed}
                      </Moment>
                      {/* <Moment format="DD-MM-YYYY">12-07-2024</Moment> */}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <span
                        className="projectactivate"
                        onClick={() => {
                          setStep(21);
                          setDetail(item);
                        }}
                      >
                        View Receipt
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : overviewproject ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    SUBSCRIPTION TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    TOTAL EARNED PAY
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    COMPLIANCE RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    PUNCTUALITY RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    STAUS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.projectName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.createdAt}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      {item?.businessReps}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.subscriptionType}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      {item?.totalEarnedPay}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "13%" }}>
                      {item?.complianceRate}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "12%" }}>
                      {item?.punctualityRate}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "5%" }}>
                      {item?.active ? (
                        <button className="activer-button">
                          <div className="activer">
                            <span className="round"></span>Active
                          </div>
                        </button>
                      ) : (
                        <button className="inactive-button">
                          <div className="inactive">
                            <span className="round"></span>Active
                          </div>
                        </button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    Cowbell Outreach
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    20-09-2023
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>10</StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Enterprise
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    80,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Active
                      </div>
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    Cowbell Outreach
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    20-09-2023
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>10</StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Enterprise
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    80,000
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "13%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Active
                      </div>
                    </button>
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : reporttable ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BUSINESS REP'S NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    INCIDENT REPORT(%)
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Reports
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    STAUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE SUBMITTED
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Read
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Read
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="inactive-button">
                      <div className="inactive">
                        <span className="round"></span>Unread
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : reportnormal ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BUSINESS REP'S NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Reports
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    DATE SUBMITTED
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : reportabnormal ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    BUSINESS REP'S NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    REPORTS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DATE SUBMITTED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    STATUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "10" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Read
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      // onClick={() => setStep(6)}
                    >
                      Activate
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Party Time
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="activer-button">
                      <div className="activer">
                        <span className="round"></span>Read
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      // onClick={() => setStep(6)}
                    >
                      Activate
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "10%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Cowbell
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="inactive-button">
                      <div className="inactive">
                        <span className="round"></span>Unread
                      </div>
                    </button>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      onClick={() => setStep(6)}
                    >
                      Activate
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : reportemoji ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "25%" }}>
                    PHOTO ID
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    BUSINESS REP'S NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    DATE REPORTED
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "25" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "25" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "25" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "black"
                        }}
                      ></div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    20-10-2024
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : supercorporateactive ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "18%" }}>
                    RC NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    CORPORATES NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    ACTIVE PROJECT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    ACTIVE BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "18" }}>
                      {item?.rcNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start"
                        }}
                      >
                        <span>
                          {item?.lastName} {""} {item?.firstName}
                        </span>
                        <span>{item?.email}</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      {item?.activeProject}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      {item?.activeBusinessReps}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <span
                        className="projectactivate"
                        onClick={() => navigate(`../${corporate}/${item?.id}`)}
                      >
                        View
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "18" }}>
                    024537859
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                      }}
                    >
                      <span>Albert Saheed</span>
                      <span>saheedalbert@gmail.com</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      onClick={() => navigate(`../${corporate}/:id`)}
                    >
                      View
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "18" }}>
                    024537859
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                      }}
                    >
                      <span>Albert Saheed</span>
                      <span>saheedalbert@gmail.com</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      onClick={() => navigate(`../${corporate}/:id`)}
                    >
                      View
                    </span>
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : supercorporateinactive ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "18%" }}>
                    RC NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    CORPORATES NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    ACTIVE PROJECT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    ACTIVE BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "18" }}>
                      024537859
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start"
                        }}
                      >
                        <span>
                          {item?.lastName} {""} {item?.firstName}
                        </span>
                        <span>{item?.email}</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      {item?.activeProject}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      {item?.activeBusinessReps}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <span
                        className="projectactivate"
                        onClick={() => navigate(`../${corporate}/${item?.id}`)}
                      >
                        View
                      </span>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "18" }}>
                    024537859
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                      }}
                    >
                      <span>Albert Saheed</span>
                      <span>saheedalbert@gmail.com</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      onClick={() => navigate(`../${corporate}/:id`)}
                    >
                      View
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "18" }}>
                    024537859
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start"
                      }}
                    >
                      <span>Albert Saheed</span>
                      <span>saheedalbert@gmail.com</span>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    Hello please I want to...
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    20-10-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      onClick={() => navigate(`../${corporate}/:id`)}
                    >
                      View
                    </span>
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : superactivedetails ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "18%" }}>
                    PROJECT NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    NUMBER OF BUSINESS REPS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    NUMBER OF LOCATION
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    SUBSCRIPTION TYPE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    PUNCTUALITY RATE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    TIME STAMP RATE
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "18" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "16%" }}>
                      100
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "16%" }}>
                      {item?.totalLocations}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "16%" }}>
                      Enterprise Plan
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "16%" }}>
                      {item?.punctualPercentage}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "18%" }}>
                      80%
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "18" }}>
                    Customer Loyalty Program
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    100
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>1</StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    Enterprise Plan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    80%
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "18" }}>
                    Customer Loyalty Program
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    100
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>1</StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    Enterprise Plan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "16%" }}>
                    20%
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "18%" }}>
                    80%
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : audit ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "25%" }}>
                    NAME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    ROLE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    DATE AND TIME
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    ACTION PERFORMED
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "25%" }}>
                      {item?.name}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "25%" }}>
                      {item?.roleName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "25%" }}>
                      {item?.time}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "25%" }}>
                      {item?.actionPerformed}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
                {/* <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "25%" }}>
                    Warith
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Super-admin
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    12/04/23, 09:11:04
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Login
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "25%" }}>
                    Warith
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Super-admin
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    12/04/23, 09:11:04
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "25%" }}>
                    Login
                  </StyledTableCell>
                </StyledTableRow> */}
              </TableBody>
            </Table>
          </TableContainer>
        ) : superuser ? (
          <TableContainer
            // component={Paper}
            style={{ boxShadow: "none" }}
          >
            <Table
              sx={{ minWidth: 700, tableLayout: "auto" }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow style={{ paddingRight: "0px" }}>
                  <StyledTableCell style={{ width: "20%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      SUB-ADMIN NAME
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    EMAIL ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DATE CREATED
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      PERMISSION
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      ACTION
                    </div>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.lastName} {""} {item?.firstName}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.email}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      {item?.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      <Moment format="DD-MM-YYYY">{item?.dateJoined}</Moment>{" "}
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "15%" }}>
                      Support and Troubleshooting
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Action onClick={() => SuperserActiveMethod(item?.id)} />
                      {superuseractivity === item?.id && (
                        <div className="superactiveusermodal">
                          <div
                            className="row"
                            onClick={() => {
                              // setSuperuseractivity(false);
                              setStep(32);
                              setId(item?.id);
                              setSuperuseractivity("");
                            }}
                          >
                            <Deactivate />
                            <span>Deactivate</span>
                          </div>
                          <div
                            className="row"
                            onClick={() =>
                              navigate(`../${superusers}/${item?.id}`)
                            }
                          >
                            <View />
                            <span>View more</span>
                          </div>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : superuserdetail ? (
          <>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
            >
              <Table
                sx={{ minWidth: 400, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      PERMISSIONS
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      CAN VIEW
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      CAN EDIT
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Support and Troubleshooting
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Corporate Management
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Subscription Management
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Security Management
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Policy and Compliance
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Policy and Compliance
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Colormark />
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      <Uncolormark />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : currentsubscriber ? (
          <>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
            >
              <Table
                sx={{ minWidth: 400, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      CORPORATES NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      START DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      NEXT RENEWAL DATE
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item) => (
                    <StyledTableRow style={{ position: "relative" }}>
                      <StyledTableCell style={{ width: "40%" }}>
                        {item?.corporateName}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "30%" }}>
                        {item?.startDate}
                      </StyledTableCell>
                      <StyledTableCell style={{ width: "30%" }}>
                        {item?.nextRenewalDate}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                  {/* <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "40%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "30%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow> */}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : customplan ? (
          <>
            <TableContainer
              // component={Paper}
              style={{ boxShadow: "none" }}
            >
              <Table
                sx={{ minWidth: 400, tableLayout: "auto" }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow style={{ paddingRight: "0px" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      CORPORATES NAME
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      START DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      END DATE
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      MONTHS LEFT
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      RENEWAL DATE
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      6 Months Left
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      6 Months Left
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      Abdulazeez Abdulwaarith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      6 Months Left
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      12/04/23
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          ""
        )}
      </Flex>
    </ThemeProvider>
  );
};

const Flex = styled.div`
  width: 100%;
  padding-bottom: 30px;
  max-width: ${(props) => (props.report ? "100%" : "none")};
  .active {
    width: 130px;
    height: 65px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    right: 40px;
    bottom: 40px;
    flex-direction: column;
    box-shadow: 4px 4px 4px 4px #0a0a0a0d;
    position: absolute;
    border-color: #ebebeb;
    gap: 9px;
    .row {
      display: flex;
      flex-direction: row;
      gap: 7px;
      color: #1a87d7;
      align-items: center;
    }
  }
  .activeprojectmodal {
    width: 150px;
    height: 90px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    right: 90px;
    bottom: 10px;
    flex-direction: column;
    box-shadow: 4px 4px 4px 4px #0a0a0a0d;
    position: absolute;
    border-color: #ebebeb;
    gap: 9px;
    .row {
      display: flex;
      flex-direction: row;
      gap: 7px;
      color: #1a87d7;
      align-items: center;
    }
  }
  .activeusermodal {
    width: 150px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    right: 90px;
    bottom: 10px;
    flex-direction: column;
    box-shadow: 4px 4px 4px 4px #0a0a0a0d;
    position: absolute;
    border-color: #ebebeb;
    gap: 9px;
    .row {
      display: flex;
      flex-direction: row;
      gap: 7px;
      color: #1a87d7;
      align-items: center;
    }
  }
  .activeprojectdetailsmodal {
    width: 150px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    right: 90px;
    bottom: 10px;
    flex-direction: column;
    box-shadow: 4px 4px 4px 4px #0a0a0a0d;
    position: absolute;
    border-color: #ebebeb;
    gap: 9px;
    .row {
      display: flex;
      flex-direction: row;
      gap: 7px;
      color: #1a87d7;
      align-items: center;
    }
  }
  .inactive-button {
    background-color: rgba(255, 59, 48, 0.08);
    border-radius: 8px;
    width: 70px;
    height: 30px;
    border: none;
    .inactive {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: 8px;
      color: #ff3b30;
      .round {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #ff3b30;
      }
    }
  }
  .activer-button {
    background-color: rgba(42, 147, 65, 0.08);
    border-radius: 8px;
    width: 70px;
    height: 30px;
    border: none;
    .activer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;
      font-size: 8px;
      color: #2a9341;
      .round {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #2a9341;
      }
    }
  }
  .projectactivate {
    color: #1a87d7;
    font-size: 12px;
  }
  .editrole {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-inline: 20px;
    align-items: center;
    padding-top: 20px;
  }
  .superactiveusermodal {
    width: 150px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    right: 90px;
    bottom: 10px;
    flex-direction: column;
    box-shadow: 4px 4px 4px 4px #0a0a0a0d;
    position: absolute;
    border-color: #ebebeb;
    gap: 9px;
    .row {
      display: flex;
      flex-direction: row;
      gap: 7px;
      color: #5a6376;
      align-items: center;
    }
  }
`;

export default Tables;
