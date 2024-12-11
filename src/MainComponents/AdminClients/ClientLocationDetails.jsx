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
import { ReactComponent as Color } from "../../assets/colormark.svg";
import { ReactComponent as UnColor } from "../../assets/uncolormark.svg";
import { ReactComponent as Danger } from "../../assets/danger.svg";
import { LocationModalButton } from "../../bits/LocationModalButton";
import { AddProject } from "../../Store/Apis/AddProject";
import toast from "react-hot-toast";
import { AssignedRep } from "../../Store/Apis/AssignedRep";
import { Payment } from "../../Store/Apis/Payment";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType
} from "react-geocode";
import { useLocation, useParams } from "react-router-dom";
import { CompletePayment } from "../../Store/Apis/CompletePayment";
import { businessprojects } from "../../Routes";
import { EditProject } from "../../Store/Apis/EditProject";
import { AddLocationActiveProject } from "../../Store/Apis/AddLocationActiveProject";
import { AddRepActiveProject } from "../../Store/Apis/AddRepActiveProject";
import { AddActiveRep } from "../../Store/Apis/AddActiveRep";
import { ProjectLocations } from "../../Store/Apis/ProjectLocations";
import { RenewCompletePayment } from "../../Store/Apis/RenewCompletePayment";

const ClientLocationDetails = ({ title }) => {
  setDefaults({
    key: "AIzaSyDJUt3ze4mJlNLb-4pDHRG0rWSo5bp-Bzs", // Your API key here.
    language: "en", // Default language for responses.
    region: "es" // Default region for responses.
  });
  const [amounts, setAmounts] = useState("");
  const [numbers, setNumbers] = useState("");
  const [updateIndex, setUpdateIndex] = useState("");
  const [addition, setAddition] = useState(false);
  const [step, setStep] = useState(0);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [status, setStatus] = useState("ACTIVE");
  const [activating1, SetActivating1] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [locker, SetLocker] = useState(false);
  const [pay, setPay] = useState(false);
  const [reload, setReload] = useState(false);
  const [onload, setOnload] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [bustate, setbustate] = useState(false);
  const [bustate11, setbustate11] = useState(false);
  const [bustate12, setbustate12] = useState(false);
  const [bustate79, setbustate79] = useState(false);
  const [freereload, setfreereload] = useState(false);
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState("activate");
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formatDate = (input) => {
    let date;
    if (typeof input === "string") {
      date = new Date(input);
    } else if (input instanceof Date) {
      date = input;
    } else {
      throw new Error("Invalid date input");
    }

    // Ensure date is valid
    if (isNaN(date)) {
      throw new Error("Invalid date");
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // Example usage
  try {
    const formattedDate = formatDate("20 September, 2024");
    console.log(formattedDate); // Output: "2024-09-20"
  } catch (error) {
    console.error(error.message);
  }

  const { location } = useParams(); // Get the location from params
  const search = useLocation().search; // Get the search string
  const params = new URLSearchParams(search);
  //   const status = params.get("status"); // Get the status query parameter
  const tx_ref = params.get("tx_ref"); // Get the tx_ref query parameter
  const transaction_id = params.get("transaction_id");

  const [rep, setRep] = useState([
    {
      user_id: "",
      location_id: ""
    }
  ]);

  const [repreal, setRepreal] = useState([
    {
      user_id: "",
      location_id: ""
    }
  ]);

  const [choosingaddress, setchoosingaddress] = useState([
    {
      user_id: "",
      location_id: "",
      address: ""
    }
  ]);

  const [assign, setAssign] = useState(() => {
    const today = new Date();
    const startDate = formatDate(today);
    const stopDate = new Date(today);
    stopDate.setMonth(stopDate.getMonth() + 1);
    if (stopDate.getDate() < today.getDate()) {
      stopDate.setDate(0);
    }

    return {
      name: "",
      description: "",
      startDate: startDate,
      stopDate: formatDate(stopDate),
      startTime: "",
      stopTime: "",
      // forceCreate: false,
      isHourlyStamp: false,
      minutesToAdd: "",
      existingProjectId: null,
      duration: 60,
      dailyPay: 0,
      locations: [
        // {
        //   address: "",
        //   longitude: "-122.084",
        //   latitude: "37.4219999",
        //   type: "Office",
        //   place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
        // }
        {
          address: "",
          longitude: "",
          latitude: "",
          type: "Office",
          place_id: ""
        }
      ],
      weekdays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      }
    };
  });

  const [assigncopy, setAssigncopy] = useState(() => {
    const today = new Date();
    const startDate = formatDate(today);
    const stopDate = new Date(today);
    stopDate.setMonth(stopDate.getMonth() + 1);
    if (stopDate.getDate() < today.getDate()) {
      stopDate.setDate(0);
    }

    return {
      name: "",
      description: "",
      startDate: startDate,
      stopDate: formatDate(stopDate),
      startTime: "",
      stopTime: "",
      isHourlyStamp: false,
      minutesToAdd: "",
      existingProjectId: null,
      duration: 60,
      // forceCreate: false,
      dailyPay: 0,
      locations: [
        // {
        //   address: "",
        //   longitude: "-122.084",
        //   latitude: "37.4219999",
        //   type: "Office",
        //   place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
        // }
        {
          address: "",
          longitude: "",
          latitude: "",
          type: "Office",
          place_id: ""
        }
      ],
      weekdays: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      }
    };
  });
  // {
  //   address: "123 Main St",
  //   longitude: "-122.084",
  //   latitude: "37.4219999",
  //   type: "Office",
  //   place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
  // }

  const { addproject, authenticatingaddproject } = useSelector(
    (state) => state.addproject
  );
  console.log(addproject);

  const { addactiverep, authenticatingaddactiverep } = useSelector(
    (state) => state.addactiverep
  );
  console.log(addactiverep);

  const { addlocationactiveproject, authenticatingaddlocationactiveproject } =
    useSelector((state) => state.addlocationactiveproject);
  console.log(addlocationactiveproject);

  const { assigned, authenticatingassigned } = useSelector(
    (state) => state.assigned
  );

  console.log(assigned);

  const { addrepactiveproject, authenticatingaddrepactiveproject } =
    useSelector((state) => state.addrepactiveproject);

  console.log(addrepactiveproject);

  const { projectlocations, authenticatingprojectlocations } = useSelector(
    (state) => state.projectlocations
  );

  console.log(projectlocations);
  // console.log(
  //   projectlocations?.data?.map((locationItem) => (
  //     <>
  //       <option key={locationItem?.id} value={String(locationItem?.id)}>
  //         {locationItem?.address}
  //       </option>
  //     </>
  //   ))
  // );

  const { payment, authenticatingpayment } = useSelector(
    (state) => state.payment
  );

  console.log(payment?.status);

  const { renewcompletepayment, authenticatingrenewcompletepayment } =
    useSelector((state) => state.renewcompletepayment);

  console.log(renewcompletepayment?.status);

  // useEffect(() => {
  //   if (addproject?.data?.locations?.length > 0) {
  //     const defaultLocationId = addproject.data.locations[0].id;
  //     setRep((prev) => [
  //       {
  //         ...prev[0],
  //         location_id: defaultLocationId
  //       }
  //     ]);
  //   }
  // }, [addproject?.data?.locations]);

  const { businessrep, authenticatingbusinessrep } = useSelector(
    (state) => state.businessrep
  );

  console.log(businessrep);

  const activate = businessrep?.data?.data?.filter(
    (item) => item?.isOnActiveProject === false
  );

  useEffect(() => {
    dispatch(CorporateBusinessRep({ searcher, statuses: false }));
  }, []);

  const editprojectId = sessionStorage.getItem("editprojectId");
  console.log(editprojectId);

  const activeprojectId = sessionStorage.getItem("activeprojectId");
  console.log(activeprojectId);

  const addactivebusinesses = sessionStorage.getItem("addactivebusinesses");
  console.log(addactivebusinesses);

  useEffect(() => {
    if (editprojectId) {
      dispatch(EditProject({ editprojectId }));
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
    }
    if (tx_ref) {
      const renewId = sessionStorage.getItem("renewid");
      if (renewId) {
        dispatch(RenewCompletePayment({ ref: tx_ref }));
      } else {
        dispatch(CompletePayment({ ref: tx_ref }));
      }
      setPay(true);
    }
    if (activeprojectId) {
      // dispatch(EditProject({ editprojectId }));
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
    }
    if (addactivebusinesses) {
      // dispatch(EditProject({ editprojectId }));
      SetActivate(false);
      SetPend(false);
      SetActivating1(true);
      dispatch(ProjectLocations());
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
    }
  }, [tx_ref, editprojectId, activeprojectId, addactivebusinesses]);

  const { complete, authenticatingcomplete } = useSelector(
    (state) => state.completepayment
  );

  // sessionStorage.setItem("addactivebusinesses", id);

  const { editproject, authenticatingeditproject } = useSelector(
    (state) => state.editproject
  );

  console.log(editproject);

  useEffect(() => {
    if (complete?.status && !authenticatingcomplete && pay) {
      setStep(72);
      setPay(false);
    }
    if (
      renewcompletepayment?.status &&
      !authenticatingrenewcompletepayment &&
      pay
    ) {
      setStep(72);
      setPay(false);
    }
    if (editproject && editproject?.status) {
      setAssign(() => {
        const today = new Date();
        const startDate = formatDate(today);
        const stopDate = new Date(today);
        stopDate.setMonth(stopDate.getMonth() + 1);
        if (stopDate.getDate() < today.getDate()) {
          stopDate.setDate(0);
        }

        return {
          name: editproject?.data?.name || "",
          description: editproject?.data?.description || "",
          startDate: formatDate(editproject?.data?.startDate),
          stopDate: formatDate(editproject?.data?.stopDate),
          startTime: editproject?.data?.startTime,
          stopTime: editproject?.data?.stopTime,
          // forceCreate: false,
          existingProjectId: null,
          isHourlyStamp: editproject?.data?.isActive || false,
          minutesToAdd: editproject?.data?.gracePeriod || null,
          duration: 60,
          dailyPay: editproject?.data?.dailyPay?.["AMOUNT"] || null,
          locations: [
            {
              address: "",
              longitude: "-122.084",
              latitude: "37.4219999",
              type: "Office",
              place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
            }
          ],
          weekdays: editproject?.data?.weekdays || {
            // Update weekdays
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
          }
        };
      });
      setAssigncopy(() => {
        const today = new Date();
        const startDate = formatDate(today);
        const stopDate = new Date(today);
        stopDate.setMonth(stopDate.getMonth() + 1);
        if (stopDate.getDate() < today.getDate()) {
          stopDate.setDate(0);
        }

        return {
          name: editproject?.data?.name || "",
          description: editproject?.data?.description || "",
          startDate: formatDate(editproject?.data?.startDate),
          stopDate: formatDate(editproject?.data?.stopDate),
          startTime: editproject?.data?.startTime,
          stopTime: editproject?.data?.stopTime,
          forceCreate: false,
          existingProjectId: null,
          isHourlyStamp: editproject?.data?.isActive || false,
          minutesToAdd: editproject?.data?.gracePeriod || null,
          duration: 60,
          dailyPay: editproject?.data?.dailyPay?.["AMOUNT"] || null,
          locations: [
            {
              address: "",
              longitude: "-122.084",
              latitude: "37.4219999",
              type: "Office",
              place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
            }
          ],
          weekdays: editproject?.data?.weekdays || {
            // Update weekdays
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
          }
        };
      });
    }
  }, [
    complete?.status,
    authenticatingcomplete,
    pay,
    editproject,
    editproject?.status
  ]);

  useEffect(() => {
    // dispatch(CorporateBusinessRep())
    if (reload) {
      // dispatch(CorporateBusinessRep())
      if (editprojectId) {
        dispatch(EditProject({ editprojectId }));
        setReload(false);
        SetActivating1(false);
        SetPend(true);
        SetActivate(false);
        setbustate11(false);
        setbustate12(false);
        setRep([
          {
            user_id: "",
            location_id: ""
          }
        ]);
      } else {
        setReload(false);
        SetActivating1(false);
        SetPend(false);
        SetActivate(true);
        setbustate11(false);
        setbustate12(false);
        setRep([
          {
            user_id: "",
            location_id: ""
          }
        ]);
      }
      if (editproject && editproject?.status) {
        setAssign(() => {
          const today = new Date();
          const startDate = formatDate(today);
          const stopDate = new Date(today);
          stopDate.setMonth(stopDate.getMonth() + 1);
          if (stopDate.getDate() < today.getDate()) {
            stopDate.setDate(0);
          }

          return {
            name: editproject?.data?.name || "",
            description: editproject?.data?.description || "",
            startDate: editproject?.data?.startDate,
            stopDate: editproject?.data?.stopDate,
            startTime: editproject?.data?.startTime,
            // forceCreate: false,
            existingProjectId: null,
            stopTime: editproject?.data?.stopTime,
            isHourlyStamp: editproject?.data?.isActive || false,
            minutesToAdd: editproject?.data?.gracePeriod || null,
            duration: 60,
            dailyPay: editproject?.data?.dailyPay?.["AMOUNT"] || null,
            locations: [
              {
                address: "",
                longitude: "-122.084",
                latitude: "37.4219999",
                type: "Office",
                place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
              }
            ],
            weekdays: editproject?.data?.weekdays || {
              // Update weekdays
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false
            }
          };
        });
        setAssigncopy(() => {
          const today = new Date();
          const startDate = formatDate(today);
          const stopDate = new Date(today);
          stopDate.setMonth(stopDate.getMonth() + 1);
          if (stopDate.getDate() < today.getDate()) {
            stopDate.setDate(0);
          }

          return {
            name: editproject?.data?.name || "",
            description: editproject?.data?.description || "",
            startDate: editproject?.data?.startDate,
            stopDate: editproject?.data?.stopDate,
            startTime: editproject?.data?.startTime,
            stopTime: editproject?.data?.stopTime,
            // forceCreate: false,
            existingProjectId: null,
            isHourlyStamp: editproject?.data?.isActive || false,
            minutesToAdd: editproject?.data?.gracePeriod || null,
            duration: 60,
            dailyPay: editproject?.data?.dailyPay?.["AMOUNT"] || null,
            locations: [
              {
                address: "",
                longitude: "-122.084",
                latitude: "37.4219999",
                type: "Office",
                place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
              }
            ],
            weekdays: editproject?.data?.weekdays || {
              // Update weekdays
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false
            }
          };
        });
      } else {
        setAssign(() => {
          const today = new Date();
          const startDate = formatDate(today);
          const stopDate = new Date(today);
          stopDate.setMonth(stopDate.getMonth() + 1);
          if (stopDate.getDate() < today.getDate()) {
            stopDate.setDate(0);
          }

          return {
            name: "",
            description: "",
            startDate: startDate,
            stopDate: formatDate(stopDate),
            startTime: "",
            stopTime: "",
            existingProjectId: null,
            isHourlyStamp: false,
            minutesToAdd: "",
            duration: 60,
            dailyPay: null,
            locations: [
              {
                address: "",
                longitude: "-122.084",
                latitude: "37.4219999",
                type: "Office",
                place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
              }
            ],
            weekdays: {
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false
            }
          };
        });
        setAssigncopy(() => {
          const today = new Date();
          const startDate = formatDate(today);
          const stopDate = new Date(today);
          stopDate.setMonth(stopDate.getMonth() + 1);
          if (stopDate.getDate() < today.getDate()) {
            stopDate.setDate(0);
          }

          return {
            name: "",
            description: "",
            startDate: startDate,
            stopDate: formatDate(stopDate),
            startTime: "",
            stopTime: "",
            existingProjectId: null,
            isHourlyStamp: false,
            minutesToAdd: "",
            duration: 60,
            dailyPay: null,
            locations: [
              {
                address: "",
                longitude: "-122.084",
                latitude: "37.4219999",
                type: "Office",
                place_id: "ChIJdd4hrwug2EcRmSrV3Vo6llI"
              }
            ],
            weekdays: {
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: false
            }
          };
        });
      }
    }
    if (addproject?.status && !authenticatingaddproject && bustate) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setbustate(false);
      setbustate79(false);
      setStep(0);
    }
    if (
      addlocationactiveproject?.status &&
      !authenticatingaddlocationactiveproject &&
      bustate
    ) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setbustate(false);
      setbustate79(false);
      setStep(0);
    }
    if (addproject?.status && !authenticatingaddproject && bustate79) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setbustate(false);
      setbustate79(false);
      // setStep(79);
      setStep(0);
    }
    // if (
    //   !addproject?.status &&
    //   bustate &&
    //   addproject?.message ===
    //     "A project with the name already exists for Test user. Do you wish to proceed?"
    // ) {
    //   // SetActivating1(true);
    //   // SetActivate(false);
    //   // SetPend(false);
    //   setStep(79);
    //   setbustate(false);
    // }
    if (
      assigned?.data?.numberOfReps &&
      assigned?.data?.calculatedAmount &&
      assigned?.status &&
      !authenticatingassigned &&
      bustate11
    ) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setStep(69);
      setbustate11(false);
      setAmounts(assigned?.data?.calculatedAmount);
      setNumbers(assigned?.data?.numberOfReps);
    }
    if (
      addrepactiveproject?.data?.numberOfReps &&
      addrepactiveproject?.data?.calculatedAmount &&
      addrepactiveproject?.status &&
      !authenticatingaddrepactiveproject &&
      bustate11
    ) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setStep(69);
      setbustate11(false);
      setAmounts(addrepactiveproject?.data?.calculatedAmount);
      setNumbers(addrepactiveproject?.data?.numberOfReps);
    }

    if (payment?.status && !authenticatingpayment && bustate12) {
      SetActivating1(false);
      SetActivate(true);
      if (assigned?.subscriptionName !== "FREE_TRIAL") {
        setStep(71);
      }
      if (assigned?.subscriptionName === "FREE_TRIAL") {
        setStep(0);
      }
      SetPend(false);
      setbustate11(false);
      setfreereload(false);
    }
    if (addactiverep?.status && !authenticatingaddactiverep && bustate12) {
      SetActivating1(false);
      SetActivate(true);
      if (addrepactiveproject?.subscriptionName !== "FREE_TRIAL") {
        setStep(81);
      }
      if (addrepactiveproject?.subscriptionName === "FREE_TRIAL") {
        setStep(0);
      }
      SetPend(false);
      setbustate11(false);
      setfreereload(false);
    }
  }, [
    reload,
    addproject?.status,
    authenticatingaddproject,
    bustate,
    bustate11,
    bustate12,
    assigned?.status,
    authenticatingassigned,
    payment?.status,
    authenticatingpayment,
    assigned?.data?.calculatedAmount,
    assigned?.data?.numberOfReps,
    editprojectId,
    addproject?.message,
    bustate79,
    addlocationactiveproject?.status,
    authenticatingaddlocationactiveproject,
    assigned?.subscriptionName,
    addrepactiveproject?.status,
    authenticatingaddrepactiveproject,
    addrepactiveproject?.data?.calculatedAmount,
    addrepactiveproject?.data?.numberOfReps,
    addactiverep?.status,
    authenticatingaddactiverep

    // freereload
  ]);

  useEffect(() => {
    // Extract businessrep data
    const businessRep = activate;

    // Check if there's exactly one item
    if (businessRep?.length === 1) {
      const firstItemId = businessRep[0]?.id;

      // Update the user_id of the first item in rep state
      setRep((prevRep) =>
        prevRep.map((item, index) =>
          index === 0 ? { ...item, user_id: firstItemId } : item
        )
      );
    }
  }, []);

  console.log(businessrep?.data?.data);

  // const activate = businessrep?.data?.data?.filter(
  //   (item) => item?.hasChangeDefaultPassword === true
  // );
  // const inactivate = businessrep?.data?.data?.filter(
  //   (item) => item?.hasChangeDefaultPassword === false
  // );

  const setActivate = () => {
    if (editprojectId) {
      toast.error("You can't edit Project Details");
      return;
    }
    if (activeprojectId) {
      toast.error("You can't edit Project Details");
      return;
    }
    if (addactivebusinesses) {
      toast.error("You can't edit Project Details");
      return;
    }
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
    if (addactivebusinesses) {
      toast.error("you cant go back");
      return;
    } else {
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
    }
  };

  const setPendingRole1 = () => {
    console.log(assign?.minutesToAdd);
    const parseIfJSON = (value) => {
      try {
        return JSON.parse(value);
      } catch {
        return value; // Return as-is if it's not valid JSON
      }
    };
    const {
      name,
      description,
      startTime,
      stopTime,
      dailyPay,
      // forceCreate,
      locations,
      minutesToAdd,
      existingProjectId,
      isHourlyStamp
    } = assigncopy;
    const areAllVariablesPresent =
      name &&
      description &&
      startTime &&
      stopTime &&
      dailyPay != null &&
      locations &&
      locations.length > 0 &&
      minutesToAdd !== undefined &&
      minutesToAdd !== null;

    if (activeprojectId && locations?.length >= 0) {
      dispatch(AddLocationActiveProject({ locations }));
      dispatch(ProjectLocations());
      setbustate(true);
    } else {
      if (areAllVariablesPresent) {
        if (editprojectId) {
          console.log("Id available");
          dispatch(
            AddProject({
              name,
              description,
              minutesToAdd: parseIfJSON(assigncopy?.minutesToAdd),
              startDate: assigncopy?.startDate,
              stopDate: assigncopy?.stopDate,
              startTime,
              existingProjectId: editprojectId,
              stopTime,
              // forceCreate,
              isHourlyStamp,
              duration: assigncopy?.duration,
              dailyPay: parseIfJSON(assigncopy?.dailyPay),
              locations,
              weekdays: assigncopy?.weekdays
            })
          );
        }
        dispatch(
          AddProject({
            name,
            description,
            minutesToAdd: parseIfJSON(assigncopy?.minutesToAdd),
            startDate: assigncopy?.startDate,
            stopDate: assigncopy?.stopDate,
            startTime,
            existingProjectId: null,
            stopTime,
            // forceCreate,
            isHourlyStamp,
            duration: assigncopy?.duration,
            dailyPay: parseIfJSON(assigncopy?.dailyPay),
            locations,
            weekdays: assigncopy?.weekdays
          })
        );
        setbustate(true);
      } else {
        console.log(assigncopy);
        toast.error("Some required variables are missing.");
      }
    }
  };

  const setPendingRoleExist1 = () => {
    console.log(assign?.minutesToAdd);
    const parseIfJSON = (value) => {
      try {
        return JSON.parse(value);
      } catch {
        return value; // Return as-is if it's not valid JSON
      }
    };
    const {
      name,
      description,
      startTime,
      stopTime,
      dailyPay,
      forceCreate,
      locations,
      minutesToAdd,
      isHourlyStamp
    } = assigncopy;
    const areAllVariablesPresent =
      name &&
      description &&
      startTime &&
      stopTime &&
      dailyPay != null &&
      locations &&
      locations.length > 0 &&
      minutesToAdd !== undefined &&
      minutesToAdd !== null;

    if (areAllVariablesPresent) {
      if (editprojectId) {
        dispatch(
          AddProject({
            name,
            description,
            minutesToAdd: parseIfJSON(assigncopy?.minutesToAdd),
            startDate: assigncopy?.startDate,
            stopDate: assigncopy?.stopDate,
            startTime,
            stopTime,
            existingProjectId: editprojectId,
            // forceCreate: !forceCreate,
            isHourlyStamp,
            duration: assigncopy?.duration,
            dailyPay: parseIfJSON(assigncopy?.dailyPay),
            locations,
            weekdays: assigncopy?.weekdays
          })
        );
      }
      dispatch(
        AddProject({
          name,
          description,
          minutesToAdd: parseIfJSON(assigncopy?.minutesToAdd),
          startDate: assigncopy?.startDate,
          stopDate: assigncopy?.stopDate,
          startTime,
          stopTime,
          existingProjectId: null,
          // forceCreate: !forceCreate,
          isHourlyStamp,
          duration: assigncopy?.duration,
          dailyPay: parseIfJSON(assigncopy?.dailyPay),
          locations,
          weekdays: assigncopy?.weekdays
        })
      );
      setbustate79(true);
    } else {
      console.log(assigncopy);
      toast.error("Some required variables are missing.");
    }
  };

  const setPendingRoleReal1 = () => {
    if (addproject?.status && !authenticatingaddproject && bustate) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setbustate(false);
    } else if (
      addlocationactiveproject?.status &&
      !authenticatingaddlocationactiveproject &&
      bustate
    ) {
      SetActivating1(true);
      SetActivate(false);
      SetPend(false);
      setbustate(false);
    } else {
      toast.error("Fill Project Details and Add Locations");
    }
  };

  const ChangeProject = (e) => {
    const { name, value } = e.target;
    setAssign((prev) => ({
      ...prev,
      [name]: value
    }));
    setAssigncopy((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const AddittionRep = () => {
    const newRep = {
      user_id: "",
      location_id: null
    };
    const newAddress = {
      user_id: "",
      location_id: null,
      address: ""
    };

    setRep((prev) => [...prev, newRep]);
    setRepreal((prev) => [...prev, newRep]);
    setchoosingaddress((prev) => [...prev, newAddress]);
  };

  const AssignChange = (e) => {
    const { name, value } = e.target;
    const existsInRepreal =
      Array.isArray(repreal) && repreal.some((item) => item[name] === value);

    if (existsInRepreal) {
      toast.error("User has been added");
      return;
    }
    setRep(rep);
    const updateState = (prev) => {
      const lastIndex = prev.length - 1;
      const lastItem = prev[lastIndex];

      if (lastItem) {
        const { user_id, location_id } = lastItem;

        if (!user_id || !location_id) {
          return prev.map((item, i) =>
            i === lastIndex ? { ...item, [name]: value } : item
          );
        }

        if (user_id && name === "location_id" && location_id === "") {
          return prev.map((item, i) =>
            i === lastIndex ? { ...item, location_id: value } : item
          );
        }

        if (location_id && name === "user_id" && user_id === "") {
          return prev.map((item, i) =>
            i === lastIndex ? { ...item, user_id: value } : item
          );
        }
        return [...prev, { user_id: "", location_id: "", [name]: value }];
      }

      return prev;
    };
    setRepreal((prev) => updateState(prev));
    setchoosingaddress((prev) => updateState(prev));
  };

  const AssignChanger = (e) => {
    const { name, value } = e.target;
    // const existsInRepreal =
    //   Array.isArray(repreal) && repreal.some((item) => item[name] === value);

    // if (existsInRepreal) {
    //   toast.error("Address has been added");
    //   return;
    // }

    // Update the 'rep' state (if necessary)
    setRep(rep);
    console.log(rep);
    console.log(repreal);

    const updateState = (prev) => {
      const lastIndex = prev.length - 1;
      const lastItem = prev[lastIndex];

      // Check if the last item is defined
      if (lastItem) {
        const { user_id, location_id } = lastItem;

        // Case 1: If either user_id or location_id is missing
        if (!user_id || !location_id) {
          return prev.map((item, i) =>
            i === lastIndex ? { ...item, [name]: value } : item
          );
        }

        // Case 2: If both are present, but one is an empty string
        if (user_id && name === "location_id" && location_id === "") {
          return prev.map((item, i) =>
            i === lastIndex ? { ...item, location_id: value } : item
          );
        }

        if (location_id && name === "user_id" && user_id === "") {
          return prev.map((item, i) =>
            i === lastIndex ? { ...item, user_id: value } : item
          );
        }

        // Case 3: If both are present and neither is empty, create a new entry
        return [...prev, { user_id: "", location_id: "", [name]: value }];
      }

      return prev; // Return unchanged if lastItem is not defined
    };

    setRepreal((prev) => updateState(prev));
    setchoosingaddress((prev) => updateState(prev));
  };

  const addLocation = () => {
    if (addition) {
      const newLocation = {
        address: "",
        longitude: "",
        latitude: "",
        type: "Office",
        place_id: ""
      };

      setAssign((prevState) => ({
        ...prevState,
        locations: [...prevState.locations, newLocation]
      }));
      setAddition(false);
      // setUpdateIndex((prev) => prev + 1);
    }
    if (!addition) {
      toast.error("Verify one the Previous Address");
    }
  };

  const Remover = (userId) => {
    console.log("User ID to remove:", userId);
    console.log("Current repres:", repreal);

    // Check if repreal has more than one entry
    if (repreal?.length > 1) {
      // Filter out the rep items with the matching userId
      setRepreal((prev) => {
        const filteredRep = prev.filter((item) => item.user_id !== userId);
        console.log("Filtered Rep for setRepreal:", filteredRep);
        return filteredRep; // Update the rep state
      });

      // Filter for setRep
      setRep((prev) => {
        const filteredRep = prev.filter((item) => item.user_id !== userId);
        console.log("Filtered Rep for setRep:", filteredRep);
        return filteredRep; // Return filtered rep
      });

      // Filter for setChoosingaddress
      setchoosingaddress((prev) => {
        const filteredAddresses = prev.filter(
          (item) => item.user_id !== userId
        );
        console.log(
          "Filtered Addresses for setChoosingaddress:",
          filteredAddresses
        );
        return filteredAddresses; // Return filtered addresses
      });

      // Optionally add new entries
      const newRep = {
        user_id: "",
        location_id: ""
      };
      const newAddress = {
        user_id: "",
        location_id: "",
        address: ""
      };

      setRep((prev) => [...prev, newRep]); // Add newRep after filtering
      setchoosingaddress((prev) => [...prev, newAddress]); // Add newAddress after filtering
    } else {
      toast.error("The rep and address can't be less than One");
    }
  };

  const Removing = (index) => {
    console.log(assigncopy);
    // if (assigncopy?.locations?.length > 1) {
    if (assigncopy?.locations?.length > 1) {
      setAssigncopy((prev) => ({
        ...prev,
        locations: prev.locations.filter((_, i) => i !== index)
      }));
    } else {
      toast.error("The address can't be less than One");
    }
    // } else {
    //   toast.error("The address can't be less than One");
    // }
  };

  // useEffect(() => {
  //   if (assigned?.numberOfReps && assigned?.calculatedAmount) {
  //     setAmounts(assigned?.calculatedAmount);
  //     setNumbers(assigned?.numberOfReps);
  //   }
  // }, [assigned?.numberOfReps, assigned?.calculatedAmount]);

  console.log(amounts);

  let numericAmount = parseFloat((amounts || "").replace(/^N/, ""));
  if (isNaN(numericAmount)) {
    numericAmount = 0;
  }
  const result = numericAmount * (numbers || 1);

  const SendAssignRep = () => {
    if (addactivebusinesses || activeprojectId) {
      for (let rep of repreal) {
        if (!rep.user_id) {
          toast.error("No User in one of the locations");
          return;
        }
        if (!rep.location_id) {
          toast.error("Rep must be added to a location");
          return;
        }
      }
      dispatch(AddRepActiveProject({ repreal }));
      setbustate11(true);
    } else {
      for (let rep of repreal) {
        if (!rep.user_id) {
          toast.error("No User in one of the locations");
          return;
        }
        if (!rep.location_id) {
          toast.error("Rep must be added to a location");
          return;
        }
      }
      dispatch(AssignedRep({ rep: repreal, projectId: addproject?.data?.id }));
      console.log(repreal);
      sessionStorage.setItem("projectId", JSON.stringify(addproject?.data?.id));
      sessionStorage.setItem("repdetails", JSON.stringify(repreal));
      setbustate11(true);
    }
  };

  const SendAssignRepBolu = () => {
    dispatch(
      Payment({
        rep: repreal,
        projectId: addproject?.data?.id,
        amount: result
      })
    );
    setbustate12(true);
  };

  const SendAddRepActiveProj = () => {
    dispatch(
      AddActiveRep({
        repreal: repreal
      })
    );
    setbustate12(true);
  };

  const verify = (e) => {
    // if (!e || !e.target || !e.target.value) {
    //   toast.error("Address can't be empty");
    //   return; // Exit early if the event or its target is undefined
    // } else {
    fromAddress(e)
      .then(({ results }) => {
        if (results.length > 0) {
          const { lat, lng } = results[0]?.geometry.location;
          const placeId = results[0]?.place_id;

          console.log("Latitude:", lat);
          console.log("Longitude:", lng);
          console.log("Place ID:", placeId);

          setAssigncopy((prev) => {
            // Check if the first location's address is empty
            if (prev.locations[0].address === "") {
              // Create the updated location with new data
              const updatedLocation = {
                ...prev.locations[0],
                address: e,
                latitude: lat.toString(),
                longitude: lng.toString(),
                place_id: placeId,
                type: "Office"
              };

              // Return new state with updated first location
              return {
                ...prev,
                locations: [updatedLocation, ...prev.locations.slice(1)] // Retain subsequent locations
              };
            } else {
              // If the first address is not empty, push the new location as an addition
              const newLocation = {
                address: e,
                latitude: lat.toString(),
                longitude: lng.toString(),
                place_id: placeId,
                type: "Office"
              };

              return {
                ...prev,
                locations: [...prev.locations, newLocation] // Add new location
              };
            }
          });

          setAssign((prev) => ({
            ...prev,
            locations: prev.locations.map((location, i) =>
              i === 0 ? { ...location, address: "" } : location
            )
          }));

          // toast.success("Correct Address");
          setAddition(true);
        } else {
          toast.error("No results found");
        }
      })
      .catch((error) => {
        toast.error("Error fetching geocode data: or wrong address", error);
      });
    // }
  };

  console.log(assigned);

  const defaultUser =
    businessrep?.data?.data && businessrep?.data?.data.length > 0
      ? businessrep?.data?.data[0]
      : null;
  return (
    <Flex>
      <Navbar title={title} />
      <AppUserModal
        setPendingRoleExist1={setPendingRoleExist1}
        assigned={
          assigned?.data
            ? assigned?.data
            : addrepactiveproject?.data
            ? addrepactiveproject?.data
            : []
        }
        setStep={setStep}
        setbustate={setbustate}
        SendAddRepActiveProj={SendAddRepActiveProj}
        step={step}
        SendAssignRepBolu={SendAssignRepBolu}
        setReload={setReload}
        payment={payment ? payment : addactiverep ? addactiverep : {}}
      />
      <div className="maincontainer">
        <div className="firstdiv">
          <div className="backbutton">
            <Goback
              style={{ cursor: "pointer" }}
              onClick={
                tx_ref
                  ? () => {
                      navigate(`../${businessprojects}`);
                      sessionStorage.removeItem("editprojectId");
                      sessionStorage.removeItem("activeprojectId");
                      sessionStorage.removeItem("addactivebusinesses");
                      sessionStorage.removeItem("renewid");
                    }
                  : () => {
                      navigate(-1);
                      sessionStorage.removeItem("editprojectId");
                      sessionStorage.removeItem("activeprojectId");
                      sessionStorage.removeItem("addactivebusinesses");
                      sessionStorage.removeItem("renewid");
                    }
              }
              // onClick={() => setStep(70)}
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
            onClick={() => setPendingRoleReal1()}
            className={`${activating1 ? "active" : "status"}`}
          >
            <span>3. Assign Business Reps</span>
          </div>
        </div>
        <div className="table">
          {activated ? (
            <div className="head">
              <div className="projectassign">
                <span className="project">1.Assign project</span>
                <span className="fill">Please fill in the details needed</span>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Project name</span>
                    <input
                      name="name"
                      onChange={(e) => ChangeProject(e)}
                      value={assign?.name}
                      className="nametype"
                      placeholder="Enter project name"
                    />
                  </div>
                  <div className="projectnametwo">
                    <span className="name">Hourly Time stamp?</span>
                    <div className="wrapper">
                      <div className="yescontainer">
                        {assign?.isHourlyStamp ? (
                          <Color
                            onClick={() => {
                              setAssign((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                              setAssigncopy((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                            }}
                          />
                        ) : (
                          <span
                            className="circle"
                            onClick={() => {
                              setAssign((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                              setAssigncopy((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                            }}
                          ></span>
                        )}

                        <span className="yes">Yes</span>
                      </div>
                      <div className="yescontainer">
                        {assign?.isHourlyStamp ? (
                          <span
                            className="circle"
                            onClick={() => {
                              setAssign((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                              setAssigncopy((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                            }}
                          ></span>
                        ) : (
                          <Color
                            onClick={() => {
                              setAssign((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                              setAssigncopy((prevState) => ({
                                ...prevState,
                                isHourlyStamp: !prevState.isHourlyStamp
                              }));
                            }}
                          />
                        )}
                        <span className="yes">No</span>
                      </div>
                    </div>
                  </div>
                  <div className="projectnamethree">
                    <span className="name">Daily Pay</span>
                    <input
                      className="nametype"
                      name="dailyPay"
                      onChange={(e) => ChangeProject(e)}
                      value={assign?.dailyPay}
                      placeholder="Enter daily pay"
                    />
                  </div>
                </div>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Description</span>
                    <input
                      name="description"
                      onChange={(e) => ChangeProject(e)}
                      value={assign?.description}
                      className="nametype"
                      placeholder="Enter project description"
                    />
                  </div>
                </div>
              </div>
              <div className="projectassign">
                <span className="project">2.Active Days & Time</span>
                <span className="fill">Please select active days</span>
                <div className="selectors">
                  <div className="top">
                    <div className="days">
                      {assign?.weekdays?.sunday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                sunday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                sunday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                sunday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                sunday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Sunday</span>
                    </div>
                    <div className="days">
                      {assign?.weekdays?.monday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                monday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                monday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                monday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                monday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Monday</span>
                    </div>
                    <div className="days">
                      {assign?.weekdays?.tuesday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                tuesday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                tuesday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                tuesday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                tuesday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Tuesday</span>
                    </div>
                    <div className="days">
                      {assign?.weekdays?.wednesday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                wednesday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                wednesday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                wednesday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                wednesday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Wednesday</span>
                    </div>
                  </div>
                  <div className="top">
                    <div className="days">
                      {assign?.weekdays?.thursday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                thursday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                thursday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                thursday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                thursday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Thursday</span>
                    </div>
                    <div className="days">
                      {assign?.weekdays?.friday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                friday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                friday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                friday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                friday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Friday</span>
                    </div>
                    <div className="days">
                      {assign?.weekdays?.saturday ? (
                        <Color
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                saturday: false
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                saturday: false
                              }
                            }));
                          }}
                        />
                      ) : (
                        <UnColor
                          onClick={() => {
                            setAssign((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                saturday: true
                              }
                            }));
                            setAssigncopy((prevState) => ({
                              ...prevState,
                              weekdays: {
                                ...prevState.weekdays,
                                saturday: true
                              }
                            }));
                          }}
                        />
                      )}
                      <span className="round">Saturday</span>
                    </div>
                  </div>
                </div>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Resumption time</span>
                    <select
                      name="startTime"
                      value={assign.startTime || ""}
                      onChange={(e) => ChangeProject(e)}
                      className="nametype"
                    >
                      <option value="" disabled>
                        Select Resumption Time
                      </option>
                      <option value="06:00:00">6:00 A.M</option>
                      <option value="07:00:00">7:00 A.M</option>
                      <option value="08:00:00">8:00 A.M</option>
                      <option value="09:00:00">9:00 A.M</option>
                      <option value="10:00:00">10:00 A.M</option>
                      <option value="11:00:00">11:00 A.M</option>
                      <option value="12:00:00">12:00 P.M</option>
                      <option value="13:00:00">01:00 P.M</option>
                      <option value="14:00:00">02:00 P.M</option>
                      <option value="15:00:00">03:00 P.M</option>
                      <option value="16:00:00">04:00 P.M</option>
                      <option value="17:00:00">05:00 P.M</option>
                      <option value="18:00:00">06:00 P.M</option>
                      <option value="19:00:00">07:00 P.M</option>
                      <option value="20:00:00">08:00 P.M</option>
                      <option value="21:00:00">09:00 P.M</option>
                      <option value="22:00:00">10:00 P.M</option>
                      <option value="23:00:00">11:00 P.M</option>
                      <option value="00:00:00">12:00 A.M</option>
                    </select>
                  </div>
                  <div className="projectnamethree">
                    <span className="name">Closing time</span>
                    <select
                      name="stopTime"
                      value={assign.stopTime || ""}
                      onChange={(e) => ChangeProject(e)}
                      className="nametype"
                    >
                      <option value="" disabled>
                        Select Closing Time
                      </option>
                      <option value="06:00:00">6:00 A.M</option>
                      <option value="07:00:00">7:00 A.M</option>
                      <option value="08:00:00">8:00 A.M</option>
                      <option value="09:00:00">9:00 A.M</option>
                      <option value="10:00:00">10:00 A.M</option>
                      <option value="11:00:00">11:00 A.M</option>
                      <option value="12:00:00">12:00 P.M</option>
                      <option value="13:00:00">01:00 P.M</option>
                      <option value="14:00:00">02:00 P.M</option>
                      <option value="15:00:00">03:00 P.M</option>
                      <option value="16:00:00">04:00 P.M</option>
                      <option value="17:00:00">05:00 P.M</option>
                      <option value="18:00:00">06:00 P.M</option>
                      <option value="19:00:00">07:00 P.M</option>
                      <option value="20:00:00">08:00 P.M</option>
                      <option value="21:00:00">09:00 P.M</option>
                      <option value="22:00:00">10:00 P.M</option>
                      <option value="23:00:00">11:00 P.M</option>
                      <option value="00:00:00">12:00 A.M</option>
                    </select>
                  </div>
                </div>
                <div className="filling">
                  <div className="projectname">
                    <span className="name">Attendance Grace Period</span>
                    <select
                      name="minutesToAdd"
                      value={assign.minutesToAdd || ""}
                      onChange={(e) => ChangeProject(e)}
                      className="nametype"
                    >
                      <option value="" disabled>
                        Select a Timeline
                      </option>
                      <option value="5">5 mins</option>
                      <option value="10">10 mins</option>
                      <option value="15">15 mins</option>
                      <option value="20">20 mins</option>
                      <option value="25">25 mins</option>
                      <option value="30">30 mins</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="lastdiv">
                <LocationModalButton
                  onClick={() => setPending()}
                  background
                  remove
                  color
                  title="Next"
                />
              </div>
            </div>
          ) : pend ? (
            <div className="headtwo">
              <div className="projectassign">
                <span className="project">3.Assign locations</span>
                <span className="fill">
                  Please fill in the details needed...
                </span>
                <div className="filling">
                  <div className="wrap">
                    <div className="filling">
                      <div className="projectname">
                        <span className="name">Address</span>
                        <input
                          onChange={(e) => {
                            const newAddress = e.target.value;
                            setUpdateIndex(e.target.value); // Assuming this is for tracking the index

                            setAssign((prev) => ({
                              ...prev,
                              locations: prev.locations.map(
                                (location, i) =>
                                  i === 0 // Update the first location's address
                                    ? { ...location, address: newAddress }
                                    : location // Keep other locations unchanged
                              )
                            }));
                          }}
                          value={assign.locations[0]?.address || ""}
                          className="nametype"
                          placeholder="Enter Address"
                        />
                      </div>
                      <div className="addaddressinner">
                        <ModalButton
                          onClick={() => {
                            verify(updateIndex);
                            setUpdateIndex("");
                          }}
                          background
                          color
                          // short
                          small
                          title="Verify Address"
                          whitey
                        />
                      </div>
                    </div>
                    {/* {assign?.locations?.map((item, index) => (
                      <div className="filling">
                        <div className="projectname">
                          <span className="name">Address</span>
                          <input
                            onChange={(e) => {
                              setUpdateIndex(e.target.value);
                              setAssign((prev) => ({
                                ...prev,
                                locations: prev.locations.map((location, i) =>
                                  i === index
                                    ? { ...location, address: e.target.value }
                                    : location
                                )
                              }));
                            }}
                            value={assign.locations[index]?.address || ""}
                            className="nametype"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div className="addaddressinner">
                          <ModalButton
                            onClick={() => verify(updateIndex, index)}
                            background
                            color
                            short
                            title="Verify Address"
                            whitey
                          />
                        </div>
                      </div>
                    ))} */}
                  </div>
                  {/* <div className="addaddress">
                    <ModalButton
                      onClick={() => addLocation()}
                      background
                      color
                      short
                      title="Add Address"
                    />
                  </div> */}
                </div>
                <div className="addresswrapper">
                  <div className="heading">
                    <span className="title">Address</span>
                    {/* <span className="title">State</span>
                    <span className="title">Landmark</span> */}
                    <span className="title">Action</span>
                  </div>
                  <div className="arrange">
                    {assigncopy?.locations?.map((item, index) => (
                      <div className="details">
                        <div className="first">
                          {item?.address !== "" ? <Color /> : ""}
                          {item?.address}
                        </div>
                        {/* <div className="second">Lagos</div>
                        <div className="third">Third mainland bridge</div> */}
                        <div className="four">
                          Remove{" "}
                          <Danger
                            style={{ cursor: "pointer" }}
                            onClick={() => Removing(index)}
                          />
                        </div>
                      </div>
                    ))}
                    {/* <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div>
                    <div className="details">
                      <div className="first">
                        <Color />
                        No 62, Berkeley street
                      </div>
                      <div className="second">Lagos</div>
                      <div className="third">Third mainland bridge</div>
                      <div className="four">
                        Remove <Danger />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="lastdiv">
                <LocationModalButton
                  whitey
                  onClick={() => {
                    if (editprojectId || activeprojectId) {
                      toast.error("You cant go back");
                    } else {
                      setActivate();
                    }
                  }}
                  title="Back"
                />
                <LocationModalButton
                  onClick={() => setPendingRole1()}
                  background
                  remove
                  color
                  title={!authenticatingaddproject ? "Next" : "Loading"}
                />
              </div>
            </div>
          ) : (
            <div className="head">
              <div className="projectassign">
                <span className="project">4.Assign Business Reps</span>
                <span className="fill">
                  Please fill in the details needed...
                </span>
                <div className="filling">
                  <div className="wrap">
                    <div className="filling">
                      <div className="projectname">
                        <span className="name">Business Reps</span>
                        <select
                          onChange={(e) => AssignChange(e)}
                          name="user_id"
                          value={""}
                          className="nametype"
                        >
                          <option value="">Select a Rep</option>
                          {activate?.map((repItem) => (
                            <option key={repItem?.id} value={repItem?.id}>
                              {repItem?.firstName} {repItem?.lastName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="projectnamethree">
                        <span className="name">Location</span>
                        <select
                          onChange={(e) => {
                            AssignChanger(e);
                            console.log(e.target.value);
                          }}
                          className="nametype"
                          value={rep[0]?.location_id || ""}
                          name="location_id"
                        >
                          <option value="">Select a location</option>
                          {addactivebusinesses || activeprojectId
                            ? projectlocations?.data?.map((locationItem) => (
                                <>
                                  <option
                                    key={locationItem?.location_id}
                                    value={String(locationItem?.location_id)}
                                  >
                                    {locationItem?.address}
                                  </option>
                                </>
                              ))
                            : addproject?.data?.locations?.map(
                                (locationItem) => (
                                  <>
                                    <option
                                      key={locationItem?.id}
                                      value={String(locationItem?.id)}
                                    >
                                      {locationItem?.address}
                                    </option>
                                  </>
                                )
                              )}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="addaddress">
                    <ModalButton
                      onClick={() => AddittionRep()}
                      background
                      color
                      short
                      title="Add"
                    />
                  </div>
                </div>
                <div className="addresswrappertwo">
                  <div className="heading">
                    <span className="titlereps">
                      Business Reps Selected <Color />
                    </span>
                    <span className="titley">Address</span>
                    {/* <span className="title">State</span>
                    <span className="title">Landmark</span> */}
                    <span className="titley">Action</span>
                  </div>
                  <div className="arrange">
                    {Array.isArray(repreal) &&
                      repreal.map((item) => {
                        const businessRep = businessrep?.data?.data?.find(
                          (list) => list.id === item?.user_id
                        );

                        // Find the addressy object based on user_id
                        const addressy = choosingaddress.find(
                          (list) => list.user_id === item?.user_id
                        );

                        console.log(addressy);

                        const locations =
                          addactivebusinesses || activeprojectId
                            ? projectlocations?.data || []
                            : addproject?.data?.locations || [];

                        console.log(locations);

                        let realaddress = null; // Initialize realaddress as null

                        if (addressy) {
                          // Find the real address based on location_id
                          if (addactivebusinesses || activeprojectId) {
                            realaddress = locations.find(
                              (location) =>
                                location.location_id === addressy.location_id
                            );
                          }
                          if (!addactivebusinesses && !activeprojectId) {
                            realaddress = locations.find(
                              (location) =>
                                location.id === Number(addressy.location_id)
                            );
                          }

                          // Log the found real address for debugging
                          console.log(realaddress);
                        } else {
                          console.log("Addressy not found.");
                        }

                        return (
                          <div className="details" key={item?.user_id}>
                            <div className="front">
                              {businessRep ? (
                                <>
                                  <Color />
                                  {`${businessRep?.firstName} ${businessRep?.lastName}`}
                                </>
                              ) : (
                                <>Not found</>
                              )}
                            </div>
                            <div className="firsty">
                              {realaddress ? (
                                <>
                                  <Color />
                                  {`${realaddress?.address}`}
                                </>
                              ) : (
                                <>No address available</>
                              )}
                            </div>
                            {/* <div className="second">Lagos</div>
                            <div className="third">Third mainland bridge</div> */}
                            <div className="foury">
                              Remove{" "}
                              <Danger
                                style={{ cursor: "pointer" }}
                                onClick={() => Remover(item?.user_id)}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="lastdiv">
                <LocationModalButton
                  whitey
                  onClick={() => {
                    if (addactivebusinesses) {
                      toast.error("You can't go back");
                    } else {
                      setPending();
                    }
                  }}
                  title="Back"
                />
                <LocationModalButton
                  onClick={() => SendAssignRep()}
                  background
                  color
                  title={
                    !authenticatingpayment ? "Complete project" : "Loading"
                  }
                />
              </div>
            </div>
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
      .head {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 40px;
        .projectassign {
          display: flex;
          flex-direction: column;
          gap: 30px;
          .project {
            color: #667085;
            font-size: 15px;
          }
          .fill {
            color: #667085;
            font-size: 13px;
          }
          .filling {
            display: flex;
            flex-direction: row;
            gap: 10px;
            .projectname {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 40%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .projectnametwo {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .wrapper {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .yescontainer {
                  display: flex;
                  flex-direction: row;
                  gap: 10px;
                  border: 1px solid var(--stroke-color, #e2e8f0);
                  border-radius: 8px;
                  height: 45px;
                  align-items: center;
                  width: 50%;
                  justify-content: flex-start;
                  padding-left: 20px;
                  .circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ebebeb;
                  }
                  .yes {
                    color: #1e1b39;
                    font-size: 15px;
                  }
                }
              }
            }
            .projectnamethree {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .addaddress {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-start;
              height: 70px;
              width: 35%;
            }
            .wrap {
              display: flex;
              flex-direction: column;
              width: 65%;
              .filling {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .projectname {
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: flex-start;
                  width: 50%;
                  height: 90px;
                  .name {
                    color: #1e1b39;
                    font-size: 14px;
                  }
                  .nametype {
                    border: 1px solid var(--stroke-color, #e2e8f0);
                    padding: 15px 30px 15px 30px;
                    border-radius: 6px;
                    width: 90%;
                    outline: none;
                  }
                  .yescontainer {
                  }
                }
                .projectnametwo {
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: flex-start;
                  width: 30%;
                  height: 90px;
                  .name {
                    color: #1e1b39;
                    font-size: 14px;
                  }
                  .wrapper {
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                    .yescontainer {
                      display: flex;
                      flex-direction: row;
                      gap: 10px;
                      border: 1px solid var(--stroke-color, #e2e8f0);
                      border-radius: 8px;
                      height: 45px;
                      align-items: center;
                      width: 50%;
                      justify-content: flex-start;
                      padding-left: 20px;
                      .circle {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        border: 1px solid #ebebeb;
                      }
                      .yes {
                        color: #1e1b39;
                        font-size: 15px;
                      }
                    }
                  }
                }
                .projectnamethree {
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: flex-start;
                  width: 50%;
                  height: 90px;
                  .name {
                    color: #1e1b39;
                    font-size: 14px;
                  }
                  .nametype {
                    border: 1px solid var(--stroke-color, #e2e8f0);
                    padding: 15px 30px 15px 30px;
                    border-radius: 6px;
                    width: 90%;
                    outline: none;
                  }
                  .yescontainer {
                  }
                }
                .addaddress {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                  height: 70px;
                }
              }
            }
          }
          .filling {
            display: flex;
            flex-direction: row;
            gap: 10px;
            .projectname {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 40%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .projectnametwo {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .wrapper {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .yescontainer {
                  display: flex;
                  flex-direction: row;
                  gap: 10px;
                  border: 1px solid var(--stroke-color, #e2e8f0);
                  border-radius: 8px;
                  height: 45px;
                  align-items: center;
                  width: 50%;
                  justify-content: flex-start;
                  padding-left: 20px;
                  .circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ebebeb;
                  }
                  .yes {
                    color: #1e1b39;
                    font-size: 15px;
                  }
                }
              }
            }
            .projectnamethree {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .addaddress {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-start;
              height: 70px;
              width: 35%;
            }
            .wrap {
              display: flex;
              flex-direction: column;
              width: 65%;
              .filling {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .col {
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  .projectname {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: flex-start;
                    width: 50%;
                    height: 90px;
                    .name {
                      color: #1e1b39;
                      font-size: 14px;
                    }
                    .nametype {
                      border: 1px solid var(--stroke-color, #e2e8f0);
                      padding: 15px 30px 15px 30px;
                      border-radius: 6px;
                      width: 90%;
                      outline: none;
                    }
                    .yescontainer {
                    }
                  }
                  .projectnametwo {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: flex-start;
                    width: 30%;
                    height: 90px;
                    .name {
                      color: #1e1b39;
                      font-size: 14px;
                    }
                    .wrapper {
                      display: flex;
                      flex-direction: row;
                      gap: 15px;
                      .yescontainer {
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                        border: 1px solid var(--stroke-color, #e2e8f0);
                        border-radius: 8px;
                        height: 45px;
                        align-items: center;
                        width: 50%;
                        justify-content: flex-start;
                        padding-left: 20px;
                        .circle {
                          width: 20px;
                          height: 20px;
                          border-radius: 50%;
                          border: 1px solid #ebebeb;
                        }
                        .yes {
                          color: #1e1b39;
                          font-size: 15px;
                        }
                      }
                    }
                  }
                  .projectnamethree {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: flex-start;
                    width: 50%;
                    height: 90px;
                    .name {
                      color: #1e1b39;
                      font-size: 14px;
                    }
                    .nametype {
                      border: 1px solid var(--stroke-color, #e2e8f0);
                      padding: 15px 30px 15px 30px;
                      border-radius: 6px;
                      width: 90%;
                      outline: none;
                    }
                    .yescontainer {
                    }
                  }
                  .addaddress {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    height: 70px;
                  }
                }
              }
            }
          }
          .selectors {
            display: flex;
            flex-direction: column;
            gap: 40px;
            .top {
              display: flex;
              flex-direction: row;
              gap: 50px;
              .days {
                display: flex;
                flex-direction: row;
                gap: 5px;
                width: 10%;
                .round {
                  color: #141414;
                  font-size: 14px;
                }
              }
            }
          }
          .addresswrapper {
            border: 1px solid #ebebeb;
            border-radius: 6px;
            width: 60%;
            display: flex;
            flex-direction: column;
            .heading {
              display: flex;
              flex-direction: row;
              padding-block: 10px;
              padding-inline: 20px;
              /* border-bottom: 1px solid #ebebeb; */
              .title {
                width: 50%;
                color: #667085;
                font-size: 14px;
                display: flex;
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
                  width: 50%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                /* .second {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                .third {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  font-size: 12px;
                  height: 50px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                } */
                .four {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 50%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                }
              }
            }
          }
          .addresswrappertwo {
            border: 1px solid #ebebeb;
            border-radius: 6px;
            width: 60%;
            display: flex;
            flex-direction: column;
            .heading {
              display: flex;
              flex-direction: row;
              padding-inline: 20px;
              /* border-bottom: 1px solid #ebebeb; */
              .title {
                width: 20%;
                color: #667085;
                font-size: 13px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-block: 10px;
                padding-inline: 10px;
              }
              .titley {
                width: 40%;
                color: #667085;
                font-size: 13px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-block: 10px;
                padding-inline: 10px;
              }
              .titlereps {
                width: 20%;
                color: #667085;
                font-size: 13px;
                display: flex;
                padding-block: 10px;
                flex-direction: row;
                padding-inline: 10px;
                justify-content: center;
                border-right: 1px solid #ebebeb;
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
                .front {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .first {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .firsty {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 40%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .second {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .third {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  font-size: 12px;
                  height: 50px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .four {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                  padding-inline: 10px;
                }
                .foury {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 40%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                  padding-inline: 10px;
                }
              }
            }
          }
        }
        .lastdiv {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          gap: 20px;
        }
      }
      .headtwo {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 40px;
        .projectassign {
          display: flex;
          flex-direction: column;
          gap: 30px;
          .project {
            color: #667085;
            font-size: 15px;
          }
          .fill {
            color: #667085;
            font-size: 13px;
          }
          .filling {
            display: flex;
            flex-direction: row;
            gap: 2px;
            .projectname {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 40%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .projectnametwo {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .wrapper {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .yescontainer {
                  display: flex;
                  flex-direction: row;
                  gap: 10px;
                  border: 1px solid var(--stroke-color, #e2e8f0);
                  border-radius: 8px;
                  height: 45px;
                  align-items: center;
                  width: 50%;
                  justify-content: flex-start;
                  padding-left: 20px;
                  .circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ebebeb;
                  }
                  .yes {
                    color: #1e1b39;
                    font-size: 15px;
                  }
                }
              }
            }
            .projectnamethree {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .addaddress {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-start;
              height: 70px;
              width: 10%;
            }
            .addaddressinner {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-end;
              height: 70px;
              width: 25%;
            }
            .wrap {
              display: flex;
              flex-direction: column;
              width: 65%;
              .filling {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .projectname {
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: flex-start;
                  width: 70%;
                  height: 90px;
                  .name {
                    color: #1e1b39;
                    font-size: 14px;
                  }
                  .nametype {
                    border: 1px solid var(--stroke-color, #e2e8f0);
                    padding: 15px 30px 15px 30px;
                    border-radius: 6px;
                    width: 90%;
                    outline: none;
                  }
                  .yescontainer {
                  }
                }
                .projectnametwo {
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: flex-start;
                  width: 30%;
                  height: 90px;
                  .name {
                    color: #1e1b39;
                    font-size: 14px;
                  }
                  .wrapper {
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                    .yescontainer {
                      display: flex;
                      flex-direction: row;
                      gap: 10px;
                      border: 1px solid var(--stroke-color, #e2e8f0);
                      border-radius: 8px;
                      height: 45px;
                      align-items: center;
                      width: 50%;
                      justify-content: flex-start;
                      padding-left: 20px;
                      .circle {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        border: 1px solid #ebebeb;
                      }
                      .yes {
                        color: #1e1b39;
                        font-size: 15px;
                      }
                    }
                  }
                }
                .projectnamethree {
                  display: flex;
                  flex-direction: column;
                  gap: 5px;
                  justify-content: flex-start;
                  width: 50%;
                  height: 90px;
                  .name {
                    color: #1e1b39;
                    font-size: 14px;
                  }
                  .nametype {
                    border: 1px solid var(--stroke-color, #e2e8f0);
                    padding: 15px 30px 15px 30px;
                    border-radius: 6px;
                    width: 90%;
                    outline: none;
                  }
                  .yescontainer {
                  }
                }
                .addaddress {
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-end;
                  height: 70px;
                }
              }
            }
          }
          .filling {
            display: flex;
            flex-direction: row;
            gap: 5px;
            .projectname {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 40%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .projectnametwo {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .wrapper {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .yescontainer {
                  display: flex;
                  flex-direction: row;
                  gap: 10px;
                  border: 1px solid var(--stroke-color, #e2e8f0);
                  border-radius: 8px;
                  height: 45px;
                  align-items: center;
                  width: 50%;
                  justify-content: flex-start;
                  padding-left: 20px;
                  .circle {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    border: 1px solid #ebebeb;
                  }
                  .yes {
                    color: #1e1b39;
                    font-size: 15px;
                  }
                }
              }
            }
            .projectnamethree {
              display: flex;
              flex-direction: column;
              gap: 5px;
              justify-content: flex-start;
              width: 30%;
              height: 90px;
              .name {
                color: #1e1b39;
                font-size: 14px;
              }
              .nametype {
                border: 1px solid var(--stroke-color, #e2e8f0);
                padding: 15px 30px 15px 30px;
                border-radius: 6px;
                width: 90%;
                outline: none;
              }
              .yescontainer {
              }
            }
            .addaddress {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-start;
              height: 70px;
              width: 35%;
            }
            .wrap {
              display: flex;
              flex-direction: column;
              width: 65%;
              .filling {
                display: flex;
                flex-direction: row;
                gap: 15px;
                .col {
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  .projectname {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: flex-start;
                    width: 50%;
                    height: 90px;
                    .name {
                      color: #1e1b39;
                      font-size: 14px;
                    }
                    .nametype {
                      border: 1px solid var(--stroke-color, #e2e8f0);
                      padding: 15px 30px 15px 30px;
                      border-radius: 6px;
                      width: 90%;
                      outline: none;
                    }
                    .yescontainer {
                    }
                  }
                  .projectnametwo {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: flex-start;
                    width: 30%;
                    height: 90px;
                    .name {
                      color: #1e1b39;
                      font-size: 14px;
                    }
                    .wrapper {
                      display: flex;
                      flex-direction: row;
                      gap: 15px;
                      .yescontainer {
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                        border: 1px solid var(--stroke-color, #e2e8f0);
                        border-radius: 8px;
                        height: 45px;
                        align-items: center;
                        width: 50%;
                        justify-content: flex-start;
                        padding-left: 20px;
                        .circle {
                          width: 20px;
                          height: 20px;
                          border-radius: 50%;
                          border: 1px solid #ebebeb;
                        }
                        .yes {
                          color: #1e1b39;
                          font-size: 15px;
                        }
                      }
                    }
                  }
                  .projectnamethree {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    justify-content: flex-start;
                    width: 50%;
                    height: 90px;
                    .name {
                      color: #1e1b39;
                      font-size: 14px;
                    }
                    .nametype {
                      border: 1px solid var(--stroke-color, #e2e8f0);
                      padding: 15px 30px 15px 30px;
                      border-radius: 6px;
                      width: 90%;
                      outline: none;
                    }
                    .yescontainer {
                    }
                  }
                  .addaddress {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    height: 70px;
                  }
                }
              }
            }
          }
          .selectors {
            display: flex;
            flex-direction: column;
            gap: 40px;
            .top {
              display: flex;
              flex-direction: row;
              gap: 50px;
              .days {
                display: flex;
                flex-direction: row;
                gap: 5px;
                width: 10%;
                .round {
                  color: #141414;
                  font-size: 14px;
                }
              }
            }
          }
          .addresswrapper {
            border: 1px solid #ebebeb;
            border-radius: 6px;
            width: 60%;
            display: flex;
            flex-direction: column;
            .heading {
              display: flex;
              flex-direction: row;
              padding-block: 10px;
              padding-inline: 20px;
              /* border-bottom: 1px solid #ebebeb; */
              .title {
                width: 50%;
                color: #667085;
                font-size: 14px;
                display: flex;
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
                  width: 50%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                /* .second {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                }
                .third {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 25%;
                  gap: 2px;
                  font-size: 12px;
                  height: 50px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                } */
                .four {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 50%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                }
              }
            }
          }
          .addresswrappertwo {
            border: 1px solid #ebebeb;
            border-radius: 6px;
            width: 60%;
            display: flex;
            flex-direction: column;
            .heading {
              display: flex;
              flex-direction: row;
              padding-inline: 20px;
              /* border-bottom: 1px solid #ebebeb; */
              .title {
                width: 20%;
                color: #667085;
                font-size: 13px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-block: 10px;
                padding-inline: 10px;
              }
              .titley {
                width: 40%;
                color: #667085;
                font-size: 13px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding-block: 10px;
                padding-inline: 10px;
              }
              .titlereps {
                width: 20%;
                color: #667085;
                font-size: 13px;
                display: flex;
                padding-block: 10px;
                flex-direction: row;
                padding-inline: 10px;
                justify-content: center;
                border-right: 1px solid #ebebeb;
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
                .front {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .first {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .second {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  height: 50px;
                  font-size: 12px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .third {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  font-size: 12px;
                  height: 50px;
                  border-right: 1px solid #ebebeb;
                  color: #141414;
                  padding-inline: 10px;
                }
                .four {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  width: 20%;
                  gap: 2px;
                  font-size: 12px;
                  color: #141414;
                  padding-inline: 10px;
                }
              }
            }
          }
        }
        .lastdiv {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          gap: 20px;
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

export default ClientLocationDetails;
