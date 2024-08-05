import React from "react";
import styled from "styled-components";
import FeaturesCard from "../../Reusable/FeaturesCard";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";
import { ReactComponent as FifthFirst } from "../../assets/fifthfirst.svg";
import { ReactComponent as Biometric } from "../../assets/biometric.svg";
import { ReactComponent as Performance } from "../../assets/performance.svg";
import effective from "../../assets/effective.png";
import comprehensive from "../../assets/comprehensive.png";
import fifthfirst from "../../assets/fifthfirst.png";
import biometric from "../../assets/biometric.png";
import performance from "../../assets/performance.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";

const FifthMainComponent = () => {
  return (
    <Flex>
      <div className="cover">
        <FeaturesCard row={3}>
          <img src={fifthfirst} alt="fifthfirst" style={{ width: "100%" }} />
          <img src={biometric} alt="biometric" style={{ width: "100%" }} />
          <img src={performance} alt="performance" style={{ width: "100%" }} />
          {/* <FifthFirst />
          <Biometric />
          <Performance /> */}
        </FeaturesCard>
        <FeaturesCard row={2}>
          <img src={effective} alt="effective" style={{ width: "100%" }} />
          <img
            src={comprehensive}
            alt="comprehensive"
            style={{ width: "100%" }}
          />
        </FeaturesCard>
        <div className="lastly">
          <div className="down">
            <button className="ourservices">
              {" "}
              <Service />
              Our Industries
            </button>
            <div className="right">
              <span>Regardless of your industry, foster a</span>
              <span className="campaign">
                flourishing<span className="grow">Campaign Management</span>
              </span>
            </div>
          </div>
          <div className="left">
            <button className="book">
              Explore Industry <ArrowCircleRight />
            </button>
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
    border-bottom: 1px solid #ededed;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    padding-bottom: 20px;
    width: 100%;
    gap: 10px;
    .lastly {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .down {
        display: flex;
        flex-direction: column;
        /* padding-top: 60px; */
        align-items: flex-start;
        justify-content: center;
        height: 40vh;
        gap: 10px;
        .ourservices {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 136px;
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
      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-top: 180px;
        .book {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 163px;
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
      }
    }
  }
`;
export default FifthMainComponent;
