import React from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../assets/Plus.svg";
import { ReactComponent as PlusWhite } from "../assets/Pluswhite.svg";
import { ReactComponent as Export } from "../assets/exportdownload.svg";

export const ModalButton = ({
  title,
  background,
  color,
  reduce,
  marg,
  noborder,
  onClick,
  remove,
  whitey,
  short,
  exportdownload,
  small
}) => {
  return (
    <Flex
      short={short}
      remove={remove}
      background={background}
      marg={marg}
      color={color}
      reduce={reduce}
      noborder={noborder}
      small={small}
    >
      <button onClick={() => onClick()} className="authenticationbutton">
        {whitey ? (
          <PlusWhite />
        ) : !remove ? (
          <Plus />
        ) : exportdownload ? (
          <Export />
        ) : (
          ""
        )}
        {title}
      </button>
    </Flex>
  );
};

const Flex = styled.div`
  .authenticationbutton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: ${(props) =>
      props.background ? "#1A87D7" : props.noborder ? "#8B909A" : "#FFFFFF"};
    color: ${(props) =>
      props.color ? "#FFFFFF" : props.noborder ? "#8B909A" : "#1A87D7"};
    border-radius: 5px;
    /* border-color: ${(props) =>
      props.background ? "#2563EB" : "#E2E8F0"}; */
    border-width: 1px;
    box-shadow: none;
    outline: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    min-height: 40px;
    cursor: pointer;
    padding-right: ${(props) => (props?.small ? "10px" : "")};
    border: ${(props) => (props.reduce ? `1px solid #1A87D7` : "none")};
    width: ${(props) =>
      props.remove
        ? "150px"
        : props.short
        ? "115px"
        : props.exportdownload
        ? "180px"
        : props?.small
        ? "145px"
        : "180px"};
    /* border: ${(props) =>
      props.noborder
        ? "0px"
        : `1px solid ${(props) =>
            props.background ? "#2563EB" : "#E2E8F0"}`} */
  }

  @media only screen and (max-width: 900px) {
  }
`;
