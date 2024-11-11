import React, { useEffect, useRef, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../bits/ModalInputText";
import { LargeSignInButton } from "../bits/LargeSignInButton";
import { ReactComponent as Success } from "../assets/successful.svg";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Dot } from "../assets/dotcircle.svg";
import { ReactComponent as Markgreen } from "../assets/markgreen.svg";
import { ReactComponent as Flutterwave } from "../assets/flutterwave.svg";
import { ReactComponent as Call } from "../assets/call.svg";
import { ReactComponent as Contact } from "../assets/contactedit.svg";
import { ReactComponent as Busemail } from "../assets/busemail.svg";
import { ReactComponent as Buslocate } from "../assets/buslocation.svg";
import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as EyeNot } from "../assets/eyenot.svg";
import { ReactComponent as Editeye } from "../assets/editeye.svg";
import { ReactComponent as EditeyeNot } from "../assets/editeyenot.svg";
import { ReactComponent as List } from "../assets/list.svg";
import { ReactComponent as ListNot } from "../assets/listnot.svg";
import { ReactComponent as Create } from "../assets/create.svg";
import { ReactComponent as CreateNot } from "../assets/createnot.svg";
import { ReactComponent as DarkCreate } from "../assets/darkcreate.svg";
import { ReactComponent as ActivateDark } from "../assets/activatedark.svg";
import { ReactComponent as DeactivateDark } from "../assets/deactivatedark.svg";
import { ReactComponent as Activate } from "../assets/activate.svg";
import { ReactComponent as Deactivate } from "../assets/deactivate.svg";
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
import { AddCorp } from "../Store/Apis/AddCorp";
import { EditDetails } from "../Store/Apis/EditDetails";
import { ProjectStatus } from "../Store/Apis/ProjectStatus";
import { EditAdminDetails } from "../Store/Apis/EditAdminDetails";
import { EditSubing } from "../Store/Apis/EditSub";
import { EditFreeTrial } from "../Store/Apis/EditFreeTrial";
import CameraComponent from "../MainComponents/Camera";
import { ProjectRemove } from "../Store/Apis/ProjectRemove";
import { useNavigate } from "react-router-dom";
import { businessprojects, clients } from "../Routes";

