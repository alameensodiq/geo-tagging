import React from "react";
import styled from "styled-components";
import Map from "../../assets/map.png";

const EightMainComponent = () => {
  return (
    <Flex>
      <div className="block">
        <div className="right">
          <span className="campaign">
            Choose <span className="grow">De - Faucon.</span>for an
          </span>
          <span>industry-leading experience</span>
        </div>
        <div className="support">
          <div className="supporting">
            <span className="first">Supporting</span>
            <span className="number">56,374</span>
            <span className="work">Workplace</span>
          </div>
          <div className="supporting2">
            <span className="first">Used by</span>
            <span className="number">912,683</span>
            <span className="work">Representatives</span>
          </div>
          <div className="supporting3">
            <span className="first">Over</span>
            <span className="number">427,292</span>
            <span className="work">Campaign</span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 170px;
  padding-inline: 65px;
  height: 1000px;
  background-color: #28385c;
  background-image: url(${Map});
  background-size: cover;
  background-repeat: no-repeat;

  .block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 34px;
    .right {
      display: flex;
      flex-direction: column;
      font-size: 35px;
      font-weight: 600;
      line-height: 53px;
      letter-spacing: -0.03em;
      padding-right: 390px;
      color: #ffffff;
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
    .support {
      display: flex;
      flex-direction: row;
      gap: 23px;
      .supporting {
        width: 133px;
        height: 135px;
        /* padding: 28px 31px 27px 20px; */
        gap: 0px;
        border-radius: 25px;
        opacity: 0px;
        background: #dd4a5d;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .first {
          font-size: 14px;
          font-weight: 400;
          line-height: 24.2px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .number {
          font-size: 25px;
          font-weight: 700;
          line-height: 48.41px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .work {
          font-size: 14px;
          font-weight: 600;
          line-height: 24.2px;
          letter-spacing: -0.03em;
          text-align: left;
        }
      }
      .supporting2 {
        width: 133px;
        height: 135px;
        /* padding: 28px 31px 27px 20px; */
        gap: 0px;
        border-radius: 25px;
        opacity: 0px;
        background: #27375b;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .first {
          font-size: 14px;
          font-weight: 400;
          line-height: 24.2px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .number {
          font-size: 25px;
          font-weight: 700;
          line-height: 48.41px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .work {
          font-size: 14px;
          font-weight: 600;
          line-height: 24.2px;
          letter-spacing: -0.03em;
          text-align: left;
        }
      }
      .supporting3 {
        width: 133px;
        height: 135px;
        /* padding: 28px 31px 27px 20px; */
        gap: 0px;
        border-radius: 25px;
        opacity: 0px;
        background: #7c65e0;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .first {
          font-size: 14px;
          font-weight: 400;
          line-height: 24.2px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .number {
          font-size: 25px;
          font-weight: 700;
          line-height: 48.41px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .work {
          font-size: 14px;
          font-weight: 600;
          line-height: 24.2px;
          letter-spacing: -0.03em;
          text-align: left;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .block {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-bottom: 74px;
      .right {
        display: flex;
        flex-direction: column;
        font-size: 35px;
        font-weight: 600;
        line-height: 53px;
        letter-spacing: -0.03em;
        padding-right: 250px;
        color: #ffffff;
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
      .support {
        display: flex;
        flex-direction: row;
        gap: 23px;
        .supporting {
          width: 133px;
          height: 135px;
          /* padding: 28px 31px 27px 20px; */
          gap: 0px;
          border-radius: 25px;
          opacity: 0px;
          background: #dd4a5d;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .first {
            font-size: 14px;
            font-weight: 400;
            line-height: 24.2px;
            letter-spacing: -0.03em;
            text-align: left;
          }
          .number {
            font-size: 25px;
            font-weight: 700;
            line-height: 48.41px;
            letter-spacing: -0.03em;
            text-align: left;
          }
          .work {
            font-size: 14px;
            font-weight: 600;
            line-height: 24.2px;
            letter-spacing: -0.03em;
            text-align: left;
          }
        }
        .supporting2 {
          width: 133px;
          height: 135px;
          /* padding: 28px 31px 27px 20px; */
          gap: 0px;
          border-radius: 25px;
          opacity: 0px;
          background: #27375b;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .first {
            font-size: 14px;
            font-weight: 400;
            line-height: 24.2px;
            letter-spacing: -0.03em;
            text-align: left;
          }
          .number {
            font-size: 25px;
            font-weight: 700;
            line-height: 48.41px;
            letter-spacing: -0.03em;
            text-align: left;
          }
          .work {
            font-size: 14px;
            font-weight: 600;
            line-height: 24.2px;
            letter-spacing: -0.03em;
            text-align: left;
          }
        }
        .supporting3 {
          width: 133px;
          height: 135px;
          /* padding: 28px 31px 27px 20px; */
          gap: 0px;
          border-radius: 25px;
          opacity: 0px;
          background: #7c65e0;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .first {
            font-size: 14px;
            font-weight: 400;
            line-height: 24.2px;
            letter-spacing: -0.03em;
            text-align: left;
          }
          .number {
            font-size: 25px;
            font-weight: 700;
            line-height: 48.41px;
            letter-spacing: -0.03em;
            text-align: left;
          }
          .work {
            font-size: 14px;
            font-weight: 600;
            line-height: 24.2px;
            letter-spacing: -0.03em;
            text-align: left;
          }
        }
      }
    }
  }
`;

export default EightMainComponent;
