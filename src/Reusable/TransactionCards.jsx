import React from "react";
import styled from "styled-components";

const TransactionCards = ({
  transaction,
  title,
  time,
  success,
  percent,
  green,
  red,
  image,
  increase,
  decrease
}) => {
  return (
    <Flex transaction={transaction}>
      <div className="first">
        <span className="title">{title}</span>
        {time ? (
          // <span className='time'>{time}<sup>h</sup></span>
          <span className="time">{time}</span>
        ) : (
          ""
        )}
        {percent
          ? ""
          : // <span className='percent'>{percent}</span>
            ""}
      </div>
      <div className="second">
        {image ? <div className="image">{image}</div> : ""}
        {increase
          ? ""
          : // <span className='increase'>{increase} 8%</span>
            ""}
        {decrease
          ? ""
          : // <span className='decrease'>{decrease} 8%</span>
            ""}
        <span className="lastmonth">vs last month</span>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 134px;
  padding: 20px 20px;
  border-radius: 5px;
  border: 1px;
  gap: 24px;
  justify-content: center;
  border: 1px solid #e2e8f0;
  .first {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    padding-top: 10px;
    .title {
      font-size: 12px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
    .time {
      font-size: 22px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: left;
      gap: 10px;
    }
    .percent {
      font-size: 22px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: left;
      gap: 10px;
    }
    .details {
      display: flex;
      flex-direction: row;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      color: #8d9196;
      gap: 10px;
      align-items: center;
      .success {
        display: flex;
        flex-direction: row;
        gap: 5px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: #027a48;
        align-items: center;
        .image {
          width: 11.67px;
          height: 14.67px;
        }
      }
      .error {
        display: flex;
        flex-direction: row;
        gap: 5px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: #b42318;
        align-items: center;
        .image {
          width: 11.67px;
          height: 14.67px;
        }
      }
    }
  }
  .second {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-block: 10px;
    .lastmonth {
      font-size: 11px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      color: #8d9196;
    }
    .increase {
      display: flex;
      flex-direction: row;
      justify-self: flex-end;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      padding-left: 15px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      color: #006e13;
    }
    .decrease {
      display: flex;
      flex-direction: row;
      justify-self: flex-end;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      padding-left: 15px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      color: #d31f1e;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export default TransactionCards;
