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
            <span>2. Add Locations</span>
          </div>
        </div>
        <div className="table">
          {
            activated
            ?
            ""
            :
            pend
            ?
            ""
            :
            ""
          }
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
    padding-top: 20px;
    padding-inline: 25px;
    gap: 50px;
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
