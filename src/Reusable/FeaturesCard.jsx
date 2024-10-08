import React from "react";
import styled from "styled-components";

const FeaturesCard = ({ children, row, reduce }) => {
  return (
    <Flex $row={row} reduce={reduce}>
      {children}
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  padding-block: 0;
  padding-left: ${(props) => (props.reduce ? "40px" : "0px")};
  padding-right: ${(props) => (props.reduce ? "40px" : "0px")};
  display: grid;
  row-gap: 10px;
  column-gap: 30px;
  max-width: 100%;
  grid-template-columns: ${(props) => `repeat(${props.$row}, 1fr)`};

  @media screen and (max-width: 1200px) {
    padding-inline: 0;
    margin-bottom: 20px;
    grid-template-columns: ${(props) => `repeat(${props.$row}, 1fr)`};
    column-gap: 10px;
  }

  @media screen and (max-width: 1180px) {
    padding-inline: 0;
    margin-bottom: 20px;
    grid-template-columns: repeat(2, 1fr); // Two cards per row
    column-gap: 10px;
  }

  @media screen and (max-width: 900px) {
    grid-gap: 16px; /* Adjust as needed */
    margin-bottom: 20px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 350px) {
    grid-gap: 16px; /* Adjust as needed */
    margin-bottom: 20px;
    padding-left: 0;
    padding-right: ${(props) => (props.reduce ? "340px" : "150px")};
    grid-template-columns: 1fr; // One card per row
    justify-items: center; // Center the items
  }
`;

export default FeaturesCard;
