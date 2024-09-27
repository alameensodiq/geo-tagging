import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Goback } from "../../assets/goback.svg";
import { ReactComponent as Calendar } from "../../assets/calender.svg";
import { ReactComponent as Call } from "../../assets/call.svg";
import { ReactComponent as Contact } from "../../assets/contactedit.svg";
import { ReactComponent as Copy } from "../../assets/copypaste.svg";
import BusinessRepsTransactionCards from "../../Reusable/BusinessRepsTransactionCards";
import Tables from "../../bits/Tables";
import InputSearch from "../../bits/InputSearch";
import DatePicker from "react-datepicker";
import Donuts from "../../bits/Donuts";
import BarChart from "../../bits/BarChart";
import StackedBarchart from "../../bits/StarckedBarchart";
import Radial from "../../bits/Radial";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as EyeNot } from "../../assets/eyenot.svg";
import { ReactComponent as Editeye } from "../../assets/editeye.svg";
import { ReactComponent as EditeyeNot } from "../../assets/editeyenot.svg";
import { ReactComponent as List } from "../../assets/list.svg";
import { ReactComponent as ListNot } from "../../assets/listnot.svg";
import { ReactComponent as Create } from "../../assets/create.svg";
import { ReactComponent as CreateNot } from "../../assets/createnot.svg";
import { ReactComponent as ActivateDark } from "../../assets/activatedark.svg";
import { ReactComponent as DeactivateDark } from "../../assets/deactivatedark.svg";
import { ReactComponent as Activate } from "../../assets/activate.svg";
import { ReactComponent as Deactivate } from "../../assets/deactivate.svg";
import { useDispatch, useSelector } from "react-redux";
import { CorporateBusinessRepDetails } from "../../Store/Apis/CorporateBusinessRepDetails";
import Moment from "react-moment";
import SuperAdminNavbar from "./SuperAdminNavbar";
import { ModalButton } from "../../bits/ModalButton";
import AppUserModal from "../../Modal/AppUserModal";
import { LocationModalButton } from "../../bits/LocationModalButton";
import { Permissionetails } from "../../Store/Apis/Permissiondetails";
import { AdminEditteam } from "../../Store/Apis/AdminEditteam";

