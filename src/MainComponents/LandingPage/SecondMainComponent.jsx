import React from "react";
import styled from "styled-components";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";

const SecondMainComponent = () => {
  return (
    <Flex>
      <button className="ourservices">
        {" "}
        <Service />
        Value-Add
      </button>
      <div className="right">
        <span>Leverage on De-faucon App</span>
        <span className="campaign">
          and <span className="grow">Grow your business.</span>
        </span>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 65px;
  /* padding-top: 60px; */
  align-items: flex-start;
  justify-content: center;
  height: 50vh;
  gap: 30px;
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
      gap: 5px;
      .grow {
        color: #dd4a5d;
      }
    }
  }
  @media screen and (max-width: 1200px) {
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
      font-size: 25px;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: -0.03em;
      color: #28385c;
      .campaign {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        .grow {
          color: #dd4a5d;
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
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
      font-size: 10px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: -0.03em;
      color: #28385c;
      .campaign {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        .grow {
          color: #dd4a5d;
        }
      }
    }
  }
`;

export default SecondMainComponent;
