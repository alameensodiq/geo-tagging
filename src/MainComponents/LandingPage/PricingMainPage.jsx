import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import LastIndustryMainLastDiv from "./LastIndustryMainLastDiv";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/idcard.png";
import possible from "../../assets/possible.png";
import smile from "../../assets/smile.png";
import possible2 from "../../assets/possible2.png";
import smile2 from "../../assets/smile2.png";
import possible3 from "../../assets/possible3.png";
import smile3 from "../../assets/smile3.png";
import possible4 from "../../assets/possible4.png";
import smile4 from "../../assets/smile4.png";
import SecondProductMainPage from "./SecondProductMainPage";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import Footer from "./Footer";
import PricingLastdiv from "./PricingLastdiv";
import SecondCardsPriceMainFeature from "./SecondCardsPriceMainFeature";

const PricingMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / PRICING"
          second="De - Faucon plans"
          third=""
          fourth="Enjoy a free trial of all features for up to 7 days, with quick setup and no credit card required."
          topimage={""}
          topimage2={""}
          card
          remove
        />
        <SecondCardsPriceMainFeature />
        <SecondProductMainPage
          button=""
          statement1="Find out why De - Faucon is trusted by more"
          statement2="than 6,000+ leading global"
          statement3="companies"
        />
        <div className="images">
          <div className="image">
            <img src={smile2} className="smile" alt="smile" />
            <img src={possible2} className="possible" alt="possible" />
          </div>
          <div className="image">
            <img src={possible} className="possible" alt="possible" />
            <img src={smile} className="smile" alt="smile" />
          </div>
        </div>
        <div className="left">
          <button className="book">
            Read More Success Stories
            <ArrowCircleRight />
          </button>
        </div>
        <PricingLastdiv other />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  .images {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline: 65px;
    padding-block: 50px;
    .image {
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding-inline: 60px;
      .possible {
        width: 72%;
        height: 380px;
      }
      .smile {
        width: 28%;
        height: 380px;
      }
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 50px;
    .book {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 243px;
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

export default PricingMainPage;
