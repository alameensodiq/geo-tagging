import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../assets/search.svg";

const InputSearch = ({ placeholder, reduce, auth, fixedWidth, onChange }) => {
  console.log(auth);

  return (
    <Flex reduce={reduce} auth={auth} fixedWidth={fixedWidth}>
      <Close className="close" />
      <input
        onChange={(e) => onChange(e)}
        type="text"
        placeholder={placeholder}
        className="inputer"
      />
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .inputer {
    /* background: linear-gradient(0deg, #E2E8F0, #E2E8F0),
linear-gradient(0deg, #FFFFFF, #FFFFFF); */
    border: 1px solid #e2e8f0;
    width: 500px;
    border-radius: 7px;
    padding-left: 35px;
    color: #8d9196;
    outline: none;
    font-size: 12px;
    /* position: relative; */
  }
  .close {
    position: absolute;
    margin-left: 1%;
    margin-top: 0.7%;
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    .inputer {
      border: 1px solid #e2e8f0;
      width: 300px;
      height: 40px;
      color: #8d9196;
      border-radius: 5px;
      padding-left: 20px;
      font-size: 12px;
    }
  }
`;

export default InputSearch;
