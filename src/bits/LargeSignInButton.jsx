import React from "react";
import styled from "styled-components";

export const LargeSignInButton = ({
  title,
  background,
  color,
  marg,
  noborder,
  large,
  big,
  onClick,
  bigger
}) => {
  return (
    <Flex
      big={big}
      background={background}
      marg={marg}
      color={color}
      noborder={noborder}
      large={large}
      bigger={bigger}
    >
      <button className="authenticationbutton" onClick={onClick}>
        {title}
      </button>
    </Flex>
  );
};

const Flex = styled.div`
  .authenticationbutton {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: ${(props) =>
      props.background ? "#1A87D7" : props.noborder ? "#FAFAFA" : "#ffffff"};
    color: ${(props) =>
      props.color ? "#FFFFFF" : props.noborder ? "#8B909A" : "#1E1B39"};
    border-radius: 5px;
    /* border-color: ${(props) =>
      props.background ? "#1A87D7" : "#E2E8F0"}; */
    border-width: 1px;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    min-height: ${(props) => (props.large ? `40px` : `50px`)};
    border: ${(props) => (props.large ? `1px solid #E2E8F0` : `1px solid #E2E8F0`)};
    width: ${(props) =>
      props.large ? "180px" : props?.big ? "430px" :  props?.bigger ? "490px" : "280px"};
    /* border: ${(props) =>
      props.noborder
        ? "0px"
        : `1px solid ${(props) =>
            props.background ? "#1A87D7" : "#E2E8F0"}`} */
  }

  @media only screen and (max-width: 900px) {
    margin-top: ${(props) => (props.marg ? "40px" : "")};
  }
`;
