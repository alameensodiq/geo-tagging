import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/project.png";
import image2 from "../../assets/image2.png";
import card1 from "../../assets/assigncard.png";
import card2 from "../../assets/verve.png";
import realtime from "../../assets/performancy.png";
import analytics from "../../assets/tracking.png";
import customized from "../../assets/payment.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";
import ThirdProductMainPage from "./ThirdProductMainPage";
import FourthProductMainPage from "./FourthProductMainPage";
import FifthProductMainPage from "./FifthProductMainPage";

const CampaignProductMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / CAMPAIGN MANAGEMENT"
          second="Tracking error risk?Not with De-Faucon’s"
          third="Campaign Management"
          fourth="Our campaign management ensures well-coordinated marketing efforts"
          topimage={image1}
          topimage2={""}
        />
        <SecondProductMainPage
          button="Campaign Management"
          statement1="Consider your tracking error risk"
          statement2=""
          statement3="covered"
        />
        <ThirdProductMainPage
          master1={card1}
          master2={card2}
          title1="Campaign Planning"
          firststatement1="It involves setting clear goals to assign"
          firststatement2="campaign and identifying the campaign"
          firststatement3="location to measure success."
          firststatement4=""
          title2="Geographic Segmentation"
          secondstatement1="Use De-Faucon geo-targeting features to focus on"
          secondstatement2="specific cities and regions of your campaign"
          secondstatement3=""
          secondstatement4=""
        />
        <FourthProductMainPage
          track="Integrated Campaign management"
          wit="that just"
          clarity="works"
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

export default CampaignProductMainPage;
