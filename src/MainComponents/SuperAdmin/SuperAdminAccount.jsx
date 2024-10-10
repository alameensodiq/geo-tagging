import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import InputSearch from "../../bits/InputSearch";
import Tables from "../../bits/Tables";
import { CorporateBusinessRep } from "../../Store/Apis/CorporateBusinessRep";
import AppUserModal from "../../Modal/AppUserModal";
import { businessprojects } from "../../Routes";
import { useNavigate } from "react-router-dom";
import SuperAdminNavbar from "./SuperAdminNavbar";
import { DownloadCsv } from "../../bits/DownloadCsv";
import FeaturesGrid from "../../Reusable/FeaturesGrid";
import AccountInputText from "../../bits/AccountInputText";
import { ChangePassword } from "../../Store/Apis/ChangePassword";
import { GetUser } from "../../Store/Apis/GetUser";
import { EditAdminDetails } from "../../Store/Apis/EditAdminDetails";
import toast from "react-hot-toast";

const SuperAdminAccount = ({ title }) => {
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
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [log, setLog] = useState(false);

  const [userdetails, setUserdetails] = useState({
    current_password: "",
    password: "",
    password_confirmation: ""
  });

  const [username, setUsername] = useState("");

  const { getuser, authenticatinggetuser } = useSelector(
    (state) => state.getuser
  );
  console.log(getuser?.data);

  const { changepass, authenticatingchangepass } = useSelector(
    (state) => state.changepass
  );
  console.log(changepass?.data);

  const { editadmindetails, authenticatingeditadmindetails } = useSelector(
    (state) => state.editadmindetails
  );

  console.log(editadmindetails?.status, authenticatingeditadmindetails);

  //   current_password, password, password_confirmation

  useEffect(() => {
    dispatch(GetUser());
    if (reload && changepass?.status && !authenticatingchangepass && !log) {
      setStep(0);
      setReload(false);
      setLog(false);
      dispatch(GetUser());
    }
    if (
      reload &&
      editadmindetails?.status &&
      !authenticatingeditadmindetails &&
      !log
    ) {
      dispatch(GetUser());
      setReload(false);
      setLog(false);
    }
    if (changepass?.status && !authenticatingchangepass && log) {
      setStep(35);
    }
    if (editadmindetails?.status && !authenticatingeditadmindetails && log) {
      setStep(34);
    }
  }, [
    reload,
    changepass?.status,
    log,
    authenticatingchangepass,
    editadmindetails?.status,
    authenticatingeditadmindetails
  ]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUserdetails({
      ...userdetails,
      [name]: value
    });
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

  const UpdatePassword = () => {
    setLog(true);
    const { current_password, password, password_confirmation } = userdetails;
    if (password !== password_confirmation) {
      toast.error("Confirm Password not the same as New Password");
      return;
    }
    dispatch(
      ChangePassword({
        current_password,
        password,
        password_confirmation
      })
    );
  };

  const ChangeUser = (e) => {
    const { name, value } = e.target;
    setUsername(value);
  };

  const UpdateAdminDetails = () => {
    setLog(true);
    dispatch(EditAdminDetails({ id, name: username }));
  };
  return (
    <Flex>
      <SuperAdminNavbar title={title} setId={setId} />
      <AppUserModal
        setUserdetails={setUserdetails}
        setStep={setStep}
        setLog={setLog}
        step={step}
        setReload={setReload}
      />
      <div className="maincontainer">
        <div className="top">
          <div className="start">
            <div className="numbers">
              <span className="name">My Account</span>
            </div>
            <span className="about">
              This page allows you to setup your profile
            </span>
          </div>
        </div>
        <FeaturesGrid dashboard unequal account superoverview row={2}>
          <div className="table">
            <div className="start">
              <div className="numbers">
                <span className="name">Profile Settings</span>
              </div>
              <span className="about">
                These are your personal details, they are visible to the public
              </span>
            </div>
            <div className="inputdiv">
              <AccountInputText
                nosign
                label="Full Name"
                logo
                onChange={(e) => ChangeUser(e)}
                name="firstname"
                value={username}
                placeholder={`${`${getuser?.data?.firstName} ${getuser?.data?.lastName}`}`}
              />
              {/* <AccountInputText
                nosign
                label="Email"
                emailogo
                // onChange={(e) => Change(e)}
                name="firstname"
                // value={regbus?.firstname}
                placeholder={`${`${getuser?.data?.email}`}`}
              /> */}
            </div>
            <div className="editrole">
              <ModalButton
                onClick={() => UpdateAdminDetails()}
                background
                color
                remove
                title={
                  authenticatingeditadmindetails ? "Saving..." : "Save Changes"
                }
              />
            </div>
          </div>
          <div className="table">
            <div className="start">
              <div className="numbers">
                <span className="name">Update Password</span>
              </div>
              <span className="about">
                Enter your current password to make update
              </span>
            </div>
            <div className="inputdiv">
              <AccountInputText
                nosign
                label="Current Password"
                reduce
                passwordlogo
                onChange={(e) => Change(e)}
                name="current_password"
                value={userdetails?.current_password}
                placeholder={`${`Enter New Password`}`}
              />
              <AccountInputText
                nosign
                label="New Password"
                reduce
                passwordlogo
                onChange={(e) => Change(e)}
                name="password"
                value={userdetails?.password}
                placeholder={`${`Enter New Password`}`}
              />
              <AccountInputText
                nosign
                label="Confirm New Password"
                reduce
                passwordlogo
                onChange={(e) => Change(e)}
                name="password_confirmation"
                value={userdetails?.password_confirmation}
                placeholder={`${`Confirm New Password`}`}
              />
            </div>
            <div className="editrole">
              <ModalButton
                // onClick={() => setStep(35)}
                onClick={() => UpdatePassword()}
                background
                color
                remove
                title={
                  authenticatingchangepass
                    ? "Updating Password..."
                    : "Update Password"
                }
              />
            </div>
          </div>
        </FeaturesGrid>
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
      .start {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e2e8f0;
        .numbers {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .name {
            color: #212529;
            font-size: 16px;
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
          font-size: 12px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: #8d9196;
        }
      }
      .editrole {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding-right: 47px;
      }
      .inputdiv {
        display: flex;
        flex-direction: column;
        padding-inline: 10px;
        gap: 10px;
      }
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
    }
  }
`;

export default SuperAdminAccount;
