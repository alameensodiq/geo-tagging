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
import { businessprojects } from "../../Routes";
import { ProjectDetails } from "../../Store/Apis/ProjectDetails";
import Pagination from "../../Reusable/Pagination";
import toast from "react-hot-toast";

const ClientProjectDetails = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [status, setStatus] = useState("ACTIVE");
  const [searcher, setSearcher] = useState("");
  const [locker, SetLocker] = useState(false);
  const [reload, setReload] = useState(false);
  const [onload, setOnload] = useState(false);
  const [projectbusId, setProjectbusId] = useState(null);
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
  console.log(window?.location?.pathname.split("/")[3]);
  let id = window?.location?.pathname.split("/")[3];

  useEffect(() => {
    dispatch(ProjectDetails({ id }));
    dispatch(CorporateBusinessRep({ searcher, statuses: false }));
    if (reload) {
      dispatch(ProjectDetails({ id }));
      dispatch(CorporateBusinessRep({ searcher, statuses: false }));
      setReload(false);
    }
  }, [reload, id]);

  const { businessrep, authenticatingbusinessrep } = useSelector(
    (state) => state.businessrep
  );

  console.log(businessrep);

  const activate = businessrep?.data?.data?.filter(
    (item) => item?.isOnActiveProject === false
  );

  const { projectdetails, authenticatingprojectdetails } = useSelector(
    (state) => state.projectdetails
  );
  console.log(projectdetails?.data);

  // const activate = businessrep?.data?.data?.filter(
  //   (item) => item?.hasChangeDefaultPassword === true
  // );
  // const inactivate = businessrep?.data?.data?.filter(
  //   (item) => item?.hasChangeDefaultPassword === false
  // );

  const next = projectdetails?.data?.meta?.next;
  const previous = projectdetails?.data?.meta?.prev;
  const totalPosts = projectdetails?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

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
  return (
    <Flex>
      <Navbar title={title} />
      <AppUserModal
        id={id}
        setStep={setStep}
        step={step}
        setReload={setReload}
        projectbusId={projectbusId}
      />
      <div className="maincontainer">
        <div className="firstdiv">
          <div className="backbutton">
            <Goback
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(-1);
                sessionStorage.removeItem("addactivebusinesses");
                sessionStorage.removeItem("projectId");
              }}
            />
            <span className="name">
              Cluster Name: {projectdetails?.data[0]?.projectName}
            </span>
          </div>
          <div className="modal-div">
            <ModalButton
              onClick={() => {
                if (activate?.length >= 1) {
                  navigate(`../${businessprojects}/location/:location`);
                  sessionStorage.setItem("addactivebusinesses", id);
                  sessionStorage.setItem("projectId", id);
                } else {
                  toast.error("No inactive Business Rep. Please add rep(s)");
                }
              }}
              whitey
              reduce
              title={"New Business Reps"}
            />
            <ModalButton
              onClick={() => {
                if (activate?.length >= 1) {
                  navigate(`../${businessprojects}/location/:location`);
                  sessionStorage.setItem("activeprojectId", id);
                  sessionStorage.setItem("projectId", id);
                } else {
                  toast.error("No inactive Business Rep. Please add rep(s)");
                }
              }}
              background
              color
              title={"New Locations"}
            />
          </div>
        </div>
        <div className="table">
          <div className="date-search">
            {/* <div className="main">
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
            <div className="main">
              <DatePicker
                className="input"
                selected={endDate}
                ref={datePickerRefs}
                onChange={(date) => dateChangers(date)}
                showTimeSelect={false}
                dateFormat="MMM d yyyy"
                placeholderText="13 Oct 2023"
                popperPlacement="bottom-start"
              />
              <Calendar onClick={() => PickDater()} className="calendar" />
            </div> */}
            <InputSearch
              onChange={(e) => setSearcher(e.target.value)}
              placeholder="Search for Sub Corporate Admin name, email, e.t.c"
            />
          </div>
          <div className="wrapper">
            <Tables
              detailsproject
              setProjectbusId={setProjectbusId}
              data={projectdetails?.data}
              setStep={setStep}
            />
            {/* {projectdetails?.data?.length >= 1 && (
              <Pagination
                set={activater}
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={projectdetails?.data?.data?.length}
                paginate={paginate}
                previous={previous}
                next={next}
              />
            )} */}
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
      .modal-div {
        display: flex;
        flex-direction: row;
        gap: 15px;
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
        gap: 30px;
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
          width: 240px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
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
          width: 250px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
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
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 0px;
      }
    }
  }
`;

export default ClientProjectDetails;
