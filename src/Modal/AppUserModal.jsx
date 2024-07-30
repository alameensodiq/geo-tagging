import React, { useEffect, useRef, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../bits/ModalInputText";
import { LargeSignInButton } from "../bits/LargeSignInButton";
import { ReactComponent as Success } from "../assets/successful.svg";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Dot } from "../assets/dotcircle.svg";
import { ReactComponent as Markgreen } from "../assets/markgreen.svg";
import { ReactComponent as Call } from "../assets/call.svg";
import { ReactComponent as Contact } from "../assets/contactedit.svg";
import { ReactComponent as Busemail } from "../assets/busemail.svg";
import { ReactComponent as Buslocate } from "../assets/buslocation.svg";
import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as Editeye } from "../assets/editeye.svg";
import { ReactComponent as List } from "../assets/list.svg";
import { ReactComponent as Create } from "../assets/create.svg";
import { ReactComponent as DarkCreate } from "../assets/darkcreate.svg";
import { ReactComponent as ActivateDark } from "../assets/activatedark.svg";
import { ReactComponent as DeactivateDark } from "../assets/deactivatedark.svg";
import toast from "react-hot-toast";
import { CreateBusinessRepCorporate } from "../Store/Apis/CreateBusinessRepCorporate";
import { useDispatch, useSelector } from "react-redux";
import ModalInputSelect from "../bits/ModalInputSelect";
import Tables from "../bits/Tables";
import { LocationModalButton } from "../bits/LocationModalButton";
import styled from "styled-components";
import { AddTeam } from "../Store/Apis/AddTeam";
import { SuperAddTeam } from "../Store/Apis/SuperAddteam";
import { AddSub } from "../Store/Apis/AddSub";

