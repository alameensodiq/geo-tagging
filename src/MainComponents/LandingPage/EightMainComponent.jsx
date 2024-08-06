import React from "react";
import styled from "styled-components";
import Map from "../../assets/map.png";

const EightMainComponent = () => {
  return (
    <Flex>
      <div className="right">
        <span className="campaign">
          Choose <span className="grow">De - Faucon.</span>for an
        </span>
        <span>industry-leading experience</span>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top: 170px;
  padding-inline: 65px;
  height: 1000px;
  background-color: #28385c;
  background-image: url(${Map});
  background-size: cover;
  background-repeat: no-repeat;

  .right {
    display: flex;
    flex-direction: column;
    font-size: 35px;
    font-weight: 600;
    line-height: 53px;
    letter-spacing: -0.03em;
    padding-right: 390px;
    color: #ffffff;
    .campaign {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .grow {
        color: #dd4a5d;
      }
    }
  }
`;

export default EightMainComponent;
