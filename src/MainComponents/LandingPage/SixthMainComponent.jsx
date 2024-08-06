import React from "react";
import styled from "styled-components";
import { ReactComponent as Management } from "../../assets/management.svg";
import { ReactComponent as Retail } from "../../assets/Retail.svg";
import { ReactComponent as Healthcare } from "../../assets/Healthcare.svg";
import { ReactComponent as Construct } from "../../assets/construct.svg";
import { ReactComponent as Education } from "../../assets/education.svg";
import { ReactComponent as Hotel } from "../../assets/hotel.svg";
import { ReactComponent as Security } from "../../assets/security.svg";
import { ReactComponent as Chain } from "../../assets/chain.svg";
import seller from "../../assets/seller.png";

const SixthMainComponent = () => {
  return (
    <Flex>
      <div className="btgroups">
        <button className="book">
          <Retail />
          Retail
        </button>
        <button className="management">
          <Healthcare />
          Healthcare
        </button>
        <button className="efficiency">
          <Construct />
          Construction
        </button>
        <button className="management">
          <Education />
          Education
        </button>
        <button className="management">
          <Hotel />
          Hotel
        </button>
        <button className="management">
          <Security />
          Security
        </button>
      </div>
      <div className="seller">
        <div className="sellerfirst">
          <span className="retail">Retail</span>
          <div className="ensures">
            <span className="datum">
              Geo campaign ensures that sales reps visit the assigned stores as
              scheduled
            </span>
            <span className="datum">
              The platform can provide real-time updates on visit duration and
              activities
            </span>
            <span className="datum">
              performed, improving accountability and productivity. Attendance
              management
            </span>
            <span className="datum">
              helps in tracking working hours and overtime, ensuring fair
              compensation and
            </span>
            <span className="datum">performance evaluation.</span>
          </div>
          <div className="lines" />
          <div className="chain">
            <Chain />
            <div className="ensures">
              <span className="datum">
                A retail chain can use geo tracking to monitor the locations and
              </span>
              <span className="datum">
                movements of field sales representatives.
              </span>
            </div>
          </div>
        </div>
        <img src={seller} alt="seller" className="content" />
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 40px;
  padding-inline: 65px;
  gap: 50px;
  width: 100%;
  .btgroups {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    .book {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 134px;
      height: 43px;
      padding: 13px 12px 13px 12px;
      gap: 8px;
      border: 1px solid #27375b;
      border-radius: 25px;
      opacity: 0px;
      background: #27375b;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #ffffff;
      outline: none;
      cursor: pointer;
      box-shadow: 0px 0px 0px 1px #27375b;
      /* box-shadow: 0px 1px 1px 0px #0000001a; */
    }
    .management {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-size: 12px;
      font-weight: 500;
      line-height: 22.44px;
      letter-spacing: 0.02em;
      text-align: left;
      width: auto;
      height: 43px;
      padding: 14.58px 13.46px 14.58px 13.46px;
      gap: 8.98px;
      border-radius: 22.39px;
      border: 0.9px;
      opacity: 0px;
      color: #27375b;
      box-shadow: 0px 1.12px 1.12px 0px #0000001a;
      background: #ffffff;
      border: 0.9px solid #ededed;
    }
    .efficiency {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-size: 12px;
      font-weight: 500;
      line-height: 22.44px;
      letter-spacing: 0.02em;
      text-align: left;
      width: auto;
      height: 43px;
      padding: 14.58px 13.46px 14.58px 13.46px;
      gap: 8.98px;
      border-radius: 22.39px;
      border: 0.9px;
      opacity: 0px;
      color: #27375b;
      box-shadow: 0px 1.12px 1.12px 0px #0000001a;
      background: #ffffff;
      border: 0.9px solid #ededed;
    }
  }
  .seller {
    display: flex;
    flex-direction: row;
    width: 95%;
    background: #1a87d7;
    height: auto;
    padding-inline: 30px;
    padding-block: 20px;
    border: 0.3px solid #eedddd;
    box-shadow: 0px 25px 30px 5px #ededed;
    border-radius: 25px;
    .sellerfirst {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: flex-start;
      gap: 40px;
      padding: 10px;
      .retail {
        font-size: 26px;
        font-weight: 600;
        line-height: 32.76px;
        letter-spacing: -0.03em;
        text-align: center;
        color: #e8f4fc;
      }
      .ensures {
        display: flex;
        flex-direction: column;
        .datum {
          font-size: 14px;
          font-weight: 500;
          line-height: 21.86px;
          color: #e8f4fc;
        }
      }
      .lines {
        width: 100%;
        height: 1px;
        background-color: #e8f4fc;
      }
      .chain {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        .ensures {
          display: flex;
          flex-direction: column;
          .datum {
            font-size: 14px;
            font-weight: 500;
            line-height: 21.86px;
            color: #e8f4fc;
          }
        }
      }
    }
    .content {
      width: 50%;
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding-block: 40px;
    padding-inline: 65px;
    gap: 50px;
    width: 100%;
    .btgroups {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 10px;
      .book {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 134px;
        height: 43px;
        padding: 13px 12px 13px 12px;
        gap: 8px;
        border: 1px solid #27375b;
        border-radius: 25px;
        opacity: 0px;
        background: #27375b;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 0px 0px 1px #27375b;
        /* box-shadow: 0px 1px 1px 0px #0000001a; */
      }
      .management {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 12px;
        font-weight: 500;
        line-height: 22.44px;
        letter-spacing: 0.02em;
        text-align: left;
        width: auto;
        height: 43px;
        padding: 14.58px 13.46px 14.58px 13.46px;
        gap: 8.98px;
        border-radius: 22.39px;
        border: 0.9px;
        opacity: 0px;
        color: #27375b;
        box-shadow: 0px 1.12px 1.12px 0px #0000001a;
        background: #ffffff;
        border: 0.9px solid #ededed;
      }
      .efficiency {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        font-size: 12px;
        font-weight: 500;
        line-height: 22.44px;
        letter-spacing: 0.02em;
        text-align: left;
        width: auto;
        height: 43px;
        padding: 14.58px 13.46px 14.58px 13.46px;
        gap: 8.98px;
        border-radius: 22.39px;
        border: 0.9px;
        opacity: 0px;
        color: #27375b;
        box-shadow: 0px 1.12px 1.12px 0px #0000001a;
        background: #ffffff;
        border: 0.9px solid #ededed;
      }
    }
    .seller {
      display: flex;
      flex-direction: row;
      width: 95%;
      background: #1a87d7;
      height: auto;
      padding-inline: 30px;
      padding-block: 20px;
      border: 0.3px solid #eedddd;
      box-shadow: 0px 25px 30px 5px #ededed;
      border-radius: 25px;
      .sellerfirst {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: flex-start;
        gap: 40px;
        padding: 10px;
        .retail {
          font-size: 26px;
          font-weight: 600;
          line-height: 32.76px;
          letter-spacing: -0.03em;
          text-align: center;
          color: #e8f4fc;
        }
        .ensures {
          display: flex;
          flex-direction: column;
          .datum {
            font-size: 11px;
            font-weight: 500;
            line-height: 21.86px;
            color: #e8f4fc;
          }
        }
        .lines {
          width: 100%;
          height: 1px;
          background-color: #e8f4fc;
        }
        .chain {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          .ensures {
            display: flex;
            flex-direction: column;
            .datum {
              font-size: 11px;
              font-weight: 500;
              line-height: 21.86px;
              color: #e8f4fc;
            }
          }
        }
      }
      .content {
        width: 50%;
      }
    }
  }
`;

export default SixthMainComponent;
