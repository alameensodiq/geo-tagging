import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LandingLogo } from "../../assets/LandingLogo.svg";
import { ReactComponent as CaretDownLanding } from "../../assets/CaretDownLanding.svg";
import { ReactComponent as ArrowCircleRight } from "../../assets/ArrowCircleRight.svg";
import { useNavigate } from "react-router-dom";
import LandingAppUserModal from "../../Modal/LandingAppUserModal";

const LandingNavbar = () => {
  const [step, setStep] = useState(0);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  return (
    <Flex>
      <LandingLogo />
      <LandingAppUserModal
        setStep={setStep}
        step={step}
        setReload={setReload}
      />
      <div className="modules">
        <div className="item" onClick={() => setStep(56)}>
          <span className="name">Product</span>
          <CaretDownLanding />
        </div>
        <div className="item" onClick={() => setStep(57)}>
          <span className="name">Industries</span>
          <CaretDownLanding />
        </div>
        <div className="item" onClick={() => navigate("/pricing")}>
          <span className="name">Pricing</span>
        </div>
        <div className="item" onClick={() => setStep(58)}>
          <span className="name">Resources</span>
          <CaretDownLanding />
        </div>
      </div>
      <div className="buttoncollection">
        <button className="first" onClick={() => navigate("/corporate-login")}>
          Login
        </button>
        <button className="book">
          Book a Demo <ArrowCircleRight />
        </button>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 65px;
  padding-block: 17px;
  width: 100%;
  position: fixed;
  box-shadow: -2px 0px 5.3px -2px #00000040;
  z-index: 1000;
  background-color: #ffffff;
  .modules {
    display: flex;
    flex-direction: row;
    gap: 52px;
    padding-left: 120px;
    .item {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;
      cursor: pointer;
      .name {
        color: #28385c;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
  .buttoncollection {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    /* width: 20%; */
    .first {
      width: 73px;
      height: 43px;
      padding: 11px 12px 13px 12px;
      gap: 8px;
      border-radius: 25px;
      border: 1px 0px 0px 0px;
      opacity: 0px;
      border: 1px solid #27375b;
      box-shadow: 0px 1px 1px 0px #0000001a;
      color: #28385c;
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0.02em;
      background: #ffffff;
      cursor: pointer;
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

export default LandingNavbar;
