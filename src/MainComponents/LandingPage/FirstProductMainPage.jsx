import React from "react";
import styled from "styled-components";
import Product from "../../assets/productfirst.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";

const FirstProductMainPage = ({
  first,
  second,
  third,
  fourth,
  topimage,
  topimage2
}) => {
  return (
    <Flex topimage2={topimage2}>
      <span className="first">{first}</span>
      <div className="div">
        <span className="second">{second}</span>
        <span className="second">{third}</span>
      </div>
      <span className="fourth">{fourth}</span>
      <div className="left">
        <button className="book">
          Book a Demo <ArrowCircleRight />
        </button>
      </div>
      <div className="images">
        <img src={topimage} alt="topimage" className="topimage" />
        <img src={topimage2} alt="topimage" className="topimage" />
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 80px;
  padding-inline: 65px;
  gap: 20px;
  background-image: url(${Product});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  .first {
    font-size: 13px;
    font-style: italic;
    font-weight: 500;
    line-height: 18.15px;
    text-align: left;
    color: #1a87d7;
  }
  .div {
    display: flex;
    flex-direction: column;
    .second {
      font-size: 34px;
      font-weight: 600;
      line-height: 50.4px;
      text-align: center;
      color: #28385c;
    }
  }
  .fourth {
    font-size: 15px;
    font-weight: 400;
    line-height: 31px;
    text-align: center;
    color: #28385c;
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    .book {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 143px;
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
  .images {
    display: flex;
    flex-direction: row;
    gap: 10px;
    .topimage {
      height: 320px;
    }
  }
`;

export default FirstProductMainPage;
