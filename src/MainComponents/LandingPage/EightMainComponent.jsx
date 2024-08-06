import React from "react";
import styled from "styled-components";
import Map from "../../assets/map.png";

const EightMainComponent = () => {
  return <Flex></Flex>;
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 170px;
  padding-inline: 65px;
  height: 100vh;
  background-color: #28385c;
  background-image: url(${Map});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default EightMainComponent;
