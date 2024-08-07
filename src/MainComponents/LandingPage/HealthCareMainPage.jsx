import React from "react";
import styled from "styled-components";
import FifthProductMainPage from "./FifthProductMainPage";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/friends.png";
import pics1 from "../../assets/master.png";
import pics2 from "../../assets/payroll.png";
import SecondProductMainPage from "./SecondProductMainPage";
import ThirdIndustryMainPage from "./ThirdIndustryMainPage";

const HealthCareMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstIndustryComponent
          retailer="HOME / FEATURES / HEALTHCARE"
          divcover="Give yourself more time to"
          divcover2="devote to what really counts:"
          divcover3="your patients."
          statement="Keep your team in sync, wherever they are"
          pictures={pics}
        />
        <SecondProductMainPage
          button="Health"
          statement1="Fast, reliable campaign software for"
          statement2="your"
          statement3="health sector"
        />
        <ThirdIndustryMainPage card1={pics1} card2={pics2} />
        <FifthProductMainPage white />
        <Footer />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export default HealthCareMainPage;
