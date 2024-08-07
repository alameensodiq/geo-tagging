import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowCircleRight } from "../../assets/darkright.svg";
import { ReactComponent as CardFalcon } from "../../assets/cardfalcon.svg";

const DecoratedLastIndustryCard = ({ name, content1, content2 }) => {
  return (
    <Flex>
      <div className="wrapper">
        <button className="book">
          Get a Demo <ArrowCircleRight />
        </button>
        <span className="name">{name}</span>
        <div className="contents">
          <span className="content">{content1}</span>
          <span className="content">{content2}</span>
        </div>
        <CardFalcon />
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  width: auto;
  /* height: 270px; */
  border: 10px solid #d3def140;
  border-radius: 25px;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 17px 15px 16px 15px;
    opacity: 0px;
    border-radius: 25px;
    background: #1a87d7;
    .book {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 163px;
      height: 43px;
      padding: 13px 12px 13px 12px;
      gap: 8px;
      border: 1px solid #ffffff;
      border-radius: 20px;
      opacity: 0px;
      background: #ffffff;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #28385c;
      outline: none;
      cursor: pointer;
      /* box-shadow: 0px 0px 0px 1px #27375b; */
      /* box-shadow: 0px 1px 1px 0px #0000001a; */
    }
    .contents {
      display: flex;
      flex-direction: column;
      align-items: center;
      .content {
        font-size: 14px;
        font-weight: 400;
        line-height: 21.86px;
        text-align: center;
        color: #ffffff;
      }
    }
    .name {
      font-size: 17px;
      font-weight: 600;
      line-height: 25.2px;
      letter-spacing: -0.03em;
      text-align: left;
      color: #ffffff;
    }
  }
`;

export default DecoratedLastIndustryCard;
