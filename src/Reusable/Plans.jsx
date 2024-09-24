import React from "react";
import styled from "styled-components";
import { ReactComponent as Standard } from "../assets/standard.svg";
import { ReactComponent as Enterprise } from "../assets/enterprise.svg";
import { ReactComponent as Plus } from "../assets/standardplus.svg";
import { ReactComponent as Mark } from "../assets/colormark.svg";

const Plans = ({ standard, enterprise, plus, data, basic }) => {
  return (
    <Flex>
      <div className="header">
        {standard ? (
          <>
            <Standard />
            <span className="title">{data?.name} Plan</span>
          </>
        ) : enterprise ? (
          <>
            <Enterprise />
            <span className="title">{data?.name} Plan</span>
          </>
        ) : plus ? (
          <>
            <Plus />
            <span className="title">{data?.name} Plan</span>
          </>
        ) : basic ? (
          <>
            <Plus />
            <span className="title">{data?.name} Plan</span>
          </>
        ) : (
          <>
            <Enterprise />
            <span className="title">{data?.name} Plan</span>
          </>
        )}
      </div>
      {standard ? (
        <div className="amountdiv">
          <span className="amount">{data?.amount?.NGN}</span>
          <span className="name">Per Business Rep</span>
        </div>
      ) : enterprise ? (
        <div className="amountdiv">
          <span className="amount">{data?.amount?.NGN}</span>
          <span className="name">Per Business Rep</span>
        </div>
      ) : plus ? (
        <div className="amountdiv">
          <span className="amount">{data?.amount?.NGN}</span>
          <span className="name">Per Business Rep</span>
        </div>
      ) : basic ? (
        <div className="amountdiv">
          <span className="amount">{data?.amount?.NGN}</span>
          <span className="name">Per Business Rep</span>
        </div>
      ) : (
        <div className="amountdiv">
          <span className="amount">{data?.amount?.NGN}</span>
          <span className="name">Per Business Rep</span>
        </div>
      )}
      <div className="details">
        <Mark />
        {standard ? (
          <div className="categorydiv">
            <span className="category">
              {data?.minRepCount}-{data?.maxRepCount} BusinessReps
            </span>
            <div className="statement">
              <span>You are eligible to registering a total number</span>
              <span>
                of {data?.maxRepCount} business reps on this plan. You can
              </span>
              <span>always upgrade to a higher plan to register</span>
              <span>more business reps.</span>
            </div>
          </div>
        ) : enterprise ? (
          <div className="categorydiv">
            <span className="category">
              {data?.minRepCount}-{data?.maxRepCount} Business Reps
            </span>
            <div className="statement">
              <span>You are eligible to registering a total number </span>
              <span>
                of {data?.maxRepCount} business reps on this plan. You can
              </span>
              <span>always create custom plan plan to access</span>
              <span>more features.</span>
            </div>
          </div>
        ) : plus ? (
          <div className="categorydiv">
            <span className="category">
              {data?.minRepCount}-{data?.maxRepCount} BusinessReps
            </span>
            <div className="statement">
              <span>You are eligible to registering a total number</span>
              <span>
                of {data?.maxRepCount} business reps on this plan. You can
              </span>
              <span>always upgrade to a higher plan to register</span>
              <span>more business reps.</span>
            </div>
          </div>
        ) : basic ? (
          <div className="categorydiv">
            <span className="category">
              {data?.minRepCount}-{data?.maxRepCount} BusinessReps
            </span>
            <div className="statement">
              <span>You are eligible to registering a total number</span>
              <span>
                of {data?.maxRepCount} business reps on this plan. You can
              </span>
              <span>always upgrade to a higher plan to register</span>
              <span>more business reps.</span>
            </div>
          </div>
        ) : (
          <div className="categorydiv">
            <span className="category">
              {data?.minRepCount}-{data?.maxRepCount} Business Reps
            </span>
            <div className="statement">
              <span>You are eligible to registering a total number </span>
              <span>
                of {data?.maxRepCount} business reps on this plan. You can
              </span>
              <span>always create custom plan plan to access</span>
              <span>more features.</span>
            </div>
          </div>
        )}
      </div>
      <div className="details">
        <Mark />
        <div className="categorydiv">
          <span className="category">Location: {data?.maxLocationCount}</span>
          <div className="statement">
            <span>You are eligible to assigning any number of </span>
            <span>locations to any project that is ongoing.</span>
          </div>
        </div>
      </div>
      <div className="details">
        <Mark />
        <div className="categorydiv">
          <span className="category">Place holder</span>
          <div className="statement">
            <span>Lorem ipsium lorem ipsium lorem ipsium </span>
            <span>llorem ipsium lorem ipsium </span>
          </div>
        </div>
      </div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebebeb;
  gap: 15px;
  border-radius: 10px;
  padding-bottom: 40px;
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-inline: 20px;
    padding-top: 20px;
    .title {
      color: #1e1b39;
      font-size: 14px;
      font-weight: 700;
    }
  }
  .amountdiv {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-inline: 10px;
    .amount {
      font-size: 15px;
      font-weight: 600;
      color: #1e1b39;
    }
    .name {
      font-size: 12px;
      font-weight: 400;
      color: #1a87d7;
    }
  }
  .details {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    gap: 10px;
    .categorydiv {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .category {
        color: #101928;
        font-size: 14px;
        font-weight: 600;
      }
      .statement {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 10px;
        font-weight: 400;
        color: #5a6376;
      }
    }
  }
`;

export default Plans;
