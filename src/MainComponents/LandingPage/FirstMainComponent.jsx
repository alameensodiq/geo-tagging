import React from "react";
import styled from "styled-components";
import { ReactComponent as Built } from "../../assets/built.svg";
import { ReactComponent as PlayStore } from "../../assets/playstore.svg";
import { ReactComponent as AppStore } from "../../assets/appstore.svg";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import { ReactComponent as AvatarGroups } from "../../assets/AvatarGroups.svg";
import { TypeAnimation } from "react-type-animation";

const FirstMainComponent = () => {
  return (
    <Flex>
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
        <button className="book">
          Book a Demo <ArrowCircleRight />
        </button>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 190px;
  padding-inline: 65px;
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
`;

export default FirstMainComponent;
