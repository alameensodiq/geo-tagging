import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstMainComponent from "./FirstMainComponent";
import SecondMainComponent from "./SecondMainComponent";
import zIndex from "@mui/material/styles/zIndex";
import ThirdMainComponent from "./ThirdMainComponent";
import FourthMainComponent from "./FourthMainComponent";
import FifthMainComponent from "./FifthMainComponent";
import SixthMainComponent from "./SixthMainComponent";
import SeventhMainComponent from "./SeventhMainComponent";
import EightMainComponent from "./EightMainComponent";

const MainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstMainComponent />
        <SecondMainComponent />
        <ThirdMainComponent />
        <FourthMainComponent />
        <FifthMainComponent />
        <SixthMainComponent />
        <SeventhMainComponent />
        <EightMainComponent />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainPage;
