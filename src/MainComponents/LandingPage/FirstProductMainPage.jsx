import React from "react";
import styled from "styled-components";
import Product from "../../assets/productfirst.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import FeaturesCard from "../../Reusable/FeaturesCard";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const FirstProductMainPage = ({
  first,
  second,
  third,
  fourth,
  topimage,
  topimage2,
  wide,
  remove,
  card,
  fifth,
  sixth
}) => {
  const navigate = useNavigate();
  return (
    <Flex topimage2={topimage2} wide={wide} data-aos="fade-right">
      <span className="first">{first}</span>
      <div className="div">
        <span className="second">{second}</span>
        <span className="second">{third}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span className="fourth">{fourth}</span>
        <span className="fourth">{fifth}</span>
        <span className="fourth">{sixth}</span>
      </div>
      {remove ? (
        ""
      ) : (
        <div className="left">
          <button className="book" onClick={() => navigate("/demo")}>
            Book a Demo <ArrowCircleRight />
          </button>
        </div>
      )}
      {card && (
        <div className="featurediv">
          <FeaturesCard reduce row={3}>
            <PricingCard
              name="FREE PLAN"
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
            <PricingCard
              name="STANDARD PLAN"
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
            <PricingCard
              name="ENTERPRISE PLAN"
              amount="6,000"
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
        </div>
      )}
      <div className="images">
        {topimage && <img src={topimage} alt="topimage" className="topimage" />}
        {topimage2 && (
          <img src={topimage2} alt="topimage" className="topimage" />
        )}
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
  gap: 30px;
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
      height: ${(props) => (props.topimage2 ? "320px" : "440px")};
      width: ${(props) =>
        props.topimage2
          ? `${props.topimage2}`
          : props?.wide
          ? "790px"
          : "680px"};
    }
  }
  .featurediv {
    padding-inline: 180px;
  }
`;

export default FirstProductMainPage;
