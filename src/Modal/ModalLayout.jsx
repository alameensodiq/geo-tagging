import React from "react";
import styled from "styled-components";

export default function ModalLayout({ children, closeModal, maxWidth, headings }) {
  return (
    <ModalLayoutStyle headings={headings}>
      <ModalBody
        style={{ maxWidth: maxWidth }}
        headings={headings}
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
  width: ${(props) => props?.headings ? '60%' : '70%'};
  max-width: ${(props) => props?.headings ? '450px' : '548px'};
  border-radius: 10px;
  margin-bottom: 70px;
`;
