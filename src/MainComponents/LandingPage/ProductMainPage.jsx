import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import card1 from "../../assets/card.png";
import card2 from "../../assets/card2.png";
import realtime from "../../assets/realtime.png";
import analytics from "../../assets/analytics.png";
import customized from "../../assets/customized.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";
import ThirdProductMainPage from "./ThirdProductMainPage";
import FourthProductMainPage from "./FourthProductMainPage";

const ProductMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / LOCATION-BASED TARGETING"
          second="Utilizes geographic data to deliver personalized"
          third="marketing messages"
          fourth="Keep track of representative location and attendance with us"
          topimage={image1}
          topimage2={image2}
        />
        <SecondProductMainPage
          button="Location-Based Targeting"
          statement1="Monitoring the geographic locations of"
          statement2=""
          statement3="representatives"
        />
        <ThirdProductMainPage
          master1={card1}
          master2={card2}
          title1="Geo Fencing"
          firststatement1="Create virtual boundaries around specific"
          firststatement2="locations to trigger actions (e.g., sending"
          firststatement3="notifications or ads) when representatives"
          firststatement4="or  enter or exit these areas"
          title2="Tracking Representative Movement"
          secondstatement1="This is a core feature of geo campaign platforms"
          secondstatement2="enabling businesses to gather and analyze real-time "
          secondstatement3="and historical location data of their representatives. "
          secondstatement4=""
        />
        <FourthProductMainPage
          track="Track your representatives"
          with="with"
          clarity="clarity."
          cardfirst={analytics}
          cardsecond={realtime}
          cardthird={customized}
        />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProductMainPage;
