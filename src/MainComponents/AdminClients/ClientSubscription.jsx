import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import Tables from "../../bits/Tables";
import AppUserModal from "../../Modal/AppUserModal";
import InputSearch from "../../bits/InputSearch";
import DatePicker from "react-datepicker";
import FeaturesGrid from "../../Reusable/FeaturesGrid";
import Plans from "../../Reusable/Plans";

const ClientSubscription = ({ title }) => {
  const [step, setStep] = useState(0);
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

  const datePickerRefs = useRef(null);

  const dateChangers = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDater = () => {
    datePickerRefs.current.setOpen(true);
  };

  return (
    <Flex activated={activated}>
      <Navbar title={title} />
      <AppUserModal setStep={setStep} step={step} setReload={setReload} />
      <div className="maincontainer">
        <div className="top">
          <div className="start">
            <div className="numbers">
              <span className="name">Subscriptions</span>
            </div>
            <span className="about">
              This overview provides a comprehensive showof the amount of money
              spent on Subscriptions
            </span>
          </div>
          {/* <div>
            {activated ? (
              <ModalButton
                onClick={() => setStep(8)}
                background
                color
                title="New User Management"
              />
            ) : pend ? (
              <ModalButton
                onClick={() => setStep(12)}
                background
                color
                title="New Role"
              />
            ) : (
              ""
            )}
          </div> */}
        </div>
        <div className="table">
          <div className="statuses">
            <div
              onClick={() => setActivate()}
              className={`${activated ? "active" : "status"}`}
            >
              <span>Subscription History</span>
            </div>
            <div
              onClick={() => setPending()}
              className={`${pend ? "active" : "status"}`}
            >
              <span>Plans Overview</span>
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
            </div> */}
            {activated ? (
              <>
                <InputSearch
                  onChange={(e) => setSearcher(e.target.value)}
                  placeholder="Search for project name, business rep name e.t.c"
                />
                <div className="filter">
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
                    <Calendar
                      onClick={() => PickDater()}
                      className="calendar"
                    />
                  </div>
                  <ModalButton
                    onClick={() => setStep(21)}
                    background
                    color
                    exportdownload
                    remove
                    title="Export History"
                  />
                </div>
              </>
            ) : pend ? (
              ""
            ) : (
              ""
            )}
          </div>
          {activated ? (
            <Tables subhistory data={[]} setStep={setStep} />
          ) : pend ? (
            <FeaturesGrid dashboard row={4}>
              <Plans standard />
              <Plans enterprise />
              <Plans plus />
              <Plans />
            </FeaturesGrid>
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
    padding-top: 20px;
    padding-inline: 25px;
    gap: 50px;
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
            font-size: 20px;
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
      gap: ${(props) => (props.activated ? '30px' : '10px')};
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
        justify-content: space-between;
        gap: 20px;
        height: 35px;
        padding-inline: 20px;
        .filter {
          display: flex;
          flex-direction: row;
          gap: 10px;
          .main {
            position: relative;
            .input {
              width: 113px;
              height: 40px;
              padding: 12px 18px 12px 15px;
              border-radius: 5px;
              border: 1px;
              color: #8d9196;
              font-size: 10px;
              outline: none;
              cursor: pointer;
              border: 1px solid #e2e8f0;
            }
            .calendar {
              position: absolute;
              right: 7px;
              top: 10px;
            }
          }
        }
      }
    }
  }
`;

export default ClientSubscription;
