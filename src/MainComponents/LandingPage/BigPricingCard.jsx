import React from "react";
import styled from "styled-components";
import { ReactComponent as Mark } from "../../assets/pricingmark.svg";

const BigPricingCard = ({
  name,
  amount,
  per,
  head1,
  submain1,
  submain2,
  submain3,
  submain4,
  head2,
  twosubmain1,
  twosubmain2,
  twosubmain3,
  twosubmain4,
  head3,
  threesubmain1,
  threesubmain2,
  threesubmain3,
  threesubmain4
}) => {
  return (
    <Flex>
      <div className="top">
        <span className="name">{name}</span>
        <div className="amountdiv">
          <span className="amount">{amount}</span>
          <span className="per">{per}</span>
        </div>
      </div>
      <div className="lines" />
      <div className="contents">
        <Mark />
        <div className="contentdiv">
          <span className="content">{head1}</span>
          <div className="submain">
            <span>{submain1}</span>
            <span>{submain2}</span>
            <span>{submain3}</span>
            <span>{submain4}</span>
          </div>
        </div>
      </div>
      <div className="contents">
        <Mark />
        <div className="contentdiv">
          <span className="content">{head2}</span>
          <div className="submain">
            <span>{twosubmain1}</span>
            <span>{twosubmain2}</span>
            <span>{twosubmain3}</span>
            <span>{twosubmain4}</span>
          </div>
        </div>
      </div>
      <div className="contents">
        <Mark />
        <div className="contentdiv">
          <span className="content">{head3}</span>
          <div className="submain">
            <span>{threesubmain1}</span>
            <span>{threesubmain2}</span>
            <span>{threesubmain3}</span>
            <span>{threesubmain4}</span>
          </div>
        </div>
      </div>
    </Flex>
  );
};
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 470px;
  gap: 20px;
  padding-block: 30px;
  padding-inline: 30px;
  border-radius: 25px;
  border: 0.5px 0px 0px 0px;
  opacity: 0px;
  border: 0.5px solid #28385c66;
  background: #f9fbfc;
  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    .name {
      font-size: 14px;
      font-weight: 600;
      line-height: 21.78px;
      text-align: left;
      color: #28385c;
    }
    .amountdiv {
      display: flex;
      flex-direction: row;
      gap: 4px;
      align-items: flex-end;
      .amount {
        font-size: 26px;
        font-weight: 600;
        line-height: 20px;
        text-align: left;
        color: #05060f;
      }
      .per {
        font-size: 10px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        color: #1a87d7;
      }
    }
  }
  .lines {
    background-color: #d3def1;
    border: 0.5px solid #d3def1;
    width: 100%;
    height: 1px;
  }
  .contents {
    display: flex;
    flex-direction: row;
    gap: 10px;
    .contentdiv {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      .content {
        font-size: 14.49px;
        font-weight: 600;
        line-height: 20.7px;
        text-align: left;
        color: #101928;
      }
      .submain {
        display: flex;
        flex-direction: column;
        font-size: 10.42px;
        font-weight: 400;
        line-height: 24.84px;
        text-align: left;
        color: #5a6376;
      }
    }
  }
`;

export default BigPricingCard;
