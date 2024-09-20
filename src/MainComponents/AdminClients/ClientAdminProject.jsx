import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import InputSearch from "../../bits/InputSearch";
import Tables from "../../bits/Tables";
import { CorporateBusinessRep } from "../../Store/Apis/CorporateBusinessRep";
import AppUserModal from "../../Modal/AppUserModal";
import { businessprojects } from "../../Routes";
import { useNavigate } from "react-router-dom";
import { CorporateProject } from "../../Store/Apis/CorporateProject";
import Pagination from "../../Reusable/Pagination";
import { CorporateDashboard } from "../../Store/Apis/CorporateDashboard";

const ClientAdminProject = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [id, setId] = useState("");
  const [status, setStatus] = useState("ACTIVE");
  const [searcher, setSearcher] = useState("");
  const [locker, SetLocker] = useState(false);
  const [reload, setReload] = useState(false);
  const [onload, setOnload] = useState(false);
  const [statuses, setStatuses] = useState(true);
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
    dispatch(CorporateDashboard());
    if (reload) {
      dispatch(CorporateDashboard());
    }
  }, [reload]);

  const { corporatedashboard, authenticatingcorporatedashboard } = useSelector(
    (state) => state.corporatedashboard
  );

  useEffect(() => {
    dispatch(CorporateProject({ searcher, currentPage, statuses }));
    if (reload) {
      dispatch(CorporateProject({ searcher, currentPage, statuses }));
      setReload(false);
    }
  }, [reload, searcher, currentPage, statuses]);

  const { project, authenticatingproject } = useSelector(
    (state) => state.project
  );
  console.log(project?.data?.data);

  const next = project?.data?.meta?.next;
  const previous = project?.data?.meta?.prev;
  const totalPosts = project?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  const activate = project?.data?.data?.filter(
    (item) => item?.isActive === true
  );
  const inactivate = project?.data?.data?.filter(
    (item) => item?.isActive === false
  );

  console.log(activate);
  console.log(inactivate);

  const setActivate = () => {
    SetActivate(true);
    SetPend(false);
    setStatuses(true);
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
    setStatuses(false);
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
      />
      <div className="maincontainer">
        <div className="top">
          <div className="start">
            <div className="numbers">
              <span className="name">Projects</span>
            </div>
            <span className="about">
              This overview provides a comprehensive show of all projects
            </span>
          </div>
          <div>
            <ModalButton
              onClick={() =>
                navigate(`../${businessprojects}/location/:location`)
              }
              background
              color
              title="New Project"
            />
          </div>
        </div>
        <div className="table">
          <div className="statuses">
            <div
              onClick={() => setActivate()}
              className={`${activated ? "active" : "status"}`}
            >
              <span>Active Projects</span>
              <span
                className={`${activated ? "active-number" : "status-number"}`}
              >
                {corporatedashboard?.data?.ProjectsCount?.activeProjects}
              </span>
            </div>
            <div
              onClick={() => setPending()}
              className={`${pend ? "active" : "status"}`}
            >
              <span>Inactive Projects</span>
              <span className={`${pend ? "active-number" : "status-number"}`}>
                {corporatedashboard?.data?.ProjectsCount?.inactiveProjects}
              </span>
            </div>
          </div>
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
          {activated ? (
            <>
              <div className="wrapper">
                <Tables
                  setId={setId}
                  activeproject
                  data={activate}
                  setStep={setStep}
                />
                {project?.data?.meta?.totalCount >= 10 && (
                  <Pagination
                    set={activater}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    paginate={paginate}
                    previous={previous}
                    next={next}
                  />
                )}
              </div>
            </>
          ) : pend ? (
            <>
              <div className="wrapper">
                <Tables
                  setId={setId}
                  inactiveproject
                  data={inactivate}
                  setStep={setStep}
                />
                {project?.data?.meta?.totalCount >= 10 && (
                  <Pagination
                    set={activater}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    paginate={paginate}
                    previous={previous}
                    next={next}
                  />
                )}
              </div>
            </>
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
        gap: 30px;
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
          width: 240px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
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
          width: 250px;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }
        .active-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color: #edf4f9;
          border-radius: 10px;
          width: 40px;
          align-items: center;
          height: 20px;
          color: #65ace0;
          font-size: 10px;
        }
        .status-number {
          display: flex;
          flex-direction: row;
          justify-content: center;
          background-color: #f0f0f0;
          color: #868e96;
          font-size: 10px;
          border-radius: 10px;
          width: 40px;
          align-items: center;
          height: 20px;
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

export default ClientAdminProject;
