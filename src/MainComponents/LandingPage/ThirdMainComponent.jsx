import React from "react";
import styled from "styled-components";
import Thirdimage from "../../assets/thirdimage.png";
import { ReactComponent as Transparency } from "../../assets/transparency.svg";
import { ReactComponent as Management } from "../../assets/management.svg";
import { ReactComponent as Efficiency } from "../../assets/efficiency.svg";
import { ReactComponent as Purple } from "../../assets/purplemark.svg";
import { ReactComponent as Image } from "../../assets/Image.svg";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";

const ThirdMainComponent = () => {
  return (
    <Flex>
      <div className="cover">
        <div className="up">
          <div className="left">
            <div className="btgroups">
              <button className="book">
                <Transparency />
                Transparency
              </button>
              <button className="management">
                <Management />
                Management
              </button>
              <button className="efficiency">
                <Efficiency />
                Efficiency
              </button>
            </div>
            <div className="dataaccess">
              <div className="first">
                <div className="metrics">
                  <Purple />
                  <span className="real">Real-Time Data Access</span>
                </div>
                <div className="metrics">
                  <Purple />
                  <span className="real">Detailed Reporting</span>
                </div>
                <div className="metrics">
                  <Purple />
                  <span className="real">Geographic Insights</span>
                </div>
              </div>
              <div className="first">
                <div className="metrics">
                  <Purple />
                  <span className="real">Performance Metrics</span>
                </div>
                <div className="metrics">
                  <Purple />
                  <span className="real">Transparent Data Sources</span>
                </div>
                <div className="metrics">
                  <Purple />
                  <span className="real">Feedback Mechanisms</span>
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="states">
              <span className="state">
                "Our marketing team has significantly improved campaign
                targeting
              </span>
              <span className="state">
                thanks to the real-time data and detailed geographic insights
              </span>
              <span className="state">
                provided by this platform. The interactive dashboards are
                intuitive{" "}
              </span>
              <span className="state">
                and allow us to make data-driven decisions quickly. We've seen a
              </span>
              <span className="state">
                noticeable increase in engagement and conversions."
              </span>
            </div>
            <div className="last">
              <Image />
              <div className="titles">
                <span className="name">Mayowa Peters</span>
                <span className="title">
                  Marketing Director at Global Enterprises
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={Thirdimage} className="thirdimage" alt="Thirdimage" />
          </div>
        </div>
        <div className="down">
          <button className="ourservices">
            {" "}
            <Service />
            How it works
          </button>
          <div className="right">
            <span>Get started with De - Faucon</span>
            <span className="campaign">
              in <span className="grow">three easy steps.</span>
            </span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 65px;
  .cover {
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    display: flex;
    flex-direction: column;
    padding-block: 40px;
    .up {
      width: 100%;
      display: flex;
      flex-direction: row;
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 45%;
        gap: 40px;
        .btgroups {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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
            width: 145px;
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
            width: 124px;
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
        .dataaccess {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 70px;
          .first {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .metrics {
              display: flex;
              flex-direction: row;
              gap: 20px;
              align-items: center;
              .real {
                font-size: 14px;
                font-weight: 600;
                line-height: 19.36px;
                color: #28385c;
              }
            }
          }
        }
        .line {
          background: #ededed;
          height: 2px;
          width: 80%;
        }
        .states {
          display: flex;
          flex-direction: column;
          gap: 2px;
          .state {
            font-size: 16px;
            font-weight: 400;
            line-height: 24.59px;
            color: #777777;
          }
        }
        .last {
          display: flex;
          flex-direction: row;
          gap: 5px;
          .titles {
            display: flex;
            flex-direction: column;
            gap: 4px;
            .name {
              font-size: 11px;
              font-weight: 600;
              line-height: 18.15px;
              color: #000000;
            }
            .title {
              font-size: 11px;
              font-weight: 400;
              line-height: 17.76px;
              color: #777777;
            }
          }
        }
      }
      .right {
        width: 55%;
        .thirdimage {
          width: 100%;
        }
      }
    }
    .down {
      display: flex;
      flex-direction: column;
      padding-inline: 65px;
      /* padding-top: 60px; */
      align-items: center;
      justify-content: center;
      height: 50vh;
      gap: 10px;
      .ourservices {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 126px;
        height: 32px;
        padding: 6.56px 13.8px 7.44px 10.2px;
        border-radius: 29.07px;
        border: 1.16px 0px 0px 0px;
        opacity: 0px;
        font-size: 13px;
        font-weight: 500;
        line-height: 18.15px;
        color: #28385c;
        background: linear-gradient(
          83.05deg,
          rgba(121, 170, 205, 0.08) 17.7%,
          rgba(61, 85, 103, 0.08) 104.55%
        );
        border: 1.16px solid #ededed;
      }
      .right {
        display: flex;
        flex-direction: column;
        font-size: 45px;
        font-weight: 600;
        line-height: 63px;
        letter-spacing: -0.03em;
        color: #28385c;
        .campaign {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          .grow {
            color: #dd4a5d;
          }
        }
      }
    }
  }
`;

export default ThirdMainComponent;
