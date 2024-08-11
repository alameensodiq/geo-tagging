import React from "react";
import curve from "../../assets/curve.png";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const FourthProductMainPage = ({
  cardfirst,
  cardsecond,
  cardthird,
  track,
  wit,
  clarity
}) => {
  return (
    <Flex data-aos="fade-left">
      <div className="right">
        <span className="track">{track}</span>
        <span className="campaign">
          {wit} <span className="grow">{clarity}</span>
        </span>
      </div>
      <div className="ground-cards">
        <img src={cardfirst} alt="cardfirst" className="card" />
        <img src={cardsecond} alt="cardsecond" className="card" />
        <img src={cardthird} alt="cardthird" className="card" />
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 140px;
  padding-bottom: 50px;
  padding-inline: 65px;
  background-image: url(${curve});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 40px;
  .right {
    display: flex;
    flex-direction: column;
    font-size: 45px;
    width: 100%;
    font-weight: 600;
    line-height: 53px;
    letter-spacing: -0.03em;

    padding-left: 370px;
    color: #ffffff;
    .track {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
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
  .ground-cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .card {
      height: 550px;
      width: 370px;
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 140px;
    padding-bottom: 50px;
    padding-inline: 65px;
    background-image: url(${curve});
    background-size: cover;
    background-repeat: no-repeat;
    gap: 40px;
    .right {
      display: flex;
      flex-direction: column;
      font-size: 38px;
      width: 100%;
      font-weight: 600;
      line-height: 53px;
      letter-spacing: -0.03em;

      padding-left: 370px;
      color: #ffffff;
      .track {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
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
    .ground-cards {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;
      .card {
        height: 360px;
        width: 330px;
      }
    }
  }
`;

export default FourthProductMainPage;
