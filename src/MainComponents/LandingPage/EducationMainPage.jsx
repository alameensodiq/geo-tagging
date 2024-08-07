import React from "react";
import styled from "styled-components";
import FifthProductMainPage from "./FifthProductMainPage";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/madam.png";
import pics1 from "../../assets/oversee.png";
import pics2 from "../../assets/engage.png";
import SecondProductMainPage from "./SecondProductMainPage";
import ThirdIndustryMainPage from "./ThirdIndustryMainPage";

const EducationMainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstIndustryComponent
          retailer="HOME / FEATURES / EDUCATION"
          divcover="Eliminate uncertainty in"
          divcover2="education staff scheduling."
          divcover3=""
          statement="Adjust staff schedules to align with evolving class timetables."
          pictures={pics}
        />
        <SecondProductMainPage
          button="Education"
          statement1="Align staff schedules to fulfill teaching"
          statement2=""
          statement3="requirements"
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
