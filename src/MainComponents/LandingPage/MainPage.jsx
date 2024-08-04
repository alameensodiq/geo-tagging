import React from "react";
import styled from "styled-components";
import LandingNavbar from "./LandingNavbar";
import FirstMainComponent from "./FirstMainComponent";

const MainPage = () => {
  return (
    <Flex>
      <LandingNavbar />
      <>
        <FirstMainComponent />
      </>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainPage;
