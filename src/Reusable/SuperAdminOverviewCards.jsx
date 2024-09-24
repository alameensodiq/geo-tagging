import React from "react";
import styled from "styled-components";
import { ReactComponent as Rep } from "../assets/activecase.svg";
import { ReactComponent as Case } from "../assets/activeproject.svg";
import { ReactComponent as Work } from "../assets/activework.svg";
import { ReactComponent as Location } from "../assets/locationoverview.svg";

const SuperAdminOverviewCards = ({
  number1,
  number2,
  number3,
  number4,
  percent1,
  percent2,
  percent3,
  percent4,
  data
}) => {
  return (
    <Flex>
      <div className="totalclientsfirst">
        <div className="up">
          <div className="details">
            <span className="number">
              {data?.CorporateStatistics?.totalCorporates}
            </span>
            <span className="clients">Total Corporates</span>
          </div>
          <Rep />
        </div>
        <div className="down">
          <span className="activediv">
            <span className="active">Active</span>
            {data?.CorporateStatistics?.activeCorporates}
          </span>
          <span className="deactivediv">
            <span className="deactive">Inactive</span>
            {data?.CorporateStatistics?.inActiveCorporates}
          </span>
        </div>
      </div>
      <div className="totalclients">
        <div className="up">
          <div className="details">
            <span className="number">
              {data?.BusinessRepStatistics?.totalBusinessReps}
            </span>
            <span className="clients">Total Business Reps</span>
          </div>
          <Rep />
        </div>
        <div className="down">
          <span className="activediv">
            <span className="active">Active</span>
            {data?.BusinessRepStatistics?.activeBusinessReps}
          </span>
          <span className="deactivediv">
            <span className="deactive">Inactive</span>
            {data?.BusinessRepStatistics?.inActiveBusinessReps}
          </span>
        </div>
      </div>
      <div className="totalemployees">
        <div className="up">
          <div className="details">
            <span className="number">
              {data?.ProjectStatistics?.totalProjects}
            </span>
            <span className="clients">Total Clusters</span>
          </div>
          <Case />
        </div>
        <div className="down">
          <span className="activediv">
            <span className="active">Active</span>
            {data?.ProjectStatistics?.activeProjects}
          </span>
          <span className="deactivediv">
            <span className="deactive">Inactive</span>
            {data?.ProjectStatistics?.inActiveProjects}
          </span>
        </div>
      </div>
      <div className="activeclients">
        <div className="up">
          <div className="details">
            <span className="number">{data?.HoursStatistics?.totalHours}</span>
            <span className="clients">Total hours worked</span>
          </div>
          <Work />
        </div>
        <div className="down">
          <span className="activediv">
            <span className="active">Active</span>
            {data?.HoursStatistics?.activeHours}
          </span>
          <span className="deactivediv">
            <span className="deactive">Inactive</span>
            {data?.HoursStatistics?.inActiveHours}
          </span>
        </div>
      </div>
      <div className="deactivated">
        <div className="up">
          <div className="details">
            <span className="number">{data?.TotalLocationsCount}</span>
            <span className="clients">Total Location</span>
          </div>
          <Location />
        </div>
        {/* <div className="down">
          <span className="activediv">
            <span className="active">Active</span>500
          </span>
          <span className="deactivediv">
            <span className="deactive">Inactive</span>500
          </span>
        </div> */}
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e2e8f0;
  width: 100%;
  justify-content: space-between;
  height: 144px;
  padding: 19px;
  border-radius: 5px;
  .totalclientsfirst {
    display: flex;
    flex-direction: column;
    width: 17%;
    border-right: 1px solid #e2e8f0;
    padding-bottom: 20px;
    gap: 15px;
    padding-right: 20px;
    padding-left: 10px;
    /* background: red; */
    .up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .details {
        display: flex;
        flex-direction: column;
        gap: 2px;
        .number {
          font-size: 28px;
          font-weight: 600;
          line-height: 42px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
        .clients {
          font-size: 12px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #5a6376;
        }
      }
    }
    .down {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 5px;
      font-size: 11px;
      .activediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .active {
          color: #34c759;
        }
      }
      .deactivediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .deactive {
          color: #ff0007;
        }
      }
    }
  }
  .totalclients {
    display: flex;
    flex-direction: column;
    width: 15%;
    border-right: 1px solid #e2e8f0;
    padding-bottom: 20px;
    gap: 15px;
    padding-right: 10px;
    /* background: red; */
    .up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .details {
        display: flex;
        flex-direction: column;
        gap: 2px;
        .number {
          font-size: 28px;
          font-weight: 600;
          line-height: 42px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
        .clients {
          font-size: 12px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #5a6376;
        }
      }
    }
    .down {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 5px;
      font-size: 11px;
      .activediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .active {
          color: #34c759;
        }
      }
      .deactivediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .deactive {
          color: #ff0007;
        }
      }
    }
  }
  .totalemployees {
    display: flex;
    flex-direction: column;
    width: 16%;
    padding-bottom: 20px;
    gap: 15px;
    padding-right: 20px;
    border-right: 1px solid #e2e8f0;
    /* background: yellow; */
    .up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .details {
        display: flex;
        flex-direction: column;
        gap: 2px;
        .number {
          font-size: 28px;
          font-weight: 600;
          line-height: 42px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
        .clients {
          font-size: 12px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
      }
    }
    .down {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 10px;
      font-size: 11px;
      .activediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .active {
          color: #34c759;
        }
      }
      .deactivediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .deactive {
          color: #ff0007;
        }
      }
    }
  }
  .activeclients {
    display: flex;
    flex-direction: column;
    width: 16%;
    padding-bottom: 20px;
    gap: 10px;
    padding-right: 5px;
    border-right: 1px solid #e2e8f0;
    /* background: blue; */
    .up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .number {
          font-size: 28px;
          font-weight: 600;
          line-height: 42px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
        .clients {
          font-size: 12px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
      }
    }
    .down {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 10px;
      font-size: 11px;
      .activediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .active {
          color: #34c759;
        }
      }
      .deactivediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .deactive {
          color: #ff0007;
        }
      }
    }
  }
  .deactivated {
    display: flex;
    flex-direction: column;
    width: 14%;
    padding-bottom: 20px;
    gap: 10px;
    padding-right: 0px;
    /* background: #34c759; */
    .up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .details {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .number {
          font-size: 28px;
          font-weight: 600;
          line-height: 42px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
        .clients {
          font-size: 12px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: #1e1b39;
        }
      }
    }
    .down {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 5px;
      font-size: 11px;
      .activediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .active {
          color: #34c759;
        }
      }
      .deactivediv {
        display: flex;
        flex-direction: row;
        gap: 5px;
        color: #474b50;
        .deactive {
          color: #ff0007;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    border: 1px solid #e2e8f0;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    padding: 20px;
    border-radius: 5px;
    gap: 40px;
    .totalclientsfirst {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 20px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 10px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .totalclients {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 20px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 10px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .totalemployees {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 20px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 10px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .activeclients {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 20px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 6px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .deactivated {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 20px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            display: flex;
            flex-wrap: wrap;
            font-size: 6px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    border: 1px solid #e2e8f0;
    width: 100%;
    justify-content: space-between;
    height: 100%;
    padding: 20px;
    border-radius: 5px;
    gap: 54px;
    .totalclientsfirst {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .totalclients {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .totalemployees {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .activeclients {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
    .deactivated {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-bottom: 20px;
      gap: 15px;
      padding-right: 20px;
      border-right: none !important;
      .up {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          .number {
            font-size: 28px;
            font-weight: 600;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
          .clients {
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
            color: #1e1b39;
          }
        }
      }
      .down {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        color: #8d9196;
        font-size: 14px;
        .percent {
          display: flex;
          flex-direction: row;
        }
      }
    }
  }
`;

export default SuperAdminOverviewCards;
