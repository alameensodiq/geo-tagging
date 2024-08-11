import React from "react";
import styled from "styled-components";
import { ReactComponent as CopyRight } from "../../assets/copyright.svg";
import { ReactComponent as Falcon } from "../../assets/footfalcon.svg";
import { ReactComponent as Insta } from "../../assets/insta.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as X } from "../../assets/x.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <Flex data-aos="fade-right">
      <div className="foothead">
        <div className="logo">
          <Falcon />
          <div className="socials">
            <Insta />
            <Linkedin />
            <X />
            <Facebook />
          </div>
        </div>
        <div className="prodindustry">
          <div className="titles">
            <span className="head">PRODUCT</span>
            <div className="prices">
              <span className="item">Pricing</span>
              <span className="item">Location-Based Targeting</span>
              <span className="item">Real-Time Tracking</span>
              <span className="item">Advanced Analytics</span>
              <span className="item">Campaign Managemen</span>
            </div>
          </div>
          <div className="titles">
            <span className="head">INDUSTRIES</span>
            <div className="prices">
              <span className="item">Retail</span>
              <span className="item">Healthcare</span>
              <span className="item">Education</span>
              <span className="item">Security</span>
              <span className="item">Explore all</span>
            </div>
          </div>
          <div className="titles">
            <span className="head">RESOURCES</span>
            <div className="prices">
              <span className="item">About us</span>
              <span className="item">Contact us</span>
              <span className="item">Privacy & Terms</span>
            </div>
          </div>
        </div>
      </div>
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
  .foothead {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-block: 20px;
    color: #ffffff;
    .logo {
      display: flex;
      flex-direction: column;
      gap: 50px;
      .socials {
        display: flex;
        flex-direction: row;
        gap: 30px;
      }
    }
    .prodindustry {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 130px;
      .titles {
        display: flex;
        flex-direction: column;
        gap: 50px;
        .head {
          font-size: 15px;
          font-weight: 700;
          line-height: 22.5px;
          text-align: left;
        }
        .prices {
          display: flex;
          flex-direction: column;
          gap: 7px;
          .item {
            font-size: 14px;
            font-weight: 400;
            line-height: 19.36px;
            text-align: left;
          }
        }
      }
    }
  }
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
