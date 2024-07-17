import React, { useEffect, useRef, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../bits/ModalInputText";
import { LargeSignInButton } from "../bits/LargeSignInButton";
import { ReactComponent as Success } from "../assets/successful.svg";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Dot } from "../assets/dotcircle.svg";
import { ReactComponent as Markgreen } from "../assets/markgreen.svg";
import toast from "react-hot-toast";
import { CreateBusinessRepCorporate } from "../Store/Apis/CreateBusinessRepCorporate";
import { useDispatch, useSelector } from "react-redux";
import ModalInputSelect from "../bits/ModalInputSelect";
import Tables from "../bits/Tables";
import { LocationModalButton } from "../bits/LocationModalButton";
import styled from "styled-components";

const AppUserModal = ({ setStep, step, setReload }) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [regbus, setRegbus] = useState({
    firstname: "",
    lastname: "",
    rcNumber: "",
    address: "",
    phone: "",
    email: "",
    avatar: update
  });

  const { createbus, authenticatingcreatebus } = useSelector(
    (state) => state.createbus
  );

  console.log(createbus);
  //   if (createbus?.status && !authenticatingcreatebus && step !== 0 && bustate) {
  //     setStep(3);
  //     toast.success(createbus?.message)
  //     setRegbus({
  //       name: "",
  //       rcNumber: "",
  //       address: "",
  //       phone: "",
  //       email: "",
  //       avatar: ''
  //     });
  //   }

  useEffect(() => {
    setRegbus((currData) => {
      return {
        ...currData,
        avatar: update
      };
    });
    if (bustate && createbus?.status && !authenticatingcreatebus) {
      setStep(3);
    }

    console.log(update);
  }, [update, bustate, createbus?.status, authenticatingcreatebus]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus({
      ...regbus,
      [name]: value
    });
  };

  const sendingsImage = (e) => {
    const accessToken = sessionStorage.getItem("token");
    const folder = e.target.files[0];

    var myHeaders = new Headers();
    myHeaders.append(
      "X-Api-Key",
      "24cuy5iL1f2nKTx_VmNQd_yDPND8THGm_cQho1REsfDehveIjYea64caZUJRyqEDhHI"
    );
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    var formdata = new FormData();
    formdata.append("files", folder, `${folder?.name}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    fetch(`${process.env.REACT_APP_BASE_URL}file/upload`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result));
        setUpdate(JSON.parse(result)?.data[0]?.name);
        toast.success("File uploaded");
      })
      .catch((error) => {
        console.log("error", error);
        try {
          error.json().then((body) => {
            //Here is already the payload from API
            console.log(body);
            // console.log("message = " + body.error);
            toast.error(body);
          });
        } catch (e) {
          // console.log("Error parsing promise");
          console.log(error);
        }
      });
  };

  const datePickerRef = useRef(null);

  const PickDater = () => {
    console.log("sodiq");
    datePickerRef.current.click();
  };

  console.log(regbus.avatar);

  const SendDetails = () => {
    const { lastname, firstname, rcNumber, address, phone, email, avatar } =
      regbus;
    const name = `${firstname} ${lastname}`;
    dispatch(
      CreateBusinessRepCorporate({
        name,
        rcNumber,
        address,
        phone,
        email,
        avatar
      })
    );
    setBusstate(true);
  };

  const handleCloseModal4 = () => {
    setStep(0);
    setRegbus({
      firstname: "",
      lastname: "",
      rcNumber: "",
      address: "",
      phone: "",
      email: "",
      avatar: ""
    });
    setBusstate(false);
    setReload(true);
  };

  const CreatUsermanagement = () => {
    setStep(10);
  };

  return (
    <div>
      <AppModal
        step={1}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Business Reps"
      >
        <ModalInputText
          label="First Name"
          onChange={(e) => Change(e)}
          name="firstname"
          value={regbus?.firstname}
          placeholder={`${`Enter Business Rep's First Name`}`}
        />
        <ModalInputText
          label="Last Name"
          onChange={(e) => Change(e)}
          name="lastname"
          value={regbus?.lastname}
          placeholder={`${`Enter Business Rep's Last Name`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => Change(e)}
          name="phone"
          value={regbus?.phone}
          placeholder={`${`Enter Business Rep's Phone Number`}`}
        />
        <ModalInputText
          label="Registeration Number"
          onChange={(e) => Change(e)}
          name="rcNumber"
          value={regbus?.rcNumber}
          placeholder={`${`Enter Business Rep's Reg.Number`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => Change(e)}
          name="email"
          value={regbus?.email}
          placeholder={`${`Enter Business Rep's Email`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => Change(e)}
          name="address"
          value={regbus?.address}
          placeholder={`${`Enter Business Rep's Address`}`}
        />
        {regbus?.avatar !== "" ? (
          <img
            src={regbus?.avatar}
            alt="takephoto"
            style={{ width: "492px", height: "105px" }}
          />
        ) : (
          <>
            <input
              type="file"
              id="uploadFile"
              name="avatar"
              onChange={(e) => sendingsImage(e)}
              accept="image/*"
              style={{ display: "none" }}
              className="i-none"
              ref={datePickerRef}
            />
            <ModalInputText
              onClick={() => PickDater()}
              label="Take photo"
              photo
            />
          </>
        )}
        <LargeSignInButton
          onClick={() => setStep(2)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={2}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Business Rep, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetails()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={3}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Business Rep</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={4}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Success />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              Deactivate Project
            </div>
            <span>Are you sure you want to deactivate this project?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton title="No" large onClick={() => setStep(0)} />
            <LargeSignInButton
              title="Yes"
              onClick={() => setStep(5)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={5}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontWeight: "bold"
            }}
          >
            Deactivated Successfully
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully deactivated this project</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={6}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Success />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              Activate Project
            </div>
            <span>Are you sure you want to activate this project?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton title="No" large onClick={() => setStep(0)} />
            <LargeSignInButton
              title="Yes"
              onClick={() => setStep(7)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={7}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontWeight: "bold"
            }}
          >
            Activated Successfully
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully activated this project</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={8}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add User management"
      >
        <ModalInputText
          label="Full Name"
          onChange={(e) => Change(e)}
          name="name"
          value={regbus?.name}
          placeholder={`${`Enter Business Rep's Full Name`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => Change(e)}
          name="phone"
          value={regbus?.phone}
          placeholder={`${`Enter Business Rep's Phone Number`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => Change(e)}
          name="email"
          value={regbus?.email}
          placeholder={`${`Enter Business Rep's Email`}`}
        />
        <ModalInputSelect
          label="Roles"
          onChange={(e) => Change(e)}
          name="roles"
          value={regbus?.address}
          placeholder={`${`Select User management's roles`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(9)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={9}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You are about to add a User management, Are you sure the
            </span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => CreatUsermanagement()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={10}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new User management</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={11}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Success />
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              Deactivate
            </div>
            <span>Are you sure you want to deactivate User manager, Are</span>
            <span>you sure?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton title="No" large onClick={() => setStep(0)} />
            <LargeSignInButton
              title="Yes"
              onClick={() => setStep(12)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={12}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              fontWeight: "bold"
            }}
          >
            Deactivated Successfully
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully deactivated this User Manager</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={13}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Role"
      >
        <ModalInputText
          label="Role Name"
          onChange={(e) => Change(e)}
          name="name"
          value={regbus?.name}
          placeholder={`${`Enter Role Name`}`}
        />
        <ModalInputSelect
          label="Roles"
          onChange={(e) => Change(e)}
          name="roles"
          value={regbus?.address}
          placeholder={`${`Select Permissions`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(14)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={14}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to create a new role, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(15)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={15}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Created a new role</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={16}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Grant Permission
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to grant permission to the user to</span>
            <span>view projects?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(17)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={17}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Successfully
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully granted this user permission to</span>
            <span>view projects</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={18}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Grant Permission
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to grant permission to this user to</span>
            <span>edit projects?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(19)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={19}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Successfully
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>
              You have successfully granted this user the permission to
            </span>
            <span>edit projects</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={20}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <Tables editrole setStep={() => handleCloseModal4()} />
      </AppModal>
      <AppModal
        step={21}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingInline: "45px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Logo />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px"
            }}
          >
            <span style={{ fontSize: "15px", color: "#1E1B39" }}>
              Hello, Sheidu Susan
            </span>
            <div style={{ fontSize: "14px", color: "#5A6376" }}>
              <span>
                You have successfully made a payment of 10,000 naira to add a
              </span>
              <span>total of 5 business reps</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ color: "#1A87D7", fontSize: "18px" }}>10,000</span>
            <span style={{ color: "#5A6376", fontSize: "14px" }}>
              Paid June 1st, 2023
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              borderTop: "1px solid #EBEBEB",
              paddingTop: "15px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>Time</span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>2:23pm</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>Date</span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                10-12-2023
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                Payment method
              </span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                Bank Transfer
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                Bank name
              </span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                GT Bank
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                Account number
              </span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                0123670987
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                Subscription Plan
              </span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                Enterprise
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                Transaction ID
              </span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                009474647489959595
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                Transaction Status
              </span>
              <span style={{ color: "#2A9341", fontSize: "14px" }}>
                Successful
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <span style={{ color: "#5A6376", fontSize: "14px" }}>
                No of Business Reps
              </span>
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                Five(5)
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LocationModalButton
              background
              color
              downloading
              onClick={() => ""}
              title="Share"
            />
            <LocationModalButton sharing onClick={() => ""} title="Download" />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={22}
        currentStep={step}
        closeModal={handleCloseModal4}
        heading="Add New Corporate"
        noheadborder
        // updateUserListData(update);
        // window.location.reload()
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingInline: "50px",
              gap: "10px",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <Dot />
              <span
                style={{
                  width: "34px",
                  height: "34px",
                  color: "white",
                  borderRadius: "50%",
                  background: "#5081E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "7px",
                  left: "8px"
                }}
              >
                1
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#CDCDCD",
                width: "110px",
                height: "4px"
              }}
            >
              <div
                style={{
                  backgroundColor: "#5081E9",
                  width: "55px",
                  height: "4px"
                }}
              ></div>
            </div>
            <span
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#CDCDCD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              2
            </span>
            <div
              style={{
                backgroundColor: "#CDCDCD",
                width: "110px",
                height: "4px"
              }}
            ></div>
            <span
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#CDCDCD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              3
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              paddingInline: "17px",
              fontSize: "14px",
              paddingTop: "10px"
            }}
          >
            <span style={{ color: "#1A87D7" }}>Business Information</span>
            <span style={{ color: "#1E1B39" }}>Subscription Plan</span>
            <span style={{ color: "#1E1B39" }}>Review & Submit</span>
          </div>
          <ModalInputText
            nosign
            label="Business Name"
            // onChange={(e) => Change(e)}
            name="firstname"
            // value={regbus?.firstname}
            placeholder={`${`Enter Corporate’s Business Nmae`}`}
          />
          <ModalInputText
            nosign
            label="RC Number"
            // onChange={(e) => Change(e)}
            name="firstname"
            // value={regbus?.firstname}
            placeholder={`${`Enter Corporate’s RC Number`}`}
          />
          <ModalInputText
            nosign
            label="Address"
            // onChange={(e) => Change(e)}
            name="firstname"
            // value={regbus?.firstname}
            placeholder={`${`Enter Corporate’s Address`}`}
          />
          <ModalInputText
            nosign
            label="Contact Phone Number"
            // onChange={(e) => Change(e)}
            name="firstname"
            // value={regbus?.firstname}
            placeholder={`${`Enter Corporate’s Phone Number`}`}
          />
          <ModalInputText
            nosign
            label="Contact Email"
            // onChange={(e) => Change(e)}
            name="firstname"
            // value={regbus?.firstname}
            placeholder={`${`Enter Corporate’s Email`}`}
          />
          <LargeSignInButton
            onClick={() => setStep(23)}
            bigger
            title={"Next"}
            background
            color
          />
        </div>
      </AppModal>
      <AppModal
        step={23}
        currentStep={step}
        closeModal={handleCloseModal4}
        heading="Select Preferred Plan"
        noheadborder
        // updateUserListData(update);
        // window.location.reload()
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingInline: "50px",
              gap: "10px",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#12B76A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              <Markgreen />
            </div>
            <div
              style={{
                backgroundColor: "#5081E9",
                width: "110px",
                height: "4px"
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <Dot />
              <span
                style={{
                  width: "34px",
                  height: "34px",
                  color: "white",
                  borderRadius: "50%",
                  background: "#5081E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "7px",
                  left: "8px"
                }}
              >
                2
              </span>
            </div>
            <div
              style={{
                backgroundColor: "#CDCDCD",
                width: "110px",
                height: "4px"
              }}
            >
              <div
                style={{
                  backgroundColor: "#5081E9",
                  width: "55px",
                  height: "4px"
                }}
              ></div>
            </div>
            <span
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#CDCDCD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              3
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              paddingInline: "17px",
              fontSize: "14px",
              paddingTop: "10px"
            }}
          >
            <span style={{ color: "#12B76A" }}>Business Information</span>
            <span style={{ color: "#5081E9" }}>Subscription Plan</span>
            <span style={{ color: "#1E1B39" }}>Review & Submit</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "10px",
              paddingTop: "10px"
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid #E0E0E0"
              }}
            ></span>
            <span
              style={{ color: "#1E1B39", fontSize: "15px", fontWeight: "500" }}
            >
              Business Plan
            </span>
          </div>
          <Flex>
            <div className="addresswrapper">
              <div className="heading">
                <span className="title">Plan Types</span>
                <span className="title">Minimum Users</span>
                <span className="titlelast">Monthly fee per user</span>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">Standard Plan</div>
                  <div className="second">1-99</div>
                  <div className="third">N 20,000.00</div>
                </div>
                <div className="details">
                  <div className="first">Enterprise Plan</div>
                  <div className="second">100+</div>
                  <div className="third">N 15,000.00</div>
                </div>
              </div>
            </div>
          </Flex>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "10px",
              paddingTop: "10px"
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                border: "1px solid #E0E0E0"
              }}
            ></span>
            <span
              style={{ color: "#1E1B39", fontSize: "15px", fontWeight: "500" }}
            >
              Custom Plan
            </span>
          </div>
          <Flex>
            <div className="addresswrapper">
              <div className="heading">
                <span className="title">Plan Types</span>
                <span className="title">Minimum Users</span>
                <span className="titlelast">Monthly fee per user</span>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">Custom Plan</div>
                  <div className="second">
                    <input className="text" placeholder="Enter user amount" />
                  </div>
                  <div className="third">
                    <input className="text" placeholder="Enter monthly fees" />
                  </div>
                </div>
              </div>
            </div>
          </Flex>

          <LargeSignInButton
            onClick={() => setStep(24)}
            bigger
            title={"Next"}
            background
            color
          />
        </div>
      </AppModal>
      <AppModal
        step={24}
        currentStep={step}
        closeModal={handleCloseModal4}
        heading="Select Preferred Plan"
        noheadborder
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingInline: "50px",
              gap: "10px",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#12B76A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              <Markgreen />
            </div>
            <div
              style={{
                backgroundColor: "#12B76A",
                width: "110px",
                height: "4px"
              }}
            ></div>
            <div
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#12B76A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              <Markgreen />
            </div>
            <div
              style={{
                backgroundColor: "#5081E9",
                width: "110px",
                height: "4px"
              }}
            >
              <div
                style={{
                  backgroundColor: "#5081E9",
                  width: "55px",
                  height: "4px"
                }}
              ></div>
            </div>
            <span
              style={{
                width: "34px",
                height: "34px",
                color: "white",
                borderRadius: "50%",
                background: "#CDCDCD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "7px",
                left: "8px"
              }}
            >
              3
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
              paddingInline: "17px",
              fontSize: "14px",
              paddingTop: "10px"
            }}
          >
            <span style={{ color: "#12B76A" }}>Business Information</span>
            <span style={{ color: "#12B76A" }}>Subscription Plan</span>
            <span style={{ color: "#1E1B39" }}>Review & Submit</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "40px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center"
              }}
            >
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "15px",
                  fontWeight: "500"
                }}
              >
                Review & Submit
              </span>
              <span
                style={{
                  color: "#788194",
                  fontSize: "10px",
                  fontWeight: "400"
                }}
              >
                Confirm Changes before you submit
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingInline: "30px",
              gap: "30px",
              alignItems: "center",
              paddingTop: "20px",
              height: "100px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                width: "35%",
                height: "100%"
              }}
            >
              <span
                style={{
                  color: "#5A6376",
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                Full Name
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                Abdulwaarith Abdulazeez
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                width: "25%",
                height: "100%"
              }}
            >
              <span
                style={{
                  color: "#5A6376",
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                RC Numbber
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                090876ID
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                width: "40%",
                height: "100%"
              }}
            >
              <span
                style={{
                  color: "#5A6376",
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                Address
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                1, Idowu Taylor Street, Victoria Island, Lagos.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // paddingInline: '30px',
              // gap:'50px',
              // alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "20px",
              width: "100%",
              height: "100px",
              paddingLeft: "30px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                // width:'35%',
                height: "100%",
                marginRight: "70px"
              }}
            >
              <span
                style={{
                  color: "#5A6376",
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                Mobile Number
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                +234 901 785 6291
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                // width:'25%',
                height: "100%",
                marginRight: "40px"
              }}
            >
              <span
                style={{
                  color: "#5A6376",
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                Email Address
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                info@jumia.com
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                // width:'40%',
                height: "100%"
              }}
            >
              <span
                style={{
                  color: "#5A6376",
                  fontSize: "14px",
                  fontWeight: "400"
                }}
              >
                Subscription Plan
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                Business Plan
              </span>
            </div>
          </div>

          <LargeSignInButton
            onClick={() => setStep(25)}
            bigger
            title={"Submit"}
            background
            color
          />
        </div>
      </AppModal>
      <AppModal
        step={25}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Corporate.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={26}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        heading="Activate Corporate"
        noheadborder
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              Are you sure you want to activate this Corporate
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(27)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={27}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Activated this Corporate.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={28}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add New Sub-Admin"
        noheadborder
      >
        <ModalInputText
          label="First Name"
          // onChange={(e) => Change(e)}
          name="firstname"
          nosign
          // value={regbus?.firstname}
          placeholder={`${`Enter Business Rep's First Name`}`}
        />
        <ModalInputText
          label="Last Name"
          // onChange={(e) => Change(e)}
          name="lastname"
          nosign
          // value={regbus?.lastname}
          placeholder={`${`Enter Business Rep's Last Name`}`}
        />
        <ModalInputText
          label="Email"
          // onChange={(e) => Change(e)}
          name="email"
          nosign
          // value={regbus?.email}
          placeholder={`${`Enter Business Rep's Email`}`}
        />
        <ModalInputText
          label="Phone Number"
          // onChange={(e) => Change(e)}
          name="phone"
          nosign
          // value={regbus?.phone}
          placeholder={`${`Enter Business Rep's Phone Number`}`}
        />

        <ModalInputText
          label="Role"
          // onChange={(e) => Change(e)}
          name="phone"
          nosign
          // value={regbus?.phone}
          placeholder={`${`Enter Sub-Admin Role`}`}
        />

        <LargeSignInButton
          onClick={() => setStep(29)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={29}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Set Initial Password"
        noheadborder
      >
        <ModalInputText
          label="Enter Password"
          // onChange={(e) => Change(e)}
          name="firstname"
          nosign
          // value={regbus?.firstname}
          placeholder={`${`Enter Password`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(30)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={30}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        heading="Add new Sub-admin"
        noheadborder
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "40px",width:'100%',paddingLeft:'7%' }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              You are about to add a Sub-Admin, Are you sure the details
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              are accurate?
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "70px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(31)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={31}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Sub-Admin.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={32}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        heading="Deactivate"
        noheadborder
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "40px",width:'100%',paddingLeft:'7%' }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              Are you sure you want to deactivate this Sub-Admi
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "70px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => setStep(33)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={33}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully deactivated a Sub-Admin.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={34}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
           Profile Update
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Updated your profile</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={35}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
           Password Updated
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Updated your Password.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={36}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Free Trial Days"
        noheadborder
        subscribe
      >
        <ModalInputText
          label="Edit free trial days"
          // onChange={(e) => Change(e)}
          name="firstname"
          nosign
          // value={regbus?.firstname}
          placeholder={`${`30`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(37)}
          bigger
          title={"Save Changes"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={37}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Successful
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Updated free trial days.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={38}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Business Reps"
        noheadborder
        subscribe
      >
        <ModalInputText
          label="Edit Maximum Number of Business Reps"
          // onChange={(e) => Change(e)}
          name="firstname"
          nosign
          // value={regbus?.firstname}
          placeholder={`${`99`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(39)}
          bigger
          title={"Save Changes"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={39}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Successful
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Updated Number Business Reps.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={40}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Pricing"
        noheadborder
        subscribe
      >
        <ModalInputText
          label="Monthly Price"
          // onChange={(e) => Change(e)}
          name="firstname"
          nosign
          // value={regbus?.firstname}
          placeholder={`${`NGN 10000`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(41)}
          bigger
          title={"Save Changes"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={41}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Success />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Successful
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully updated Standard plan Pricing </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 2px;
  .addresswrapper {
    border: 1px solid #ebebeb;
    border-radius: 6px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .heading {
      display: flex;
      flex-direction: row;
      padding-inline: 20px;
      /* border-bottom: 1px solid #ebebeb; */
      .title {
        width: 33%;
        color: #687182;
        font-weight: 600;
        font-size: 14px;
        display: flex;
        padding-block: 10px;
        flex-direction: row;
        justify-content: center;
        border-right: 1px solid #ebebeb;
      }
      .titlelast {
        width: 33%;
        color: #687182;
        font-weight: 600;
        font-size: 14px;
        display: flex;
        padding-block: 10px;
        flex-direction: row;
        justify-content: center;
      }
    }
    .arrange {
      display: flex;
      flex-direction: column;
      border-top: 1px solid #ebebeb;
      .details {
        display: flex;
        flex-direction: row;
        padding-inline: 20px;
        .first {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 33%;
          gap: 2px;
          height: 50px;
          font-size: 12px;
          border-right: 1px solid #ebebeb;
          color: #5a6376;
        }
        .second {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 33%;
          gap: 2px;
          height: 50px;
          font-size: 12px;
          border-right: 1px solid #ebebeb;
          color: #5a6376;
          .text {
            border: none;
            outline: none;
            font-size: 14px;
            color: "#999999";
            padding-inline: 15px;
            width: 100%;
          }
        }
        .third {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 33%;
          gap: 2px;
          font-size: 12px;
          height: 50px;
          color: #5a6376;
          .text {
            border: none;
            outline: none;
            font-size: 14px;
            color: "#999999";
            padding-inline: 15px;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default AppUserModal;
