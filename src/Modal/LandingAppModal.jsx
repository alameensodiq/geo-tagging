import LandingModalLayout from "./LandingModalLayout";
import React from "react";
import styled from "styled-components";

export default function LandingAppModal({
  children,
  heading,
  closeModal,
  maxWidth,
  headingSize,
  step,
  currentStep,
  confirm,
  headings,
  hr,
  nut,
  pdf,
  Unread,
  Archived,
  mark,
  noheadborder,
  subscribe,
  wide,
  setStep
}) {
  console.log(subscribe);
  return (
    <div
      style={{
        opacity: step === currentStep ? 1 : 0,
        pointerEvents: step === currentStep ? "all" : "none",
        transition: "all 0.3s",
        position: "relative",
        zIndex: "9000"
      }}
    >
      <LandingModalLayout
        wide={wide}
        headings={headings}
        maxWidth={maxWidth}
        closeModal={closeModal}
        setStep={setStep}
      >
        <AppModalStyle noheadborder={noheadborder} subscribe={subscribe}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              borderBottom:
                heading && !noheadborder
                  ? "1px solid #EDEDED"
                  : heading && noheadborder
                  ? ""
                  : "",
              padding: heading ? "0px 0px" : confirm ? "0px" : "0px"
              // position: "sticky",
            }}
          >
            <div className="head">
              <div className="heading">
                <div
                  style={{
                    fontSize: "15px",
                    paddingBlock: "20px",
                    color: "#646464",
                    fontWeight: "600"
                  }}
                >
                  {heading}
                </div>
              </div>
              {/* <div className="close">
                <svg
                  onClick={() => {
                    closeModal();
                  }}
                  style={{
                    cursor: "pointer"
                  }}
                  width="30"
                  height="32"
                  viewBox="0 0 40 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5002 9.99224C30.1888 9.66455 29.7661 9.48039 29.3252 9.48039C28.8843 9.48039 28.4616 9.66455 28.1502 9.99224L20.0002 18.5322L11.8502 9.97474C11.5388 9.64705 11.1161 9.46289 10.6752 9.46289C10.2343 9.46289 9.81158 9.64705 9.5002 9.97474C8.8502 10.6572 8.8502 11.7597 9.5002 12.4422L17.6502 20.9997L9.5002 29.5572C8.8502 30.2397 8.8502 31.3422 9.5002 32.0247C10.1502 32.7072 11.2002 32.7072 11.8502 32.0247L20.0002 23.4672L28.1502 32.0247C28.8002 32.7072 29.8502 32.7072 30.5002 32.0247C31.1502 31.3422 31.1502 30.2397 30.5002 29.5572L22.3502 20.9997L30.5002 12.4422C31.1335 11.7772 31.1335 10.6572 30.5002 9.99224Z"
                    fill="#a9a8a8"
                  />
                </svg>
              </div> */}
            </div>
          </div>
          <div
            style={{
              // padding: "30px",
              paddingBottom: "30px",
              paddingTop: heading ? "30px" : "10px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {children}
          </div>
        </AppModalStyle>
      </LandingModalLayout>
    </div>
  );
}

const AppModalStyle = styled.div`
  position: relative;
  padding-inline: 30px;
  .head {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-items: flex-start;
    gap: 0px;
    .heading {
      position: relative;
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      div {
        font-weight: 500;
        font-size: 26px;
        position: relative;
        z-index: 1;
        color: #000000;
      }
    }
    .close {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;
