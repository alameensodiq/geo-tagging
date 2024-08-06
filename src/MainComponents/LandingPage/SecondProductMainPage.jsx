import React from "react";
import styled from "styled-components";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";

const SecondProductMainPage = ({
  button,
  statement1,
  statement2,
  statement3
}) => {
  return (
    <Flex>
      <div className="lastly">
        <div className="down">
          <button className="ourservices">
            {" "}
            <Service />
            {button}
          </button>
          <div className="right">
            <span>{statement1}</span>
            <span className="campaign">
              {statement2} <span className="grow">{statement3}</span>
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
  border-bottom: 1px solid #ededed;
  padding-inline: 65px;
  .lastly {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .down {
      display: flex;
      flex-direction: column;
      /* padding-top: 60px; */
      align-items: center;
      justify-content: center;
      height: 40vh;
      gap: 5px;
      .ourservices {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 226px;
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
        font-size: 35px;
        font-weight: 600;
        line-height: 53px;
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
`;

export default SecondProductMainPage;
