import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstProductMainPage from "./FirstProductMainPage";
import image1 from "../../assets/toggle.png";
import image2 from "../../assets/image2.png";
import card1 from "../../assets/rate.png";
import card2 from "../../assets/clockincard.png";
import realtime from "../../assets/cardclockin.png";
import analytics from "../../assets/repcard.png";
import customized from "../../assets/perfcard.png";
import SecondProductMainPage from "./SecondProductMainPage";
import Footer from "./Footer";
import ThirdProductMainPage from "./ThirdProductMainPage";
import FourthProductMainPage from "./FourthProductMainPage";
import FifthProductMainPage from "./FifthProductMainPage";
import Aos from "aos";
import "aos/dist/aos.css";

const PunctualityRate = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstProductMainPage
          first="HOME / FEATURES / Punctuality Rate tracking"
          second="Accurate measurement of on-time"
          third="performance"
          fourth="Identify areas for improvement in on-time performance"
          topimage={image1}
          topimage2={""}
        />
        <SecondProductMainPage
          button="Punctuality Rate tracking"
          statement1="Efficiently monitor on-time"
          statement2=""
          statement3="performance"
        />
        <ThirdProductMainPage
          master1={card1}
          master2={card2}
          title1="Punctuality Rate"
          firststatement1="Track progress and measure success with"
          firststatement2="accurate punctuality data"
          firststatement3=""
          firststatement4=""
          title2="Clock in Fast"
          secondstatement1="You can start shifts quickly using facial recognition and"
          secondstatement2="location check."
          secondstatement3=""
          secondstatement4=""
        />
        <FourthProductMainPage
          track="Deliver campaigns on time,"
          wit=""
          clarity="every time"
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

export default PunctualityRate;
