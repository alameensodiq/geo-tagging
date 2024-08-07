import React from "react";
import styled from "styled-components";

const ThirdIndustryMainPage = ({ card1, card2 }) => {
  return (
    <Flex>
      <img src={card1} alt="pics" className="pics" />
      <img src={card2} alt="pics" className="pics" />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 50px;
  padding-bottom: 40px;
  padding-inline: 65px;
  .pics {
    height: 50%;
    width: 80%;
  }
`;

export default ThirdIndustryMainPage;
