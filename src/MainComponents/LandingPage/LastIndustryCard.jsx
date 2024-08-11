import React from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

const LastIndustryCard = ({
  name,
  content1,
  content2,
  content3,
  content4,
  Imagelogo
}) => {
  return (
    <Flex data-aos="fade-right">
      <div className="wrapper">
        {Imagelogo}
        <span className="name">{name}</span>
        <div className="contents">
          <span className="content">{content1}</span>
          <span className="content">{content2}</span>
          <span className="content">{content3}</span>
          <span className="content">{content4}</span>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  width: auto;
  /* height: 270px; */
  border: 10px solid #d3def140;
  border-radius: 25px;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    padding: 17px 15px 16px 15px;
    opacity: 0px;
    border-radius: 25px;
    background: #ffffff;
    .contents {
      display: flex;
      flex-direction: column;
      .content {
        font-size: 12px;
        font-weight: 400;
        line-height: 21.86px;
        text-align: left;
        color: #274079;
      }
    }
    .name {
      font-size: 16px;
      font-weight: 600;
      line-height: 25.2px;
      letter-spacing: -0.03em;
      text-align: left;
      color: #1a87d7;
    }
  }
`;

export default LastIndustryCard;
