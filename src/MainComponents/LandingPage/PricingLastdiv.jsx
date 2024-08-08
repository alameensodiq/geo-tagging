import React from "react";
import styled from "styled-components";
import lastdiv from "../../assets/lastdiv.png";
import lastdivwhite from "../../assets/lastdivwhite.png";
import { ReactComponent as White } from "../../assets/whitegreat.svg";

const PricingLastdiv = ({ other }) => {
  return (
    <Flex other={other}>
      <div className="yes">
        <div className="right">
          <span>De - Faucon simplifies the process of </span>
          <span className="campaign">
            expanding campaign management
            <span className="grow">teams</span>
          </span>
        </div>
        <div className="wrapper">
          <div className="wrap">
            <span className="first">Supporting</span>
            <span className="second">56,374+</span>
            <span className="third">Workplace</span>
          </div>
          <div className="wrap">
            <span className="first">Used by</span>
            <span className="second">912,683+</span>
            <span className="third">Representatives</span>
          </div>
          <div className="wrap">
            <span className="first">Over</span>
            <span className="second">427,292+</span>
            <span className="third">Campaign</span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #27375b;
  background-image: ${(props) =>
    props?.other ? `url(${lastdivwhite})` : `url(${lastdiv})`};
  padding-block: 140px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-block: 350px;
  .yes {
    display: flex;
    flex-direction: column;
    padding-bottom: "50px";
    padding-inline: 65px;
    align-items: center;
    gap: 40px;
    .right {
      flex-direction: column;
      font-size: 30px;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: -0.03em;
      text-align: center;
      color: white;
      display: flex;
      .grow {
        color: #dd4a5d;
      }
      .campaign {
        display: flex;
        flex-direction: row;
        gap: 4px;
      }
    }
    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 45px;
      .wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        .first {
          font-size: 18px;
          font-weight: 400;
          line-height: 33.89px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .second {
          font-size: 35px;
          font-weight: 700;
          line-height: 60.51px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        .third {
          font-size: 22px;
          font-weight: 600;
          line-height: 33.89px;
          letter-spacing: -0.03em;
          text-align: left;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #27375b;
    background-image: ${(props) =>
      props?.other ? `url(${lastdivwhite})` : `url(${lastdiv})`};
    padding-top: 140px;
    padding-bottom: 180px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .yes {
      display: flex;
      flex-direction: column;
      padding-bottom: "50px";
      padding-inline: 65px;
      align-items: center;
      gap: 20px;
      .cover {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 32px;
        font-weight: 600;
        line-height: 34.61px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #ffffff;
      }
      .details {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        align-items: center;
        color: #ffffff;
      }
      .range {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        color: #ffffff;
      }
      .inputdiv {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        .input {
          width: 442px;
          height: 45.17px;
          padding: 16.08px 18.76px 16.08px 21.44px;
          gap: 10.72px;
          border-radius: 10.72px;
          border: 1.34px solid #ffffff;
          outline: none;
          opacity: 0px;
          background: #ffffff;
          font-family: Inter;
          font-size: 21.44px;
          font-weight: 400;
          line-height: 32.17px;
          text-align: left;
          color: #667085;
        }
        .joinus {
          width: 114px;
          height: 45.17px;
          gap: 0px;
          border-radius: 10.72px;
          opacity: 0px;
          border: none;
          background: #28385c;
          color: #ffffff;
        }
      }
    }
  }
`;

export default PricingLastdiv;
