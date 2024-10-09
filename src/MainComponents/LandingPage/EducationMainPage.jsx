import React from "react";
import styled from "styled-components";
import FifthProductMainPage from "./FifthProductMainPage";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/lightlady.png";
import pics1 from "../../assets/oversee.png";
import pics2 from "../../assets/engage.png";
import SecondProductMainPage from "./SecondProductMainPage";
import ThirdIndustryMainPage from "./ThirdIndustryMainPage";
import FakeFirstIndustryComponent from "./FakeFirstIndustryComponent";

const EducationMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FakeFirstIndustryComponent
          retailer="HOME / FEATURES /  Government Agencies"
          divcover1="Eliminate uncertainty in any"
          divcover2="Agency scheduling."
          divcover3=""
          statement="Keep your team in sync, wherever they are"
          pictures={pics}
          reduce
        />
        <SecondProductMainPage
          button="Government Agencies"
          statement1="Align staff schedules to fulfill teaching"
          statement2="agency"
          statement3="goals"
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
export default EducationMainPage;
