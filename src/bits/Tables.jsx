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

import { ThemeProvider, createTheme } from "@mui/material";
import { businessprojects, businessreps } from "../Routes";

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
  manageuser
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [identify, setIdentify] = useState(0);
  const [identifyinactive, setIdentifyinactive] = useState(0);
  const [projectactive, setProject] = useState(false);
  const [openprodetails, setopenprodetails] = useState(false);
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

  const ProjectActive = () => {
    setProject(!projectactive);
  };

  const DeactivateProdetails = () => {
    setopenprodetails(!openprodetails);
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
                          <div className="row">
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
                          <div className="row">
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
                </StyledTableRow>
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
                    TIME STAMP
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIVE ON
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DAILY WORKING HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    COMPLIANCE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DAILY PAYOUT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    STAUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow style={{ position: "relative" }}>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableCell style={{ width: "10%" }}>
                    <Action onClick={() => ProjectActive()} />
                    {projectactive && (
                      <div className="activeprojectmodal">
                        <div
                          className="row"
                          onClick={() => navigate(`../${businessprojects}/:id`)}
                        >
                          <View />
                          <span>View more</span>
                        </div>
                        <div className="row" onClick={() => setStep(4)}>
                          <Deactivate />
                          <span>Deactivate</span>
                        </div>
                        <div className="row" onClick={() => setStep(8)}>
                          <View />
                          <span>Renew Subscription</span>
                        </div>
                      </div>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableCell style={{ width: "10%" }}>
                    <Action />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableCell style={{ width: "10%" }}>
                    <Action />
                  </StyledTableCell>
                </StyledTableRow>
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
                    TIME STAMP
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIVE ON
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    DAILY WORKING HOURS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    COMPLIANCE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    DAILY PAYOUT
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    STAUS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ACTIONS
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableCell style={{ width: "10%" }}>
                    <span
                      className="projectactivate"
                      onClick={() => setStep(6)}
                    >
                      Activate
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableCell style={{ width: "10%" }}>
                    <span className="projectactivate">Activate</span>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell style={{ width: "15%" }}>
                    Building Homes
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>15</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Hourly
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    12-03-2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableCell style={{ width: "10%" }}>
                    <span className="projectactivate">Activate</span>
                  </StyledTableCell>
                </StyledTableRow>
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
                    Sheidu Susan
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    07057007046
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    NO 52,Berkely street
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    4 hours
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    1900
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    <Moment format="DD-MM-YYYY">12-4-2024</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "12%" }}>
                    19 DAYS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "8%" }}>
                    <Action onClick={() => DeactivateProdetails()} />
                    {openprodetails && (
                      <div className="activeprojectdetailsmodal">
                        <div className="row">
                          <Location />
                          <span>Change Location</span>
                        </div>
                        <div className="row" onClick={() => setStep(4)}>
                          <Deactivate />
                          <span>Deactivate</span>
                        </div>
                      </div>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
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
                  <StyledTableCell style={{ width: "20%" }}>
                    ROLE
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    EMAIL ADDRESS
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    PHONE NUMBER
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
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
                  <StyledTableRow style={{ position: "relative" }}>
                    <StyledTableCell style={{ width: "20%" }}>
                      Abdul warith
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      Super Admin
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      alameensodiq@gmail.com
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "20%" }}>
                      07057007046
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD-MM-YYYY">12-03-2024</Moment>
                    </StyledTableCell>
                    <StyledTableCell style={{ width: "10%" }}>
                      <Action  />
                    </StyledTableCell>
                  </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
`;

export default Tables;
