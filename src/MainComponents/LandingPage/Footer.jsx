import React from "react";
import styled from "styled-components";
import { ReactComponent as CopyRight } from "../../assets/copyright.svg";

const Footer = () => {
  return (
    <Flex>
      <div className="line" />
      <div className="foremost">
        <span className="copy">
          <CopyRight />
          Copyright 2024. All rights reserved
        </span>
        <span className="privacy">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #28385c;
  padding-inline: 65px;
  padding-top: 70px;
  padding-bottom: 10px;
  gap: 20px;
  .line {
    width: 100%;
    height: 1px;
    background: #ffffff33;
  }
  .foremost {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ffffff;
    align-items: flex-start;
    height: 30px;
    .copy {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      line-height: 16.94px;
      text-align: left;
    }
    .privacy {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 30px;
      font-size: 12px;
      font-weight: 400;
      line-height: 16.94px;
      text-align: left;
    }
  }
  /* padding-top: 40px; */
`;

export default Footer;
