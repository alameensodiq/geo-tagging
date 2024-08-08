import React from "react";
import PricingCard from "./PricingCard";
import FeaturesCard from "../../Reusable/FeaturesCard";
import styled from "styled-components";
import BigPricingCard from "./BigPricingCard";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";

const SecondCardsPriceMainFeature = () => {
  return (
    <Flex>
      <div className="featurediv">
        <FeaturesCard reduce row={2}>
          <BigPricingCard
            name="STANDARD PLUS PLA"
            amount="0"
            per="per business rep/month"
            head1="1-99 Business Reps"
            submain1="You are eligible to registering a total number"
            submain2="of 100 business reps on this plan. You can"
            submain3="always upgrade to a higher plan to register"
            submain4="more business reps. "
            head2="Location"
            twosubmain1="You are eligible to assigning any number of "
            twosubmain2="locations to any project that is ongoing."
            twosubmain3=""
            twosubmain4=""
            head3="Place holder"
            threesubmain1="Lorem ipsium lorem ipsium lorem ipsium"
            threesubmain2=" lorem ipsium lorem ipsium "
            threesubmain3=""
            threesubmain4=""
          />
          <BigPricingCard
            name="ENTERPRISE PLUS PLAN"
            amount="3,000"
            per="per business rep/month"
            head1="1-99 Business Reps"
            submain1="You are eligible to registering a total number"
            submain2="of 100 business reps on this plan. You can"
            submain3="always upgrade to a higher plan to register"
            submain4="more business reps. "
            head2="Location"
            twosubmain1="You are eligible to assigning any number of "
            twosubmain2="locations to any project that is ongoing."
            twosubmain3=""
            twosubmain4=""
            head3="Place holder"
            threesubmain1="Lorem ipsium lorem ipsium lorem ipsium"
            threesubmain2=" lorem ipsium lorem ipsium "
            threesubmain3=""
            threesubmain4=""
          />
        </FeaturesCard>
        <div className="left">
          <button className="book">
            Book a Demo <ArrowCircleRight />
          </button>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 65px;
  padding-top: 60px;
  gap: 40px;
  .featurediv {
    padding-inline: 180px;
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
`;

export default SecondCardsPriceMainFeature;
