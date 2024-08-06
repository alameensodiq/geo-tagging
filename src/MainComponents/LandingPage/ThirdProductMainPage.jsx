import React from "react";
import styled from "styled-components";

const ThirdProductMainPage = ({
  master1,
  master2,
  title1,
  firststatement1,
  firststatement2,
  firststatement3,
  firststatement4,
  firststatement5,
  secondstatement1,
  secondstatement2,
  secondstatement3,
  secondstatement4,
  secondstatement5,
  title2
}) => {
  return (
    <Flex>
      <div className="topper">
        <div className="container">
          <span className="title">{title1}</span>
          <div className="details">
            <span className="detail">{firststatement1}</span>
            <span className="detail">{firststatement2}</span>
            <span className="detail">{firststatement3}</span>
            <span className="detail">{firststatement4}</span>
            <span className="detail">{firststatement5}</span>
          </div>
        </div>
        <div className="visa">
          <img src={master1} className="card" alt="master1" />
        </div>
      </div>
      <div className="topper">
        <div className="visa2">
          <img src={master2} className="card" alt="master2" />
        </div>
        <div className="container">
          <span className="title">{title2}</span>
          <div className="details">
            <span className="detail">{secondstatement1}</span>
            <span className="detail">{secondstatement2}</span>
            <span className="detail">{secondstatement3}</span>
            <span className="detail">{secondstatement4}</span>
            <span className="detail">{secondstatement5}</span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-inline: 65px;
  padding-block: 90px;
  .topper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-inline: 90px;
    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding-left: 100px;
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 35.28px;
        letter-spacing: -0.02em;
        text-align: left;
        color: #28385c;
      }
      .details {
        display: flex;
        flex-direction: column;
        .detail {
          font-size: 15px;
          font-weight: 400;
          line-height: 24.59px;
          letter-spacing: 0.01em;
          text-align: left;
          color: #6e7782;
        }
      }
    }
    .visa {
      padding-left: 180px;
      .card {
        height: 330px;
      }
    }
    .visa2 {
      .card {
        height: 330px;
      }
    }
  }
`;

export default ThirdProductMainPage;