const AppUserModal = ({
  setStep,
  step,
  setReload,
  data,
  setLog,
  supers,
  setUserdetails,
  id,
  detailing,
  assigned,
  SendAssignRepBolu,
  payment,
  supersubs,
  projectbusId,
  setPendingRoleExist1,
  setactivatedcam,
  activatedcam
}) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const navigate = useNavigate();
  const [webcamActive, setWebcamActive] = useState(false);
  const [values, setValues] = useState(false);
  const [update, setUpdate] = useState("");
  const [busplan, setBusplan] = useState(false);
  const [bustate, setBusstate] = useState(false);
  const [bustate1, setBusstate1] = useState(false);
  const [bustate2, setBusstate2] = useState(false);
  const [bustate5, setBusstate5] = useState(false);
  const [bustate6, setBusstate6] = useState(false);
  const [bustate7, setBusstate7] = useState(false);
  const [bustate8, setBusstate8] = useState(false);
  const [bustate9, setBusstate9] = useState(false);
  const [bustate10, setBusstate10] = useState(false);
  const [bustate11, setBusstate11] = useState(false);
  const [bustate12, setBusstate12] = useState(false);
  const [bustate13, setBusstate13] = useState(false);
  const [bustate14, setBusstate14] = useState(false);
  const [bustate15, setBusstate15] = useState(false);
  const [bustate16, setBusstate16] = useState(false);
  const [bustate17, setBusstate17] = useState(false);
  const [bustate18, setBusstate18] = useState(false);
  const [bustate19, setBusstate19] = useState(false);
  const [bustate20, setBusstate20] = useState(false);
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
  const [view1super, setView1super] = useState(false);
  const [view2super, setView2super] = useState(false);
  const [view3super, setView3super] = useState(false);
  const [view4super, setView4super] = useState(false);
  const [view5super, setView5super] = useState(false);
  const [view8super, setView8super] = useState(false);
  const [view10super, setView10super] = useState(false);
  const webcamRef = useRef(null);

  // Function to stop webcam feed
  const stopWebcam = () => {
    if (webcamRef.current) {
      const stream = webcamRef.current.stream;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop()); // Stop each track
      }
    }
  };

  const [regbus, setRegbus] = useState({
    firstname: "",
    lastname: "",
    rcNumber: "",
    address: "",
    phone: "",
    email: "",
    avatar: update
  });

  const handlePaymentRedirect = () => {
    if (payment?.data?.paymentLink) {
      window.location.href = payment?.data?.paymentLink;
    }
    console.log(payment);
  };

  console.log(data);

  console.log(assigned);

  const timestamp = `${detailing?.dateSubscribed}`;
  const formattedDate = timestamp.split("T")[0];
  const formattedTime = timestamp.split("T")[1];
  // console.log(datePart);
  // const formattedDate = date.toISOString().split("T")[0];
  // console.log(formattedDate);
  // const formattedTime = date.toISOString().split("T")[1];
  // console.log(formattedTime);

  const [team, setTeam] = useState({
    name: "",
    lastname: "",
    // rcNumber: "",
    // address: "",
    permissions: [],
    phone: "",
    email: ""
    // avatar: update
  });

  const handleClick = () => {
    console.log(team);
    const isAnyFieldEmpty =
      !team.name ||
      !team.lastname ||
      !team.phone ||
      !team.email ||
      team.permissions.length === 0;

    if (isAnyFieldEmpty) {
      toast.error("Some fields are empty");
    } else {
      // Proceed to the next step if all fields are filled
      setStep(9);
    }
  };

  const [corp, setCorp] = useState({
    name: "",
    rcNumber: "",
    address: "",
    phone: "",
    email: "",
    isBusinessPlan: "",
    minRepCount: 0,
    maxRepCount: 0,
    maxLocationCount: 0,
    amount: 0.0
  });

  const [sub, setSub] = useState({
    name: "",
    minRepCount: "",
    maxRepCount: "",
    maxLocationCount: "",
    amount: 0
  });

  const [free, setFree] = useState({
    minCountOfBusinessReps: "",
    numberOfBusinessReps: "",
    numberOfLocations: "",
    daysEligible: ""
  });

  const [editingsub, setEditingSub] = useState({
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

  const { addcorping, authenticatingaddcorping } = useSelector(
    (state) => state.addcorping
  );

  console.log(superaddteam);

  const { editdetails, authenticatingeditdetails } = useSelector(
    (state) => state.editdetails
  );

  const { projectstatus, authenticatingprojectstatus } = useSelector(
    (state) => state.projectstatus
  );

  const { editadmindetails, authenticatingeditadmindetails } = useSelector(
    (state) => state.editadmindetails
  );

  const { editsub, authenticatingeditsub } = useSelector(
    (state) => state.editsub
  );

  const { editfreetrial, authenticatingeditfreetrial } = useSelector(
    (state) => state.editfreetrial
  );

  const { removerepproject, authenticatingremoverepproject } = useSelector(
    (state) => state.removerepproject
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

    // setTeam((currData) => {
    //   return {
    //     ...currData,
    //     avatar: update
    //   };
    // });
    setTeam((currData) => {
      return {
        ...currData,
        permissions: data
      };
    });
    setCorp((prev) => {
      return {
        ...prev,
        isBusinessPlan: busplan
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
    if (bustate5 && addcorping?.status && !authenticatingaddcorping) {
      setStep(25);
    }
    if (bustate6 && editdetails?.status && !authenticatingeditdetails) {
      setStep(12);
    }
    if (bustate7 && editdetails?.status && !authenticatingeditdetails) {
      setStep(58);
    }
    if (bustate8 && editdetails?.status && !authenticatingeditdetails) {
      setStep(60);
    }
    if (bustate9 && projectstatus?.status && !authenticatingprojectstatus) {
      setStep(7);
    }
    if (bustate10 && projectstatus?.status && !authenticatingprojectstatus) {
      setStep(5);
    }
    if (
      bustate11 &&
      editadmindetails?.status &&
      !authenticatingeditadmindetails
    ) {
      setStep(33);
    }
    if (bustate12 && editsub?.status && !authenticatingeditsub) {
      setStep(41);
    }
    if (bustate13 && editsub?.status && !authenticatingeditsub) {
      setStep(39);
    }
    if (bustate14 && editfreetrial?.status && !authenticatingeditfreetrial) {
      setStep(37);
    }
    if (bustate15 && editfreetrial?.status && !authenticatingeditfreetrial) {
      setStep(62);
    }
    if (bustate16 && editfreetrial?.status && !authenticatingeditfreetrial) {
      setStep(64);
    }
    if (bustate17 && editfreetrial?.status && !authenticatingeditfreetrial) {
      setStep(66);
    }
    if (
      bustate18 &&
      editadmindetails?.status &&
      !authenticatingeditadmindetails
    ) {
      setStep(27);
    }
    if (
      bustate19 &&
      editadmindetails?.status &&
      !authenticatingeditadmindetails
    ) {
      setStep(68);
    }
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const hasWebcam = devices.some((device) => device.kind === "videoinput");
      setWebcamActive(hasWebcam);
    });
    if (
      bustate20 &&
      removerepproject?.status &&
      !authenticatingremoverepproject
    ) {
      setStep(74);
    }
    if (activatedcam) {
      setWebcamActive(true);
    }
    return () => {
      // Call stopWebcam to handle cleanup
      stopWebcam();
      setWebcamActive(false);
    };

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
    addsub?.status,
    addcorping?.status,
    bustate5,
    bustate6,
    superaddteam?.status,
    authenticatingaddcorping,
    setStep,
    editdetails?.status,
    authenticatingeditdetails,
    bustate7,
    bustate8,
    bustate9,
    bustate10,
    bustate11,
    bustate12,
    bustate13,
    bustate14,
    bustate15,
    bustate16,
    bustate17,
    projectstatus?.status,
    authenticatingprojectstatus,
    editadmindetails?.status,
    authenticatingeditadmindetails,
    busplan,
    editsub?.status,
    authenticatingeditsub,
    editfreetrial?.status,
    authenticatingeditfreetrial,
    bustate18,
    bustate19,
    bustate20,
    removerepproject?.status,
    authenticatingremoverepproject,
    activatedcam
  ]);

  const Viewing = () => {
    setView1(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "DASHBOARD_VIEW"
      )
    }));
  };

  const NotViewing1 = () => {
    setView1(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "DASHBOARD_VIEW"]
    }));
  };

  const NotViewing1not = () => {
    setView1(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "DASHBOARD_VIEW"]
    }));
  };

  const NotViewing1notnot = () => {
    setView1(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "DASHBOARD_VIEW"
      )
    }));
  };

  const Viewing2 = () => {
    setView2(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_VIEW"
      )
    }));
  };

  const NotViewing2 = () => {
    setView2(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_VIEW"]
    }));
  };

  const NotViewing2not = () => {
    setView2(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_VIEW"]
    }));
  };

  const NotViewing22not = () => {
    setView2(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_VIEW"
      )
    }));
  };

  console.log(view2);

  const Viewing3 = () => {
    setView3(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_LIST"
      )
    }));
  };

  const NotViewing3 = () => {
    setView3(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_LIST"]
    }));
  };

  const NotViewing3not = () => {
    setView3(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_LIST"]
    }));
  };

  const NotViewing33not = () => {
    setView3(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_LIST"
      )
    }));
  };

  const Viewing4 = () => {
    setView4(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_EDIT"
      )
    }));
  };

  const NotViewing4 = () => {
    setView4(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_EDIT"]
    }));
  };

  const NotViewing4not = () => {
    setView4(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_EDIT"]
    }));
  };

  const NotViewing44not = () => {
    setView4(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_EDIT"
      )
    }));
  };

  const Viewing5 = () => {
    setView5(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_CREATE"
      )
    }));
  };

  const NotViewing5 = () => {
    setView5(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_CREATE"]
    }));
  };

  const NotViewing5not = () => {
    setView5(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_CREATE"]
    }));
  };

  const NotViewing55not = () => {
    setView5(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_CREATE"
      )
    }));
  };

  const Viewing6 = () => {
    setView6(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_ACTIVATE"
      )
    }));
  };

  const NotViewing6 = () => {
    setView6(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_ACTIVATE"]
    }));
  };

  const NotViewing6not = () => {
    setView6(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_ACTIVATE"]
    }));
  };

  const NotViewing66not = () => {
    setView6(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_ACTIVATE"
      )
    }));
  };

  const Viewing7 = () => {
    setView7(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_DEACTIVATE"
      )
    }));
  };

  const NotViewing7 = () => {
    setView7(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_DEACTIVATE"]
    }));
  };

  const NotViewing7not = () => {
    setView7(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "BUSINESS_REP_DEACTIVATE"]
    }));
  };

  const NotViewing77not = () => {
    setView7(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "BUSINESS_REP_DEACTIVATE"
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

  const ViewingSuper = () => {
    setView1super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "DASHBOARD_VIEW"
      )
    }));
  };

  const NotViewing1Super = () => {
    setView1super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "DASHBOARD_VIEW"]
    }));
  };

  const NotViewing1notSuper = () => {
    setView1super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "DASHBOARD_VIEW"]
    }));
  };

  const NotViewing1notnotSuper = () => {
    setView1super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "DASHBOARD_VIEW"
      )
    }));
  };

  const Viewing2super = () => {
    setView2super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_VIEW"
      )
    }));
  };

  const NotViewing2super = () => {
    setView2super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_VIEW"]
    }));
  };

  const NotViewing2notsuper = () => {
    setView2super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_VIEW"]
    }));
  };

  const NotViewing22notsuper = () => {
    setView2super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_VIEW"
      )
    }));
  };

  const Viewing3super = () => {
    setView3super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_SINGLE"
      )
    }));
  };

  const NotViewing3super = () => {
    setView3super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_SINGLE"]
    }));
  };

  const NotViewing3notsuper = () => {
    setView3super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_SINGLE"]
    }));
  };

  const NotViewing33notsuper = () => {
    setView3super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_SINGLE"
      )
    }));
  };

  const Viewing5super = () => {
    setView5super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_CREATE"
      )
    }));
  };

  const NotViewing5super = () => {
    setView5super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_CREATE"]
    }));
  };

  const NotViewing5notsuper = () => {
    setView5super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "CORPORATE_CREATE"]
    }));
  };

  const NotViewing55notsuper = () => {
    setView5super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "CORPORATE_CREATE"
      )
    }));
  };

  const Viewing8super = () => {
    setView8super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_VIEW"
      )
    }));
  };

  const NotViewing8super = () => {
    setView8super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_VIEW"]
    }));
  };

  const NotViewing8notsuper = () => {
    setView8super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_VIEW"]
    }));
  };

  const NotViewing88notsuper = () => {
    setView8super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_VIEW"
      )
    }));
  };

  const Viewing10super = () => {
    setView10super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_CREATE"
      )
    }));
  };

  const NotViewing10super = () => {
    setView10super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_CREATE"]
    }));
  };

  const NotViewing10notsuper = () => {
    setView10super(true);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "SUBSCRIPTION_CREATE"]
    }));
  };

  const NotViewing1010notsuper = () => {
    setView10super(false);
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "SUBSCRIPTION_CREATE"
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

  const Changenumber = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    console.log(value);
    setRegbus({
      ...regbus,
      [name]: numericValue
    });
  };

  const ChangeFree = (e) => {
    const { name, value } = e.target;
    console.log(value);
    const numericValue = value.replace(/[^0-9]/g, "");
    setFree({
      ...free,
      [name]: numericValue
    });
  };

  const ChangeCorp = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setCorp({
      ...corp,
      [name]: value
    });
  };

  const ChangeCorpNumber = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value);
    setCorp({
      ...corp,
      [name]: numericValue
    });
  };

  const ChangeCorpPhone = (e) => {
    const { name, value } = e.target;

    // Allow only numeric values for the phone number
    if (name === "phone" && !/^\d*$/.test(value)) {
      toast.error("Phone number must contain only numbers.");
      return; // Exit if the input is invalid
    }

    // Update the state if the input is valid
    setCorp((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const Changeteam = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setTeam({
      ...team,
      [name]: value
    });
  };

  const ChangeteamPhone = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    console.log(value);
    setTeam({
      ...team,
      [name]: numericValue
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

  const EditSubscription = (e) => {
    const { name, value } = e.target;
    console.log(value);
    const numericValue = value.replace(/[^0-9]/g, "");
    setEditingSub({
      ...editingsub,
      [name]: numericValue
    });
  };

  // const sendingsImage = (e) => {
  //   const accessToken = sessionStorage.getItem("token");
  //   const folder = e.target.files[0];

  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "X-Api-Key",
  //     "24cuy5iL1f2nKTx_VmNQd_yDPND8THGm_cQho1REsfDehveIjYea64caZUJRyqEDhHI"
  //   );
  //   myHeaders.append("Authorization", `Bearer ${accessToken}`);

  //   var formdata = new FormData();
  //   formdata.append("files", folder, `${folder?.name}`);

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow"
  //   };

  //   fetch(`${process.env.REACT_APP_BASE_URL}file/upload`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log(JSON.parse(result));
  //       setUpdate(JSON.parse(result)?.data[0]?.name);
  //       toast.success("File uploaded");
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       try {
  //         error.json().then((body) => {
  //           //Here is already the payload from API
  //           console.log(body);
  //           // console.log("message = " + body.error);
  //           toast.error(body);
  //         });
  //       } catch (e) {
  //         // console.log("Error parsing promise");
  //         console.log(error);
  //       }
  //     });
  // };

  const sendingsImage = (fileBlob, fileName) => {
    const accessToken = sessionStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append(
      "X-Api-Key",
      "24cuy5iL1f2nKTx_VmNQd_yDPND8THGm_cQho1REsfDehveIjYea64caZUJRyqEDhHI"
    );
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    var formdata = new FormData();
    formdata.append("files", fileBlob, fileName);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    fetch(
      `${process.env.REACT_APP_BASE_URL}file/upload/${regbus?.email}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        const uploadedFileName = result?.data?.[0]?.name; // Assuming this is the file name returned by the server
        if (!result?.status) {
          toast.error(result?.message);
        }
        if (result?.status) {
          setUpdate(uploadedFileName);
          setRegbus({
            ...regbus,
            avatar: uploadedFileName
          });
          toast.success("File uploaded");
        }
      })
      .catch((error) => {
        console.log("error", error);
        try {
          error.json().then((body) => {
            console.log(body);
            toast.error(body);
          });
        } catch (e) {
          console.log(error);
        }
      });
  };

  console.log(regbus);

  const datePickerRef = useRef(null);

  // const PickDater = () => {
  //   console.log("sodiq");
  //   datePickerRef.current.click();
  // };

  const PickDater = () => {
    // You can integrate with date picker if needed
    console.log("Triggering date picker");
    if (datePickerRef.current) {
      datePickerRef.current.click(); // If needed
    }
  };

  console.log(regbus.avatar);

  const SendDetails = () => {
    const { lastname, firstname, rcNumber, address, phone, email, avatar } =
      regbus;
    const name = `${firstname} ${lastname}`;
    dispatch(
      CreateBusinessRepCorporate({
        name,
        // rcNumber,
        address,
        phone,
        email,
        avatar
      })
    );
    setBusstate(true);
  };

  // const blobToFile = (blob, filename) => {
  //   return new File([blob], filename, { type: blob.type });
  // };

  // const SendDetails = () => {
  //   const { lastname, firstname, rcNumber, address, phone, email, avatar } =
  //     regbus;
  //   const name = `${firstname} ${lastname}`;

  //   // Helper function to convert base64 to Blob
  //   const base64ToBlob = (base64, mime) => {
  //     console.log("Base64 string:", base64); // Log to verify the format
  //     const base64String = base64.split(",")[1] || base64; // Remove prefix if present
  //     try {
  //       const byteChars = atob(base64String);
  //       const byteArrays = [];
  //       for (let offset = 0; offset < byteChars.length; offset += 512) {
  //         const slice = byteChars.slice(offset, offset + 512);
  //         const byteNumbers = new Array(slice.length);
  //         for (let i = 0; i < slice.length; i++) {
  //           byteNumbers[i] = slice.charCodeAt(i);
  //         }
  //         const byteArray = new Uint8Array(byteNumbers);
  //         byteArrays.push(byteArray);
  //       }
  //       return new Blob(byteArrays, { type: mime });
  //     } catch (e) {
  //       console.error("Error decoding base64:", e);
  //       throw e;
  //     }
  //   };

  //   // Convert base64 avatar to Blob
  //   try {
  //     const avatarBlob = base64ToBlob(avatar, "image/jpeg"); // Adjust MIME type as needed
  //     const avatarFile = blobToFile(avatarBlob, "avatar.jpg");

  //     // Prepare the FormData object
  //     const formData = new FormData();
  //     formData.append("name", name);
  //     formData.append("rcNumber", rcNumber);
  //     formData.append("address", address);
  //     formData.append("phone", phone);
  //     formData.append("email", email);
  //     formData.append("avatar", avatarFile);

  //     // Dispatch your action with FormData
  //     dispatch(CreateBusinessRepCorporate(formData));
  //     setBusstate(true);
  //   } catch (error) {
  //     toast.error("Error in SendDetails:", error);
  //   }
  // };

  const SendTeam = () => {
    const {
      lastname,
      name,
      // rcNumber,
      // address,
      phone,
      email,
      // avatar,
      permissions
    } = team;
    console.log(team);
    const names = `${name} ${lastname}`;
    // console.log(address);
    const allVariablesPresent = [
      lastname,
      name,
      // rcNumber,
      // address,
      phone,
      email,
      // avatar,
      permissions
    ].every((variable) => variable !== undefined && variable !== null);
    if (allVariablesPresent) {
      const names = `${name} ${lastname}`;
      console.log(supers);
      if (!supers) {
        dispatch(
          AddTeam({
            name: names,
            // rcNumber,
            // address,
            phone,
            email,
            // avatar,
            permissions
          })
        );
      } else {
        dispatch(
          SuperAddTeam({
            name: names,
            // rcNumber,
            // address,
            phone,
            email,
            // avatar,
            permissions
          })
        );
      }
      setBusstate1(true);
    } else {
      toast.error("One or more required fields are missing.");
    }
  };

  const SendingCorp = () => {
    const {
      name,
      rcNumber,
      address,
      phone,
      email,
      isBusinessPlan,
      minRepCount,
      maxRepCount,
      amount,
      maxLocationCount
    } = corp;
    console.log(team);
    console.log(address);
    const allVariablesPresent = [
      name,
      rcNumber,
      address,
      phone,
      email,
      isBusinessPlan,
      minRepCount,
      maxRepCount,
      amount,
      maxLocationCount
    ].every((variable) => variable !== undefined && variable !== null);
    if (allVariablesPresent) {
      console.log(supers);
      dispatch(
        AddCorp({
          name,
          rcNumber,
          address,
          phone,
          email,
          isBusinessPlan,
          minRepCount,
          maxRepCount,
          amount,
          maxLocationCount
        })
      );
      setBusstate5(true);
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

  const Nexting = () => {
    const { name, rcNumber, address, phone, email, isBusinessPlan } =
      corp || {};

    // Check if all required fields are present and valid
    const allVariablesPresent = [name, rcNumber, address, phone, email].every(
      (variable) =>
        variable !== undefined && variable !== null && variable.trim() !== ""
    );

    // Check if email contains '@'
    const isEmailValid = email && email.includes("@");

    const isBusinessPlanValid =
      isBusinessPlan === true || isBusinessPlan === false;

    // Error messages for validation
    if (!isEmailValid) {
      toast.error("Email must contain @");
    } else if (!allVariablesPresent) {
      toast.error("One or more required fields are missing or invalid.");
    } else if (!isBusinessPlanValid) {
      toast.error("Business plan must be valid.");
    } else {
      // If all validations pass
      setStep(24);
    }
  };

  const EditSub = () => {
    const { minRepCount, maxRepCount, maxLocationCount, amount } = editingsub;
    dispatch(
      EditSubing({ minRepCount, maxRepCount, maxLocationCount, amount, id })
    );
    setBusstate12(true);
  };

  const EditSubReal = () => {
    const { minRepCount, maxRepCount, maxLocationCount, amount } = editingsub;
    dispatch(
      EditSubing({ minRepCount, maxRepCount, maxLocationCount, amount, id })
    );
    setBusstate13(true);
  };

  const EditFree = () => {
    const {
      minCountOfBusinessReps,
      numberOfBusinessReps,
      numberOfLocations,
      daysEligible
    } = free;
    dispatch(
      EditFreeTrial({
        minCountOfBusinessReps,
        numberOfBusinessReps,
        numberOfLocations,
        daysEligible
      })
    );
    setBusstate14(true);
  };

  const EditFreeTwo = () => {
    const {
      minCountOfBusinessReps,
      numberOfBusinessReps,
      numberOfLocations,
      daysEligible
    } = free;
    dispatch(
      EditFreeTrial({
        minCountOfBusinessReps,
        numberOfBusinessReps,
        numberOfLocations,
        daysEligible
      })
    );
    setBusstate15(true);
  };

  const EditFreeThree = () => {
    const {
      minCountOfBusinessReps,
      numberOfBusinessReps,
      numberOfLocations,
      daysEligible
    } = free;
    dispatch(
      EditFreeTrial({
        minCountOfBusinessReps,
        numberOfBusinessReps,
        numberOfLocations,
        daysEligible
      })
    );
    setBusstate16(true);
  };

  const EditFreeFour = () => {
    const {
      minCountOfBusinessReps,
      numberOfBusinessReps,
      numberOfLocations,
      daysEligible
    } = free;
    dispatch(
      EditFreeTrial({
        minCountOfBusinessReps,
        numberOfBusinessReps,
        numberOfLocations,
        daysEligible
      })
    );
    setBusstate17(true);
  };

  const handleCloseModal4 = () => {
    if (setLog) {
      setLog(false);
    }
    if (activatedcam) {
      setactivatedcam(false);
      setWebcamActive(false);
    }
    if (setUserdetails) {
      setUserdetails({
        current_password: "",
        password: "",
        password_confirmation: ""
      });
    }
    setSub({
      name: "",
      minRepCount: "",
      maxRepCount: "",
      maxLocationCount: "",
      amount: 0
    });
    setEditingSub({
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
      // rcNumber: "",
      lastname: "",
      // address: "",
      permissions: [],
      phone: "",
      email: ""
      // avatar: ""
    });
    setCorp({
      name: "",
      rcNumber: "",
      address: "",
      phone: "",
      email: "",
      isBusinessPlan: "",
      minRepCount: 0,
      maxRepCount: 0,
      maxLocationCount: 0,
      amount: 0.0
    });
    setFree({
      minCountOfBusinessReps: "",
      numberOfBusinessReps: "",
      numberOfLocations: "",
      daysEligible: ""
    });
    setBusplan(false);
    setUpdate("");
    setStep(0);
    setBusstate(false);
    setBusstate1(false);
    setBusstate2(false);
    setBusstate5(false);
    setBusstate6(false);
    setBusstate7(false);
    setBusstate8(false);
    setBusstate9(false);
    setBusstate10(false);
    setBusstate11(false);
    setBusstate12(false);
    setBusstate13(false);
    setBusstate14(false);
    setBusstate15(false);
    setBusstate16(false);
    setBusstate17(false);
    setBusstate18(false);
    setBusstate19(false);
    setBusstate20(false);
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
    setValues(false);
    setView1super(false);
    setView2super(false);
    setView3super(false);
    setView4super(false);
    setView5super(false);
    setView8super(false);
    setView10super(false);
  };

  const CreatUsermanagement = () => {
    setStep(10);
  };

  const base64ToBlob = (base64, mime) => {
    const byteChars = atob(base64);
    const byteArrays = [];
    for (let offset = 0; offset < byteChars.length; offset += 512) {
      const slice = byteChars.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: mime });
  };

  const handleCapture = (imageSrc) => {
    console.log("Captured image:", imageSrc);

    // Extract the base64 part from the data URL
    const base64String = imageSrc.split(",")[1];

    // Convert base64 to Blob
    const avatarBlob = base64ToBlob(base64String, "image/jpeg");
    const fileName = "avatar.jpg"; // You can dynamically generate this if needed

    // Upload the file
    if (regbus?.email) {
      sendingsImage(avatarBlob, fileName);
    } else {
      toast.error("Input Email Address first");
    }

    // Optionally update state directly after successful upload
    // setRegbus((prev) => ({ ...prev, avatar: update }));
  };

  const formatNumberWithCommas = (number) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            {/* <span style={{ color: "red" }}>
              NOTE: Input email before uploading picture
            </span> */}
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
              onChange={(e) => Changenumber(e)}
              name="phone"
              value={regbus?.phone}
              placeholder={`${`Enter Business Rep's Phone Number`}`}
            />
            {/* <ModalInputText
              label="RC Number"
              onChange={(e) => Change(e)}
              name="rcNumber"
              value={regbus?.rcNumber}
              placeholder={`${`Enter Business Rep's Reg.Number`}`}
            /> */}
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
            {regbus?.avatar ? (
              <img
                src={regbus?.avatar}
                alt="takephoto"
                style={{ width: "492px", height: "275px" }}
              />
            ) : (
              <>
                {webcamActive ? (
                  <CameraComponent
                    activatedcam={activatedcam}
                    onCapture={handleCapture}
                    stopWebcam={stopWebcam}
                  />
                ) : (
                  <span style={{ color: "red" }}>
                    Please activate your web Camera
                  </span>
                )}
              </>
            )}
            {/* {regbus?.avatar !== "" ? (
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
            )} */}
          </div>
          <LargeSignInButton
            onClick={() => {
              setStep(2);
              // setWebcamActive(false);
            }}
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
            <LargeSignInButton title="Back" large onClick={() => setStep(1)} />
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
              onClick={() => {
                console.log(values);
                dispatch(ProjectStatus({ id, value: values }));
                setBusstate10(true);
              }}
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
              onClick={() => {
                sessionStorage.setItem("editprojectId", JSON.stringify(id));
                navigate(`/clients/projects/location/:location`);
                // dispatch(ProjectStatus({ id, value: !values }));
                // setBusstate9(true);
              }}
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
              // onChange={(e) => Changeteam(e)}
              onChange={(e) => ChangeteamPhone(e)}
              name="phone"
              increase
              value={team?.phone}
              placeholder={`${`Enter User management Phone Number`}`}
            />
            {/* <ModalInputText
              label="RC Number"
              onChange={(e) => Changeteam(e)}
              name="rcNumber"
              increase
              value={team?.rcNumber}
              placeholder={`${`Enter User management RCNumber`}`}
            /> */}
            <ModalInputText
              label="Email"
              onChange={(e) => Changeteam(e)}
              name="email"
              increase
              value={team?.email}
              placeholder={`${`Enter User management Email`}`}
            />
            {/* <ModalInputText
              label="Address"
              onChange={(e) => Changeteam(e)}
              name="address"
              increase
              value={team?.address}
              placeholder={`${`Enter User management Address`}`}
            /> */}
            {/* {team?.avatar !== "" ? (
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
            )} */}
            {/* {team?.avatar ? (
              <img
                src={team?.avatar}
                alt="takephoto"
                style={{ width: "492px", height: "275px" }}
              />
            ) : (
              <>
                {webcamActive ? (
                  <CameraComponent onCapture={handleCapture} />
                ) : (
                  <span style={{ color: "red" }}>
                    Please activate your web Camera
                  </span>
                )}
              </>
            )} */}
            <div className="flex">
              <div className="activities">
                <div className="activity-permission">
                  <span className="activitynames">Activity</span>
                  <span>Permission</span>
                </div>
                <div className="rolename">
                  <span className="name">1.Dashboard</span>
                  <div className="button-group">
                    {data?.some((item) => item === "DASHBOARD_VIEW") &&
                    !view1 ? (
                      <button className="view" onClick={() => Viewing()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "DASHBOARD_VIEW") &&
                      !view1 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing1not()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "DASHBOARD_VIEW") &&
                      view1 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing1()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : !data?.some((item) => item === "DASHBOARD_VIEW") &&
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
                    {data?.some((item) => item === "BUSINESS_REP_VIEW") &&
                    !view2 ? (
                      <button className="view" onClick={() => Viewing2()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "BUSINESS_REP_VIEW") &&
                      !view2 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing2not()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "BUSINESS_REP_VIEW") &&
                      view2 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing2()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : !data?.some((item) => item === "BUSINESS_REP_VIEW") &&
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
                    {/* {data?.some((item) => item === "CORPORATE_EDIT") &&
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
                        <EditeyeNot />
                        Edit
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_EDIT") &&
                      view4 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing4()}
                      >
                        <EditeyeNot />
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
                    )} */}
                    {data?.some((item) => item === "BUSINESS_REP_LIST") &&
                    !view3 ? (
                      <button className="view" onClick={() => Viewing3()}>
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "BUSINESS_REP_LIST") &&
                      !view3 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing3not()}
                      >
                        <ListNot />
                        List
                      </button>
                    ) : data?.some((item) => item === "BUSINESS_REP_LIST") &&
                      view3 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing3()}
                      >
                        <ListNot />
                        List
                      </button>
                    ) : !data?.some((item) => item === "BUSINESS_REP_LIST") &&
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
                    {data?.some((item) => item === "BUSINESS_REP_CREATE") &&
                    !view5 ? (
                      <button className="view" onClick={() => Viewing5()}>
                        <Create />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "BUSINESS_REP_CREATE") &&
                      !view5 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing5not()}
                      >
                        <CreateNot />
                        Create
                      </button>
                    ) : data?.some((item) => item === "BUSINESS_REP_CREATE") &&
                      view5 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing5()}
                      >
                        <CreateNot />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "BUSINESS_REP_CREATE") &&
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
                    {data?.some((item) => item === "BUSINESS_REP_ACTIVATE") &&
                    !view6 ? (
                      <button className="view" onClick={() => Viewing6()}>
                        <Activate />
                        Activate
                      </button>
                    ) : !data?.some(
                        (item) => item === "BUSINESS_REP_ACTIVATE"
                      ) && !view6 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing6not()}
                      >
                        <ActivateDark />
                        Activate
                      </button>
                    ) : data?.some(
                        (item) => item === "BUSINESS_REP_ACTIVATE"
                      ) && view6 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing6()}
                      >
                        <ActivateDark />
                        Activate
                      </button>
                    ) : !data?.some(
                        (item) => item === "BUSINESS_REP_ACTIVATE"
                      ) && view6 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing66not()}
                      >
                        <Activate />
                        Activate
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing6()}>
                        <Activate />
                        Activate
                      </button>
                    )}
                    {data?.some((item) => item === "BUSINESS_REP_DEACTIVATE") &&
                    !view7 ? (
                      <button className="view" onClick={() => Viewing7()}>
                        <Deactivate />
                        Deactivate
                      </button>
                    ) : !data?.some(
                        (item) => item === "BUSINESS_REP_DEACTIVATE"
                      ) && !view7 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing7not()}
                      >
                        <DeactivateDark />
                        Deactivate
                      </button>
                    ) : data?.some(
                        (item) => item === "BUSINESS_REP_DEACTIVATE"
                      ) && view7 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing7()}
                      >
                        <DeactivateDark />
                        Deactivate
                      </button>
                    ) : !data?.some(
                        (item) => item === "BUSINESS_REP_DEACTIVATE"
                      ) && view7 ? (
                      <button
                        className="view"
                        onClick={() => NotViewing77not()}
                      >
                        <Deactivate />
                        Deactivate
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing7()}>
                        <Deactivate />
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
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      view8 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing8()}
                      >
                        <EyeNot />
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
                        <ListNot />
                        List
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_LIST") &&
                      view9 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing9()}
                      >
                        <ListNot />
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
                        <EyeNot />
                        Plan view
                      </button>
                    ) : data?.some((item) => item === "PLAN_VIEW") && view10 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing10()}
                      >
                        <EyeNot />
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
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "PROJECT_VIEW") &&
                      view11 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing11()}
                      >
                        <EyeNot />
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
                        <EditeyeNot />
                        Edit
                      </button>
                    ) : data?.some((item) => item === "PROJECT_EDIT") &&
                      view12 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing12()}
                      >
                        <EditeyeNot />
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
                        <ListNot />
                        List
                      </button>
                    ) : data?.some((item) => item === "PROJECT_LIST") &&
                      view13 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing13()}
                      >
                        <ListNot />
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
                        <CreateNot />
                        Create
                      </button>
                    ) : data?.some((item) => item === "PROJECT_CREATE") &&
                      view14 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing14()}
                      >
                        <CreateNot />
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
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "REPORT_VIEW") &&
                      view15 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing15()}
                      >
                        <EyeNot />
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
              onClick={() => handleClick()}
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
              onClick={() => {
                dispatch(EditDetails({ id, value: !values }));
                setBusstate6(true);
              }}
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
            Status Change Successfully
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
              You have successfully change status of this User Manager
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
              Hello, {detailing?.nameOfSubscriber}
            </span>
            <div style={{ fontSize: "14px", color: "#5A6376" }}>
              <span>
                You have successfully made a payment of {detailing?.amount?.NGN}{" "}
                naira to add a
              </span>
              <span>total of {detailing?.noOfBusinessReps} business reps</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ color: "#1A87D7", fontSize: "18px" }}>
              {detailing?.amount?.NGN}
            </span>
            <span style={{ color: "#5A6376", fontSize: "14px" }}>
              Paid {detailing?.amount?.NGN}
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
              <span style={{ color: "#1E1B39", fontSize: "14px" }}>
                {formattedTime}
              </span>
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
                {formattedDate}
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
                {detailing?.paymentMethod}
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
                {detailing?.subscriptionType}
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
                {detailing?.id}
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
                {detailing?.status}
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
                {detailing?.noOfBusinessReps}
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
              onClick={() => setStep(23)}
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
            onChange={(e) => ChangeCorp(e)}
            name="name"
            value={corp?.name}
            placeholder={`${`Enter Corporate’s Business Name`}`}
          />
          <ModalInputText
            nosign
            label="RC Number"
            onChange={(e) => ChangeCorp(e)}
            name="rcNumber"
            value={corp?.rcNumber}
            placeholder={`${`Enter Corporate’s RC Number`}`}
          />
          <ModalInputText
            nosign
            label="Address"
            onChange={(e) => ChangeCorp(e)}
            name="address"
            value={corp?.address}
            placeholder={`${`Enter Corporate’s Address`}`}
          />
          <ModalInputText
            nosign
            label="Contact Phone Number"
            onChange={(e) => ChangeCorpPhone(e)}
            name="phone"
            value={corp?.phone}
            placeholder={`${`Enter Corporate’s Phone Number`}`}
          />
          <ModalInputText
            nosign
            label="Contact Email"
            onChange={(e) => ChangeCorp(e)}
            name="email"
            value={corp?.email}
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
                left: "8px",
                cursor: "pointer"
              }}
              onClick={() => setStep(22)}
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
            {busplan ? (
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  color: "white",
                  borderRadius: "50%",
                  background: "#12B76A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "7px",
                  left: "8px",
                  cursor: "pointer"
                }}
                onClick={() => setBusplan(false)}
              >
                <Markgreen style={{ cursor: "pointer" }} />
              </div>
            ) : (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  cursor: "pointer"
                }}
                onClick={() => setBusplan(true)}
              ></span>
            )}
            <span
              style={{ color: "#1E1B39", fontSize: "15px", fontWeight: "500" }}
            >
              Business Plan
            </span>
          </div>
          <Flex>
            <div className="addresswrapper">
              <div className="heading">
                <span className="title">PLAN TYPES</span>
                <span className="title">MINIMUM USERS</span>
                <span className="titlelast">MONTHLY FEE</span>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">FREE_TRIAL</div>
                  <div className="second">
                    {
                      supersubs?.find((item) => item?.name === "FREE_TRIAL")
                        ?.minRepCount
                    }
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.minRepCount}
                        name="minRepCount"
                        placeholder="Enter minimum user"
                      /> */}
                  </div>
                  <div className="third">
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.maxLocationCount}
                        name="maxLocationCount"
                        placeholder="Enter number of location"
                      /> */}
                    {
                      supersubs?.find((item) => item?.name === "FREE_TRIAL")
                        ?.amount?.NGN
                    }
                  </div>
                </div>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">ENTERPRISE</div>
                  <div className="second">
                    {
                      supersubs?.find((item) => item?.name === "ENTERPRISE")
                        ?.minRepCount
                    }
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.minRepCount}
                        name="minRepCount"
                        placeholder="Enter minimum user"
                      /> */}
                  </div>
                  <div className="third">
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.maxLocationCount}
                        name="maxLocationCount"
                        placeholder="Enter number of location"
                      /> */}
                    {
                      supersubs?.find((item) => item?.name === "ENTERPRISE")
                        ?.amount?.NGN
                    }
                  </div>
                </div>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">ENTERPRISE_PLUS</div>
                  <div className="second">
                    {
                      supersubs?.find(
                        (item) => item?.name === "ENTERPRISE_PLUS"
                      )?.minRepCount
                    }
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.minRepCount}
                        name="minRepCount"
                        placeholder="Enter minimum user"
                      /> */}
                  </div>
                  <div className="third">
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.maxLocationCount}
                        name="maxLocationCount"
                        placeholder="Enter number of location"
                      /> */}
                    {
                      supersubs?.find(
                        (item) => item?.name === "ENTERPRISE_PLUS"
                      )?.amount?.NGN
                    }
                  </div>
                </div>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">STANDARD_PLUS</div>
                  <div className="second">
                    {
                      supersubs?.find((item) => item?.name === "STANDARD_PLUS")
                        ?.minRepCount
                    }
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.minRepCount}
                        name="minRepCount"
                        placeholder="Enter minimum user"
                      /> */}
                  </div>
                  <div className="third">
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.maxLocationCount}
                        name="maxLocationCount"
                        placeholder="Enter number of location"
                      /> */}
                    {
                      supersubs?.find((item) => item?.name === "STANDARD_PLUS")
                        ?.amount?.NGN
                    }
                  </div>
                </div>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">STANDARD</div>
                  <div className="second">
                    {
                      supersubs?.find((item) => item?.name === "STANDARD")
                        ?.minRepCount
                    }
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.minRepCount}
                        name="minRepCount"
                        placeholder="Enter minimum user"
                      /> */}
                  </div>
                  <div className="third">
                    {/* <input
                        className="text"
                        onChange={(e) => ChangeCorpNumber(e)}
                        value={corp?.maxLocationCount}
                        name="maxLocationCount"
                        placeholder="Enter number of location"
                      /> */}
                    {
                      supersubs?.find((item) => item?.name === "STANDARD")
                        ?.amount?.NGN
                    }
                  </div>
                </div>
              </div>
            </div>
          </Flex>
          {/* <Flex>
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
          </Flex> */}
          {/* <div
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
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: "10px",
              paddingTop: "10px"
            }}
          >
            {!busplan ? (
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  color: "white",
                  borderRadius: "50%",
                  background: "#12B76A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "7px",
                  left: "8px",
                  cursor: "pointer"
                }}
                onClick={() => setBusplan(true)}
              >
                <Markgreen style={{ cursor: "pointer" }} />
              </div>
            ) : (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  border: "1px solid #E0E0E0",
                  cursor: "pointer"
                }}
                onClick={() => setBusplan(false)}
              ></span>
            )}
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
                <span className="titlelast">Number of Location</span>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first">Custom Plan</div>
                  <div className="second">
                    <input
                      className="text"
                      onChange={(e) => ChangeCorpNumber(e)}
                      value={corp?.minRepCount}
                      name="minRepCount"
                      placeholder="Enter minimum user"
                    />
                  </div>
                  <div className="third">
                    <input
                      className="text"
                      onChange={(e) => ChangeCorpNumber(e)}
                      value={corp?.maxLocationCount}
                      name="maxLocationCount"
                      placeholder="Enter number of location"
                    />
                  </div>
                </div>
              </div>
              <div className="heading">
                <span className="title"></span>
                <span className="title">Maximum Users</span>
                <span className="titlelast">Monthly fee per user</span>
              </div>
              <div className="arrange">
                <div className="details">
                  <div className="first"></div>
                  <div className="second">
                    <input
                      className="text"
                      value={corp?.maxRepCount}
                      onChange={(e) => ChangeCorpNumber(e)}
                      name="maxRepCount"
                      placeholder="Enter maximum user"
                    />
                  </div>
                  <div className="third">
                    <input
                      className="text"
                      onChange={(e) => ChangeCorpNumber(e)}
                      value={corp?.amount}
                      name="amount"
                      placeholder="Enter monthly fees"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Flex>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-between"
            }}
          >
            <LargeSignInButton
              onClick={() => setStep(22)}
              large
              title={"Back"}
              background
              color
            />
            <LargeSignInButton
              onClick={() => Nexting()}
              large
              title={"Next"}
              background
              color
            />
          </div>
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
            alignItems: "center",
            width: "100%"
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
                left: "8px",
                cursor: "pointer"
              }}
              onClick={() => setStep(22)}
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
                left: "8px",
                cursor: "pointer"
              }}
              onClick={() => setStep(23)}
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
              paddingInline: "8%",
              justifyContent: "center",
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
                width: "30%",
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
                  fontWeight: 500,
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: "100%"
                }}
              >
                {corp?.name}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                width: "30%",
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
                  fontWeight: "500",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: "100%"
                }}
              >
                {corp?.rcNumber}
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
                  fontWeight: "500",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: "100%"
                }}
              >
                {corp?.address}
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
              justifyContent: "center",
              alignContent: "center",
              paddingTop: "20px",
              width: "100%",
              height: "100px",
              paddingInline: "5%"
              // paddingLeft: "30px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                width: "30%",
                height: "100%"
                // marginRight: "70px"
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
                  fontWeight: "500",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: "100%"
                }}
              >
                {corp?.phone}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "flex-start",
                width: "30%",
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
                  fontWeight: "500",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                  width: "100%"
                }}
              >
                {corp?.email}
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
                Subscription Plan
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {corp?.isBusinessPlan ? "Business Plan" : "Custom Plan"}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "space-between"
            }}
          >
            <LargeSignInButton
              onClick={() => setStep(23)}
              large
              title={"Back"}
              background
              color
            />
            <LargeSignInButton
              onClick={() => SendingCorp()}
              large
              title={"Submit"}
              background
              color
            />
          </div>

          {/* <LargeSignInButton
            onClick={() => SendingCorp()}
            bigger
            title={"Submit"}
            background
            color
          /> */}
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
              onClick={() => {
                dispatch(EditAdminDetails({ id, value: values }));
                setBusstate18(true);
              }}
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
            Account Activated
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
              Are you sure you want to deactivate this Sub-Admin
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
              onClick={() => {
                dispatch(EditAdminDetails({ id, value: !values }));
                setBusstate11(true);
              }}
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
            Status Changed
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
            <span>You have successfully change Status of a Sub-Admin.</span>
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
          onChange={(e) => ChangeFree(e)}
          name="daysEligible"
          value={free?.daysEligible}
          nosign
          // placeholder={`${`30`}`}
        />
        <LargeSignInButton
          onClick={() => EditFree()}
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
          onChange={(e) => EditSubscription(e)}
          name="maxRepCount"
          nosign
          value={editingsub?.maxRepCount}
          // placeholder={`${`99`}`}
        />
        <LargeSignInButton
          onClick={() => EditSubReal()}
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
          onChange={(e) => EditSubscription(e)}
          name="amount"
          nosign
          value={editingsub?.amount}
          // placeholder={`${`NGN 10000`}`}
        />
        <LargeSignInButton
          onClick={() => EditSub()}
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
      <AppModal
        step={56}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        heading="Key Features"
      ></AppModal>
      <AppModal
        step={57}
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
              Activate
            </div>
            <span>Are you sure you want to activate Business Rep, Are</span>
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
              onClick={() => {
                dispatch(EditDetails({ id, value: values }));
                setBusstate7(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={58}
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
            <span>You have successfully activated this Business Rep.</span>
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
        step={59}
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
            <span>Are you sure you want to activate Business Rep, Are</span>
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
              onClick={() => {
                dispatch(EditDetails({ id, value: !values }));
                setBusstate8(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={60}
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
            <span>You have successfully activated this Business Rep.</span>
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
        step={61}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Max. Rep"
        noheadborder
        subscribe
      >
        <ModalInputText
          label="Edit Maximum Number of Business Reps"
          onChange={(e) => ChangeFree(e)}
          name="numberOfBusinessReps"
          value={free?.numberOfBusinessReps}
          nosign
          // placeholder={`${`30`}`}
        />
        <LargeSignInButton
          onClick={() => EditFreeTwo()}
          bigger
          title={"Save Changes"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={62}
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
              You have successfully Updated Maximum Number of Business Reps.
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
        step={63}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Location"
        noheadborder
        subscribe
      >
        <ModalInputText
          label="Edit Maximum Number of Geo-Location "
          onChange={(e) => ChangeFree(e)}
          name="numberOfLocations"
          value={free?.numberOfLocations}
          nosign
          // value={regbus?.firstname}
          // placeholder={`${`30`}`}
        />
        <LargeSignInButton
          onClick={() => EditFreeThree()}
          bigger
          title={"Save Changes"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={64}
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
            <span>You have successfully Updated Location.</span>
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
        step={65}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Edit Min. Rep."
        noheadborder
        subscribe
      >
        <ModalInputText
          label="Edit Minimum Number of Business Reps per Corporates"
          onChange={(e) => ChangeFree(e)}
          name="minCountOfBusinessReps"
          value={free?.minCountOfBusinessReps}
          nosign
          // value={regbus?.firstname}
          // placeholder={`${`30`}`}
        />
        <LargeSignInButton
          onClick={() => EditFreeFour()}
          bigger
          title={"Save Changes"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={66}
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
            <span>You have successfully Updated Minimum Reps.</span>
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
        step={67}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        heading="Deactivate Corporate"
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
              Are you sure you want to deactivate this Corporate
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
              onClick={() => {
                dispatch(EditAdminDetails({ id, value: !values }));
                setBusstate19(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={68}
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
            Account Deactivated
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
            <span>You have successfully Deactivated this Corporate.</span>
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
        step={69}
        currentStep={step}
        closeModal={handleCloseModal4}
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
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px"
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
                  fontSize: "19px",
                  fontWeight: "500"
                }}
              >
                Review & Submit
              </span>
              <span
                style={{
                  color: "#788194",
                  fontSize: "12px",
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
              // paddingInline: '30px',
              // gap:'50px',
              // alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "20px",
              width: "100%",
              height: "100px",
              gap: "50px",
              paddingLeft: "30px"
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                Name of project
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {assigned?.projectName}
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                No of Business Reps.
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {assigned?.numberOfReps}
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                No of Locations
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {assigned?.numberOfLocations}
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
              paddingTop: "10px",
              width: "100%",
              gap: "20px",
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                Resumption time
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {assigned?.resumptionTime}
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                Closing time
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {assigned?.closingTime}
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                Hourly time stamp?
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {assigned?.hourlyStamp ? "Yes" : "No"}
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
              paddingTop: "10px",
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
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                Daily payout
              </span>
              <span
                style={{
                  color: "#1E1B39",
                  fontSize: "12px",
                  fontWeight: "500"
                }}
              >
                {formatNumberWithCommas(assigned?.dailyPayout)}
              </span>
            </div>
          </div>

          <LargeSignInButton
            onClick={() => setStep(70)}
            bigger
            title={"Activate"}
            background
            color
          />
        </div>
      </AppModal>
      <AppModal
        step={70}
        currentStep={step}
        closeModal={handleCloseModal4}
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
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px"
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
                  fontSize: "19px",
                  fontWeight: "500"
                }}
              >
                Subscription Type
              </span>
              <span
                style={{
                  color: "#788194",
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                You are to use the standard plan to continue payment for your
                selected
              </span>
              <span
                style={{
                  color: "#788194",
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                business reps
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              border: "1px solid #1A87D7",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              height: "80px",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                color: "#1A87D7",
                fontSize: "14px",
                fontWeight: "500",
                alignItems: "center"
              }}
            >
              <span>{assigned?.subscriptionName}</span>
              <span>{assigned?.numberOfReps}</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: "#1A87D7",
                fontSize: "14px",
                marginTop: "10px",
                fontWeight: "500",
                alignItems: "center"
              }}
            >
              <span>N{assigned?.subscriptionAmountPerBusinessRep}</span>
              <span>Each Business Rep</span>
            </div>
          </div>
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "center",
              color: "#1A87D7",
              fontSize: "15px",
              fontWeight: "500"
            }}
          >
            <span>Total Amount</span>
            <span>
              {assigned?.calculatedAmount}
              {/* {(() => {
                let numericAmount = parseFloat(
                  (assigned?.calculatedAmount || "").replace(/^N/, "")
                );
                if (isNaN(numericAmount)) {
                  numericAmount = 0;
                }
                const result = numericAmount * (assigned?.numberOfReps || 1);
                return result.toFixed(2);
              })()} */}
            </span>
          </div>

          <LargeSignInButton
            onClick={() => SendAssignRepBolu()}
            bigger
            title={"Proceed"}
            background
            color
          />
        </div>
      </AppModal>
      <AppModal
        step={71}
        currentStep={step}
        closeModal={handleCloseModal4}
        noheadborder
        // updateUserListData(update);
        // window.location.reload()
      >
        {payment?.data?.subscriptionName === "FREE_TRIAL" ? (
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
                You have successfully Created a Project with Free Trial
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
                onClick={() => {
                  handleCloseModal4();
                  navigate(`${clients}/${businessprojects}`);
                }}
                big
                background
                color
              />
            </div>
          </div>
        ) : (
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
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "10px"
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
                    fontSize: "19px",
                    fontWeight: "500"
                  }}
                >
                  Payment Method
                </span>
                {/* <span
                style={{
                  color: "#788194",
                  fontSize: "12px",
                  fontWeight: "400"
                }}
              >
                You are about to pay a total of 10,000 naira for five selected
                business
              </span> */}
                <span
                  style={{
                    color: "#788194",
                    fontSize: "12px",
                    fontWeight: "400"
                  }}
                >
                  Kindly select your preffered payment method below to continue
                </span>
              </div>
            </div>
            <div
              onClick={handlePaymentRedirect}
              style={{
                width: "100%",
                border: "1px solid #1A87D7",
                borderRadius: "10px",
                padding: "15px",
                display: "flex",
                height: "80px",
                flexDirection: "row",
                justifyContent: "flex-start",
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  color: "#1A87D7",
                  fontSize: "14px",
                  fontWeight: "500",
                  alignItems: "center"
                }}
              >
                <span>
                  <Flutterwave />
                </span>
                <span>Flutterwave</span>
              </div>
            </div>

            <LargeSignInButton
              // onClick={() => handleCloseModal4()}
              onClick={handlePaymentRedirect}
              bigger
              title={"Proceed"}
              background
              color
            />
          </div>
        )}
      </AppModal>
      <AppModal
        step={72}
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
            Payment Completed Successfully
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
            <span>You have successfully made Payment</span>
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
        step={73}
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
            <span>Are you sure you want to deactivate this Rep?</span>
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
              onClick={() => {
                console.log(projectbusId);
                dispatch(ProjectRemove({ id, value: projectbusId }));
                setBusstate20(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={74}
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
            <span>You have successfully deactivated this rep</span>
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
        step={75}
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
              Activate
            </div>
            <span>Are you sure you want to activate User manager, Are</span>
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
              onClick={() => {
                dispatch(EditDetails({ id, value: values }));
                setBusstate6(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={76}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        heading="Activate"
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
              Are you sure you want to Activate this Sub-Admin
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
              onClick={() => {
                dispatch(EditAdminDetails({ id, value: values }));
                setBusstate11(true);
              }}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={77}
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
              // onChange={(e) => Changeteam(e)}
              onChange={(e) => ChangeteamPhone(e)}
              name="phone"
              increase
              value={team?.phone}
              placeholder={`${`Enter User management Phone Number`}`}
            />
            {/* <ModalInputText
              label="RC Number"
              onChange={(e) => Changeteam(e)}
              name="rcNumber"
              increase
              value={team?.rcNumber}
              placeholder={`${`Enter User management RCNumber`}`}
            /> */}
            <ModalInputText
              label="Email"
              onChange={(e) => Changeteam(e)}
              name="email"
              increase
              value={team?.email}
              placeholder={`${`Enter User management Email`}`}
            />
            {/* <ModalInputText
              label="Address"
              onChange={(e) => Changeteam(e)}
              name="address"
              increase
              value={team?.address}
              placeholder={`${`Enter User management Address`}`}
            /> */}
            {/* {team?.avatar !== "" ? (
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
            )} */}
            {/* {team?.avatar ? (
              <img
                src={team?.avatar}
                alt="takephoto"
                style={{ width: "492px", height: "275px" }}
              />
            ) : (
              <>
                {webcamActive ? (
                  <CameraComponent onCapture={handleCapture} />
                ) : (
                  <span style={{ color: "red" }}>
                    Please activate your web Camera
                  </span>
                )}
              </>
            )} */}
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
                    !view1super ? (
                      <button className="view" onClick={() => ViewingSuper()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "OVERVIEW_VIEW") &&
                      !view1super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing1notSuper()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "OVERVIEW_VIEW") &&
                      view1super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing1Super()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : !data?.some((item) => item === "OVERVIEW_VIEW") &&
                      view1super ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1notnotSuper()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => ViewingSuper()}>
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
                    !view2super ? (
                      <button className="view" onClick={() => Viewing2super()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_VIEW") &&
                      !view2super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing2notsuper()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_VIEW") &&
                      view2super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing2super()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_VIEW") &&
                      view2super ? (
                      <button
                        className="view"
                        onClick={() => NotViewing22notsuper()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button className="view" onClick={() => Viewing2super()}>
                        <Eye />
                        View
                      </button>
                    )}
                    {/* {data?.some((item) => item === "CORPORATE_EDIT") &&
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
                        <EditeyeNot />
                        Edit
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_EDIT") &&
                      view4 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing4()}
                      >
                        <EditeyeNot />
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
                    )} */}
                    {data?.some((item) => item === "CORPORATE_SINGLE") &&
                    !view3super ? (
                      <button className="view" onClick={() => Viewing3super()}>
                        <List />
                        List
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_SINGLE") &&
                      !view3super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing3notsuper()}
                      >
                        <ListNot />
                        List
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_SINGLE") &&
                      view3super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing3super()}
                      >
                        <ListNot />
                        List
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_SINGLE") &&
                      view4super ? (
                      <button
                        className="view"
                        onClick={() => NotViewing33notsuper()}
                      >
                        <List />
                        List
                      </button>
                    ) : (
                      <button
                        className="view"
                        onClick={() => NotViewing3super()}
                      >
                        <List />
                        List
                      </button>
                    )}
                    {data?.some((item) => item === "CORPORATE_CREATE") &&
                    !view5super ? (
                      <button className="view" onClick={() => Viewing5super()}>
                        <Create />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_CREATE") &&
                      !view5super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing5notsuper()}
                      >
                        <CreateNot />
                        Create
                      </button>
                    ) : data?.some((item) => item === "CORPORATE_CREATE") &&
                      view5super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing5super()}
                      >
                        <CreateNot />
                        Create
                      </button>
                    ) : !data?.some((item) => item === "CORPORATE_CREATE") &&
                      view5super ? (
                      <button
                        className="view"
                        onClick={() => NotViewing55notsuper()}
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
                    {/* {data?.some((item) => item === "CORPORATE_ACTIVATE") &&
                    !view6 ? (
                      <button className="view" onClick={() => Viewing6()}>
                        <Activate />
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
                        <Activate />
                        Activate
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing6()}>
                        <Activate />
                        Activate
                      </button>
                    )} */}
                    {/* {data?.some((item) => item === "CORPORATE_DEACTIVATE") &&
                    !view7 ? (
                      <button className="view" onClick={() => Viewing7()}>
                        <Deactivate />
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
                        <Deactivate />
                        Deactivate
                      </button>
                    ) : (
                      <button className="view" onClick={() => NotViewing7()}>
                        <Deactivate />
                        Deactivate
                      </button>
                    )} */}
                  </div>
                </div>
                <div className="rolename">
                  <span className="name">3. Subscriptions</span>
                  <div className="button-group">
                    {data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                    !view8super ? (
                      <button className="view" onClick={() => Viewing8super()}>
                        <Eye />
                        View
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      !view8super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing8notsuper()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      view8super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing8super()}
                      >
                        <EyeNot />
                        View
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_VIEW") &&
                      view8super ? (
                      <button
                        className="view"
                        onClick={() => NotViewing88notsuper()}
                      >
                        <Eye />
                        View
                      </button>
                    ) : (
                      <button
                        className="view"
                        onClick={() => NotViewing8super()}
                      >
                        <Eye />
                        View
                      </button>
                    )}
                    {/* {data?.some((item) => item === "SUBSCRIPTION_LIST") &&
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
                        <ListNot />
                        List
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_LIST") &&
                      view9 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing9()}
                      >
                        <ListNot />
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
                    )} */}
                    {data?.some((item) => item === "SUBSCRIPTION_CREATE") &&
                    !view10super ? (
                      <button className="view" onClick={() => Viewing10super()}>
                        <Create />
                        SubCreate
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_CREATE") &&
                      !view10super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing10notsuper()}
                      >
                        <CreateNot />
                        SubCreate
                      </button>
                    ) : data?.some((item) => item === "SUBSCRIPTION_CREATE") &&
                      view10super ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing10super()}
                      >
                        <CreateNot />
                        SubCreate
                      </button>
                    ) : !data?.some((item) => item === "SUBSCRIPTION_CREATE") &&
                      view10super ? (
                      <button
                        className="view"
                        onClick={() => NotViewing1010notsuper()}
                      >
                        <Create />
                        SubCreate
                      </button>
                    ) : (
                      <button
                        className="view"
                        onClick={() => NotViewing10super()}
                      >
                        <Create />
                        SubCreate
                      </button>
                    )}
                  </div>
                </div>
                {/* <div className="rolename">
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
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "PROJECT_VIEW") &&
                      view11 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing11()}
                      >
                        <EyeNot />
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
                        <EditeyeNot />
                        Edit
                      </button>
                    ) : data?.some((item) => item === "PROJECT_EDIT") &&
                      view12 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing12()}
                      >
                        <EditeyeNot />
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
                        <ListNot />
                        List
                      </button>
                    ) : data?.some((item) => item === "PROJECT_LIST") &&
                      view13 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing13()}
                      >
                        <ListNot />
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
                        <CreateNot />
                        Create
                      </button>
                    ) : data?.some((item) => item === "PROJECT_CREATE") &&
                      view14 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing14()}
                      >
                        <CreateNot />
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
                        <EyeNot />
                        View
                      </button>
                    ) : data?.some((item) => item === "REPORT_VIEW") &&
                      view15 ? (
                      <button
                        className="darkview"
                        onClick={() => NotViewing15()}
                      >
                        <EyeNot />
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
                </div> */}
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
              onClick={() => handleClick()}
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
        step={78}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        heading="Report"
      >
        <FlexUser>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "90px"
            }}
          ></div>
        </FlexUser>
      </AppModal>
      <AppModal
        step={79}
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
              Project Name Existed
            </div>
            <span>
              Are you sure you want to continue with the project name, Are
            </span>
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
              onClick={() => {
                setPendingRoleExist1();
                // setStep(0)
              }}
              large
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
          background: #ffffff;
          /* background: #5a63761a; */
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
              background: #ffffff;
              /* background: #5a63761a; */
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
