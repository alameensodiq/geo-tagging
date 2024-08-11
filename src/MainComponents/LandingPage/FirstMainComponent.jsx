import React from "react";
import styled from "styled-components";
import { ReactComponent as Built } from "../../assets/built.svg";
import { ReactComponent as PlayStore } from "../../assets/playstore.svg";
import { ReactComponent as AppStore } from "../../assets/appstore.svg";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import { ReactComponent as AvatarGroups } from "../../assets/AvatarGroups.svg";
import { ReactComponent as Sliding } from "../../assets/Sliding.svg";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";
import first from "../../assets/first.png";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const FirstMainComponent = () => {
  const navigate = useNavigate();
  return (
    <Flex data-aos="fade-left">
      {/* <img src={first} alt="wow" /> */}
      <div className="top">
        <button className="button">
          <Built />
          Built for Geo location Tracking
        </button>
        <div className="anime">
          <span className="boosts">Boosts your</span>
          <span className="productive">
            <TypeAnimation
              sequence={[
                "productivity",
                1000,
                "awareness",
                1000,
                "efficiency",
                1000
              ]}
              wrapper="span"
              speed={50}
              className="productive"
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="statements">
          <span className="statement">
            Streamline your operations and experience the future of tracking and
          </span>
          <span className="statement">
            management with De - Faucon. Let us help you achieve greater
            efficiency,
          </span>
          <span className="statement">productivity, and peace of mind.</span>
        </div>
        <div className="stores">
          <PlayStore />
          <AppStore />
        </div>
        <div className="avatar">
          <AvatarGroups />
          <span className="downloads">Over 500+ downloads already</span>
        </div>
        <button className="book" onClick={() => navigate("/demo")}>
          Book a Demo <ArrowCircleRight />
        </button>
      </div>
      <div className="bottom">
        <span className="trusted">
          Trusted by the fastest-growing companies
        </span>
        <div className="sliding">
          <Marquee
            style={{ gap: "70px" }}
            direction="left"
            speed={120}
            loop={0}
            delay={20}
          >
            <Sliding />
          </Marquee>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 190px;
  padding-bottom: 40px;
  padding-inline: 65px;
  gap: 170px;
  background-image: url(${first});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .top {
    display: flex;
    flex-direction: column;
    gap: 18px;
    .button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      align-items: center;
      width: 220px;
      height: 28px;
      padding: 4px 9px 4px 0px;
      border: 1px solid #28385c;
      border-radius: 20px;
      opacity: 0px;
      background: #28385c;
      font-size: 12px;
      font-weight: 500;
      line-height: 16.94px;
      color: #ffffff;
    }
    .anime {
      display: flex;
      flex-direction: row;
      /* font-family: Sora; */
      font-size: 80px;
      font-weight: 600;
      line-height: 100.8px;
      letter-spacing: -0.03em;
      gap: 20px;
      .boosts {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* font-family: Sora; */
        font-size: 67px;
        font-weight: 600;
        line-height: 100.8px;
        letter-spacing: -0.03em;
        color: #28385c;
      }
      .productive {
        font-size: 67px;
        color: #dd4a5d;
        font-weight: 600;
        line-height: 100.8px;
        letter-spacing: -0.03em;
      }
    }
    .statements {
      display: flex;
      flex-direction: column;
      gap: 0px;
      .statement {
        font-size: 16px;
        font-weight: 400;
        line-height: 31px;
        color: #28385c;
      }
    }
    .stores {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
    .avatar {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;
      .downloads {
        font-size: 13px;
        font-weight: 500;
        line-height: 19.36px;
        color: #28385c;
      }
    }
    .book {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 143px;
      height: 43px;
      padding: 13px 12px 13px 12px;
      gap: 8px;
      border: 1px solid #27375b;
      border-radius: 25px;
      opacity: 0px;
      background: #27375b;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #ffffff;
      outline: none;
      cursor: pointer;
      box-shadow: 0px 0px 0px 1px #27375b;
      /* box-shadow: 0px 1px 1px 0px #0000001a; */
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .trusted {
      font-size: 17px;
      font-weight: 400;
      line-height: 24.2px;
      text-align: left;
      color: #5a6376cc;
    }
    .sliding {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 60%;
    }
  }
`;

export default FirstMainComponent;
