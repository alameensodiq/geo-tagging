import React from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const FourMainCard = ({
  number,
  name,
  image,
  statement1,
  statement2,
  statement3,
  statement4
}) => {
  return (
    <Flex data-aos="fade-right">
      <div className="top">
        <span className="circle">{number}</span>
        <span className="name">{name}</span>
      </div>
      <div className="image">{image}</div>
      <div className="statements">
        <span className="statement">{statement1}</span>
        <span className="statement">{statement2}</span>
        <span className="statement">{statement3}</span>
        <span className="statement">{statement4}</span>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  height: auto;
  padding: 41px 41px 30px 40px;
  gap: 0px;
  border-radius: 25px;
  border: 0.3px 0px 0px 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 0.3px solid #eedddd;
  box-shadow: 0px 25px 30px 5px #ededed;
  .top {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    .circle {
      width: 35px;
      height: 35px;
      gap: 0px;
      opacity: 0px;
      font-size: 15px;
      font-weight: 400;
      line-height: 26.63px;
      letter-spacing: 0.02em;
      border-radius: 50%;
      color: #ffffff;
      background: #1a87d7;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .name {
      font-size: 18px;
      font-weight: 600;
      line-height: 31.5px;
      letter-spacing: 0.02em;
      text-align: left;
      color: #1a87d7;
    }
  }
  .image {
    width: auto;
    height: auto;
  }
  .statements {
    display: flex;
    flex-direction: column;
    .statement {
      font-size: 13px;
      font-weight: 500;
      line-height: 24.59px;
      letter-spacing: 0.02em;
      color: rgba(110, 119, 130, 1);
    }
  }

  @media screen and (max-width: 1200px) {
    max-width: 360px;
    padding: 31px 31px 20px 30px;
    gap: 0px;
    border-radius: 25px;
    border: 0.3px 0px 0px 0px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 0.3px solid #eedddd;
    box-shadow: 0px 25px 30px 5px #ededed;
    .top {
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
      justify-content: flex-start;
      .circle {
        width: 35px;
        height: 35px;
        gap: 0px;
        opacity: 0px;
        font-size: 15px;
        font-weight: 400;
        line-height: 26.63px;
        letter-spacing: 0.02em;
        border-radius: 50%;
        color: #ffffff;
        background: #1a87d7;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .name {
        font-size: 14px;
        font-weight: 600;
        line-height: 31.5px;
        letter-spacing: 0.02em;
        text-align: left;
        color: #1a87d7;
      }
    }
    .image {
      width: auto;
      height: auto;
    }
    .statements {
      display: flex;
      flex-direction: column;
      .statement {
        font-size: 13px;
        font-weight: 500;
        line-height: 24.59px;
        letter-spacing: 0.02em;
        color: rgba(110, 119, 130, 1);
      }
    }
  }
`;

export default FourMainCard;
