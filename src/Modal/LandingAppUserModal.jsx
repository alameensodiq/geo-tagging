import React, { useEffect, useRef, useState } from "react";
import LandingAppModal from "./LandingAppModal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingAppUserModal = ({ setStep, step, setReload }) => {
  const navigate = useNavigate();
  const handleCloseModal4 = () => {
    setStep(0);
  };

  const LocationNavigate = () => {
    setStep(0);
    navigate("/main-products");
  };

  const RealTimeNavigate = () => {
    setStep(0);
    navigate("/realtime-products");
  };

  const AdvancedNavigate = () => {
    setStep(0);
    navigate("/advanced-products");
  };

  const CampaignNavigate = () => {
    setStep(0);
    navigate("/campaign-products");
  };

  return (
    <div>
      <LandingAppModal
        step={56}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        setStep={setStep}
        heading="Key Features"
      >
        <Flex>
          <div className="top">
            <div className="first" onClick={() => LocationNavigate()}>
              <span className="title">Location-Based Targeting</span>
              <span className="statement">
                <span>Create boundaries around specific</span>
                <span>locations</span>
              </span>
            </div>
            <div className="first" onClick={() => CampaignNavigate()}>
              <span className="title">Campaign Management</span>
              <span className="statement">
                <span>Coordinate campaigns across </span>
                <span>various channels</span>
              </span>
            </div>
          </div>
          <div className="top">
            <div className="first" onClick={() => RealTimeNavigate()}>
              <span className="title">Real-Time Tracking</span>
              <span className="statement">
                <span>Monitor the real-time locations</span>
              </span>
            </div>
            <div className="first" onClick={() => AdvancedNavigate()}>
              <span className="title">Advanced Analytics</span>
              <span className="statement">
                <span>Track engagement and activities</span>
              </span>
            </div>
          </div>
        </Flex>
      </LandingAppModal>
    </div>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 2px;
  width: 100%;
  gap: 30px;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .first {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 50%;
      .title {
        font-size: 14px;
        font-weight: 600;
        line-height: 21.78px;
        text-align: left;
        color: #000000;
        cursor: pointer;
      }
      .statement {
        font-size: 12px;
        font-weight: 400;
        line-height: 19.12px;
        text-align: left;
        color: #6a6a6a;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
    }
  }
`;

export default LandingAppUserModal;
