import React from "react";
import styled from "styled-components";
import { ReactComponent as Email } from "../assets/email.svg";

const ModalText = ({
  placeholder,
  reduce,
  auth,
  fixedWidth,
  name,
  value,
  onChange = () => {},
  logo,
  increase
}) => {
  console.log(auth);
  return (
    <Flex
      increase={increase}
      reduce={reduce}
      auth={auth}
      fixedWidth={fixedWidth}
    >
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
    border: 1px solid #e2e8f0;
    box-shadow: 0px 1px 2px 0px #1018280d;
    width: ${(props) =>
      props?.reduce
        ? "400px"
        : props?.auth
        ? "430px"
        : props?.increase
        ? "580px"
        : "490px"};
    border-radius: 8px;
    padding-left: 20px;
    outline: none;
    color: #999999;
    background: #ffffff;
    height: ${(props) =>
      props?.reduce ? "40px" : props?.auth ? "45px" : "45px"};
    font-size: ${(props) =>
      props?.reduce ? "15px" : props?.auth ? "14px" : "10px"};
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
      color: #1c1c1c;
      background: #f6f6f7;
      border-radius: 8px;
      padding-left: 20px;
      font-size: 20px;
    }
  }
`;

export default ModalText;
