import React from "react";
import styled from "styled-components";
import lastdiv from "../../assets/customerlastdivs.png";
import lastdivwhite from "../../assets/lastdivwhite.png";
import { ReactComponent as Insta } from "../../assets/instawhite.svg";
import { ReactComponent as Linked } from "../../assets/linkedinwhite.svg";
import { ReactComponent as X } from "../../assets/xwhite.svg";
import { ReactComponent as Facebbok } from "../../assets/facebookwhite.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const LastCustomerDiv = ({ other }) => {
  return (
    <Flex other={other} data-aos="fade-left">
      <div className="yes">
        <div className="cover">
          <span>Let’s get social</span>
        </div>
        <div className="socials">
          <Insta />
          <Linked />
          <X />
          <Facebbok />
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #27375b;
  background-image: url(${lastdiv});
  padding-block: 240px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .yes {
    display: flex;
    flex-direction: column;
    padding-bottom: "50px";
    padding-inline: 65px;
    align-items: center;
    gap: 90px;
    .cover {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 32px;
      font-weight: 600;
      line-height: 34.61px;
      letter-spacing: -0.02em;
      text-align: center;
      color: #ffffff;
    }
    .socials {
      display: flex;
      flex-direction: row;
      gap: 15px;
      align-items: center;
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #27375b;
    background-image: url(${lastdiv});
    padding-block: 240px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .yes {
      display: flex;
      flex-direction: column;
      padding-bottom: "50px";
      padding-inline: 65px;
      align-items: center;
      gap: 90px;
      .cover {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 32px;
        font-weight: 600;
        line-height: 34.61px;
        letter-spacing: -0.02em;
        text-align: center;
        color: #ffffff;
      }
      .socials {
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
      }
    }
  }
`;

export default LastCustomerDiv;
