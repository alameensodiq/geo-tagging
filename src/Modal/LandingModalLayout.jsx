import React from "react";
import styled from "styled-components";

export default function LandingModalLayout({
  children,
  closeModal,
  maxWidth,
  headings,
  wide
}) {
  return (
    <ModalLayoutStyle wide={wide} headings={headings}>
      <ModalBody
        style={{ maxWidth: maxWidth }}
        headings={headings}
        wide={wide}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalBody>
    </ModalLayoutStyle>
  );
}

const ModalLayoutStyle = styled.div`
  background: #0000005d;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  display: grid;
  place-items: center;
  padding: 40px 0;
`;

const ModalBody = styled.div`
  background: white;
  position: absolute;
  width: ${(props) => (props?.headings ? "60%" : props?.wide ? "38%" : "70%")};
  max-width: ${(props) =>
    props?.headings
      ? "450px"
      : props?.wide && !props?.headings
      ? "630px"
      : "448px"};
  border-radius: 10px;
  top: 110px;
  margin-left: 110px;

  /* height: 80vh; */
  /* overflow-y: scroll; */
`;
