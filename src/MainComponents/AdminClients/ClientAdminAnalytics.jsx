import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { ModalButton } from "../../bits/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import Tables from "../../bits/Tables";
import { CorporateBusinessRep } from "../../Store/Apis/CorporateBusinessRep";
import AppUserModal from "../../Modal/AppUserModal";
import { useNavigate } from "react-router-dom";
import { CorporateProject } from "../../Store/Apis/CorporateProject";
import Pagination from "../../Reusable/Pagination";
import { CorporateProjectAnalytics } from "../../Store/Apis/CorporateProjectAnalytics";
import { CorporateRepAnalytics } from "../../Store/Apis/CorporateRepAnalytics";
import { AllCorporateReps } from "../../Store/Apis/AllCorporateReps";
import toast from "react-hot-toast";

const ClientAdminAnalytics = ({ title }) => {
  const [step, setStep] = useState(0);
  const [activated, SetActivate] = useState(true);
  const [pend, SetPend] = useState(false);
  const [id, setId] = useState("");
  const [projectId, setprojectId] = useState("");
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
  const [startDate2, setStartDate2] = useState(new Date("2022-01-01"));
  console.log(startDate2);
  const [endDate2, setEndDate2] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const dateInputRef = useRef(null);
  const dateInputRef2 = useRef(null);
  const dateInputRef3 = useRef(null);
  const dateInputRef4 = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState("activate");
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [activater, setActivater] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const savedPermissions = JSON.parse(sessionStorage.getItem("permissions"));

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    dispatch(CorporateProjectAnalytics({ startDate, endDate, projectId }));
    dispatch(CorporateRepAnalytics({ startDate2, endDate2, id }));
    dispatch(AllCorporateReps());
    dispatch(CorporateBusinessRep({ searcher, currentPage, statuses }));
    dispatch(CorporateProject({ searcher, currentPage, statuses }));
    if (reload) {
      dispatch(CorporateProjectAnalytics({ startDate, endDate, projectId }));
      dispatch(CorporateRepAnalytics({ startDate2, endDate2, id }));
      dispatch(CorporateBusinessRep({ searcher, currentPage, statuses }));
      dispatch(CorporateProject({ searcher, currentPage, statuses }));
      setReload(false);
    }
  }, [
    reload,
    startDate,
    startDate2,
    endDate,
    endDate2,
    id,
    projectId,
    statuses
  ]);

  const { allcorporatereps, authenticatingallcorporatereps } = useSelector(
    (state) => state.businessrep
  );
  console.log(allcorporatereps?.data?.data);

  const { project, authenticatingproject } = useSelector(
    (state) => state.project
  );
  console.log(project?.data?.data);

  const { corporateprojectanalytics, authenticatingcorporateprojectanalytics } =
    useSelector((state) => state.corporateprojectanalytics);
  console.log(corporateprojectanalytics?.data);

  const { corporaterepanalytics, authenticatingcorporaterepanalytics } =
    useSelector((state) => state.corporaterepanalytics);
  console.log(corporaterepanalytics?.data);

  const next = corporateprojectanalytics?.data?.meta?.next;
  const previous = corporateprojectanalytics?.data?.meta?.prev;
  const totalPosts = corporateprojectanalytics?.data?.meta?.totalCount;

  const next2 = corporaterepanalytics?.data?.meta?.next;
  const previous2 = corporaterepanalytics?.data?.meta?.prev;
  const totalPosts2 = corporaterepanalytics?.data?.meta?.totalCount;

  const paginate = (number) => {
    //  setSorted(tran)
    setCurrentPage(number - 1);
    setActivater(number);
  };

  const activate = corporateprojectanalytics?.data?.data?.filter(
    (item) => item?.isActive === true
  );
  const inactivate = corporateprojectanalytics?.data?.data?.filter(
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
    setStartDate2(new Date("2022-01-01"));
    setEndDate2(new Date(Date.now() + 3600 * 1000 * 24));
    setCurrentPage(0);
    setActivater(1);
    setTimeout(() => {
      setFirst("pending");
    }, [500]);
  };
  const Download = () => {
    console.log("Starting download function");

    // Check if subhistory data is available
    if (
      !corporaterepanalytics?.data ||
      corporaterepanalytics.data.length === 0
    ) {
      toast.error("No data available for download");
      return;
    }

    // Extract headers from the first item
    const headers = Object.keys(corporaterepanalytics.data[0]);

    // Identify headers related to 'amount'
    const amountHeaders = headers.filter((header) =>
      header.toLowerCase().includes("amount")
    );
    console.log("Filtered Headers:", amountHeaders);

    // Prepare the header row
    const headerRow = headers.join(",");
    console.log("Header Row:", headerRow);

    // Prepare values for each row, replacing 'amount' values with the 'NGN' value
    const rows = corporaterepanalytics.data
      .map((item) => {
        return headers
          .map((header) => {
            // If header is an 'amount' header, replace with NGN value
            if (amountHeaders.includes(header) && item[header]) {
              // Return the NGN value if available
              return item[header].NGN || ""; // Replace with NGN value if it exists
            }
            return item[header];
          })
          .join(",");
      })
      .join("\n");

    console.log("Filtered Values:", rows);

    // Combine header row and values into CSV format
    const csv = [headerRow, rows].join("\n");
    console.log("CSV Content:", csv);

    // Create Blob and URL for download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.download = "Rep-Analytics.csv";
    a.href = url;
    a.click();

    // Cleanup
    a.remove();
    URL.revokeObjectURL(url);

    console.log("Download triggered");
  };
  const Download2 = () => {
    console.log("Starting download function");

    // Check if subhistory data is available
    if (
      !corporateprojectanalytics?.data ||
      corporateprojectanalytics.data.length === 0
    ) {
      toast.error("No data available for download");
      return;
    }

    // Extract headers from the first item
    const headers = Object.keys(corporateprojectanalytics.data[0]);

    // Identify headers related to 'amount'
    const amountHeaders = headers.filter((header) =>
      header.toLowerCase().includes("amount")
    );
    console.log("Filtered Headers:", amountHeaders);

    // Prepare the header row
    const headerRow = headers.join(",");
    console.log("Header Row:", headerRow);

    // Prepare values for each row, replacing 'amount' values with the 'NGN' value
    const rows = corporateprojectanalytics.data
      .map((item) => {
        return headers
          .map((header) => {
            // If header is an 'amount' header, replace with NGN value
            if (amountHeaders.includes(header) && item[header]) {
              // Return the NGN value if available
              return item[header].NGN || ""; // Replace with NGN value if it exists
            }
            return item[header];
          })
          .join(",");
      })
      .join("\n");

    console.log("Filtered Values:", rows);

    // Combine header row and values into CSV format
    const csv = [headerRow, rows].join("\n");
    console.log("CSV Content:", csv);

    // Create Blob and URL for download
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.download = "Cluster-Analytics.csv";
    a.href = url;
    a.click();

    // Cleanup
    a.remove();
    URL.revokeObjectURL(url);

    console.log("Download triggered");
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
              <span className="name">Analytics</span>
            </div>
            <span className="about">
              Drill down to see your Business rep performance across projects
            </span>
          </div>
        </div>
        <div className="table">
          <div className="statuses">
            <div
              onClick={() => setActivate()}
              className={`${activated ? "active" : "status"}`}
            >
              <span>Business Reps Analytics</span>
            </div>
            <div
              onClick={() => setPending()}
              className={`${pend ? "active" : "status"}`}
            >
              <span>Cluster Analytics</span>
            </div>
          </div>

          {activated ? (
            <>
              <div className="wrapper">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    paddingInline: "20px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "60%",
                      gap: "40px"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        width: "30%"
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>Business Rep</span>
                      <select
                        style={{
                          width: "100%",
                          height: "30px",
                          borderColor: "#EBEBEB",
                          borderRadius: "5px",
                          background: "#FBFBFB",
                          color: "#848484",
                          outline: "none"
                        }}
                        onChange={(e) => setId(e.target.value)}
                      >
                        <option value={""}>All</option>
                        {allcorporatereps?.data?.data?.map((item) => (
                          <option value={item?.id}>
                            {" "}
                            {item?.firstName}
                            {item?.lastName}
                          </option>
                        ))}
                        {/* <option>All</option> */}
                      </select>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        width: "30%"
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>Date</span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px"
                        }}
                      >
                        <input
                          ref={dateInputRef}
                          style={{
                            position: "absolute",
                            zIndex: 1000,
                            visibility: "hidden"
                          }}
                          type="date"
                          onChange={(e) => {
                            console.log("Selected date:", e.target.value);
                            setStartDate2(new Date(e.target.value));
                            // setShowDatePicker(false); // Hide after selection
                          }}
                          autoFocus // Ensures it pops up immediately
                        />

                        <input
                          ref={dateInputRef2}
                          style={{
                            position: "absolute",
                            zIndex: 1000,
                            visibility: "hidden"
                          }}
                          type="date"
                          onChange={(e) => {
                            console.log("Selected date:", e.target.value);
                            setEndDate2(new Date(e.target.value));
                            // setShowDatePicker(false); // Hide after selection
                          }}
                          autoFocus // Ensures it pops up immediately
                        />

                        <div
                          style={{
                            width: "50%",
                            height: "30px",
                            border: "1px solid #EBEBEB",
                            borderRadius: "5px",
                            background: "#FBFBFB",
                            color: "#848484",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            paddingLeft: "10px",
                            fontSize: "12px",
                            userSelect: "none" // Prevents text selection
                          }}
                          onClick={() => {
                            console.log("sodiq");
                            dateInputRef.current?.showPicker(); // Programmatically trigger date input
                          }}
                        >
                          {formatDate(startDate2)}
                        </div>
                        <div
                          style={{
                            width: "50%",
                            height: "30px",
                            border: "1px solid #EBEBEB",
                            borderRadius: "5px",
                            background: "#FBFBFB",
                            color: "#848484",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            paddingLeft: "10px",
                            fontSize: "12px",
                            userSelect: "none" // Prevents text selection
                          }}
                          onClick={() => {
                            console.log("sodiq");
                            dateInputRef2.current?.showPicker(); // Programmatically trigger date input
                          }}
                        >
                          {formatDate(endDate2)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ModalButton
                    // onClick={() => setStep(21)}
                    onClick={() => Download()}
                    background
                    color
                    exportdownload
                    remove
                    title="Export History"
                  />
                </div>
                <Tables
                  setId={setId}
                  businessrepanalytics
                  data={corporaterepanalytics?.data}
                  setStep={setStep}
                />
                {corporateprojectanalytics?.data?.meta?.totalCount >= 10 && (
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    paddingInline: "20px"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "60%",
                      gap: "40px"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        width: "30%"
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>Cluster</span>
                      <select
                        style={{
                          width: "100%",
                          height: "30px",
                          borderColor: "#EBEBEB",
                          borderRadius: "5px",
                          background: "#FBFBFB",
                          color: "#848484",
                          outline: "none"
                        }}
                        onChange={(e) => setprojectId(e.target.value)}
                      >
                        <option value={""}>All</option>
                        {project?.data?.data?.map((item) => (
                          <option value={item?.id}> {item?.name}</option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        width: "30%"
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>Date</span>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "10px"
                        }}
                      >
                        <input
                          ref={dateInputRef3}
                          style={{
                            position: "absolute",
                            zIndex: 1000,
                            visibility: "hidden"
                          }}
                          type="date"
                          onChange={(e) => {
                            console.log("Selected date:", e.target.value);
                            setStartDate(new Date(e.target.value));
                            // setShowDatePicker(false); // Hide after selection
                          }}
                          autoFocus // Ensures it pops up immediately
                        />

                        <input
                          ref={dateInputRef4}
                          style={{
                            position: "absolute",
                            zIndex: 1000,
                            visibility: "hidden"
                          }}
                          type="date"
                          onChange={(e) => {
                            console.log("Selected date:", e.target.value);
                            setEndDate(new Date(e.target.value));
                            // setShowDatePicker(false); // Hide after selection
                          }}
                          autoFocus // Ensures it pops up immediately
                        />

                        <div
                          style={{
                            width: "50%",
                            height: "30px",
                            border: "1px solid #EBEBEB",
                            borderRadius: "5px",
                            background: "#FBFBFB",
                            color: "#848484",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            paddingLeft: "10px",
                            fontSize: "12px",
                            userSelect: "none" // Prevents text selection
                          }}
                          onClick={() => {
                            console.log("sodiq");
                            dateInputRef3.current?.showPicker(); // Programmatically trigger date input
                          }}
                        >
                          {formatDate(startDate)}
                        </div>
                        <div
                          style={{
                            width: "50%",
                            height: "30px",
                            border: "1px solid #EBEBEB",
                            borderRadius: "5px",
                            background: "#FBFBFB",
                            color: "#848484",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            paddingLeft: "10px",
                            fontSize: "12px",
                            userSelect: "none" // Prevents text selection
                          }}
                          onClick={() => {
                            console.log("sodiq");
                            dateInputRef4.current?.showPicker(); // Programmatically trigger date input
                          }}
                        >
                          {formatDate(endDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ModalButton
                    // onClick={() => setStep(21)}
                    onClick={() => Download2()}
                    background
                    color
                    exportdownload
                    remove
                    title="Export History"
                  />
                </div>
                <Tables
                  setId={setId}
                  clusteranalytics
                  data={corporateprojectanalytics?.data}
                  setStep={setStep}
                />
                {corporateprojectanalytics?.data?.meta?.totalCount >= 10 && (
                  <Pagination
                    set={activater}
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts2}
                    paginate={paginate}
                    previous={previous2}
                    next={next2}
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
        gap: 10px;
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
          width: 200px;
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
          width: 200px;
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
        position: relative;
      }
    }
  }
`;

export default ClientAdminAnalytics;
