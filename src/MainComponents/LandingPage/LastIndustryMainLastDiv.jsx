import React from "react";
import styled from "styled-components";
import lastdiv from "../../assets/lastdiv.png";
import lastdivwhite from "../../assets/lastdivwhite.png";
import whity from "../../assets/whity.png";
import { ReactComponent as White } from "../../assets/whitegreat.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const LastIndustryMainLastDiv = ({ other }) => {
  return (
    <Flex other={other} data-aos="fade-left">
      <div className="yes">
        <White />
        <div className="cover">
          <span>Get access to</span>
          <span>‘De - Faucon’</span>
        </div>
        <div className="details">
          <span>
            Signup below to get access to De - Faucon’s updates. We will notify
          </span>
          <span>
            you to know about releases and industry news and insights.
          </span>
        </div>
        <div className="inputdiv">
          <input className="input" />
          <button className="joinus">Join Us</button>
        </div>
        {/* <div className="range">
          <span>
            By subscribing up, you agree to De - Faucon sending marketing
            communications, as described in the
          </span>
          <span>Privacy and Cookies policy</span>
        </div> */}
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #27375b; */
  background-color: #ffffff;
  background-image: ${(props) =>
    props?.other ? `url(${whity})` : `url(${whity})`};
  padding-block: 140px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-block: 200px;
  .yes {
    display: flex;
    flex-direction: column;
    padding-bottom: "50px";
    padding-inline: 65px;
    align-items: center;
    gap: 20px;
    .cover {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 32px;
      font-weight: 600;
      line-height: 34.61px;
      letter-spacing: -0.02em;
      text-align: center;
      color: #27375b;
    }
    .details {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
      align-items: center;
      color: #27375b;
    }
    .range {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
      color: #27375b;
    }
    .inputdiv {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 10px;
      .input {
        width: 442px;
        height: 45.17px;
        padding: 16.08px 18.76px 16.08px 21.44px;
        gap: 10.72px;
        border-radius: 10.72px;
        border: 1.34px solid #d0d5dd;
        outline: none;
        opacity: 0px;
        background: #ffffff;
        font-family: Inter;
        font-size: 21.44px;
        font-weight: 400;
        line-height: 32.17px;
        text-align: left;
        color: #667085;
      }
      .joinus {
        width: 114px;
        height: 45.17px;
        gap: 0px;
        border-radius: 10.72px;
        opacity: 0px;
        border: none;
        background: #28385c;
        color: #ffffff;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #27375b;
    background-image: ${(props) =>
      props?.other ? `url(${lastdivwhite})` : `url(${lastdiv})`};
    padding-top: 140px;
    padding-bottom: 180px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .yes {
      display: flex;
      flex-direction: column;
      padding-bottom: "50px";
      padding-inline: 65px;
      align-items: center;
      gap: 20px;
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
      .details {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        align-items: center;
        color: #ffffff;
      }
      .range {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        color: #ffffff;
      }
      .inputdiv {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
        .input {
          width: 442px;
          height: 45.17px;
          padding: 16.08px 18.76px 16.08px 21.44px;
          gap: 10.72px;
          border-radius: 10.72px;
          border: 1.34px solid #ffffff;
          outline: none;
          opacity: 0px;
          background: #ffffff;
          font-family: Inter;
          font-size: 21.44px;
          font-weight: 400;
          line-height: 32.17px;
          text-align: left;
          color: #667085;
        }
        .joinus {
          width: 114px;
          height: 45.17px;
          gap: 0px;
          border-radius: 10.72px;
          opacity: 0px;
          border: none;
          background: #28385c;
          color: #ffffff;
        }
      }
    }
  }
`;

export default LastIndustryMainLastDiv;
