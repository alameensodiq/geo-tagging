import React from "react";
import styled from "styled-components";
import { ReactComponent as Rep } from "../assets/activecase.svg";
import { ReactComponent as Increase } from "../assets/increase.svg";

const CorporateReportCards = ({ percent, statement, amount }) => {
  return (
    <Flex>
      <div className="lefty">
        <Rep className="pull" />
        <div className="cardsituation">
          <span className="total">{statement}</span>
          <span className="amount">{amount}</span>
        </div>
      </div>
      {/* <div className="righty">
        <div className="increasediv">
            <Increase/>
            <span className="percentage">{percent}%</span>
        </div>
        <span className="versus">vs today</span>
      </div> */}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding-inline: 30px;
  padding-block: 35px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  height: 150px;
  .lefty {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 85%;
    height: 100%;
    .pull {
      margin-top: 20px;
    }
    .cardsituation {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .total {
        font-size: 14px;
        font-weight: 400;
        color: #5a6376;
      }
      .amount {
        color: #1e1b39;
        font-size: 28px;
        font-weight: 600;
      }
    }
  }
  .righty {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 30px;
    .increasediv {
      display: flex;
      flex-direction: row;
      gap: 15px;
      align-items: center;
      .percentage {
        font-size: 14px;
        color: #006e13;
        font-weight: 500;
      }
    }
    .versus {
      font-size: 12px;
      font-weight: 500;
      color: #aeaeae;
    }
  }
`;

export default CorporateReportCards;
