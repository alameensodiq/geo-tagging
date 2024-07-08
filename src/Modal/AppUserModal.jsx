import React, { useEffect, useRef, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../bits/ModalInputText";
import { LargeSignInButton } from "../bits/LargeSignInButton";
import { ReactComponent as Success } from "../assets/successful.svg";
import toast from "react-hot-toast";
import { CreateBusinessRepCorporate } from "../Store/Apis/CreateBusinessRepCorporate";
import { useDispatch, useSelector } from "react-redux";

const AppUserModal = ({ setStep, step, setReload }) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [regbus, setRegbus] = useState({
    name: "",
    rcNumber: "",
    address: "",
    phone: "",
    email: "",
    avatar: update
  });

  const { createbus, authenticatingcreatebus } = useSelector(
    (state) => state.createbus
  );
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
    if (bustate && createbus?.status) {
      setStep(3);
    }

    console.log(update);
  }, [update, bustate]);

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
    const { name, rcNumber, address, phone, email, avatar } = regbus;
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
      name: "",
      rcNumber: "",
      address: "",
      phone: "",
      email: "",
      avatar: ""
    });
    setBusstate(false);
    setReload(true);
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
    </div>
  );
};

export default AppUserModal;
