import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Management } from "../../assets/management.svg";
import { ReactComponent as Retail } from "../../assets/Retail.svg";
import { ReactComponent as Healthcare } from "../../assets/Healthcare.svg";
import { ReactComponent as Construct } from "../../assets/construct.svg";
import { ReactComponent as Education } from "../../assets/education.svg";
import { ReactComponent as Hotel } from "../../assets/hotel.svg";
import { ReactComponent as Security } from "../../assets/security.svg";
import { ReactComponent as Chain } from "../../assets/chain.svg";
import seller from "../../assets/seller.png";
import sellers from "../../assets/sells.png";
import govtagencies from "../../assets/govtagencies.png";
import privatesecure from "../../assets/privatesecure.png";
import outsourcing from "../../assets/outsourcing.png";
import Telecommunications from "../../assets/Telecommunications.png";

const SixthMainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active button
  const [currentImage, setCurrentImage] = useState(sellers); // Track the active image

  const buttons = [
    { label: "Brand Activation Organizations", Icon: Retail },
    { label: "Private Security Organizations", Icon: Security },
    { label: "Government Agencies", Icon: Healthcare },
    { label: "Telecommunications", Icon: Hotel },
    { label: "Outsourcing Companies", Icon: Hotel }
  ];

  const images = [
    sellers,
    privatesecure,
    govtagencies,
    Telecommunications,
    outsourcing
  ]; // Array of images to cycle through

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % buttons.length); // Cycle through buttons
      setCurrentImage(
        (prevIndex) => images[(images.indexOf(prevIndex) + 1) % images.length]
      ); // Cycle through images
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [buttons.length, images]);

  return (
    <Flex>
      <div className="btgroups">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`management ${index === activeIndex ? "active" : ""}`}
            style={{
              backgroundColor: index === activeIndex ? "#27375B" : "#ffffff",
              color: index === activeIndex ? "#ffffff" : "#27375b"
            }}
          >
            <button.Icon />
            {button.label}
          </button>
        ))}
      </div>
      <div className="seller">
        <img src={currentImage} alt="seller" className="content" />
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 40px;
  padding-inline: 65px;
  gap: 50px;
  width: 100%;
  .btgroups {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-size: 12px;
      font-weight: 500;
      line-height: 22.44px;
      letter-spacing: 0.02em;
      text-align: left;
      width: 244px;
      height: 43px;
      padding: 14.58px 13.46px 14.58px 13.46px;
      gap: 8.98px;
      border-radius: 22.39px;
      border: 0.9px solid #ededed;
      box-shadow: 0px 1.12px 1.12px 0px #0000001a;
      transition: background-color 0.3s ease, color 0.3s ease;
      cursor: pointer;
    }
    button.active {
      background-color: #27375b;
      color: #ffffff;
    }
  }
  .seller {
    display: flex;
    flex-direction: row;
    width: 95%;
    background: #1a87d7;
    height: auto;
    padding-inline: 30px;
    padding-block: 20px;
    border: 0.3px solid #eedddd;
    box-shadow: 0px 25px 30px 5px #ededed;
    border-radius: 25px;
    img.content {
      width: 100%;
    }
  }
`;

export default SixthMainComponent;
