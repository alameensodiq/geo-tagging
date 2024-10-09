import React from "react";
import styled from "styled-components";
import last from "../../assets/last.png";
import dive from "../../assets/divein.png";
import Benefitbackground from "../../assets/benefitbackground.png";
import { ReactComponent as ArrowCircleRight } from "../../assets/darkright.svg";
import { ReactComponent as Degreat } from "../../assets/de.svg";
import { ReactComponent as Markbenefit } from "../../assets/markbenefit.svg";
import { useNavigate } from "react-router-dom";

const FakeThirdLastIndustry = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      <div className="benefits">Benefits</div>
      <div className="wrapy">
        <div className="containy">
          <span className="covery">
            <Markbenefit />
            Precision Targeting
          </span>
          <span className="covery">
            <Markbenefit />
            Real-Time Insights
          </span>
          <span className="covery">
            <Markbenefit />
            Customer-Centric Approach
          </span>
        </div>
        <div className="containy">
          <span className="covery">
            <Markbenefit />
            Data-Driven Strategies
          </span>
          <span className="covery">
            <Markbenefit />
            Transparency and Accountability
          </span>
          <span className="covery">
            <Markbenefit />
            Innovation and Accountability
          </span>
        </div>
        <div className="containy">
          <span className="covery">
            <Markbenefit />
            Collaboration and Integration
          </span>
          <span className="covery">
            <Markbenefit />
            Compliance and Security
          </span>
          <span className="covery">
            <Markbenefit />
            Sustainability
          </span>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  padding-block: 60px;
  /* padding-top: "50px";
  padding-bottom: "30px"; */
  padding-inline: 65px;
  gap: 40px;
  /* background-color: #1a87d7; */
  background-image: url(${Benefitbackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .benefits {
    display: flex;
    /* padding-inline: 15px; */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 30px;
    color: white;
    /* width: 100%; */
  }
  .wrapy {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
    .containy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      color: white;
      gap: 10px;
      .covery {
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default FakeThirdLastIndustry;
