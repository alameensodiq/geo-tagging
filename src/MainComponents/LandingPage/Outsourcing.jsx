import React from "react";
import styled from "styled-components";
import FifthProductMainPage from "./FifthProductMainPage";
import Footer from "./Footer";
import LandingNavbar from "./LandingNavbar";
import FirstIndustryComponent from "./FirstIndustryComponent";
import pics from "../../assets/caller.png";
import pics1 from "../../assets/scalable.png";
import pics2 from "../../assets/team.png";
import SecondProductMainPage from "./SecondProductMainPage";
import ThirdIndustryMainPage from "./ThirdIndustryMainPage";
import FakeFirstIndustryComponent from "./FakeFirstIndustryComponent";

const Outsourcing = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FakeFirstIndustryComponent
          retailer="HOME / FEATURES / Outsourcing Companies"
          divcover1="Never miss a beat of task with "
          divcover2="De - Faucon"
          divcover3=""
          statement="Ensure on-time appointments and efficiency"
          pictures={pics}
          reduce
        />
        <SecondProductMainPage
          button="Outsourcing Companies"
          statement1="Efficient campaign software for"
          statement2=""
          statement3="outsourcing businesses"
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
export default Outsourcing;
