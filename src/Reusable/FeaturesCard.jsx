import React from "react";
import styled from "styled-components";

const FeaturesCard = ({ children, row }) => {
  return <Flex $row={row}>{children}</Flex>;
};

const Flex = styled.div`
  width: 100%;
  padding-block: 0;
  padding-left: 0px;
  padding-right: 0px;
  display: grid;
  row-gap: 10px;
  column-gap: 50px;
  max-width: 100%;
  grid-template-columns: ${(props) => `repeat(${props.$row}, 1fr)`};

  @media screen and (max-width: 1200px) {
    padding-inline: 0;
    margin-bottom: 20px;
    grid-template-columns: 1fr;
    column-gap: 20px; /* Adjust as needed */
  }

  @media screen and (max-width: 900px) {
    grid-gap: 16px; /* Adjust as needed */
    margin-bottom: 20px;
    grid-template-columns: 1fr;
  }
`;

export default FeaturesCard;