const SuperAdminUserDetails = ({ title }) => {
  const navigate = useNavigate();
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
  const [step, setStep] = useState(0);
  const [log, setLog] = useState(false);
  const [reload, setReload] = useState(false);
  const [team, setTeam] = useState({
    userId: "",
    permissions: []
  });

  const dispatch = useDispatch();
  const datePickerRef = useRef(null);
  const id = window?.location?.pathname.split("/")[3];

  console.log(id);

  const { admineditteam, authenticatingadmineditteam } = useSelector(
    (state) => state?.admineditteam
  );

  const { permissiondetails, authenticatingpermissiondetails } = useSelector(
    (state) => state?.permissiondetails
  );

  console.log(permissiondetails);

  // Set userId and dispatch action to fetch superuser details
  useEffect(() => {
    if (id) {
      setTeam((team) => ({
        ...team,
        userId: id
      }));
      dispatch(Permissionetails({ id }));
    }
  }, [id, dispatch, reload]);

  // Update permissions in team state when permissiondetails or reload changes
  useEffect(() => {
    if (reload) {
      // dispatch(permissiondetails({ id }));
      setReload(false);
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
      setView1super(false);
      setView2super(false);
      setView3super(false);
      setView4super(false);
      setView5super(false);
      setView8super(false);
      setView10super(false);
    }
    if (admineditteam?.status && log && !authenticatingadmineditteam) {
      setStep(52);
    }
    console.log("Superuser permissions:", permissiondetails?.data?.permissions);
    if (permissiondetails?.data?.permissions) {
      const availableRights = permissiondetails.data.permissions.map(
        (item) => item.right
      );
      console.log("Available Rights:", availableRights);
      setTeam((prevTeam) => ({
        ...prevTeam,
        permissions: availableRights
      }));
    }
  }, [
    reload,
    id,
    log,
    authenticatingadmineditteam,
    admineditteam?.status,
    dispatch,
    permissiondetails?.data?.permissions
  ]);

  // useEffect(() => {
  //   if (permissiondetails?.data?.permissions) {
  //     const availableRights = permissiondetails.data.permissions.map(
  //       (item) => item.right
  //     );
  //     setTeam((prevTeam) => ({
  //       ...prevTeam,
  //       permissions: availableRights
  //     }));
  //   }

  //   console.log(team.permissions);
  // }, [permissiondetails?.data?.permissions]);

  console.log(permissiondetails?.data?.permissions);
  console.log(team);
  console.log(view1super);

  const EditingApi = () => {
    setLog(true);
    const { userId, permissions } = team;
    console.log(permissions);
    // setTeam((team) => ({
    //   ...team,
    //   permissions: permissions
    // }));
    dispatch(AdminEditteam({ userId, permissions }));
  };

  console.log(log);

  // if (admineditteam && log && !authenticatingadmineditteam) {
  //   setStep(52);
  // }

  const ViewingSuper = () => {
    setView1super(true);
    console.log("1");
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "OVERVIEW_VIEW"
      )
    }));
  };

  const NotViewing1Super = () => {
    setView1super(false);
    console.log("2");
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "OVERVIEW_VIEW"]
    }));
  };

  const NotViewing1notSuper = () => {
    setView1super(true);
    console.log("3");
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: [...(prevTeam.permissions || []), "OVERVIEW_VIEW"]
    }));
  };

  const NotViewing1notnotSuper = () => {
    setView1super(false);
    console.log("4");
    setTeam((prevTeam) => ({
      ...prevTeam,
      permissions: (prevTeam.permissions || []).filter(
        (permission) => permission !== "OVERVIEW_VIEW"
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

  console.log(team);

  return (
    <Flex>
      <SuperAdminNavbar title={title} />
      <AppUserModal
        setLog={setLog}
        setStep={setStep}
        step={step}
        setReload={setReload}
      />
      <div className="maincontainer">
        <div className="firstdiv">
          <div className="backbutton">
            <Goback
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
            <span className="name">
              {permissiondetails?.data?.lastName}{" "}
              {permissiondetails?.data?.firstName}
            </span>
          </div>
        </div>
        <div className="top-div">
          <div className="up">
            <div className="activeinfo">
              <div className="activedetails">
                {/* <span className="image"></span> */}
                <img
                  className="image"
                  src={permissiondetails?.data?.avatar}
                  alt="avatar"
                />
                <span className="name">
                  {permissiondetails?.data?.lastName}{" "}
                  {permissiondetails?.data?.firstName}
                </span>
                {/* <span className="assigned">
                  <span
                    style={{
                      color: "#5A6376",
                      fontWeight: "400",
                      fontSize: "14px"
                    }}
                  >
                    RC:
                  </span>
                  102233
                </span> */}
                <span className="date">
                  <span
                    style={{
                      color: "#5A6376",
                      fontWeight: "400",
                      fontSize: "14px"
                    }}
                  >
                    Date Created:
                  </span>{" "}
                  <Moment format="DD-MM-YYYY">
                    {permissiondetails?.data?.dateJoined}
                  </Moment>
                </span>
              </div>
              {/* <ModalButton
                onClick={() => setStep(26)}
                remove
                background
                color
                title={"Deactivate"}
              /> */}
            </div>
            <div className="contactinfo">
              <div className="info">
                <div className="first">
                  <div className="phone">
                    <span className="mobile">Mobile Number</span>
                    <span className="number">
                      {permissiondetails?.data?.phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="copy">
                  <Contact />
                  <Copy />
                </div>
              </div>
              <div className="info">
                <div className="first">
                  <div className="phone">
                    <span className="mobile">Email Address</span>
                    <span className="number">
                      {permissiondetails?.data?.email}
                    </span>
                  </div>
                </div>
                <div className="copy">
                  <Contact />
                  <Copy />
                </div>
              </div>
              <div className="info">
                <div className="first">
                  <div className="phone">
                    <span className="mobile">Address</span>
                    <span className="number">
                      {permissiondetails?.data?.address}
                    </span>
                  </div>
                </div>
                <div className="copy">
                  <Contact />
                  {/* <Copy /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="permissioncontainer">
            <div className="details">
              <span className="header">Details</span>
              <div className="content">
                <span>
                  Lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem
                </span>
                <span>
                  ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium
                </span>
              </div>
            </div>
            <div className="activities">
              <div className="activity-permission">
                <span className="activitynames">Activity</span>
                <span className="permit">Permission</span>
              </div>
              <div className="rolename">
                <span className="name">1.Dashboard</span>
                <div className="button-group">
                  {permissiondetails?.data?.permissions?.some(
                    (item) => item?.right === "OVERVIEW_VIEW"
                  ) && !view1super ? (
                    <button className="view" onClick={() => ViewingSuper()}>
                      <Eye />
                      View
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "OVERVIEW_VIEW"
                    ) && !view1super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing1notSuper()}
                    >
                      <EyeNot />
                      View
                    </button>
                  ) : permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "OVERVIEW_VIEW"
                    ) && view1super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing1Super()}
                    >
                      <EyeNot />
                      View
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "OVERVIEW_VIEW"
                    ) && view1super ? (
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
                  {permissiondetails?.data?.permissions?.some(
                    (item) => item?.right === "CORPORATE_VIEW"
                  ) && !view2super ? (
                    <button className="view" onClick={() => Viewing2super()}>
                      <Eye />
                      View
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_VIEW"
                    ) && !view2super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing2notsuper()}
                    >
                      <EyeNot />
                      View
                    </button>
                  ) : permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_VIEW"
                    ) && view2super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing2super()}
                    >
                      <EyeNot />
                      View
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_VIEW"
                    ) && view2super ? (
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
                  {permissiondetails?.data?.permissions?.some(
                    (item) => item?.right === "CORPORATE_SINGLE"
                  ) && !view3super ? (
                    <button className="view" onClick={() => Viewing3super()}>
                      <List />
                      List
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_SINGLE"
                    ) && !view3super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing3notsuper()}
                    >
                      <ListNot />
                      List
                    </button>
                  ) : permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_SINGLE"
                    ) && view3super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing3super()}
                    >
                      <ListNot />
                      List
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_SINGLE"
                    ) && view4super ? (
                    <button
                      className="view"
                      onClick={() => NotViewing33notsuper()}
                    >
                      <List />
                      List
                    </button>
                  ) : (
                    <button className="view" onClick={() => NotViewing3super()}>
                      <List />
                      List
                    </button>
                  )}
                  {permissiondetails?.data?.permissions?.some(
                    (item) => item?.right === "CORPORATE_CREATE"
                  ) && !view5super ? (
                    <button className="view" onClick={() => Viewing5super()}>
                      <Create />
                      Create
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_CREATE"
                    ) && !view5super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing5notsuper()}
                    >
                      <CreateNot />
                      Create
                    </button>
                  ) : permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_CREATE"
                    ) && view5super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing5super()}
                    >
                      <CreateNot />
                      Create
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "CORPORATE_CREATE"
                    ) && view5super ? (
                    <button
                      className="view"
                      onClick={() => NotViewing55notsuper()}
                    >
                      <Create />
                      Create
                    </button>
                  ) : (
                    <button className="view" onClick={() => NotViewing5super()}>
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
                  {permissiondetails?.data?.permissions?.some(
                    (item) => item?.right === "SUBSCRIPTION_VIEW"
                  ) && !view8super ? (
                    <button className="view" onClick={() => Viewing8super()}>
                      <Eye />
                      View
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "SUBSCRIPTION_VIEW"
                    ) && !view8super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing8notsuper()}
                    >
                      <EyeNot />
                      View
                    </button>
                  ) : permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "SUBSCRIPTION_VIEW"
                    ) && view8super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing8super()}
                    >
                      <EyeNot />
                      View
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "SUBSCRIPTION_VIEW"
                    ) && view8super ? (
                    <button
                      className="view"
                      onClick={() => NotViewing88notsuper()}
                    >
                      <Eye />
                      View
                    </button>
                  ) : (
                    <button className="view" onClick={() => NotViewing8super()}>
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
                  {permissiondetails?.data?.permissions?.some(
                    (item) => item?.right === "SUBSCRIPTION_CREATE"
                  ) && !view10super ? (
                    <button className="view" onClick={() => Viewing10super()}>
                      <Create />
                      SubCreate
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "SUBSCRIPTION_CREATE"
                    ) && !view10super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing10notsuper()}
                    >
                      <CreateNot />
                      SubCreate
                    </button>
                  ) : permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "SUBSCRIPTION_CREATE"
                    ) && view10super ? (
                    <button
                      className="darkview"
                      onClick={() => NotViewing10super()}
                    >
                      <CreateNot />
                      SubCreate
                    </button>
                  ) : !permissiondetails?.data?.permissions?.some(
                      (item) => item?.right === "SUBSCRIPTION_CREATE"
                    ) && view10super ? (
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

              <div className="lastdiv">
                <LocationModalButton
                  onClick={() => EditingApi()}
                  background
                  color
                  title={
                    authenticatingadmineditteam ? "Editing" : "Edit Permissions"
                  }
                />
              </div>
            </div>
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
    padding-inline: 45px;
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
    }
    .top-div {
      border: 1px solid #ebebeb;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .up {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #ebebeb;
        .activeinfo {
          border-right: 1px solid #ebebeb;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-block: 20px;
          gap: 12px;
          width: 50%;
          .activediv {
            display: flex;
            flex-direction: row;
            justify-content: center;
            .active {
              color: #45b202;
              font-size: 14px;
            }
          }
          .activedetails {
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            align-items: center;
            .image {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: #000000;
            }
            .name {
              color: #1e1b39;
              font-size: 14px;
            }
            .assigned {
              font-size: 12px;
              color: #667085;
            }
            .date {
              font-size: 12px;
              color: #667085;
            }
          }
        }
        .contactinfo {
          display: flex;
          flex-direction: column;
          width: 50%;
          padding-block: 20px;
          align-items: flex-start;
          justify-content: center;
          padding-left: 50px;
          gap: 25px;
          .contact {
            color: #1e1b39;
            font-size: 15px;
            font-weight: bold;
          }
          .info {
            display: flex;
            flex-direction: row;
            gap: 70px;
            width: 100%;
            .first {
              display: flex;
              flex-direction: row;
              width: 50%;
              .phone {
                display: flex;
                flex-direction: column;
                gap: 5px;
                .mobile {
                  color: #5a6376;
                  font-size: 13px;
                  font-weight: 400;
                }
                .number {
                  color: #1e1b39;
                  font-size: 15px;
                  font-weight: 500;
                }
              }
            }
            .copy {
              display: flex;
              flex-direction: row;
              gap: 10px;
              justify-content: center;
              align-items: center;
            }
          }
        }
      }
      .down {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        .table {
          padding-block: 30px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          .searchContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-inline: 10px;
            .rate {
              font-size: 12px;
              color: #1e1b39;
            }
            .rating {
              color: #5a6376;
              font-size: 15px;
              display: flex;
              flex-direction: row;
              gap: 5px;
              .amount {
                color: #7c65e0;
              }
            }
            .date-search {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .main {
                position: relative;
                .input {
                  width: 103px;
                  height: 30px;
                  padding: 12px 1px 12px 30px;
                  border-radius: 5px;
                  border: 1px;
                  color: #8d9196;
                  outline: none;
                  font-size: 10px;
                  cursor: pointer;
                  border: 1px solid #e2e8f0;
                }
                .calendar {
                  position: absolute;
                  left: 10px;
                  top: 8px;
                }
              }
            }
          }
          .top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 15px;
            align-items: center;
            border-bottom: 1px solid #ebebeb;
            .start {
              display: flex;
              flex-direction: column;
              gap: 1px;
              .numbers {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                .name {
                  color: #212529;
                  font-size: 14px;
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
                font-size: 10px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
                color: #8d9196;
              }
            }
            .date-search {
              display: flex;
              flex-direction: row;
              gap: 20px;
              .main {
                position: relative;
                .input {
                  width: 103px;
                  height: 30px;
                  padding: 12px 1px 12px 30px;
                  border-radius: 5px;
                  border: 1px;
                  color: #8d9196;
                  outline: none;
                  font-size: 10px;
                  cursor: pointer;
                  border: 1px solid #e2e8f0;
                }
                .calendar {
                  position: absolute;
                  left: 10px;
                  top: 8px;
                }
              }
            }
          }
          .label {
            display: flex;
            flex-direction: row;
            padding-inline: 20px;
            gap: 10px;
            .punctual-div {
              display: flex;
              flex-direction: row;
              gap: 5px;
              align-items: center;
              .punctual {
                width: 5px;
                height: 5px;
                background: #eaecf0;
              }
              .rate {
                color: #000000;
                font-size: 12px;
              }
            }
            .late-div {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 5px;
              .late {
                width: 5px;
                height: 5px;
                background: #28385c;
              }
              .rate {
                color: #000000;
                font-size: 12px;
              }
            }
          }
          .donuts {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .label {
              display: flex;
              flex-direction: column;
              gap: 10px;
              .punctual-div {
                display: flex;
                flex-direction: row;
                gap: 5px;
                align-items: center;
                .punctual {
                  width: 50px;
                  height: 50px;
                  background: #28385c;
                }
                .rate {
                  color: #5a6376;
                  font-size: 20px;
                }
              }
              .late-div {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                .late {
                  width: 50px;
                  height: 50px;
                  background: #f3827c;
                }
                .rate {
                  color: #5a6376;
                  font-size: 20px;
                }
              }
            }
          }
          .dater-search {
            display: flex;
            flex-direction: row;
            /* width: 100%; */
            height: 35px;
            padding-inline: 20px;
            justify-content: space-between;
            width: 100%;
            .project {
              display: flex;
              flex-direction: row;
              width: 100%;
              .title {
                color: #212529;
                font-weight: 600;
                font-size: 16px;
              }
            }
            .inputsearch {
              display: flex;
              width: 100%;
              flex-direction: row;
              justify-content: flex-end;
              .search {
                width: 100%;
              }
            }
          }
        }
      }
    }
    .statuses {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 5px;
      border-bottom: 1.02px solid #dbdade;
      .status {
        display: flex;
        flex-direction: row;
        gap: 7px;
        font-size: 12px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #8d9196;
        cursor: pointer;
        width: 130px;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
      }
      .active {
        display: flex;
        flex-direction: row;
        gap: 7px;
        font-size: 12px;
        font-weight: 600;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        color: #1a87d7;
        border-bottom: 1.02px solid #1a87d7;
        cursor: pointer;
        width: 130px;
        justify-content: center;
        align-items: center;
        padding-left: 30px;
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
      .searchContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-inline: 10px;
        .rate {
          font-size: 12px;
          color: #1e1b39;
        }
        .rating {
          color: #5a6376;
          font-size: 15px;
          display: flex;
          flex-direction: row;
          gap: 5px;
          .amount {
            color: #7c65e0;
            font-weight: 600;
          }
        }
        .date-search {
          display: flex;
          flex-direction: row;
          gap: 20px;
          .main {
            position: relative;
            .input {
              width: 103px;
              height: 30px;
              padding: 12px 1px 12px 30px;
              border-radius: 5px;
              border: 1px;
              color: #8d9196;
              outline: none;
              font-size: 10px;
              cursor: pointer;
              border: 1px solid #e2e8f0;
            }
            .calendar {
              position: absolute;
              left: 10px;
              top: 8px;
            }
          }
        }
      }
      .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        align-items: center;
        border-bottom: 1px solid #ebebeb;
        .start {
          display: flex;
          flex-direction: column;
          gap: 1px;
          .numbers {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            .name {
              color: #212529;
              font-size: 14px;
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
            font-size: 10px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            color: #8d9196;
          }
        }
        .date-search {
          display: flex;
          flex-direction: row;
          gap: 20px;
          .main {
            position: relative;
            .input {
              width: 103px;
              height: 30px;
              padding: 12px 1px 12px 30px;
              border-radius: 5px;
              border: 1px;
              color: #8d9196;
              outline: none;
              font-size: 10px;
              cursor: pointer;
              border: 1px solid #e2e8f0;
            }
            .calendar {
              position: absolute;
              left: 10px;
              top: 8px;
            }
          }
        }
      }
      .label {
        display: flex;
        flex-direction: row;
        padding-inline: 20px;
        gap: 10px;
        .punctual-div {
          display: flex;
          flex-direction: row;
          gap: 5px;
          align-items: center;
          .punctual {
            width: 5px;
            height: 5px;
            background: #eaecf0;
          }
          .rate {
            color: #000000;
            font-size: 12px;
          }
        }
        .late-div {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          .late {
            width: 5px;
            height: 5px;
            background: #28385c;
          }
          .rate {
            color: #000000;
            font-size: 12px;
          }
        }
      }
      .donuts {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .label {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .punctual-div {
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;
            .punctual {
              width: 50px;
              height: 50px;
              background: #28385c;
            }
            .rate {
              color: #5a6376;
              font-size: 20px;
            }
          }
          .late-div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            .late {
              width: 50px;
              height: 50px;
              background: #f3827c;
            }
            .rate {
              color: #5a6376;
              font-size: 20px;
            }
          }
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
      .permissioncontainer {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .roles {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          padding-inline: 20px;
          .status {
            display: flex;
            flex-direction: row;
            gap: 7px;
            height: 30px;
            font-size: 12px;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0px;
            text-align: left;
            color: #8d9196;
            cursor: pointer;
            width: 160px;
            justify-content: center;
            align-items: center;
          }
          .active {
            display: flex;
            flex-direction: row;
            height: 30px;
            gap: 7px;
            font-size: 12px;
            font-weight: 500;
            line-height: 23px;
            letter-spacing: 0px;
            justify-content: center;
            color: #1a87d7;
            background: rgba(26, 135, 215, 0.12);
            border-radius: 8px;
            cursor: pointer;
            width: 160px;
            justify-content: center;
            align-items: center;
          }
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-inline: 20px;
          .header {
            font-size: 14px;
            color: #0a0a0a;
            font-weight: 500;
          }
          .content {
            font-size: 12px;
            color: #5a6376;
          }
        }
        .activities {
          padding-inline: 20px;
          display: flex;
          flex-direction: column;
          width: 100%;
          .activity-permission {
            display: flex;
            flex-direction: row;
            gap: 200px;
            color: #5a6376;
            font-size: 14px;
            font-weight: 500;
            .activitynames {
              width: 12%;
              @media screen and (max-width: 1200px) {
                display: none;
              }
            }
            .permit {
              @media screen {
                width: 100%;
              }
            }
          }
          .rolename {
            display: flex;
            flex-direction: row;
            gap: 170px;
            border-bottom: 1px solid rgba(235, 235, 235, 1);
            align-items: center;
            height: 90px;
            width: 100%;
            @media screen and (max-width: 1200px) {
              height: 190px;
              display: flex;
              padding-block: 30px;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 40px;
              width: 100%;
              .name {
                display: flex;
                flex-direction: row;
                color: rgba(0, 0, 0, 1);
                font-size: 10px;
                width: 100%;
                font-weight: 500;
                height: 20%;
              }
              .button-group {
                display: flex;
                flex-direction: row;
                gap: 15px;
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
                  width: 80px;
                  font-size: 10px;
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
                  width: 80px;
                  font-size: 10px;
                  align-items: center;
                  background: #ffffff;
                  /* background: #5a63761a; */
                }
              }
            }
            .name {
              color: rgba(0, 0, 0, 1);
              font-size: 16px;
              width: 15%;
              font-weight: 500;
            }
            .button-group {
              display: grid;
              /* flex-direction: row; */
              grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
              gap: 15px;
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
                width: 80px;
                font-size: 10px;
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
                width: 80px;
                font-size: 10px;
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
          .lastdiv {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            gap: 20px;
            padding-top: 20px;
          }
        }
      }
    }
  }
`;

export default SuperAdminUserDetails;
