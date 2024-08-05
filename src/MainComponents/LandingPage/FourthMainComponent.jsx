import React from "react";
import styled from "styled-components";
import { ReactComponent as Service } from "../../assets/serviceicon.svg";

const FourthMainComponent = () => {
  return (
    <Flex>
      <div className="cover">
        <div className="down">
          <button className="ourservices">
            {" "}
            <Service />
            Our Features
          </button>
          <div className="right">
            <span>Manage your Campaigns by tracking your</span>
            <span className="campaign">
              Representatives on <span className="grow">De - Faucon.</span>
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
    border-bottom: 1px solid #ededed;
    display: flex;
    flex-direction: column;
    padding-block: 40px;
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

export default FourthMainComponent;