const AppUserModal = ({ setStep, step, setReload, data, setLog, supers }) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [bustate1, setBusstate1] = useState(false);
  const [bustate2, setBusstate2] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);
  const [view5, setView5] = useState(false);
  const [view6, setView6] = useState(false);
  const [view7, setView7] = useState(false);
  const [view8, setView8] = useState(false);
  const [view9, setView9] = useState(false);
  const [view10, setView10] = useState(false);
  const [view11, setView11] = useState(false);
  const [view12, setView12] = useState(false);
  const [view13, setView13] = useState(false);
  const [view14, setView14] = useState(false);
  const [view15, setView15] = useState(false);
  const [regbus, setRegbus] = useState({
    firstname: "",
    lastname: "",
    rcNumber: "",
    address: "",
    phone: "",
    email: "",
    avatar: update
  });

  console.log(data);

  const [team, setTeam] = useState({
    name: "",
    lastname: "",
    rcNumber: "",
    address: "",
    permissions: [],
    phone: "",
    email: "",
    avatar: update
  });

  const [sub, setSub] = useState({
    name: "",
    minRepCount: "",
    maxRepCount: "",
    maxLocationCount: "",
    amount: 0
  });

  const { createbus, authenticatingcreatebus } = useSelector(
    (state) => state.createbus
  );

  const { addteam, authenticatingaddteam } = useSelector(
    (state) => state.addteam
  );

  const { superaddteam, authenticatingsuperaddteam } = useSelector(
    (state) => state.superaddteam
  );

  const { addsub, authenticatingaddsub } = useSelector((state) => state.addsub);

  console.log(superaddteam);
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
    setTeam((currData) => {
      return {
        ...currData,
        avatar: update
      };
    });
    setTeam((currData) => {
      return {
        ...currData,
        permissions: data
      };
    });
    if (bustate && createbus?.status && !authenticatingcreatebus) {
      setStep(3);
    }
    if (bustate1 && addteam?.status && !authenticatingaddteam) {
      setStep(10);
    }
    if (bustate1 && superaddteam?.status && !authenticatingsuperaddteam) {
      setStep(10);
    }
    if (bustate2 && addsub?.status && !authenticatingaddsub) {
      setStep(55);
    }

    console.log(update);
  }, [
    update,
    bustate,
    data,
    createbus?.status,
    authenticatingcreatebus,
    bustate1,
    addteam,
    authenticatingaddteam,
    authenticatingsuperaddteam,
    addteam?.status,
    authenticatingaddsub,
    bustate2,
    addsub?.status
  ]);

  const Viewing = () => {
    setView1(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "OVERVIEW_VIEW"
      )
    }));
  };

  const NotViewing1 = () => {
    setView1(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "OVERVIEW_VIEW"]
    }));
  };

  const NotViewing1not = () => {
    setView1(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "OVERVIEW_VIEW"]
    }));
  };

  const NotViewing1notnot = () => {
    setView1(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "OVERVIEW_VIEW"
      )
    }));
  };

  const Viewing2 = () => {
    setView2(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_VIEW"
      )
    }));
  };

  const NotViewing2 = () => {
    setView2(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_VIEW"]
    }));
  };

  const NotViewing2not = () => {
    setView2(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_VIEW"]
    }));
  };

  const NotViewing22not = () => {
    setView2(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_VIEW"
      )
    }));
  };

  console.log(view2);

  const Viewing3 = () => {
    setView3(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_LIST"
      )
    }));
  };

  const NotViewing3 = () => {
    setView3(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_LIST"]
    }));
  };

  const NotViewing3not = () => {
    setView3(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_LIST"]
    }));
  };

  const NotViewing33not = () => {
    setView3(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_LIST"
      )
    }));
  };

  const Viewing4 = () => {
    setView4(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_EDIT"
      )
    }));
  };

  const NotViewing4 = () => {
    setView4(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_EDIT"]
    }));
  };

  const NotViewing4not = () => {
    setView4(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_EDIT"]
    }));
  };

  const NotViewing44not = () => {
    setView4(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_EDIT"
      )
    }));
  };

  const Viewing5 = () => {
    setView5(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_CREATE"
      )
    }));
  };

  const NotViewing5 = () => {
    setView5(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_CREATE"]
    }));
  };

  const NotViewing5not = () => {
    setView5(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_CREATE"]
    }));
  };

  const NotViewing55not = () => {
    setView5(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_CREATE"
      )
    }));
  };

  const Viewing6 = () => {
    setView6(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_ACTIVATE"
      )
    }));
  };

  const NotViewing6 = () => {
    setView6(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_ACTIVATE"]
    }));
  };

  const NotViewing6not = () => {
    setView6(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_ACTIVATE"]
    }));
  };

  const NotViewing66not = () => {
    setView6(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_ACTIVATE"
      )
    }));
  };

  const Viewing7 = () => {
    setView7(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_DEACTIVATE"
      )
    }));
  };

  const NotViewing7 = () => {
    setView7(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_DEACTIVATE"]
    }));
  };

  const NotViewing7not = () => {
    setView7(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_DEACTIVATE"]
    }));
  };

  const NotViewing77not = () => {
    setView7(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_DEACTIVATE"
      )
    }));
  };

  const Viewing8 = () => {
    setView8(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_VIEW"
      )
    }));
  };

  const NotViewing8 = () => {
    setView8(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_VIEW"]
    }));
  };

  const NotViewing8not = () => {
    setView8(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_VIEW"]
    }));
  };

  const NotViewing88not = () => {
    setView8(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_VIEW"
      )
    }));
  };

  const Viewing9 = () => {
    setView9(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_LIST"
      )
    }));
  };

  const NotViewing9 = () => {
    setView9(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_LIST"]
    }));
  };

  const NotViewing9not = () => {
    setView9(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_LIST"]
    }));
  };

  const NotViewing99not = () => {
    setView9(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_LIST"
      )
    }));
  };

  const Viewing10 = () => {
    setView10(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PLAN_VIEW"
      )
    }));
  };

  const NotViewing10 = () => {
    setView10(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PLAN_VIEW"]
    }));
  };

  const NotViewing10not = () => {
    setView10(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PLAN_VIEW"]
    }));
  };

  const NotViewing1010not = () => {
    setView10(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PLAN_VIEW"
      )
    }));
  };

  const Viewing11 = () => {
    setView11(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_VIEW"
      )
    }));
  };

  const NotViewing11 = () => {
    setView11(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_VIEW"]
    }));
  };

  const NotViewing11not = () => {
    setView11(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_VIEW"]
    }));
  };

  const NotViewing1111not = () => {
    setView11(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_VIEW"
      )
    }));
  };

  const Viewing12 = () => {
    setView12(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_EDIT"
      )
    }));
  };

  const NotViewing12 = () => {
    setView12(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_EDIT"]
    }));
  };

  const NotViewing12not = () => {
    setView12(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_EDIT"]
    }));
  };

  const NotViewing1212not = () => {
    setView12(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_EDIT"
      )
    }));
  };

  const Viewing13 = () => {
    setView13(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_LIST"
      )
    }));
  };

  const NotViewing13 = () => {
    setView13(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_LIST"]
    }));
  };

  const NotViewing13not = () => {
    setView13(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_LIST"]
    }));
  };

  const NotViewing1313not = () => {
    setView13(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_LIST"
      )
    }));
  };

  const Viewing14 = () => {
    setView14(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_CREATE"
      )
    }));
  };

  const NotViewing14 = () => {
    setView14(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_CREATE"]
    }));
  };

  const NotViewing14not = () => {
    setView14(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "PROJECT_CREATE"]
    }));
  };

  const NotViewing1414not = () => {
    setView14(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "PROJECT_CREATE"
      )
    }));
  };

  const Viewing15 = () => {
    setView15(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "REPORT_VIEW"
      )
    }));
  };

  const NotViewing15 = () => {
    setView15(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "REPORT_VIEW"]
    }));
  };

  const NotViewing15not = () => {
    setView15(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "REPORT_VIEW"]
    }));
  };

  const NotViewing1515not = () => {
    setView15(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "REPORT_VIEW"
      )
    }));
  };

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus({
      ...regbus,
      [name]: value
    });
  };

  const Changeteam = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setTeam({
      ...team,
      [name]: value
    });
  };

  const createSub = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setSub({
      ...sub,
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

  const SendTeam = () => {
    const {
      lastname,
      name,
      rcNumber,
      address,
      phone,
      email,
      avatar,
      permissions
    } = team;
    console.log(team);
    const names = `${name} ${lastname}`;
    console.log(address);
    const allVariablesPresent = [
      lastname,
      name,
      rcNumber,
      address,
      phone,
      email,
      avatar,
      permissions
    ].every((variable) => variable !== undefined && variable !== null);
    if (allVariablesPresent) {
      const names = `${name} ${lastname}`;
      console.log(supers);
      if (!supers) {
        dispatch(
          AddTeam({
            name: names,
            rcNumber,
            address,
            phone,
            email,
            avatar,
            permissions
          })
        );
      } else {
        dispatch(
          SuperAddTeam({
            name: names,
            rcNumber,
            address,
            phone,
            email,
            avatar,
            permissions
          })
        );
      }
      setBusstate1(true);
    } else {
      toast.error("One or more required fields are missing.");
    }
  };

  const sendSub = () => {
    const { name, minRepCount, maxRepCount, maxLocationCount, amount } = sub;
    const allVariablesPresent = [
      name,
      minRepCount,
      maxRepCount,
      maxLocationCount,
      amount
    ].every((variable) => variable !== undefined && variable !== null);
    if (allVariablesPresent) {
      dispatch(
        AddSub({ name, minRepCount, maxRepCount, maxLocationCount, amount })
      );
    } else {
      toast.error("One or more required fields are missing.");
    }
    setBusstate2(true);
  };

  const handleCloseModal4 = () => {
    if (setLog) {
      setLog(false);
    }
    setSub({
      name: "",
      minRepCount: "",
      maxRepCount: "",
      maxLocationCount: "",
      amount: 0
    });
    setRegbus({
      firstname: "",
      lastname: "",
      rcNumber: "",
      address: "",
      phone: "",
      email: "",
      avatar: ""
    });
    setTeam({
      name: "",
      rcNumber: "",
      lastname: "",
      address: "",
      permissions: [],
      phone: "",
      email: "",
      avatar: ""
    });
    setUpdate("");
    setStep(0);
    setBusstate(false);
    setBusstate1(false);
    setReload(true);
    setView1(false);
    setView2(false);
    setView3(false);
    setView4(false);
    setView5(false);
    setView6(false);
    setView7(false);
    setView8(false);
    setView9(false);
    setView10(false);
    setView11(false);
    setView12(false);
    setView13(false);
    setView14(false);
    setView15(false);
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
        <FlexUser>
          <div className="main">
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
          </div>
          <LargeSignInButton
            onClick={() => setStep(2)}
            bigger
            title={"Submit"}
            background
            color
          />
        </FlexUser>
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
        wide
        heading="Add User management"
      >
        <FlexUser>
          <div className="main">
            <ModalInputText
              label="First Name"
              onChange={(e) => Changeteam(e)}
              name="name"
              increase
              value={team?.name}
              placeholder={`${`Enter User management First Name`}`}
            />
            <ModalInputText
              label="Last Name"
              onChange={(e) => Changeteam(e)}
              name="lastname"
              increase
              value={team?.lastname}
              placeholder={`${`Enter User management Last Name`}`}
            />
            <ModalInputText
              label="Phone Number"
              onChange={(e) => Changeteam(e)}
              name="phone"
              increase
              value={team?.phone}
              placeholder={`${`Enter User management Phone Number`}`}
            />
            <ModalInputText
              label="RC Number"
              onChange={(e) => Changeteam(e)}
              name="rcNumber"
              increase
              value={team?.rcNumber}
              placeholder={`${`Enter User management RCNumber`}`}
            />
            <ModalInputText
              label="Email"
              onChange={(e) => Changeteam(e)}
              name="email"
              increase
              value={team?.email}
              placeholder={`${`Enter User management Email`}`}
            />
            <ModalInputText
              label="Address"
              onChange={(e) => Changeteam(e)}
              name="address"
              increase
              value={team?.address}
              placeholder={`${`Enter User management Address`}`}
            />
            {team?.avatar !== "" ? (
              <img
                src={team?.avatar}
                alt="takephoto"
                style={{ width: "522px", height: "105px" }}
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
                  increaser
                />
              </>
            )}
            <div className="flex">
              <div className="activities">
                <div className="activity-permission">
                  <span className="activitynames">Activity</span>
                  <span>Permission</span>
                </div>
                <div className="rolename">
                  <span className="name">1.Dashboard</span>
                  <div className="button-group">
                    {data?.some((item) => item === "OVERVIEW_VIEW") &&
                    !view1 ? (
                      <button className="view" onClick={() => Viewing()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "OVERVIEW_VIEW") &&
                      !view1 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing1not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : data?.some((item) => item === "OVERVIEW_VIEW") &&
                      view1 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing1()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "OVERVIEW_VIEW") &&
                      view1 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1notnot()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => Viewing()}>
                        <Eye />
                        View
                      </button>
                    )}
                    {/* <button className="view" onClick={() => setStep(18)}>
                    <Editeye />
                    Edit
                  </button> */}
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">2.CORPORATE</span>
                  <div className="button-group">
                    {data?.some((item) => item === "CORPORATE_VIEW") &&
                    !view2 ? (
                      <button className="view" onClick={() => Viewing2()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_VIEW") &&
                      !view2 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing2not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_VIEW") &&
                      view2 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing2()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_VIEW") &&
                      view2 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing22not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => Viewing2()}>
                        <Eye />
                        View
                      </button>
                    )}
                    {data?.some((item) => item === "CORPORATE_EDIT") &&
                    !view4 ? (
                      <button className="view" onClick={() => Viewing4()}>
                        <Editeye />
                        Edit
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_EDIT") &&
                      !view4 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing4not()}
                      >
                        <Editeye />
                        Edit
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_EDIT") &&
                      view4 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing4()}
                      >
                        <Editeye />
                        Edit
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_EDIT") &&
                      view4 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing44not()}
                      >
                        <Editeye />
                        Edit
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing4()}>
                        <Editeye />
                        Edit
                      </button>
                    )}
                    {data?.some((item) => item === "CORPORATE_LIST") &&
                    !view3 ? (
                      <button className="view" onClick={() => Viewing3()}>
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_LIST") &&
                      !view3 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing3not()}
                      >
                        <List />
                        List
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_LIST") &&
                      view3 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing3()}
                      >
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_LIST") &&
                      view4 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing33not()}
                      >
                        <List />
                        List
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing3()}>
                        <List />
                        List
                      </button>
                    )}
                    {data?.some((item) => item === "CORPORATE_CREATE") &&
                    !view5 ? (
                      <button className="view" onClick={() => Viewing5()}>
                        <Create />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_CREATE") &&
                      !view5 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing5not()}
                      >
                        <Create />
                        Create
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_CREATE") &&
                      view5 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing5()}
                      >
                        <Create />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_CREATE") &&
                      view5 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing55not()}
                      >
                        <Create />
                        Create
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing5()}>
                        <Create />
                        Create
                      </button>
                    )}
                    {data?.some((item) => item === "CORPORATE_ACTIVATE") &&
                    !view6 ? (
                      <button className="view" onClick={() => Viewing6()}>
                        <ActivateDark />
                        Activate
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_ACTIVATE") &&
                      !view6 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing6not()}
                      >
                        <ActivateDark />
                        Activate
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_ACTIVATE") &&
                      view6 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing6()}
                      >
                        <ActivateDark />
                        Activate
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_ACTIVATE") &&
                      view6 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing66not()}
                      >
                        <ActivateDark />
                        Activate
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing6()}>
                        <ActivateDark />
                        Activate
                      </button>
                    )}
                    {data?.some((item) => item === "CORPORATE_DEACTIVATE") &&
                    !view7 ? (
                      <button className="view" onClick={() => Viewing7()}>
                        <DeactivateDark />
                        Deactivate
                      </button>
                    ) : !data?.some(
                        (item) => item === "CORPORATE_DEACTIVATE"
                      ) && !view7 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing7not()}
                      >
                        <DeactivateDark />
                        Deactivate
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_DEACTIVATE") &&
                      view7 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing7()}
                      >
                        <DeactivateDark />
                        Deactivate
                      </button>
                    ) : !data?.some(
                        (item) => item === "CORPORATE_DEACTIVATE"
                      ) && view7 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing77not()}
                      >
                        <DeactivateDark />
                        Deactivate
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing7()}>
                        <DeactivateDark />
                        Deactivate
                      </button>
                    )}
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">3. User management</span>
                  <div className="button-group">
                    {/* <button className="view" onClick={() => setStep(48)}>
                    <Eye />
                    View
                  </button>
                  <button className="view" onClick={() => setStep(46)}>
                    <Editeye />
                    Edit
                  </button>
                  <button className="darkview" onClick={() => setStep(50)}>
                    <DarkCreate />
                    Create
                  </button> */}
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">4. Subscriptions</span>
                  <div className="button-group">
                    {data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                    !view8 ? (
                      <button className="view" onClick={() => Viewing8()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      !view8 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing8not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      view8 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing8()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      view8 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing88not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing8()}>
                        <Eye />
                        View
                      </button>
                    )}
                    {data?.some((item) => item === "SUBSCRIPTION_LIST") &&
                    !view9 ? (
                      <button className="view" onClick={() => Viewing9()}>
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_LIST") &&
                      !view9 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing9not()}
                      >
                        <List />
                        List
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_LIST") &&
                      view9 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing9()}
                      >
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_LIST") &&
                      view9 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing99not()}
                      >
                        <List />
                        List
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing9()}>
                        <List />
                        List
                      </button>
                    )}
                    {data?.some((item) => item === "PLAN_VIEW") && !view10 ? (
                      <button className="view" onClick={() => Viewing10()}>
                        <Eye />
                        Plan view
                      </button>
                    ) : !data?.some((item) => item === "PLAN_VIEW") &&
                      !view10 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing10not()}
                      >
                        <Eye />
                        Plan view
                      </button>
                    ) : data?.some((item) => item === "PLAN_VIEW") && view10 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing10()}
                      >
                        <Eye />
                        Plan view
                      </button>
                    ) : !data?.some((item) => item === "PLAN_VIEW") &&
                      view10 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1010not()}
                      >
                        <Eye />
                        Plan view
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing10()}>
                        <Eye />
                        Plan view
                      </button>
                    )}
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">5. Projects</span>
                  <div className="button-group">
                    {data?.some((item) => item === "PROJECT_VIEW") &&
                    !view11 ? (
                      <button className="view" onClick={() => Viewing11()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_VIEW") &&
                      !view11 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing11not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : data?.some((item) => item === "PROJECT_VIEW") &&
                      view11 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing11()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_VIEW") &&
                      view11 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1111not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing11()}>
                        <Eye />
                        View
                      </button>
                    )}
                    {data?.some((item) => item === "PROJECT_EDIT") &&
                    !view12 ? (
                      <button className="view" onClick={() => Viewing12()}>
                        <Editeye />
                        Edit
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_EDIT") &&
                      !view12 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing12not()}
                      >
                        <Editeye />
                        Edit
                      </button>
                    ) : data?.some((item) => item === "PROJECT_EDIT") &&
                      view12 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing12()}
                      >
                        <Editeye />
                        Edit
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_EDIT") &&
                      view12 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1212not()}
                      >
                        <Editeye />
                        Edit
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing12()}>
                        <Editeye />
                        Edit
                      </button>
                    )}
                    {data?.some((item) => item === "PROJECT_LIST") &&
                    !view13 ? (
                      <button className="view" onClick={() => Viewing13()}>
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_LIST") &&
                      !view13 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing13not()}
                      >
                        <List />
                        List
                      </button>
                    ) : data?.some((item) => item === "PROJECT_LIST") &&
                      view13 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing13()}
                      >
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_LIST") &&
                      view13 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1313not()}
                      >
                        <List />
                        List
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing13()}>
                        <List />
                        List
                      </button>
                    )}
                    {data?.some((item) => item === "PROJECT_CREATE") &&
                    !view14 ? (
                      <button className="view" onClick={() => Viewing14()}>
                        <Create />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_CREATE") &&
                      !view14 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing14not()}
                      >
                        <Create />
                        Create
                      </button>
                    ) : data?.some((item) => item === "PROJECT_CREATE") &&
                      view14 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing14()}
                      >
                        <Create />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "PROJECT_CREATE") &&
                      view14 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1414not()}
                      >
                        <Create />
                        Create
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing14()}>
                        <Create />
                        Create
                      </button>
                    )}
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">6.Reports</span>
                  <div className="button-group">
                    {data?.some((item) => item === "REPORT_VIEW") && !view15 ? (
                      <button className="view" onClick={() => Viewing15()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "REPORT_VIEW") &&
                      !view15 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing15not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : data?.some((item) => item === "REPORT_VIEW") &&
                      view15 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing15()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "REPORT_VIEW") &&
                      view15 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1515not()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing15()}>
                        <Eye />
                        View
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <ModalInputSelect
          label="Roles"
          onChange={(e) => Change(e)}
          name="roles"
          value={regbus?.address}
          placeholder={`${`Select User management's roles`}`}
        /> */}
          <div
            style={{
              height: "8%",
              background: "#FFFFFF",
              zIndex: 10000,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
              // position: "fixed"
            }}
          >
            <LargeSignInButton
              onClick={() => setStep(9)}
              bigger
              // increase
              title={"Submit"}
              background
              color
            />
          </div>
        </FlexUser>
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
              onClick={() => SendTeam()}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
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
      <AppModal
        step={42}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        noheadborder
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                Disable Permission
              </span>
            </div>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              Do you want to disable this permission for this
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              user?
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
              onClick={() => setStep(43)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={43}
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
            <span>You have successfully disabled the permission to view</span>
            <span>dashboard</span>
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
        step={44}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        noheadborder
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                Enable Permission
              </span>
            </div>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              Do you want to enable this permission for this
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              user?
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
              onClick={() => setStep(45)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={45}
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
            <span>You have successfully granted this user the permission</span>
            <span>to activate business reps.</span>
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
        step={46}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        noheadborder
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                Grant Permission
              </span>
            </div>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              You are about to grant permission to this user to
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              edit projects?
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
              onClick={() => setStep(47)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={47}
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
            <span>You have successfully granted this user the permission</span>
            <span>to edit projects.</span>
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
        step={48}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        noheadborder
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                Grant Permission
              </span>
            </div>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              You are about to grant permission to this user to
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              view projects?
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
              onClick={() => setStep(49)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={49}
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
            <span>You have successfully granted this user the permission</span>
            <span>view projects.</span>
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
        step={50}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        noheadborder
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
            paddingLeft: "7%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                Confirm Changes
              </span>
            </div>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              Do you want to assign the role of a sub admin to
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "#5A6376" }}
            >
              this user?
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
              onClick={() => setStep(51)}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={51}
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
            <span>
              You have successfully assigned the Sub admin role to this user
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
        step={52}
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
            <span>You have successfully edit Permissions to this user</span>
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
        step={53}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        heading="Add Subscription"
      >
        <FlexUser>
          <div className="main">
            <ModalInputText
              label="Name"
              onChange={(e) => createSub(e)}
              name="name"
              increase
              value={sub?.name}
              placeholder={`${`Enter Subscription Name`}`}
            />
            <ModalInputText
              label="Minimum Rep Count"
              onChange={(e) => createSub(e)}
              name="minRepCount"
              increase
              value={sub?.minRepCount}
              placeholder={`${`Enter Minimum Rep Count`}`}
            />
            <ModalInputText
              label="Maximum Rep Count"
              onChange={(e) => createSub(e)}
              name="maxRepCount"
              increase
              value={sub?.maxRepCount}
              placeholder={`${`Enter "Maximum Rep Count`}`}
            />
            <ModalInputText
              label="Maximum Location Count"
              onChange={(e) => createSub(e)}
              name="maxLocationCount"
              increase
              value={sub?.maxLocationCount}
              placeholder={`${`Enter Maximum Location Count`}`}
            />
            <ModalInputText
              label="Amount"
              onChange={(e) => createSub(e)}
              name="amount"
              increase
              value={sub?.amount}
              placeholder={`${`Enter Amount`}`}
            />
          </div>
          {/* <ModalInputSelect
          label="Roles"
          onChange={(e) => Change(e)}
          name="roles"
          value={regbus?.address}
          placeholder={`${`Select User management's roles`}`}
        /> */}
          <div
            style={{
              height: "8%",
              background: "#FFFFFF",
              zIndex: 10000,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
              // position: "fixed"
            }}
          >
            <LargeSignInButton
              onClick={() => setStep(54)}
              bigger
              // increase
              title={"Submit"}
              background
              color
            />
          </div>
        </FlexUser>
      </AppModal>
      <AppModal
        step={54}
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
            <span>You are about to add a Subscription, Are you sure the</span>
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
              onClick={() => sendSub()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={55}
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
            <span>You have successfully Added a new Subscription</span>
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
  width: 100%;
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
  .activities {
    padding-inline: 25px;
    display: flex;
    flex-direction: column;
    .activity-permission {
      display: flex;
      flex-direction: row;
      gap: 150px;
      color: #5a6376;
      font-size: 14px;
      font-weight: 500;
      .activitynames {
        width: 12%;
      }
    }
    .rolename {
      display: flex;
      flex-direction: row;
      gap: 50px;
      border-bottom: 1px solid rgba(235, 235, 235, 1);
      align-items: center;
      height: 70px;
      .name {
        color: rgba(0, 0, 0, 1);
        font-size: 14px;
        width: 30%;
        font-weight: 500;
      }
      .button-group {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        .view {
          display: flex;
          flex-direction: row;
          cursor: pointer;
          gap: 6px;
          border: 1px solid rgba(26, 135, 215, 1);
          border-radius: 6px;
          color: rgba(26, 135, 215, 1);
          height: 24px;
          justify-content: center;
          width: 60px;
          font-size: 8px;
          align-items: center;
          background: rgba(26, 135, 215, 0.1);
        }
        .darkview {
          display: flex;
          flex-direction: row;
          cursor: pointer;
          gap: 6px;
          border: 1px solid #5a6376;
          border-radius: 6px;
          color: #5a6376;
          height: 24px;
          justify-content: center;
          width: 60px;
          font-size: 8px;
          align-items: center;
          background: #5a63761a;
        }
      }
    }
    .editrole {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding-top: 20px;
    }
  }
`;

const FlexUser = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  position: relative;
  width: 100%;
  height: 70vh;
  gap: 20px;
  .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 58vh;
    overflow-y: scroll;
    gap: 20px;
    .flex {
      display: flex;
      flex-direction: column;
      padding-inline: 2px;
      width: 100%;
      gap: 20px;
      margin-top: 10px;
      .activities {
        padding-inline: 10px;
        display: flex;
        flex-direction: column;
        .activity-permission {
          display: flex;
          flex-direction: row;
          gap: 150px;
          color: #5a6376;
          font-size: 14px;
          font-weight: 500;
          .activitynames {
            width: 12%;
          }
        }
        .rolename {
          display: flex;
          flex-direction: row;
          gap: 50px;
          border-bottom: 1px solid rgba(235, 235, 235, 1);
          align-items: center;
          height: 70px;
          .name {
            color: rgba(0, 0, 0, 1);
            font-size: 14px;
            width: 30%;
            font-weight: 500;
          }
          .button-group {
            display: grid;
            /* flex-direction: row; */
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            justify-items: space-between;
            gap: 10px;
            /* background: red; */
            .view {
              display: flex;
              flex-direction: row;
              cursor: pointer;
              gap: 6px;
              border: 1px solid rgba(26, 135, 215, 1);
              border-radius: 6px;
              color: rgba(26, 135, 215, 1);
              height: 24px;
              justify-content: center;
              width: 60px;
              font-size: 8px;
              align-items: center;
              background: rgba(26, 135, 215, 0.1);
            }
            .darkview {
              display: flex;
              flex-direction: row;
              cursor: pointer;
              gap: 6px;
              border: 1px solid #5a6376;
              border-radius: 6px;
              color: #5a6376;
              height: 24px;
              justify-content: center;
              width: 60px;
              font-size: 8px;
              align-items: center;
              background: #5a63761a;
            }
          }
        }
        .editrole {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          padding-top: 20px;
        }
      }
    }
  }
`;

export default AppUserModal;
