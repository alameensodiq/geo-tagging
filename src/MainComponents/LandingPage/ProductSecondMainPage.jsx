import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/phone.png";
import card1 from "../../assets/smilinglady.png";
import card2 from "../../assets/gdpr.png";
import realtime from "../../assets/locationcard.png";
import analytics from "../../assets/clockin.png";
import customized from "../../assets/identifycard.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";
import ThirdProductMainPage from "./ThirdProductMainPage";
import FourthProductMainPage from "./FourthProductMainPage";
import FifthProductMainPage from "./FifthProductMainPage";

const ProductSecondMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / REAL-TIME TRACKING"
          second="Experience the Power of Real-Time Tracking"
          third=""
          fourth="Identify the precise location of your representative"
          topimage={image1}
          topimage2={""}
        />
        <SecondProductMainPage
          button="Real-Time Tracking"
          statement1="Make prompt, location-specific decisions to"
          statement2="increase the efficacy of your"
          statement3="campaign."
        />
        <ThirdProductMainPage
          master1={card1}
          master2={card2}
          title1="Location Data Collection"
          firststatement1="It involves gathering precise geographic"
          firststatement2="information about users, which can then"
          firststatement3="be used to enhance marketing strategies"
          firststatement4="deliver personalized content, and improve"
          firststatement5="user engagement"
          title2="Compliance"
          secondstatement1="We take the trust and safety of our customers"
          secondstatement2="seriously. We undergo annual audits and we're"
          secondstatement3="GDPR and CCPA compliant"
          secondstatement4=""
        />
        <FourthProductMainPage
          track="Clock in and enable your"
          wit=""
          clarity="Attendance."
          cardfirst={analytics}
          cardsecond={realtime}
          cardthird={customized}
        />
        <FifthProductMainPage />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductSecondMainPage;
