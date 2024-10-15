import React from "react";
import styled from "styled-components";
import { ReactComponent as Name } from "../assets/acctname.svg";
import { ReactComponent as Email } from "../assets/acctmail.svg";
import { ReactComponent as Passwordlogo } from "../assets/passwordlogo.svg";

const Accounttext = ({
  placeholder,
  reduce,
  auth,
  fixedWidth,
  name,
  value,
  onChange,
  logo,
  emailogo,
  passwordlogo
}) => {
  console.log(auth);
  return (
    <Flex reduce={reduce} auth={auth} fixedWidth={fixedWidth}>
      {logo ? (
        <Name className="close" />
      ) : emailogo ? (
        <Email className="close" />
      ) : passwordlogo ? (
        <Passwordlogo className="close" />
      ) : (
        ""
      )}
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
    border: 1px solid #e2e8f0;
    box-shadow: 0px 1px 2px 0px #1018280d;
    width: ${(props) =>
      props?.reduce ? "420px" : props?.auth ? "430px" : "580px"};
    border-radius: 8px;
    padding-left: 40px;
    outline: none;
    color: #999999;
    background: #ffffff;
    height: ${(props) =>
      props?.reduce ? "45px" : props?.auth ? "45px" : "45px"};
    font-size: ${(props) =>
      props?.reduce ? "10px" : props?.auth ? "14px" : "10px"};
  }

  .close {
    position: absolute;
    margin-left: 10px;
    margin-top: 13px;
    cursor: pointer;
  }

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    width: ${(props) => (props?.fixedWidth ? "" : "50%")};

    .input {
      /* background: linear-gradient(0deg, #E2E8F0, #E2E8F0),
    linear-gradient(0deg, #FFFFFF, #FFFFFF); */
      border: 1px solid #e2e8f0;
      box-shadow: 0px 1px 2px 0px #1018280d;
      width: ${(props) => (props?.fixedWidth ? "530px" : "400px")};
      height: 40px;
      outline: none;
      color: #1c1c1c;
      background: #ffffff;
      border-radius: 8px;
      padding-left: 20px;
      font-size: 10px;
    }
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
      color: #1c1c1c;
      background: #ffffff;
      border-radius: 8px;
      padding-left: 20px;
      font-size: 10px;
    }
  }
`;

export default Accounttext;
