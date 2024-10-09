import React from "react";
import styled from "styled-components";
import FifthProductMainPage from "./FifthProductMainPage";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/ladycard.png";
import pics1 from "../../assets/pics1.png";
import pics2 from "../../assets/pics2.png";
import SecondProductMainPage from "./SecondProductMainPage";
import ThirdIndustryMainPage from "./ThirdIndustryMainPage";

const IndustryMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstIndustryComponent
          retailer="HOME / FEATURES / Brand Activation Organizations"
          divcover1="Make more sales with De - Faucon"
          divcover2="campaign software that matches"
          divcover3="demand"
          statement="Take your stores to a new level of efficiency"
          pictures={pics}
          reduce
        />
        <SecondProductMainPage
          button="FMCG"
          statement1="Build the best staff schedule and track"
          statement2="time in one powerful "
          statement3="platform"
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
export default IndustryMainPage;
