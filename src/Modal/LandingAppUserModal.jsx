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

  const IndustryNavigate = () => {
    setStep(0);
    navigate("/main-industries");
  };

  const HealthNavigate = () => {
    setStep(0);
    navigate("/health-industries");
  };

  const EducationNavigate = () => {
    setStep(0);
    navigate("/education-industries");
  };

  const SecurityNavigate = () => {
    setStep(0);
    navigate("/security-industries");
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
      <LandingAppModal
        step={57}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        setStep={setStep}
        heading="Industries"
      >
        <Flex>
          <div className="top">
            <div className="first" onClick={() => IndustryNavigate()}>
              <span className="title">Retail</span>
              <span className="statement">
                <span>Boost sales by ensuring your staff </span>
                <span>levels meet customer demand.</span>
              </span>
            </div>
            <div className="first" onClick={() => EducationNavigate()}>
              <span className="title">Education</span>
              <span className="statement">
                <span>Schedule staff to adapt to changing</span>
                <span>class times</span>
              </span>
            </div>
          </div>
          <div className="top">
            <div className="first" onClick={() => HealthNavigate()}>
              <span className="title">Healthcare</span>
              <span className="statement">
                <span>Keep your team working, no</span>
                <span>matter where they are.</span>
              </span>
            </div>
            <div className="first" onClick={() => SecurityNavigate()}>
              <span className="title">Security</span>
              <span className="statement">
                <span>Quickly send teams to multiple </span>
                <span>Locations</span>
              </span>
            </div>
          </div>
          <div className="top">
            <div className="first">
              <span className="title">Explore all industries</span>
              <span className="statement">
                <span>See how our platform works with your</span>
                <span>business, industry and goals</span>
              </span>
            </div>
          </div>
        </Flex>
      </LandingAppModal>
      <LandingAppModal
        step={58}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        setStep={setStep}
        heading="Resources"
      >
        <Flex>
          <div className="top">
            <div className="first">
              <span className="title">About us</span>
              <span className="statement">
                <span>See how we help businesses</span>
                <span>globally.</span>
              </span>
            </div>
            <div className="first">
              <span className="title">Customer Stories</span>
              <span className="statement">
                <span>Learn from our customers who are</span>
                <span>growing their businesses.</span>
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
