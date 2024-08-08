import React from "react";
import styled from "styled-components";
import { ReactComponent as Email } from "../assets/email.svg";

const DemoInput = ({
  placeholder,
  reduce,
  auth,
  fixedWidth,
  name,
  value,
  onChange,
  logo
}) => {
  console.log(auth);
  return (
    <Flex reduce={reduce} auth={auth} fixedWidth={fixedWidth}>
      {logo ? <Email className="close" /> : ""}
      <input
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="input"
      />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .input {
    /* background: linear-gradient(0deg, #E2E8F0, #E2E8F0),
linear-gradient(0deg, #FFFFFF, #FFFFFF); */
    border: 1px solid var(--stroke-color, #e2e8f0);
    box-shadow: 0px 1px 2px 0px #1018280d;
    width: ${(props) =>
      props?.reduce ? "270px" : props?.auth ? "540px" : "550px"};
    border-radius: 8px;
    padding-left: 20px;
    outline: none;
    color: #999999;
    background: #f6f6f7;
    height: ${(props) => (props?.reduce ? "45px" : props?.auth ? "45px" : "")};
    font-size: ${(props) =>
      props?.reduce ? "15px" : props?.auth ? "12px" : "12px"};
  }

  .close {
    position: absolute;
    margin-left: 390px;
    margin-top: 13px;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    width: ${(props) => (props?.fixedWidth ? "" : "50%")};

    .input {
      /* background: linear-gradient(0deg, #E2E8F0, #E2E8F0),
    linear-gradient(0deg, #FFFFFF, #FFFFFF); */
      border: 1px solid #e2e8f0;
      box-shadow: 0px 1px 2px 0px #1018280d;
      width: ${(props) => (props?.fixedWidth ? "530px" : "500px")};
      height: 40px;
      outline: none;
      color: #999999;
      background: #f6f6f7;
      border-radius: 8px;
      padding-left: 20px;
      font-size: 12px;
    }
  }
`;

export default DemoInput;
