import React from "react";
import styled from "styled-components";
import FifthProductMainPage from "./FifthProductMainPage";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/colleagues.png";
import pics1 from "../../assets/multiple.png";
import pics2 from "../../assets/schedules.png";
import SecondProductMainPage from "./SecondProductMainPage";
import ThirdIndustryMainPage from "./ThirdIndustryMainPage";

const SecurityMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstIndustryComponent
          retailer="HOME / FEATURES / SECURITY"
          divcover="Manage  scheduling &"
          divcover2="management for security staff"
          divcover3="accurately & efficiently"
          statement="24/7 visibility on schedules, location & attendance"
          pictures={pics}
        />
        <SecondProductMainPage
          button="Security"
          statement1="Deploy security teams to multiple"
          statement2=""
          statement3="location"
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
export default SecurityMainPage;
